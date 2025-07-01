// import Header from "./components/home/header/Header";

import About from "@/components/home/header/About";
import Header from "@/components/home/header/Header";
import ProductSection from "@/components/home/Products";
import MenuFacture from "@/components/home/MenuFacture";
// import Testimonial from "@/components/home/Testimonial";
import SourcingSection from "@/components/home/Sourceing";
import ClientSection from "@/components/home/ClientSection";
export const metadata = {
  title: 'HATSMASTER | Your Trusted Sourcing Partner for Premium Headwear',
  description:
    'Discover premium hats and custom headwear sourcing from Bangladesh. Your international sourcing agent for quality caps and accessories.',
  keywords: [
    "headwear sourcing agent",
    "international hat supplier",
    "custom hats export Bangladesh",
    "premium cap sourcing",
    "bulk hats supplier",
  ].join(", "),
  openGraph: {
    title: 'Hats Master | Trusted International Headwear Sourcing Agent',
    description:
      'We connect global clients with the best hat manufacturers in Bangladesh for custom, high-quality headwear.',
    url: 'https://hatsmaster.com',
    siteName: 'Hats Master',
    images: [
      {
        url: '/homepage-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hats Master Homepage OG Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hats Master | Trusted International Headwear Sourcing Agent',
    description:
      'Connecting global clients with Bangladesh’s top headwear manufacturers for premium custom hats.',
    images: ['/homepage-og-image.jpg'],
  },
};
export default function Home() {
  return (
    <div className="space-y-[50px]  mx-auto">
      <Header />
      <About />
      <ProductSection />
      <MenuFacture />
      <SourcingSection />


      <ClientSection />
    </div>
  );
}
