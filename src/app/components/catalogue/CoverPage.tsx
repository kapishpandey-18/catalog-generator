export function CoverPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Inner Frame */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-[var(--salon-gold)]/10 rounded-sm"></div>

      {/* Content Container - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Top Decorative Element */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--salon-gold)]"></div>
          <div className="w-3 h-3 mx-4 rotate-45 border-2 border-[var(--salon-gold)] bg-transparent"></div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--salon-gold)]"></div>
        </div>

        {/* Logo */}
        <div className="mb-6 flex items-center justify-center">
          <img
            src="/bbs-logo-bg.png"
            alt="Beyond Beauty Studio Logo"
            className="cover__logo-img"
          />
        </div>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-10 h-[1px] bg-[var(--salon-gold)]/60"></div>
          <div className="w-2 h-2 mx-3 bg-[var(--salon-gold)]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div className="w-10 h-[1px] bg-[var(--salon-gold)]/60"></div>
        </div>

        {/* Tagline */}
        <div 
          className="text-[var(--salon-text-primary)] mb-8"
          style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.4
          }}
        >
          Unlock Your Best Self
        </div>

        {/* Services */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--salon-gold)]/40"></div>
          <div 
            className="text-[var(--salon-text-secondary)]"
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.3rem'
            }}
          >
            Hair • Skin • Makeup • Nails
          </div>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--salon-gold)]/40"></div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 bg-[var(--salon-gold)]/40"></div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--salon-gold)]/40 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 border border-[var(--salon-gold)]/60"></div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-[var(--salon-gold)]/40 to-transparent"></div>
          <div className="w-1.5 h-1.5 bg-[var(--salon-gold)]/40"></div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div 
          className="text-[var(--salon-text-muted)] tracking-[0.25rem]"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: '0.55rem',
            fontWeight: 300
          }}
        >
          SERVICE CATALOGUE
        </div>
      </div>
    </div>
  );
}
