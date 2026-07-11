import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import type { Metadata } from "next";
import Link from "next/link";

const canonicalPath = "/legal/disclaimer-2026";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The scope and limitations of Habitat Tokyo’s relocation consultation and housing search support.",
  alternates: {
    canonical: canonicalPath,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p className="text-sm text-charcoal-faint">Last updated: July 11, 2026</p>

      <LegalSection title="Our Service">
        <p>
          Habitat Tokyo provides independent relocation consultation and housing
          search support for international residents considering life in Tokyo.
        </p>
        <p>
          Habitat Tokyo is not a licensed real estate brokerage unless
          explicitly stated.
        </p>
        <p>
          Where licensed real estate services are required, they are performed
          separately by appropriately licensed real estate companies.
        </p>
      </LegalSection>

      <LegalSection title="No Guarantee">
        <p>Habitat Tokyo does not guarantee:</p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>apartment availability</li>
          <li>lease approval</li>
          <li>landlord approval</li>
          <li>visa approval</li>
          <li>relocation outcomes</li>
        </ul>
      </LegalSection>

      <LegalSection title="General Information">
        <p>
          General information on this website is provided for guidance only.
        </p>
        <p>
          Final decisions are made by property owners, licensed real estate
          companies and relevant authorities.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          Nothing in this Disclaimer excludes liability where liability cannot
          legally be excluded under applicable law.
        </p>
        <p>Please contact us through the consultation form.</p>
        <p>
          <Link
            href="/#consultation"
            className="text-charcoal underline decoration-charcoal/20 underline-offset-4 transition-colors duration-700 hover:text-charcoal-muted"
          >
            Return to consultation form
          </Link>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
