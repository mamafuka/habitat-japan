import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important information about Habitat Tokyo relocation consultation and property introduction services.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Please read this disclaimer carefully before using our website or
        submitting a consultation request.
      </p>

      <LegalSection title="Our Services">
        <p>
          Habitat Tokyo provides relocation consultation and property
          introduction services for international residents considering life in
          Tokyo.
        </p>
        <p>
          Habitat Tokyo is not a licensed real estate agency unless explicitly
          stated. Where regulated real estate services are required, we work
          with appropriately licensed partner companies.
        </p>
      </LegalSection>

      <LegalSection title="Decisions & Outcomes">
        <p>
          Final leasing decisions are made solely by landlords and licensed
          agencies. Habitat Tokyo facilitates introductions and coordination;
          we do not act as the contracting party in property transactions
          unless clearly agreed otherwise in writing.
        </p>
      </LegalSection>

      <LegalSection title="What We Do Not Guarantee">
        <p>We do not guarantee:</p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>Apartment availability</li>
          <li>Lease approval</li>
          <li>Visa approval</li>
          <li>Relocation outcomes</li>
        </ul>
        <p>
          Timelines, availability, and outcomes depend on many factors beyond
          our control, including landlord preferences, immigration
          requirements, and market conditions.
        </p>
      </LegalSection>

      <LegalSection title="Website Information">
        <p>
          Information on this website may change without notice. Descriptions
          of neighbourhoods, services, and processes are provided for general
          guidance and may not reflect current circumstances.
        </p>
      </LegalSection>

      <LegalSection title="Third Parties">
        <p>
          Habitat Tokyo is not liable for decisions, actions, or omissions
          made by third parties, including property owners, licensed agencies,
          employers, or government authorities. We aim to work with trusted
          partners and to communicate clearly; responsibility for final
          decisions remains with the parties involved.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
