import React from "react";
import { catalogueData } from "../data/catalogueData";
import {
  generateAllPages,
  PageContent,
  SubsectionContent,
  ServiceData,
} from "../utils/printUtils";

// ============================================
// PAGE SHELL - STRICT STRUCTURE
// ============================================

interface PageShellProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  centered?: boolean;
}

function PageShell({ children, header, centered }: PageShellProps) {
  return (
    <div className="page">
      <div className="page__bg" />
      <div className="page__inner">
        <header className="page__header">{header}</header>
        <main
          className={`page__content ${centered ? "page__content--centered" : ""}`}
        >
          {children}
        </main>
        <footer className="page__footer" />
      </div>
    </div>
  );
}

// ============================================
// PAGE HEADER
// ============================================

interface PageHeaderProps {
  title: string;
  brand?: string;
}

function PageHeader({ title, brand = "BBS" }: PageHeaderProps) {
  return (
    <>
      <div className="page__header-row">
        <div className="page__header-left">
          <span className="page__header-title">{title}</span>
        </div>
        <img src="/bbs-logo-bg.png" alt="Logo" className="page_logo_header" />
      </div>
      <div className="page__header-line" />
    </>
  );
}

// ============================================
// SUBSECTION HEADER - SPANS BOTH COLUMNS
// ============================================

interface SubsectionHeaderProps {
  title: string;
  continuation?: string;
}

function SubsectionHeader({ title, continuation }: SubsectionHeaderProps) {
  return (
    <div className="subsection-header">
      <div className="subsection-header__title">
        {title}
        {continuation && (
          <span className="subsection-header__cont">{continuation}</span>
        )}
      </div>
      <div className="subsection-header__line" />
    </div>
  );
}

// ============================================
// SERVICE ITEM - CONSISTENT LAYOUT
// ============================================

interface ServiceItemProps {
  service: ServiceData;
}

function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="service-item">
      <div className="service-item__row">
        <div className="service-item__name">{service.name}</div>
        <div className="service-item__price">
          {service.price}
          {service.price_note && (
            <span className="service-item__price-note">
              {service.price_note}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// SERVICE GRID - STRICT 2-COLUMN (ALWAYS)
// ============================================

interface ServiceGridProps {
  subsections: SubsectionContent[];
}

function ServiceGrid({ subsections }: ServiceGridProps) {
  return (
    <div className="service-grid">
      {subsections.map((subsection, sIdx) => (
        <React.Fragment key={sIdx}>
          {/* Subsection Header - Spans both columns */}
          <SubsectionHeader
            title={subsection.title}
            continuation={subsection.continuationLabel}
          />

          {/* Service Items - Fill grid cells */}
          {subsection.services && subsection.services.length > 0 ? (
            subsection.services.map((service, idx) => (
              <ServiceItem key={idx} service={service} />
            ))
          ) : (
            <div className="service-item service-item--empty">
              No services available.
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ============================================
// COVER PAGE
// ============================================

function CoverPage() {
  return (
    <PageShell centered>
      <div className="cover">
        <div className="cover__wrapper">
          <div className="cover__ornament"></div>
          <div className="cover__logo">
            <img
              src="/bbs-logo-bg.png"
              alt="Logo"
              className="cover__logo-img"
            />
          </div>
          <div className="cover__divider"></div>
          <div className="cover__tagline">Unlock Your Best Self</div>
          <div className="cover__services">
            <div className="cover__services-line" />
            <span>Hair • Skin • Makeup • Nails</span>
            <div className="cover__services-line" />
          </div>
          <div className="cover__bottom">
            <div className="cover__bottom-ornament">
              <span />
              <div className="cover__bottom-line" />
              <div className="cover__bottom-diamond" />
              <div className="cover__bottom-line" />
              <span />
            </div>
            <div className="cover__catalogue-text">SERVICE CATALOGUE</div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ============================================
// DIVIDER PAGE
// ============================================

interface DividerPageProps {
  category: string;
  subtitle: string;
}

function DividerPage({ category, subtitle }: DividerPageProps) {
  return (
    <PageShell centered>
      <div className="divider">
        <div className="divider__wrapper">
          <div className="divider__ornament">
            <div className="divider__ornament-line" />
            <div className="divider__ornament-dots">
              <span />
              <div className="divider__ornament-diamond" />
              <span />
            </div>
            <div className="divider__ornament-line" />
          </div>
          <div className="divider__category">{category}</div>
          <div className="divider__underline" />
          <div className="divider__subtitle">{subtitle}</div>
          <div className="divider__bottom">
            <div className="divider__bottom-line" />
            <div className="divider__bottom-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="divider__bottom-line" />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ============================================
// SERVICES PAGE - USES STRICT 2-COLUMN GRID
// ============================================

interface ServicesPageProps {
  page: PageContent;
}

function ServicesPage({ page }: ServicesPageProps) {
  // Always show genderLabel if present (including for common services like Cleanup)
  const headerTitle =
    page.genderLabel && page.genderLabel.trim()
      ? `${page.genderLabel} • ${page.category}`
      : page.category || "";

  return (
    <PageShell header={<PageHeader title={headerTitle} />}>
      <ServiceGrid subsections={page.subsections || []} />
    </PageShell>
  );
}

// ============================================
// PAGE RENDERER
// ============================================

function PageRenderer({ page }: { page: PageContent }) {
  switch (page.type) {
    case "cover":
      return <CoverPage />;
    case "divider":
      return (
        <DividerPage
          category={page.category || ""}
          subtitle={page.subtitle || ""}
        />
      );
    case "services":
      return <ServicesPage page={page} />;
    default:
      return null;
  }
}

// ============================================
// MAIN CATALOGUE
// ============================================

const PrintableCatalogue: React.FC = () => {
  const pages = generateAllPages(catalogueData);

  return (
    <div className="catalogue">
      {pages.map((page, idx) => (
        <PageRenderer key={idx} page={page} />
      ))}
    </div>
  );
};

export default PrintableCatalogue;
