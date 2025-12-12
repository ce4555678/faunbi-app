import HomeUi from "@/components/homeUi";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomeUi.hero />
      <HomeUi.problem />
      <HomeUi.solution />
      <HomeUi.features />
      <HomeUi.howItWorks />
      <HomeUi.testimonials />
      <HomeUi.pricing />
      <HomeUi.cta />
    </div>
  );
}
