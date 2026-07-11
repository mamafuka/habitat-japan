import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage title="Privacy Policy">
      <p>
        Operating company information to be inserted before launch.
      </p>
      <p>
        A complete privacy policy covering data collection, processing purposes,
        retention periods, third-party sharing, and individual rights will be
        published here prior to commercial launch.
      </p>
      <p>
        For privacy-related enquiries before launch, contact details will be
        provided on this page once confirmed.
      </p>
    </PlaceholderPage>
  );
}
