import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Differentials from "./components/Differentials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductsCarousel from "./components/ProductsCarousel";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductsCarousel />
        <Differentials />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}
