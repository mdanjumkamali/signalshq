import { AuditorFeatures } from "@/components/blocks/auditor-features";
import { ComplianceFeature } from "@/components/blocks/compliance-feature";
import { ContactSection } from "@/components/blocks/contact-section";
import { FAQSection } from "@/components/blocks/faq-section";
import { Footer } from "@/components/blocks/footer";
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";
import { ROIStats } from "@/components/blocks/roi-stats";

export default function Home() {
  return (
    <>
      <main className="space-y-12 sm:space-y-16 md:space-y-24">
        <HeroWithMockup
          title="Hyperscale your Audit & Advisory firm with AI"
          description="SignalsHQ improves the performance of Audit & Advisory firms with agents to collect, extract, analyse, verify and reference documentation at scale"
          primaryCta={{
            text: "Start Building",
            href: "#",
          }}
          mockupImage={{
            alt: "AI Platform Dashboard",
            width: 1248,
            height: 765,
            src: "https://www.launchuicomponents.com/app-light.png",
          }}
        />
        <ROIStats />
        <AuditorFeatures />
        <ComplianceFeature />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
