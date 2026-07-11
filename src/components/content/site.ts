export const siteConfig = {
  name: "Habitat Tokyo",
  tagline: "Private Relocation Concierge",
  description:
    "Luxury relocation support for international residents moving to Tokyo.",
  url: "https://habitat-japan.com",
  email: "hello@habitat-japan.com",
  seoTitle: "Habitat Tokyo | Luxury Relocation Concierge",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#support" },
  { label: "Our Approach", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Consultation", href: "#contact" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

export const heroContent = {
  headline: ["Tokyo can become", "your home."],
  subheadline: "Private relocation concierge for life in Tokyo.",
  primaryCta: { label: "Request Private Consultation", href: "#contact" },
  secondaryCta: { label: "Explore Tokyo Living", href: "#process" },
  image: "/images/hero-tokyo.png",
  imageAlt:
    "Tokyo Tower at golden hour viewed from a minimalist residence, with a woman seated by the window",
  imagePositionDesktop: "58% center",
  imagePositionMobile: "55% 40%",
};

export const aboutContent = {
  eyebrow: "About",
  title: "A quieter way to arrive.",
  paragraphs: [
    "Habitat is a private relocation concierge for those beginning life in Tokyo. Not a portal. Not an agency.",
    "From Minami-Azabu to Daikanyama, we guide every detail — residences, contracts, the rhythm of a new city.",
    "One point of contact. Complete discretion. Tokyo, personally considered.",
  ],
};

export const supportContent = {
  eyebrow: "Services",
  title: "Three ways we accompany you.",
  description: undefined,
  categories: [
    {
      number: "01",
      title: "Private Residence",
      description:
        "Personally selected homes across Minato, Azabu, Hiroo, and Aoyama. Viewings, requirements, and communication — handled quietly.",
    },
    {
      number: "02",
      title: "Corporate Arrival",
      description:
        "For companies and their people. Timelines, budgets, and the invisible details that make an arrival feel seamless.",
    },
    {
      number: "03",
      title: "Family & Long Stay",
      description:
        "For households building a longer life in Tokyo. Space, proximity, and the practical grace of settling in.",
    },
  ],
};

export const statementContent = {
  headline: "We do not find apartments.",
  body: "We open doors to a life in Tokyo.",
};

export const processContent = {
  eyebrow: "Our Approach",
  title: "From inquiry to aftercare.",
  description: undefined,
  steps: [
    {
      title: "Inquiry",
      description:
        "Your consultation request begins the conversation — lifestyle, timeline, and what you envision in Tokyo.",
    },
    {
      title: "Private Consultation",
      description:
        "A personal discussion to understand your relocation before any recommendation is prepared.",
    },
    {
      title: "Property Selection",
      description:
        "Residences considered against your preferences — neighbourhood, space, and the rhythm of your days.",
    },
    {
      title: "Viewing",
      description:
        "Privately arranged viewings with licensed partners, coordinated on your behalf.",
    },
    {
      title: "Contract",
      description:
        "Application, review in English, and administrative preparation through trusted partners.",
    },
    {
      title: "Move-in",
      description:
        "Handover, utilities, and the quiet details of your first morning in Tokyo.",
    },
    {
      title: "Aftercare",
      description:
        "Continued support as your life in the city takes shape — settling in, not simply moving in.",
    },
  ],
};

export const tokyoCollectionContent = {
  eyebrow: "Tokyo Collection",
  title: "Discover the neighborhoods that define modern Tokyo.",
  description:
    "Each district offers a different rhythm of life. From quiet residential streets to international business hubs, we help you find the place that truly feels like home.",
  locations: [
    {
      name: "Roppongi",
      lines: [
        "International energy, fine dining,",
        "private residences and nightlife.",
      ],
      image: "/images/hero-tokyo.png",
      imagePosition: "72% 38%",
    },
    {
      name: "Azabudai Hills",
      lines: [
        "Tokyo's newest luxury address,",
        "where modern architecture meets calm living.",
      ],
      image: "/testimonial-bg.jpg",
      imagePosition: "50% 40%",
    },
    {
      name: "Hiroo",
      lines: [
        "Tree-lined streets,",
        "international schools,",
        "cafés and quiet elegance.",
      ],
      image: "/testimonial-bg.jpg",
      imagePosition: "30% 55%",
    },
    {
      name: "Aoyama",
      lines: [
        "Design,",
        "fashion,",
        "art galleries,",
        "timeless sophistication.",
      ],
      image: "/images/hero-tokyo.png",
      imagePosition: "48% 42%",
    },
    {
      name: "Daikanyama",
      lines: [
        "Boutique living,",
        "independent cafés,",
        "creative culture.",
      ],
      image: "/testimonial-bg.jpg",
      imagePosition: "65% 30%",
    },
    {
      name: "Shibuya",
      lines: [
        "The modern heart of Tokyo,",
        "where business,",
        "technology",
        "and culture intersect.",
      ],
      image: "/images/hero-tokyo.png",
      imagePosition: "58% 25%",
    },
  ],
};

export const consultationIntroContent = {
  title: "Private Consultation",
  description:
    "Every relocation begins with understanding your lifestyle. Complete this short consultation request and we will prepare a personalized recommendation before our first conversation.",
};

export const moveTimelineOptions = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "6+ months",
] as const;

export const visaStatusOptions = [
  "I already have a Japanese visa",
  "Employer sponsorship",
  "Applying",
  "No visa yet",
  "Not sure",
] as const;

export const visaTypeOptions = [
  "Highly Skilled Professional",
  "Business Manager",
  "Engineer",
  "Student",
  "Dependent",
  "Permanent Resident",
  "Spouse",
  "Working Holiday",
  "Other",
] as const;

export const relocationPurposeOptions = [
  "Employment",
  "Company Transfer",
  "Business",
  "Study",
  "Family",
  "Investment",
  "Other",
] as const;

export const preferredAreaOptions = [
  "Roppongi",
  "Azabudai Hills",
  "Hiroo",
  "Aoyama",
  "Daikanyama",
  "Shibuya",
  "Ebisu",
  "Meguro",
] as const;

export const monthlyBudgetOptions = [
  "Under ¥300,000",
  "¥300,000 – ¥500,000",
  "¥500,000 – ¥800,000",
  "¥800,000 – ¥1,200,000",
  "¥1,200,000+",
  "Not sure yet",
] as const;

export const residencePreferenceOptions = [
  "Furnished",
  "Parking",
  "Gym",
  "Concierge",
  "Pet Friendly",
  "Tokyo Tower View",
  "Home Office",
] as const;

export const lifestyleOptions = [
  "Quiet",
  "Luxury",
  "Dining",
  "Business District",
  "Nightlife",
  "International Schools",
  "Parks",
  "Walkability",
  "Shopping",
  "Wellness",
] as const;

export const conciergeServiceOptions = [
  "Apartment Search",
  "Corporate Leasing",
  "Visa Support",
  "Interpreter",
  "Utility Setup",
  "Internet",
  "Furniture Package",
  "Airport Pickup",
  "Moving Support",
  "Bank Account Assistance",
  "School Search",
] as const;

export const employmentStatusOptions = [
  "Japanese Company",
  "International Company",
  "Self-employed",
  "Student",
  "Entrepreneur",
  "Not decided",
] as const;

export const householdIncomeOptions = [
  "Under ¥500,000",
  "¥500,000 – ¥1,000,000",
  "¥1,000,000 – ¥2,000,000",
  "¥2,000,000 – ¥5,000,000",
  "Over ¥5,000,000",
  "Prefer not to say",
] as const;

export const referralSourceOptions = [
  "Google",
  "Instagram",
  "YouTube",
  "Referral",
  "Employer",
  "Friend",
  "Other",
] as const;

export const preferredLanguageOptions = [
  "English",
  "Japanese",
  "Chinese",
  "Korean",
  "French",
  "German",
  "Spanish",
  "Other",
] as const;

export const bedroomOptions = ["Studio", "1", "2", "3", "4+"] as const;

export const contactContent = {
  submitLabel: "Request Private Consultation",
  successTitle: "Thank you.",
  successMessage:
    "We've received your inquiry. A relocation advisor will contact you within 24 hours.",
  contactMethods: [
    {
      label: "WhatsApp",
      note: "WhatsApp URL to be configured before launch",
      href: null,
    },
    {
      label: "Email",
      note: "Production contact email to be configured before launch",
      href: null,
    },
  ],
};

export const tokyoPhilosophyContent = {
  statement: "I didn't know I wanted to live in Tokyo until I saw it differently.",
};

export const faqContent = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      question: "What is Habitat?",
      answer:
        "A private relocation concierge for those building a life in Tokyo — not a property portal, not a brokerage.",
    },
    {
      question: "Who do you serve?",
      answer:
        "Executives, founders, creatives, and families who value discretion, clarity, and a single point of contact.",
    },
    {
      question: "Which neighbourhoods?",
      answer:
        "Minato, Roppongi, Azabu, Moto-Azabu, Hiroo, Aoyama, Omotesando, Daikanyama, and Shibuya — with coordination across greater Tokyo.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Fees and partner costs are explained during your consultation. Nothing concealed.",
    },
    {
      question: "How long does it take?",
      answer:
        "Timelines depend on your requirements. A realistic estimate follows your first conversation.",
    },
  ],
};

export const legalNotice =
  "Real estate brokerage, lease mediation, and other regulated real estate services are provided by appropriately licensed partner companies where required. Habitat provides customer coordination, language support, and relocation assistance according to the agreed service scope.";

export const footerContent = {
  tagline: "Private relocation concierge for life in Tokyo.",
  copyright: "© 2026 Habitat Tokyo",
};
