import { Service, ServiceSubcategory, CategoryData } from '../data/catalogueData';
import { 
  buildPagesWithPacking, 
  mergeUnderfilled,
  PageData as PaginatedPage,
  SubsectionBlock,
  ServiceData 
} from './pagination';

// ============================================
// DATA NORMALIZATION
// ============================================

export function normalizeGenderLabel(gender: string, category?: string): string {
  if (gender.toLowerCase() === 'common' && category && category.toLowerCase() === 'skin') {
    return 'Women/Men';
  }
  const mapping: Record<string, string> = {
    'women': 'Women',
    'female': 'Women',
    'men': 'Men',
    'male': 'Men',
    'kids': 'Kids',
    'baby': 'Kids',
    'children': 'Kids',
    'common': '',
  };
  return mapping[gender.toLowerCase()] || gender;
}

export function normalizeService(service: Service): ServiceData {
  return {
    name: service.name || 'Service',
    description: service.description || generateDescription(service.name),
    price: service.price || '₹0',
    price_note: service.price_note,
  };
}

function generateDescription(serviceName: string): string {
  const name = serviceName.toLowerCase();
  if (name.includes('cut')) return 'Professional styling tailored to your preference.';
  if (name.includes('colour') || name.includes('color')) return 'Premium color for vibrant, lasting results.';
  if (name.includes('facial')) return 'Rejuvenating treatment for glowing skin.';
  if (name.includes('wax')) return 'Smooth finish with premium wax formulation.';
  if (name.includes('manicure') || name.includes('pedicure')) return 'Complete nail care for well-groomed hands and feet.';
  if (name.includes('massage')) return 'Relaxing therapy to ease tension.';
  if (name.includes('spa')) return 'Deep conditioning for healthy hair.';
  return 'Premium service with expert care.';
}

// ============================================
// PAGE CONTENT TYPES (for rendering)
// ============================================

export interface PageContent {
  type: 'cover' | 'divider' | 'services';
  category?: string;
  subtitle?: string;
  gender?: string;
  genderLabel?: string;
  subsections?: SubsectionContent[];
}

export interface SubsectionContent {
  title: string;
  services: ServiceData[];
  isContinuation: boolean;
  continuationLabel?: string;
}

// Re-export for components that need it
export type { ServiceData };

// ============================================
// CONVERT PAGINATED DATA TO RENDER FORMAT
// ============================================

function convertToPageContent(paginatedPage: PaginatedPage): PageContent {
  const subsections: SubsectionContent[] = paginatedPage.blocks.map((block: SubsectionBlock) => ({
    title: block.title,
    services: block.services,
    isContinuation: block.isContinuation,
    continuationLabel: block.totalPages
      ? `(${block.continuationIndex}/${block.totalPages})`
      : undefined,
  }));

  return {
    type: 'services',
    category: paginatedPage.category,
    gender: paginatedPage.gender,
    genderLabel: paginatedPage.genderLabel,
    subsections,
  };
}

// ============================================
// BUILD CATEGORY PAGES (WITH CROSS-GENDER PACKING)
// ============================================

export function buildCategoryPages(category: CategoryData): PageContent[] {
  const genderOrder = ['common', 'women', 'men', 'kids'] as const;
  const allPages: PageContent[] = [];

  for (const gender of genderOrder) {
    const subcategories = category[gender] as ServiceSubcategory[] | undefined;
    if (!subcategories || subcategories.length === 0) continue;

    const genderLabel = normalizeGenderLabel(gender, category.name);

    // Prepare subsections for packing
    const subsectionsInput = subcategories.map(sub => ({
      title: sub.title,
      services: sub.services.map(normalizeService),
    }));

    // Build pages with intelligent packing
    let paginatedPages = buildPagesWithPacking({
      category: category.name,
      gender,
      genderLabel,
      subsections: subsectionsInput,
    });

    // Merge any remaining underfilled pages
    paginatedPages = mergeUnderfilled(paginatedPages);

    // Convert to render format
    for (const page of paginatedPages) {
      allPages.push(convertToPageContent(page));
    }
  }

  // Post-process: merge small last pages with previous pages
  return mergeSmallPages(allPages);
}

// Calculate rows for a page (consistent with pagination.ts)
function calculatePageRows(subsections: SubsectionContent[] | undefined): number {
  if (!subsections) return 0;
  let rows = 0;
  for (const sub of subsections) {
    rows += 1; // HEADING_COST
    rows += Math.ceil(sub.services.length / 2); // services in 2-col grid
  }
  return rows;
}

// Merge small pages into previous page if there's room
function mergeSmallPages(pages: PageContent[]): PageContent[] {
  if (pages.length <= 1) return pages;

  const result: PageContent[] = [];
  const ROWS_PER_PAGE = 12;

  for (const page of pages) {
    if (page.type !== 'services') {
      result.push(page);
      continue;
    }

    const lastPage = result[result.length - 1];
    const currentRows = calculatePageRows(page.subsections);
    const currentServices = page.subsections?.reduce((sum, s) => sum + s.services.length, 0) || 0;

    // Check if we can merge with previous page (same category, fits, and current is small)
    if (lastPage && lastPage.type === 'services' && lastPage.category === page.category) {
      const lastRows = calculatePageRows(lastPage.subsections);
      const combinedRows = lastRows + currentRows;

      // Merge if combined fits and current page is small (≤6 services)
      if (combinedRows <= ROWS_PER_PAGE && currentServices <= 6) {
        // Merge subsections
        lastPage.subsections = [...(lastPage.subsections || []), ...(page.subsections || [])];

        // Update gender label if different
        if (lastPage.genderLabel !== page.genderLabel) {
          const labels = [lastPage.genderLabel, page.genderLabel].filter(Boolean);
          lastPage.genderLabel = labels.join(' / ');
        }
        continue;
      }
    }

    result.push(page);
  }

  return result;
}

// ============================================
// GENERATE ALL PAGES
// ============================================

export function generateAllPages(catalogueData: CategoryData[]): PageContent[] {
  const allPages: PageContent[] = [];

  // Cover page
  allPages.push({ type: 'cover' });

  // Category pages (no divider pages - services only)
  for (const category of catalogueData) {
    // Service pages (with smart packing)
    const categoryPages = buildCategoryPages(category);
    allPages.push(...categoryPages);
  }

  return allPages;
}

// ============================================
// LEGACY EXPORTS (for compatibility)
// ============================================

export function shouldUseSingleColumn(_title: string): boolean {
  return false; // Always 2-column
}
