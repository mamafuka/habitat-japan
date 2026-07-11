import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { ConsultationIntro } from "@/components/sections/ConsultationIntro";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Statement } from "@/components/sections/Statement";
import { Support } from "@/components/sections/Support";
import { TokyoCollection } from "@/components/sections/TokyoCollection";
import { TokyoPhilosophy } from "@/components/sections/TokyoPhilosophy";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Support />
        <TokyoCollection />
        <Statement />
        <Process />
        <TokyoPhilosophy />
        <FAQ />
        <ConsultationIntro />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
