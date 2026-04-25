import Hero from "./components/Hero";
import Amenities from "./components/Amenities";
import HouseRules from "./components/HouseRules";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <HouseRules />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}

export default App;