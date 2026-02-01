/**
 * PAGINATION UTILITIES
 * Row-based capacity system with visual balance
 *
 * This module handles intelligent page splitting to avoid:
 * - Pages with only 1-2 services
 * - Orphan last pages with sparse content
 * - Wasted space when subsections could pack together
 */

// ============================================
// TUNABLE CONSTANTS
// ============================================

/** Maximum rows of services per page (1 row = up to 2 services in 2-col grid) */
export const ROWS_PER_PAGE = 12;

/** Rows consumed by a subsection heading */
export const HEADING_COST = 1;

/** Minimum rows for last page of a subsection (prevents orphan pages) */
export const MIN_LAST_PAGE_ROWS = 3;

/** Minimum rows to justify creating a new page */
export const MIN_PAGE_ROWS = 3;

// ============================================
// ROW CALCULATIONS
// ============================================

/**
 * Convert service count to row count (2 services per row in 2-col grid)
 */
export function servicesToRows(serviceCount: number): number {
  return Math.ceil(serviceCount / 2);
}

/**
 * Convert row count to maximum service count
 */
export function rowsToServices(rowCount: number): number {
  return rowCount * 2;
}

// ============================================
// BALANCED SPLIT ALGORITHM
// ============================================

/**
 * Split total rows across pages with visual balance.
 * Prevents orphan last pages (e.g., 8+1 becomes 6+3).
 *
 * @param totalRows - Total rows to split
 * @param capacity - Max rows per page (after heading cost)
 * @param minLastPageRows - Minimum rows for last page
 * @returns Array of row counts per page
 */
export function splitRowsBalanced(
  totalRows: number,
  capacity: number,
  minLastPageRows: number = MIN_LAST_PAGE_ROWS,
): number[] {
  if (totalRows <= 0) return [];
  if (totalRows <= capacity) return [totalRows];

  // Calculate naive split
  const fullPages = Math.floor(totalRows / capacity);
  const remainder = totalRows % capacity;

  // If remainder is 0, we have perfect split
  if (remainder === 0) {
    return Array(fullPages).fill(capacity);
  }

  // If remainder is acceptable (>= minLastPageRows), use it
  if (remainder >= minLastPageRows) {
    return [...Array(fullPages).fill(capacity), remainder];
  }

  // Remainder is too small - need to rebalance
  // Strategy: take rows from previous page(s) to boost last page

  // Calculate how many rows we need to move to reach minLastPageRows
  const deficit = minLastPageRows - remainder;

  // If we only have 1 page before the remainder, balance between them
  if (fullPages === 1) {
    const total = capacity + remainder;
    const page1 = Math.ceil(total / 2);
    const page2 = total - page1;

    // Ensure both pages meet minimum
    if (page1 >= MIN_PAGE_ROWS && page2 >= MIN_PAGE_ROWS) {
      return [page1, page2];
    }
    // If can't balance well, just use the naive split
    return [capacity, remainder];
  }

  // Multiple full pages: reduce last full page to boost remainder
  const pages = Array(fullPages).fill(capacity);
  pages.push(remainder);

  // Move rows from second-to-last to last page
  const moveRows = Math.min(deficit, pages[pages.length - 2] - MIN_PAGE_ROWS);
  if (moveRows > 0) {
    pages[pages.length - 2] -= moveRows;
    pages[pages.length - 1] += moveRows;
  }

  return pages;
}

// ============================================
// PAGE BLOCK TYPES
// ============================================

export interface ServiceData {
  name: string;
  description: string;
  price: string;
  price_note?: string;
}

export interface SubsectionBlock {
  type: "subsection";
  title: string;
  services: ServiceData[];
  isContinuation: boolean;
  continuationIndex?: number;
  totalPages?: number;
}

export interface PageData {
  category: string;
  gender: string;
  genderLabel: string;
  blocks: SubsectionBlock[];
  totalRows: number;
}

// ============================================
// PAGE BUILDER WITH PACKING
// ============================================

interface SubsectionInput {
  title: string;
  services: ServiceData[];
}

interface BuildPagesInput {
  category: string;
  gender: string;
  genderLabel: string;
  subsections: SubsectionInput[];
}

/**
 * Build pages with intelligent packing.
 * - Fills pages to capacity before starting new ones
 * - Balances last pages to avoid orphans
 * - Allows small subsections to share pages
 */
export function buildPagesWithPacking(input: BuildPagesInput): PageData[] {
  const { category, gender, genderLabel, subsections } = input;
  const pages: PageData[] = [];

  // Available rows for services (after heading)
  const serviceCapacity = ROWS_PER_PAGE - HEADING_COST;

  // Current page being built
  let currentPage: PageData | null = null;
  let currentPageRowsUsed = 0;

  for (const subsection of subsections) {
    const totalServices = subsection.services.length;
    if (totalServices === 0) continue;

    const totalRows = servicesToRows(totalServices);

    // Split this subsection across pages with balance
    const rowSplits = splitRowsBalanced(
      totalRows,
      serviceCapacity,
      MIN_LAST_PAGE_ROWS,
    );
    const totalSubsectionPages = rowSplits.length;

    let serviceIndex = 0;

    for (let pageIdx = 0; pageIdx < rowSplits.length; pageIdx++) {
      const rowsForThisPage = rowSplits[pageIdx];
      const servicesForThisPage = Math.min(
        rowsToServices(rowsForThisPage),
        totalServices - serviceIndex,
      );
      const isContinuation = pageIdx > 0;

      const block: SubsectionBlock = {
        type: "subsection",
        title: subsection.title,
        services: subsection.services.slice(
          serviceIndex,
          serviceIndex + servicesForThisPage,
        ),
        isContinuation,
        continuationIndex: totalSubsectionPages > 1 ? pageIdx + 1 : undefined,
        totalPages: totalSubsectionPages > 1 ? totalSubsectionPages : undefined,
      };

      serviceIndex += servicesForThisPage;
      const blockRows = HEADING_COST + servicesToRows(block.services.length);

      // Decide: add to current page or start new page?
      const canFitOnCurrentPage =
        currentPage !== null &&
        !isContinuation && // Continuation pages always start fresh
        currentPageRowsUsed + blockRows <= ROWS_PER_PAGE &&
        currentPage.gender === gender;

      if (canFitOnCurrentPage && currentPage) {
        // Add to current page
        currentPage.blocks.push(block);
        currentPage.totalRows += blockRows;
        currentPageRowsUsed += blockRows;
      } else {
        // Start new page
        if (currentPage) {
          pages.push(currentPage);
        }

        currentPage = {
          category,
          gender,
          genderLabel,
          blocks: [block],
          totalRows: blockRows,
        };
        currentPageRowsUsed = blockRows;
      }
    }
  }

  // Don't forget the last page
  if (currentPage && currentPage.blocks.length > 0) {
    pages.push(currentPage);
  }

  return pages;
}

// ============================================
// MERGE SMALL LAST PAGES (OPTIONAL)
// ============================================

/**
 * Post-process pages to merge underfilled consecutive pages if possible.
 * This handles edge cases where separate subsections created sparse pages.
 */
export function mergeUnderfilled(pages: PageData[]): PageData[] {
  if (pages.length <= 1) return pages;

  const merged: PageData[] = [];

  for (const page of pages) {
    const lastMerged = merged[merged.length - 1];

    // Check if we can merge with previous page
    const canMerge =
      lastMerged &&
      lastMerged.gender === page.gender &&
      lastMerged.totalRows + page.totalRows <= ROWS_PER_PAGE;

    if (canMerge) {
      // Merge blocks into previous page
      lastMerged.blocks.push(...page.blocks);
      lastMerged.totalRows += page.totalRows;
    } else {
      merged.push({ ...page, blocks: [...page.blocks] });
    }
  }

  return merged;
}
