// import Header from "./components/home/header/Header";

import About from "@/components/home/header/About";
import Header from "@/components/home/header/Header";
import ProductSection from "@/components/home/Products";
import MenufacturingProcess from "@/components/home/MenufacturingProcess";
import Testimonial from "@/components/home/Testimonial";
import SourcingSection from "@/components/home/Sourceing";

export default function Home() {
  return (
    <div className="space-y-20  mx-auto">
      <Header />
      <About />
      <ProductSection />
      <SourcingSection />
      <MenufacturingProcess />
      <Testimonial />

    </div>
  );
}
