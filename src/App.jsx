import Hero from "./components/Hero";
import Amenities from "./components/Amenities";
import HouseRules from "./components/HouseRules";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import SEOContent from "./components/SEOContent";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <HouseRules />
      <Testimonials />
      <Location />
      <Contact />
      <SEOContent />
      <Footer />
      <a
        href="https://wa.me/917020944283?text=Hi,%20I%20am%20interested%20in%20booking%20Villa%20Revontuli.%20Please%20share%20details."
        className="whatsapp-float"
        target="_blank"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="28" />
      </a>
    </>
  );
}

export default App;