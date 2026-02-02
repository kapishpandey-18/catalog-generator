export interface Service {
  name: string;
  description: string;
  price: string;
  price_note?: string;
}

export interface ServiceSubcategory {
  title: string;
  services: Service[];
}

export interface CategoryData {
  name: string;
  subtitle: string;
  women: ServiceSubcategory[];
  men: ServiceSubcategory[];
  kids: ServiceSubcategory[];
  common?: ServiceSubcategory[]; // For services common to all genders
}

export const catalogueData: CategoryData[] = [
  {
    name: "HAIR",
    subtitle: "SERVICES",
    women: [
      {
        title: "Hair Cut",
        services: [
          {
            name: "Hair Cut",
            description:
              "Precision haircut tailored to your face shape and hair texture for a clean, refreshed look.",
            price: "₹400",
          },
          {
            name: "Hair Cut & Wash & Blow Dry",
            description:
              "Complete service including wash, customized cut, and professional blow dry finish.",
            price: "₹650",
          },
        ],
      },
      {
        title: "Hair Care & Styling",
        services: [
          {
            name: "Hair Wash",
            description:
              "Gentle cleanse using professional shampoo and conditioner to remove buildup and refresh hair.",
            price: "₹300",
          },
          {
            name: "Blow Dry",
            description:
              "Smooth and styled blow dry for a polished everyday finish.",
            price: "₹250",
          },
          {
            name: "Simple Hair Style",
            description:
              "Elegant, simple styling suitable for casual outings and small occasions.",
            price: "₹600",
          },
          {
            name: "Hair Curl",
            description:
              "Soft or defined curls created with professional tools for long-lasting results.",
            price: "₹500",
          },
          {
            name: "Hair Pressing",
            description:
              "Temporary straightening for a sleek, smooth hair finish.",
            price: "₹500",
          },
        ],
      },
      {
        title: "Hair Colour",
        services: [
          {
            name: "Global Hair Colour – Short Length",
            description:
              "Full-head global colour for short hair using professional colour products.",
            price: "₹2500",
          },
          {
            name: "Global Hair Colour – Shoulder Length",
            description:
              "Even and vibrant global colour application for shoulder-length hair.",
            price: "₹3000",
          },
          {
            name: "Global Hair Colour – Full Length",
            description:
              "Complete global colouring for long hair with rich, long-lasting shades.",
            price: "₹4000",
          },
          {
            name: "Root Touchup (Inoa)",
            description:
              "Ammonia-free root touch-up using Inoa for natural-looking grey coverage.",
            price: "₹1000",
          },
          {
            name: "Root Touchup (Loreal)",
            description:
              "Root regrowth coverage using L'Oréal professional hair colour.",
            price: "₹900",
          },
          {
            name: "Hair Highlights (Per Strip)",
            description:
              "Single highlight strand to add dimension and brightness.",
            price: "₹250",
          },
        ],
      },
      {
        title: "Hair Treatments",
        services: [
          {
            name: "Nanoplastia – Short Length",
            description:
              "Advanced smoothening treatment to reduce frizz and improve hair texture.",
            price: "₹3,500",
          },
          {
            name: "Nanoplastia – Shoulder Length",
            description:
              "Deep hair repair and smoothening treatment for medium-length hair.",
            price: "₹4,500",
          },
          {
            name: "Nanoplastia – Full Length",
            description:
              "Intensive smoothening and strengthening treatment for long hair.",
            price: "₹5,500",
          },
          {
            name: "Botox Hair Treatment – Short Length",
            description:
              "Deep conditioning botox treatment to restore softness and shine for short hair.",
            price: "₹3,000",
          },
          {
            name: "Botox Hair Treatment – Shoulder Length",
            description:
              "Hair botox treatment for smoother, healthier-looking medium-length hair.",
            price: "₹4,000",
          },
          {
            name: "Botox Hair Treatment – Full Length",
            description:
              "Intensive hair botox treatment for long hair to reduce frizz and enhance manageability.",
            price: "₹5,000",
          },
          {
            name: "Keratin Hair Treatment – Short Length",
            description:
              "Keratin treatment for short hair to smooth frizz and improve manageability.",
            price: "₹2,500",
          },
          {
            name: "Keratin Hair Treatment – Shoulder Length",
            description:
              "Keratin smoothing for medium-length hair for a sleek, frizz-controlled finish.",
            price: "₹3,500",
          },
          {
            name: "Keratin Hair Treatment – Full Length",
            description:
              "Full keratin treatment for long hair to reduce frizz and add shine.",
            price: "₹4,500",
          },
          {
            name: "Smoothing Hair Treatment – Short Length",
            description:
              "Hair smoothing for short hair to tame frizz and improve texture.",
            price: "₹3000",
          },
          {
            name: "Smoothing Hair Treatment – Shoulder Length",
            description:
              "Smoothing treatment for medium hair to reduce frizz and enhance softness.",
            price: "₹3500",
          },
          {
            name: "Smoothing Hair Treatment – Full Length",
            description:
              "Smoothing for long hair to improve manageability and reduce frizz.",
            price: "₹4500",
          },
          {
            name: "Dandruff Treatment",
            description:
              "Scalp care treatment to control dandruff and soothe irritation.",
            price: "₹700",
          },
        ],
      },
      {
        title: "Hair Spa",
        services: [
          {
            name: "Hair Spa (Loreal) – Short Length",
            description:
              "Nourishing hair spa to strengthen and hydrate short hair.",
            price: "₹800",
          },
          {
            name: "Hair Spa (Loreal) – Shoulder Length",
            description:
              "Deep-conditioning spa for medium-length hair for softness and shine.",
            price: "₹1,000",
          },
          {
            name: "Hair Spa (Loreal) – Full Length",
            description:
              "Intensive hair spa for long hair to improve health, shine, and manageability.",
            price: "₹1,200",
          },
          {
            name: "Head Massage",
            description:
              "Relaxing head massage to ease stress and improve scalp circulation.",
            price: "₹250",
          },
        ],
      },
    ],
    men: [
      {
        title: "Hair & Grooming",
        services: [
          {
            name: "Hair Cut",
            description:
              "Classic or modern haircut designed for men's grooming needs.",
            price: "₹150",
          },
          {
            name: "Hair Wash",
            description: "Quick wash and refresh using professional products.",
            price: "₹150",
          },
          {
            name: "Shaving",
            description:
              "Clean shave with skin-friendly products for a fresh finish.",
            price: "₹120",
          },
          {
            name: "Beard",
            description: "Beard shaping and trimming for a neat, defined look.",
            price: "₹200",
          },
          {
            name: "Hair Colour",
            description:
              "Professional hair colour application for men for a natural, refreshed look.",
            price: "₹700",
          },
          {
            name: "Hair Spa",
            description:
              "Nourishing hair spa to strengthen hair and improve scalp health.",
            price: "₹800",
          },
          {
            name: "Keratin",
            description:
              "Keratin smoothing treatment to reduce frizz and improve manageability.",
            price: "₹1500",
          },
          {
            name: "Smoothing",
            description:
              "Smoothing treatment for a sleek, frizz-controlled finish.",
            price: "₹2000",
          },
        ],
      },
      {
        title: "Head Massage",
        services: [
          {
            name: "Head Massage",
            description:
              "Relaxing head massage to reduce stress and refresh the scalp.",
            price: "₹200",
          },
        ],
      },
    ],
    kids: [
      {
        title: "Hair Care",
        services: [
          {
            name: "Baby Hair Cut – Boy",
            description:
              "Gentle and child-friendly haircut designed for young boys.",
            price: "₹120",
          },
          {
            name: "Baby Hair Cut – Girl",
            description:
              "Comfortable and child-friendly haircut designed for young girls.",
            price: "₹250",
          },
        ],
      },
    ],
  },
  {
    name: "SKIN",
    subtitle: "CARE",
    women: [
      {
        title: "Waxing",
        services: [
          {
            name: "Rica Wax – Full Arms + Underarms",
            description:
              "Premium Rica waxing for smooth arms and underarms with reduced irritation.",
            price: "₹500",
          },
          {
            name: "Rica Wax – Full Legs",
            description:
              "Premium Rica waxing for full legs for clean, long-lasting smoothness.",
            price: "₹500",
          },
          {
            name: "Rica Wax – Half Legs",
            description:
              "Premium Rica waxing for half legs for soft, smooth skin.",
            price: "₹300",
          },
          {
            name: "Rica Wax – Full Body",
            description:
              "Full body Rica waxing for overall smoothness with premium wax formulation.",
            price: "₹1,500",
          },
          {
            name: "Rica Wax – Bikini",
            description:
              "Bikini area waxing using Rica wax for a cleaner, smoother finish.",
            price: "₹900",
          },
          {
            name: "Honey Wax – Full Arms + Underarms",
            description: "Honey waxing for smooth arms and underarms.",
            price: "₹300",
          },
          {
            name: "Honey Wax – Full Legs",
            description: "Honey waxing for full legs for smooth, clean skin.",
            price: "₹500",
          },
          {
            name: "Honey Wax – Half Legs",
            description: "Honey waxing for half legs for soft, smooth skin.",
            price: "₹350",
          },
          {
            name: "Rica Brazilian Wax – Underarms",
            description: "Brazilian-style waxing for clean underarms.",
            price: "₹100",
          },
          {
            name: "Rica Brazilian Wax – Full Face",
            description: "Full face waxing for clean, hair-free skin.",
            price: "₹500",
          },
          {
            name: "Rica Brazilian Wax – Side Locks",
            description: "Side locks waxing for a neat face outline.",
            price: "₹100",
          },
          {
            name: "Rica Brazilian Wax – Upper Lips",
            description: "Upper lip waxing for clean, smooth finish.",
            price: "₹50",
          },
          {
            name: "Rica Brazilian Wax – Chin",
            description: "Chin waxing to remove unwanted facial hair.",
            price: "₹50",
          },
          {
            name: "Rica Brazilian Wax – Forehead",
            description: "Forehead waxing for a clean hairline area.",
            price: "₹80",
          },
          {
            name: "Rica Brazilian Wax – Bikini Line",
            description: "Bikini line waxing for a neat, clean finish.",
            price: "₹1000",
          },
          {
            name: "Rica Brazilian Wax – Bikini",
            description:
              "Full bikini waxing for a clean, smooth finish using premium wax.",
            price: "₹1,500",
          },
        ],
      },
      {
        title: "Threading",
        services: [
          {
            name: "Eyebrow Threading",
            description:
              "Eyebrow shaping with threading for clean, defined brows.",
            price: "₹50",
          },
          {
            name: "Forehead Threading",
            description: "Forehead threading for a clean and smooth look.",
            price: "₹30",
          },
          {
            name: "Upper Lip Threading",
            description: "Upper lip threading for a neat, smooth finish.",
            price: "₹20",
          },
        ],
      },
    ],
    men: [],
    kids: [],
    common: [
      {
        title: "D-Tan",
        services: [
          {
            name: "D-Tan (O3+) Full Face",
            description:
              "De-tan treatment to remove tan and brighten skin tone using O3+ range.",
            price: "₹600",
          },
          {
            name: "D-Tan (O3+) – Face & Neck",
            description:
              "De-tan for face and neck to reduce tanning and dullness.",
            price: "₹650",
          },
          {
            name: "D-Tan (O3+) – Full Back",
            description: "Back de-tan for more even, clean-looking skin tone.",
            price: "₹750",
          },
          {
            name: "D-Tan (O3+) – Full Arms",
            description: "Arm de-tan to reduce tanning and brighten skin.",
            price: "₹800",
          },
          {
            name: "D-Tan (O3+) – Full Legs",
            description:
              "Leg de-tan to reduce tanning and improve skin clarity.",
            price: "₹900",
          },
          {
            name: "D-Tan (O3+) – Full Body",
            description:
              "Complete body de-tan for overall brightened and refreshed skin.",
            price: "₹2,500",
          },
          {
            name: "D-Tan (Sara) – Full Face",
            description:
              "De-tan treatment using Sara range to reduce tan and brighten skin.",
            price: "₹500",
          },
          {
            name: "D-Tan (Sara) – Face & Neck",
            description: "De-tan for face and neck using Sara range.",
            price: "₹550",
          },
          {
            name: "D-Tan (Sara) – Full Back",
            description: "Back de-tan using Sara range.",
            price: "₹650",
          },
          {
            name: "D-Tan (Sara) – Full Arms",
            description: "Arm de-tan using Sara range.",
            price: "₹700",
          },
          {
            name: "D-Tan (Sara) – Full Legs",
            description: "Leg de-tan using Sara range.",
            price: "₹800",
          },
          {
            name: "D-Tan (Sara) – Full Body",
            description: "Full body de-tan using Sara range.",
            price: "₹2,200",
          },
          {
            name: "D-Tan (Raga) – Full Face",
            description:
              "De-tan treatment using Raga range to reduce tan and brighten skin.",
            price: "₹400",
          },
          {
            name: "D-Tan (Raga) – Face & Neck",
            description: "De-tan for face and neck using Raga range.",
            price: "₹450",
          },
          {
            name: "D-Tan (Raga) – Full Back",
            description: "Back de-tan using Raga range.",
            price: "₹550",
          },
          {
            name: "D-Tan (Raga) – Full Arms",
            description: "Arm de-tan using Raga range.",
            price: "₹600",
          },
          {
            name: "D-Tan (Raga) – Full Legs",
            description: "Leg de-tan using Raga range.",
            price: "₹700",
          },
          {
            name: "D-Tan (Raga) – Full Body",
            description: "Full body de-tan using Raga range.",
            price: "₹1,900",
          },
        ],
      },
      {
        title: "Bleach",
        services: [
          {
            name: "Bleach (O3+) – Full Face",
            description:
              "Face bleach using O3+ range for a bright and even tone.",
            price: "₹500",
          },
          {
            name: "Bleach (O3+) – Face & Neck",
            description: "Face and neck bleach for an even, brightened look.",
            price: "₹550",
          },
          {
            name: "Bleach (O3+) – Full Back",
            description: "Back bleach to brighten and even the skin tone.",
            price: "₹650",
          },
          {
            name: "Bleach (O3+) – Full Arms",
            description:
              "Arm bleach to reduce tanning appearance and brighten skin.",
            price: "₹700",
          },
          {
            name: "Bleach (O3+) – Full Legs",
            description: "Leg bleach to brighten and even skin appearance.",
            price: "₹800",
          },
          {
            name: "Bleach (O3+) – Full Body",
            description:
              "Full body bleach for overall brightening and even tone.",
            price: "₹2,200",
          },
          {
            name: "Bleach (Sara) – Full Face",
            description:
              "Face bleach using Sara range for a clean, bright finish.",
            price: "₹400",
          },
          {
            name: "Bleach (Sara) – Face & Neck",
            description: "Face and neck bleach using Sara range.",
            price: "₹450",
          },
          {
            name: "Bleach (Sara) – Full Back",
            description: "Back bleach using Sara range.",
            price: "₹550",
          },
          {
            name: "Bleach (Sara) – Full Arms",
            description: "Arms bleach using Sara range.",
            price: "₹650",
          },
          {
            name: "Bleach (Sara) – Full Legs",
            description: "Legs bleach using Sara range.",
            price: "₹750",
          },
          {
            name: "Bleach (Sara) – Full Body",
            description: "Full body bleach using Sara range.",
            price: "₹2,000",
          },
          {
            name: "Bleach (Oxylife) – Full Face",
            description:
              "Face bleach using Oxylife range for bright and clean skin.",
            price: "₹350",
          },
          {
            name: "Bleach (Oxylife) – Face & Neck",
            description: "Face and neck bleach using Oxylife range.",
            price: "₹400",
          },
          {
            name: "Bleach (Oxylife) – Full Back",
            description: "Back bleach using Oxylife range.",
            price: "₹450",
          },
          {
            name: "Bleach (Oxylife) – Full Arms",
            description: "Arms bleach using Oxylife range.",
            price: "₹550",
          },
          {
            name: "Bleach (Oxylife) – Full Legs",
            description: "Legs bleach using Oxylife range.",
            price: "₹650",
          },
          {
            name: "Bleach (Oxylife) – Full Body",
            description: "Full body bleach using Oxylife range.",
            price: "₹1,650",
          },
             {
            name: "Fyc Red Wine Bleach – Face",
            description: "Full body bleach using Oxylife range.",
            price: "₹350",
          },
        ],
      },
      {
        title: "Facials",
        services: [
          {
            name: "Vedic Line Gold Facial",
            description:
              "Gold facial to nourish, brighten and improve skin glow.",
            price: "₹1,500",
          },
          {
            name: "Oxylife Vitamin C Facial",
            description:
              "Gold facial to nourish, brighten and improve skin glow.",
            price: "₹2500",
          },
          {
            name: "Vedic Line Fruit Facial",
            description:
              "Fruit-based facial for hydration, freshness and natural glow.",
            price: "₹1,300",
          },
          {
            name: "Fyc Red Wine Facial",
            description:
              "Red wine facial to improve radiance and rejuvenate tired skin.",
            price: "₹1500",
          },
          {
            name: "Fyc Korean Glass Skin Facial",
            description:
              "Red wine facial to improve radiance and rejuvenate tired skin.",
            price: "₹3000",
          },
          {
            name: "Aroma Diamond Facial",
            description:
              "Diamond facial for instant glow and smoother-looking skin.",
            price: "₹1,000",
          },
          {
            name: "Lotus Facial",
            description: "Lotus facial for nourishment and balanced glow.",
            price: "₹900",
          },
          {
            name: "Aroma Skin Glow Facial",
            description:
              "Skin glow facial for brightening and improved texture.",
            price: "₹1500",
          },
          {
            name: "Aroma Fruit Facial",
            description: "Aroma fruit facial for freshness and light glow.",
            price: "₹1000",
          },
             {
            name: "Aroma Diamond Facial",
            description: "Aroma diamond facial for luxury glow and smooth skin.",
            price: "₹1500",
          },
             {
            name: "Skinora Vitamin C Facial",
            description: "Skinora vitamin C facial for freshness and light glow.",
            price: "₹1500",
          },
          {
            name: "O3+ Premium Facial",
            description:
              "Premium O3+ facial for advanced brightening and skin rejuvenation.",
            price: "₹2,000",
          },
          {
            name: "Lotus Preservita Premium Facial",
            description:
              "Preservita facial for hydration, glow and improved skin softness.",
            price: "₹2,200",
          },
          {
            name: "O3+ Bridal Glow Facial",
            description:
              "Bridal glow facial for special occasions with enhanced radiance.",
            price: "₹2,500",
          },
          {
            name: "Lotus Bridal Glow Facial",
            description: "Bridal glow facial for luminous, event-ready skin.",
            price: "₹2,500",
          },
          {
            name: "Kanpeki Premium Facial",
            description:
              "High-end facial for deep rejuvenation and premium glow results.",
            price: "₹4,000",
          },
        ],
      },
      {
        title: "Cleanup",
        services: [
          {
            name: "Cleanup (O3+)",
            description:
              "Deep cleanup to remove tan, impurities and improve skin freshness using O3+.",
            price: "₹1000",
          },
          {
            name: "Cleanup (Fruit)",
            description: "Fruit cleanup for gentle cleansing and freshness.",
            price: "₹700",
          },
          {
            name: "Cleanup (Lotus)",
            description: "Lotus cleanup for cleansing and light glow.",
            price: "₹600",
          },
        ],
      },
    ],
  },
  {
    name: "MAKEUP",
    subtitle: "ARTISTRY",
    women: [
      {
        title: "Makeup",
        services: [
          {
            name: "Eye Makeup",
            description:
              "Eye makeup for events with clean blending and long-lasting finish.",
            price: "₹600",
          },
          {
            name: "Engagement Makeup & Simple Hairstyle",
            description:
              "Event-ready makeup with simple hairstyle for engagement functions.",
            price: "₹6,000",
          },
          {
            name: "Haldi Makeup & Simple Hairstyle + Dressing",
            description:
              "Haldi-ready makeup with hairstyle and dressing support for a complete look.",
            price: "₹5,000",
          },
          {
            name: "Bridal Makeup & Hairstyle",
            description:
              "Bridal makeup and hairstyle designed for long wear, photography, and flawless finish.",
            price: "₹15,000",
            price_note: "onwards",
          },
          {
            name: "Party Makeup & Hairstyle",
            description:
              "Party makeup with hairstyle for a confident, glamorous look.",
            price: "₹2,500",
          },
          {
            name: "Professional Hairstyle",
            description:
              "Premium hairstyle for parties, functions, and photoshoots.",
            price: "₹2,000",
          },
        ],
      },
    ],
    men: [],
    kids: [],
  },
  {
    name: "NAILS",
    subtitle: "STUDIO",
    women: [
      {
        title: "Nails",
        services: [
          {
            name: "Acrylic Tips with Gel Nail Paint",
            price: "₹999",
            description:
              "Stylish acrylic nail tips finished with high-shine gel nail paint for a smooth, long-lasting and elegant look.",
          },
          {
            name: "Acrylic Tips with Gel + 2 Glitter",
            price: "₹1,099",
            description:
              "Acrylic nail extensions enhanced with gel polish and two glitter accents for a glamorous, eye-catching finish.",
          },
          {
            name: "Acrylic with French Tips",
            price: "₹1,199",
            description:
              "Classic acrylic nails paired with timeless French tips for a clean, sophisticated, and elegant appearance.",
          },
          {
            name: "Acrylic with French + Double Tip",
            price: "₹1,299",
            description:
              "Premium acrylic nail extensions with French styling and double-tip detailing for a bold and refined nail look.",
          },
          {
            name: "Nail Paint Removal (Gel & Simple)",
            price: "₹399",
            description:
              "Gentle and safe removal of gel or regular nail paint to maintain nail health and prevent damage.",
          },
          {
            name: "Nail Paint with Glitter",
            price: "₹499",
            description:
              "Glossy nail paint application with glitter highlights for a vibrant, party-ready, and stylish finish.",
          },
          {
            name: "Gel Nail Paint with One Finger Art (Per Hand)",
            price: "₹50",
            description:
              "Gel nail paint with elegant single-finger nail art on each hand to add a subtle yet artistic touch.",
          },
          {
            name: "Cat Eye Effect",
            price: "₹1,299",
            description:
              "Magnetic cat eye nail effect that creates a stunning light-reflective finish with depth and dimension.",
          },
          {
            name: "Chrome Nails (Both Hands)",
            price: "₹799",
            description:
              "High-shine chrome nail finish on both hands for a bold, mirror-like, and ultra-modern nail look.",
          },
        ],
      },
    ],
    men: [],
    kids: [],
  },
  {
    name: "MANICURE/PEDICURE",
    subtitle: "CARE",
    women: [
      {
        title: "Manicure & Pedicure",
        services: [
          {
            name: "Manicure (O3+)",
            description:
              "Manicure using O3+ range for clean, soft, well-groomed hands.",
            price: "₹900",
          },
          {
            name: "Manicure (Sara)",
            description:
              "Manicure using Sara range for smooth and nourished hands.",
            price: "₹700",
          },
          {
            name: "Manicure (Lotus)",
            description:
              "Basic manicure using Lotus range for neat, clean hands.",
            price: "₹500",
          },
          {
            name: "Manicure (Oxylife)",
            description:
              "Basic manicure using Oxylife range for smooth, clean hands.",
            price: "₹900",
          },
          {
            name: "Manicure (Vedic Line)",
            description:
              "Manicure using Vedic Line range for smooth, clean hands.",
            price: "₹800",
          },
          {
            name: "Pedicure (O3+)",
            description: "Pedicure using O3+ range for soft, refreshed feet.",
            price: "₹1000",
          },
          {
            name: "Pedicure (Sara)",
            description: "Pedicure using Sara range for clean, relaxed feet.",
            price: "₹800",
          },
          {
            name: "Pedicure (Lotus)",
            description:
              "Basic pedicure using Lotus range for smooth, clean feet.",
            price: "₹600",
          },
          {
            name: "Pedicure (Oxylife)",
            description:
              "Basic pedicure using Oxylife range for smooth, clean feet.",
            price: "₹1000",
          },
          {
            name: "Pedicure (Vedic Line)",
            description:
              "Basic pedicure using Vedic Line range for smooth, clean feet.",
            price: "₹900",
          },
        ],
      },
    ],
    men: [],
    kids: [],
  },
];
