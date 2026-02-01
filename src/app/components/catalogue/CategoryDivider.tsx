interface CategoryDividerProps {
  category: string;
  subtitle: string;
}

export function CategoryDivider({ category, subtitle }: CategoryDividerProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient Background - extends beyond padding */}
      <div className="absolute inset-[-18mm] bg-gradient-to-br from-[#0A0A0A] via-[#0E0E0E] to-[#1A1410]"></div>
      
      {/* Radial Glow Effect - Larger for category pages */}
      <div className="absolute inset-[-18mm] bg-[radial-gradient(ellipse_at_center,_rgba(201,162,77,0.12)_0%,_transparent_60%)]"></div>
      
      {/* Diagonal Lines Pattern */}
      <div 
        className="absolute inset-[-18mm] opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(201, 162, 77, 1) 40px,
            rgba(201, 162, 77, 1) 41px
          )`,
        }}
      ></div>

      {/* Decorative Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--salon-gold)]/5 rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[var(--salon-gold)]/5 rotate-45"></div>
      

      {/* Content Container - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Top Ornament */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[var(--salon-gold)]"></div>
          <div className="flex items-center gap-2 mx-5">
            <div className="w-1.5 h-1.5 bg-[var(--salon-gold)]/60"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-[var(--salon-gold)]"></div>
            <div className="w-1.5 h-1.5 bg-[var(--salon-gold)]/60"></div>
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[var(--salon-gold)]"></div>
        </div>

        {/* Category Title */}
        <div className="relative mb-5">
          {/* Glow behind text */}
          <div 
            className="absolute inset-0 blur-3xl bg-[var(--salon-gold)]/10"
            style={{ transform: 'scale(2)' }}
          ></div>
          <div 
            className="relative text-[var(--salon-gold)]"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: '4rem',
              fontWeight: 700,
              letterSpacing: '0.5rem',
              lineHeight: 1,
              textShadow: '0 0 60px rgba(201, 162, 77, 0.2)'
            }}
          >
            {category}
          </div>
        </div>

        {/* Decorative Line Under Title */}
        <div className="flex items-center justify-center mb-5">
          <div className="w-14 h-[2px] bg-gradient-to-r from-transparent via-[var(--salon-gold)]/70 to-transparent"></div>
        </div>

        {/* Subtitle */}
        <div 
          className="text-[var(--salon-text-secondary)]"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 300,
            letterSpacing: '0.45rem'
          }}
        >
          {subtitle}
        </div>

        {/* Bottom Ornament */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[var(--salon-gold)]/60"></div>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-[var(--salon-gold)]/50"></div>
            <div className="w-2 h-2 bg-[var(--salon-gold)]"></div>
            <div className="w-1.5 h-1.5 bg-[var(--salon-gold)]/50"></div>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[var(--salon-gold)]/60"></div>
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--salon-gold)] to-transparent"></div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--salon-gold)] to-transparent"></div>
      </div>
    </div>
  );
}
