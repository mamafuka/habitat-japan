export const siteConfig = {
  name: "Habitat Tokyo",
  tagline: "Private Relocation Concierge",
  description:
    "Luxury relocation support for international residents moving to Tokyo.",
  url: "https://habitat-japan.com",
  /** Internal recipient for consultation form delivery — not displayed publicly. */
  formRecipientEmail: "hello@habitat-japan.com",
  seoTitle: "Habitat Tokyo | Luxury Relocation Concierge",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#support" },
  { label: "Our Approach", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Consultation", href: "#contact" },
];

/** Consultation form only — not linked in public navigation. */
export const legalPageUrls = {
  privacy: "/legal/privacy-2026",
  disclaimer: "/legal/disclaimer-2026",
} as const;

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
    "Habitat is a private relocation concierge for those beginning life in Tokyo. Not a portal. Not a brokerage.",
    "From Minami-Azabu to Daikanyama, we assist with relocation planning and housing search support — coordinating with licensed professionals where regulated services are required.",
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
        "Housing search support across Minato, Azabu, Hiroo, and Aoyama — preferences, requirements, and communication handled with discretion.",
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
      title: "Housing Search",
      description:
        "Residences considered against your preferences with housing search support — neighbourhood, space, and the rhythm of your days.",
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

export const consultationIntroContent = {
  title: "Private Consultation",
  description:
    "Every relocation begins with understanding your lifestyle. Complete this short consultation request and we will prepare a personalized recommendation before our first conversation.",
  serviceScopeNotice:
    "Habitat Tokyo assists clients with relocation planning and housing search support, and coordinates with appropriately licensed real estate professionals where regulated services are required.",
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
  consentNotice:
    "Submitting this form does not guarantee property availability, lease approval, visa approval, or acceptance of an engagement.",
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
        "An independent relocation concierge offering consultation and housing search support — not a property portal, not a licensed real estate brokerage.",
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

export const footerContent = {
  copyright: "© 2026 Habitat Tokyo",
};
