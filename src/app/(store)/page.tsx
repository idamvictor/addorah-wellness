import { ExpertEndorsements } from "@/components/home/expert-endorsements";
import { FlaskPromo, HydrogenExplainer } from "@/components/home/flask-promo";
import { HomeHero } from "@/components/home/home-hero";
import { HomeProductCarousel } from "@/components/home/home-product-carousel";
import { Newsletter } from "@/components/home/newsletter";
import { ProofBadges } from "@/components/home/proof-badges";
import { QuizCta } from "@/components/home/quiz-cta";
import { RealResults } from "@/components/home/real-results";
import { Benefits } from "@/components/sections/benefits";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { FaqSection } from "@/components/sections/faq-section";
import { PressLogos } from "@/components/sections/press-logos";
import { TrustBar } from "@/components/sections/trust-bar";
import { homeFaqGroups } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <HomeProductCarousel />
      <ProofBadges />
      <Benefits />
      <RealResults />
      <PressLogos />
      <ExpertEndorsements />
      <FlaskPromo />
      <HydrogenExplainer />
      <ComparisonTable />
      <QuizCta />
      <div className="py-[72px]">
        <Newsletter />
      </div>
      <FaqSection groups={homeFaqGroups} showMoreLink />
    </>
  );
}
