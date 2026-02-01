import { Service } from "@/app/data/catalogueData";

interface ServiceItemProps {
  service: Service;
}

export function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="py-4 border-b border-[var(--salon-gold)]/10 group hover:border-[var(--salon-gold)]/25 transition-all duration-300 hover:bg-[var(--salon-gold)]/[0.02]">
      {/* Service Name and Price */}
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <div 
          className="text-[var(--salon-gold)] flex-1 group-hover:text-[var(--salon-gold-light)] transition-colors duration-300"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '0.01rem'
          }}
        >
          {service.name}
        </div>
        <div 
          className="text-[var(--salon-gold)] whitespace-nowrap flex items-baseline gap-1"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: 600
          }}
        >
          <span>{service.price}</span>
          {service.price_note && (
            <span 
              className="text-[var(--salon-text-secondary)]"
              style={{ 
                fontSize: '0.6rem',
                fontWeight: 300,
                fontStyle: 'italic'
              }}
            >
              {service.price_note}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <div 
        className="text-[var(--salon-text-secondary)] pr-4"
        style={{ 
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          fontWeight: 300,
          lineHeight: 1.5
        }}
      >
        {service.description}
      </div>
    </div>
  );
}
