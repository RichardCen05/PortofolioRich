import Navbar from "./components/Navbar";
import ChapterRail from "./components/ChapterRail";
import AuroraBackground from "./components/AuroraBackground";
import CursorGlow from "./components/CursorGlow";
import BootIntro from "./components/BootIntro";
import Hero from "./components/Hero";
import LeadSelf from "./components/LeadSelf";
import Transition from "./components/Transition";
import LeadOthersJourney from "./components/LeadOthersJourney";
import LecturaShowcase from "./components/LecturaShowcase";
import MemorableMoment from "./components/MemorableMoment";
import TeladanGrowth from "./components/TeladanGrowth";
import Testimonials from "./components/Testimonials";
import DevelopmentPlan from "./components/DevelopmentPlan";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BootIntro />
      <AuroraBackground />
      <CursorGlow />
      <Navbar />
      <ChapterRail />
      <main>
        <Hero />
        <LeadSelf />
        <Transition />
        <LeadOthersJourney />
        <LecturaShowcase />
        <MemorableMoment />
        <TeladanGrowth />
        <Testimonials />
        <DevelopmentPlan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
