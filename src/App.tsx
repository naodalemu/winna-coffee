import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Stats from "./components/Stats";
import About from "./components/About";
import CoffeeVarieties from "./components/CoffeeVarieties";
import FarmFacts from "./components/FarmFacts";
import FarmProfile from "./components/FarmProfile";
import Process from "./components/Process";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Impact from "./components/Impact";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollBar from "./components/ScrollBar";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Stats />
        <CoffeeVarieties />
        <FarmFacts />
        <FarmProfile />
        <Process />
        <WhyChoose />
        <Impact />
        {/* Hidden for now - re-enable and renumber section tags (S.xx) when ready */}
        {false && <Certifications />}
        {false && <Testimonials />}
        {false && <FAQ />}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollBar />
    </>
  );
}

export default App;
