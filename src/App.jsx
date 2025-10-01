import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./shared/Navbar";

import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <>
      <Hero/>
      <ProductGrid />
      <FAQAccordion />
      <GetInTouch />
      <Footer/>
    </>
  );
}

export default App;
