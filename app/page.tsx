import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CessScore } from "@/components/sections/cess-score";
import { AiCoach } from "@/components/sections/ai-coach";
import { LifestyleGrid } from "@/components/sections/lifestyle-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

/* Section order matches the Figma frame top to bottom (node 27:1069). */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <CessScore />
        <AiCoach />
        <LifestyleGrid />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
