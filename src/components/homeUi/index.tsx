import CtaHomeUi from "./cta.homeUi";
import FeaturesHomeUi from "./features.homeUi";
import HeroHomeUi from "./hero.homeUi";
import HowItWorksHomeUi from "./howItWorks.homeUi";
import { MenuHomeUi } from "./menu.homeUi";
import PricingHomeUi from "./pricing.homeUi";
import ProblemHomeUi from "./problem.homeUi";
import SolutionHomeUi from "./solution.homeUi";
import TestimonialsHomeUi from "./testimonials.homeUi";

const HomeUi = {
  hero: HeroHomeUi,
  problem: ProblemHomeUi,
  solution: SolutionHomeUi,
  features: FeaturesHomeUi,
  howItWorks: HowItWorksHomeUi,
  testimonials: TestimonialsHomeUi,
  pricing: PricingHomeUi,
  cta: CtaHomeUi,
  menu: MenuHomeUi,
};

export default HomeUi;
