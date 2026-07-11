import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/components/content/site";
import type { Metadata } from "next";

const canonicalPath = "/legal/privacy-2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Habitat Tokyo collects, uses, and protects information submitted through its consultation form.",
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

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm text-charcoal-faint">Last updated: July 11, 2026</p>

      <LegalSection title="Business Operator">
        <dl className="space-y-3">
          <div>
            <dt className="text-charcoal">Habitat Tokyo</dt>
          </div>
          <div>
            <dt className="text-charcoal">Operated by</dt>
            <dd>合同会社Intertangible (Intertangible LLC)</dd>
          </div>
        </dl>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>
          We collect personal information only through the consultation form on
          this website. This may include:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>name</li>
          <li>email</li>
          <li>nationality</li>
          <li>current country</li>
          <li>relocation timing</li>
          <li>visa status</li>
          <li>preferred area</li>
          <li>monthly housing budget</li>
          <li>additional notes</li>
        </ul>
      </LegalSection>

      <LegalSection title="Purpose of Collection">
        <p>
          We collect personal information solely for the following purposes:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>responding to consultation requests</li>
          <li>understanding relocation requirements</li>
          <li>
            assisting clients with relocation planning and housing search
            support
          </li>
          <li>
            coordinating communication with appropriately licensed real estate
            companies where requested
          </li>
          <li>improving our services and customer experience</li>
          <li>complying with applicable laws</li>
        </ul>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          Personal information is retained only for as long as reasonably
          necessary to fulfil the purposes described in this Privacy Policy or as
          required by applicable law.
        </p>
        <p>
          Information that is no longer required will be securely deleted or
          anonymised.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Disclosure">
        <p>We do not sell or rent personal information.</p>
        <p>Information may only be shared:</p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>where required by law</li>
          <li>where necessary to provide requested relocation support</li>
          <li>
            with appropriately licensed real estate companies or other relevant
            professional partners where necessary
          </li>
          <li>to protect our legal rights</li>
        </ul>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          Habitat Tokyo implements reasonable administrative and technical
          measures to protect personal information against unauthorized access,
          misuse, loss, alteration or disclosure.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>Please contact us through the consultation form.</p>
        <p>
          <a
            href={`${siteConfig.url}/#contact`}
            className="text-charcoal underline decoration-charcoal/20 underline-offset-4 transition-colors duration-700 hover:text-charcoal-muted"
          >
            Return to consultation form
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Policy Updates">
        <p>This Privacy Policy may be updated from time to time.</p>
        <p>The latest version will always be available on this page.</p>
      </LegalSection>
    </LegalPage>
  );
}
