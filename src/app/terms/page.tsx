import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <PlaceholderPage title="Terms of Service">
      <p>
        Operating company information to be inserted before launch.
      </p>
      <p>
        Terms of service governing the use of Habitat Japan&apos;s coordination
        and relocation support will be published here prior to commercial launch.
      </p>
      <p>
        These terms will define service scope, limitations of liability, fee
        structures, cancellation policies, and the relationship between Habitat
        Japan and licensed partner companies.
      </p>
    </PlaceholderPage>
  );
}
