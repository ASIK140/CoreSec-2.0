import Courses from "@/components/sections/Courses";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

function App() {
  return (
    <div className="font-sans bg-linear-to-br from-[#f7fdfc] to-[#f9f9ff] min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Courses />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
