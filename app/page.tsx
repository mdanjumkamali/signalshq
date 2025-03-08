import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";
import { ROIStats } from "@/components/blocks/roi-stats";
import { AuditorFeatures } from "@/components/blocks/auditor-features";
import { ComplianceFeature } from "@/components/blocks/compliance-feature";
import { FAQSection } from "@/components/blocks/faq-section";
import { ContactSection } from "@/components/blocks/contact-section";
import { Footer } from "@/components/blocks/footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroWithMockup
          title="Hyperscale your Audit & Advisory firm with AI"
          description="SignalsHQ improves the performance of Audit & Advisory firms with agents to collect, extract, analyse, verify and reference documentation at scale"
          primaryCta={{
            text: "Start Building",
            href: "/signup",
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
