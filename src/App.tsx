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

function App() {
  return (
    <div style={{ background: "#F6F1E7" }}>
      <Nav />
      <Hero />
      <TrustStrip />
      <Stats />
      <About />
      <CoffeeVarieties />
      <FarmFacts />
      <FarmProfile />
      <Process />
      <Certifications />
      <Testimonials />
      <WhyChoose />
      <Impact />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
