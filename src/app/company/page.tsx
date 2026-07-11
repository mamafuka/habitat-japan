import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <PlaceholderPage title="Company Information">
      <p>Operating company information to be inserted before launch.</p>
      <p>
        The following details will be published on this page prior to commercial
        launch:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-2">
        <li>Legal entity name</li>
        <li>Registered address</li>
        <li>Company registration number</li>
        <li>Representative director</li>
        <li>Applicable business licenses</li>
        <li>Contact information</li>
      </ul>
    </PlaceholderPage>
  );
}
