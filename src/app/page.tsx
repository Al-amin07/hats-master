// import Header from "./components/home/header/Header";

import About from "@/components/home/header/About";
import Header from "@/components/home/header/Header";
import ProductSection from "@/components/home/Products";
import MenuFacture from "@/components/home/MenuFacture";
// import Testimonial from "@/components/home/Testimonial";
import SourcingSection from "@/components/home/Sourceing";
import ClientSection from "@/components/home/ClientSection";

export default function Home() {
  return (
    <div className="space-y-[70px]  mx-auto">
      <Header />
      <About />
      <ProductSection />
      <MenuFacture />
      <SourcingSection />

      {/* <Testimonial /> */}
      <ClientSection />
    </div>
  );
}
