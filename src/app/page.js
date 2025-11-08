import CTA from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import Navbar from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

function App() {
  return (
    <div className="font-sans bg-linear-to-br from-[#f7fdfc] to-[#f9f9ff] min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
