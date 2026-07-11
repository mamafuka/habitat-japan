import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/components/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Habitat Tokyo collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Habitat Tokyo respects your privacy. This policy explains what we
        collect, how we use it, and the choices available to you when you
        enquire about relocation to Tokyo.
      </p>

      <LegalSection title="Information We Collect">
        <p>
          When you submit a consultation request or contact us, we may collect:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Nationality</li>
          <li>Current country of residence</li>
          <li>Preferred area in Tokyo</li>
          <li>Monthly budget range</li>
          <li>Visa status</li>
          <li>Messages or notes you choose to share</li>
        </ul>
        <p>
          We collect only what is needed to understand your relocation and
          prepare a thoughtful response.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Information">
        <p>We use your information to:</p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>Review and respond to your consultation request</li>
          <li>Prepare recommendations suited to your lifestyle and timeline</li>
          <li>Coordinate introductions with licensed partners where appropriate</li>
          <li>Communicate with you about your enquiry</li>
        </ul>
        <p>
          We do not sell your personal information. We use it solely in
          connection with the services you request.
        </p>
      </LegalSection>

      <LegalSection title="Third-party Service Providers">
        <p>
          We may share information with trusted service providers who assist us
          in operating our website, managing enquiries, or supporting
          relocation coordination. These providers are permitted to use your
          information only to perform services on our behalf and are expected
          to handle it with care and discretion.
        </p>
      </LegalSection>

      <LegalSection title="Property Introduction Partners">
        <p>
          When appropriate, we may introduce you to licensed real estate
          agencies or property partners in Japan. Information is shared only
          when relevant to your enquiry and with your knowledge. Final leasing
          arrangements are made directly between you and the licensed agency
          or landlord.
        </p>
      </LegalSection>

      <LegalSection title="Cookies & Analytics">
        <p>
          Our website may use cookies and similar technologies to understand
          how visitors use the site and to improve performance. You can
          adjust cookie settings through your browser. Where analytics tools
          are used, they help us understand general usage patterns rather than
          identify you personally unless you have provided your details
          through a form.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain enquiry information for as long as needed to respond to
          your request, maintain our records, and support any ongoing
          relocation coordination. When information is no longer required, we
          take reasonable steps to delete or anonymise it.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          Depending on where you live, you may have the right to access,
          correct, or request deletion of your personal information, or to
          object to certain uses. We will respond to legitimate requests in a
          timely and considerate manner.
        </p>
      </LegalSection>

      <LegalSection title="Data Deletion Request">
        <p>
          You may request deletion of the personal information we hold about
          you. We will honour such requests where we are not required to
          retain the information for legal, regulatory, or legitimate
          business purposes. Please contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection title="Contact for Privacy Requests">
        <p>
          For privacy-related questions or requests, please contact us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-charcoal underline decoration-border underline-offset-2 transition-opacity duration-700 hover:opacity-60"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
