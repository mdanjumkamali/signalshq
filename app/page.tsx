import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
