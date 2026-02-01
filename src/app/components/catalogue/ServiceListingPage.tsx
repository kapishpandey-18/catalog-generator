import { ServiceItem } from "./ServiceItem";
import { ServiceSubcategory, Service } from "../../data/catalogueData";

interface ServiceListingPageProps {
  category: string;
  gender: string;
  services: ServiceSubcategory[];
}

export function ServiceListingPage({
  category,
  gender,
  services,
}: ServiceListingPageProps) {
  // For common services, don't show gender label
  const genderLabel =
    gender === "common" ? "" : gender.charAt(0).toUpperCase() + gender.slice(1);

  return (
    <div className="min-h-full w-full flex flex-col relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0E0E0E] to-[#1A1410]"></div>

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,77,0.06)_0%,_transparent_70%)]"></div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 162, 77, 1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 162, 77, 1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Page Header */}
      <div className="relative z-10 px-10 pt-10 pb-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 bg-[var(--salon-gold)]"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>
            <div
              className="text-[var(--salon-gold)]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0.2rem",
              }}
            >
              {genderLabel ? `${genderLabel} • ${category}` : category}
            </div>
          </div>
          <div
            className="text-[var(--salon-gold)] relative"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "0.25rem",
            }}
          >
            <img
              src="/bbs-logo-bg.png"
              alt="Logo"
              className="cover__logo-img"
            />
          </div>
        </div>

        {/* Decorative header line */}
        <div className="flex items-center">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[var(--salon-gold)]/60 via-[var(--salon-gold)]/30 to-transparent"></div>
        </div>
      </div>

      {/* Services Content */}
      <div className="relative z-10 flex-1 px-10 pb-8 overflow-visible">
        {services.map((subcategory, index) => (
          <div key={index} className="mb-8">
            {/* Subcategory Title with decorative line */}
            <div className="mb-4 flex items-center gap-3">
              <div
                className="text-[var(--salon-text-primary)] px-3 py-1 bg-[var(--salon-gold)]/5 border-l-2 border-[var(--salon-gold)]/40"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.2rem",
                  textTransform: "uppercase",
                }}
              >
                {subcategory.title}
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[var(--salon-gold)]/30 to-transparent"></div>
            </div>

            {/* Services Grid - Two Columns */}
            <div className="grid grid-cols-2 gap-x-8">
              {subcategory.services.map((service: Service, idx: number) => (
                <ServiceItem key={idx} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
