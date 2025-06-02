import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from 'sonner';
import NewFooter from "@/components/shared/NewFooter";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Hats Master | Premium Hats & Headwear Online',
    template: '%s | Hats Master',
  },
  icons: {
    icon: '/hat.ico',

  },
  description:
    'Custom Cap Manufacturer | Quality Headwear Production – Hatsmaster | Custom Hats Wholesale | Bulk Cap Production – Hatsmaster | Private Label Hat Supplier | Private Label Hat Supplier for Fashion Brands – Hatsmaster | Wholesale Cap Factory | Bulk Custom Hats for Global Buyers | Headwear Manufacturer | Headwear Manufacturer for Brands & Retailers – Trusted Worldwide | Snapback Hat Factory | Flat Brim Caps for Urban Brands | Beanie Manufacturer | Custom Knit Hats for Cold-Weather Brands',
  keywords: [
    "Bangladesh headwear manufacturer",
    "custom caps supplier Bangladesh",
    "private label hat manufacturer",
    "custom snapbacks exporter",
    "baseball cap sourcing agent",
    "bucket hat manufacturer Bangladesh",
    "beanie hats exporter",
    "custom embroidery caps Bangladesh",
    "fashion headwear supplier",
    "promotional caps manufacturer",
  ].join(", "),
  openGraph: {
    title: 'Hats Master – Premium Headwear for All Styles',
    description: 'Explore our high-quality collection of hats and caps designed for comfort and fashion.',
    url: 'https://hatsmaster.com',
    siteName: 'Hats Master',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hats Master OG Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hats Master | Stylish Hats & Caps Online',
    description: 'Shop stylish snapbacks, bucket hats, and beanies. Premium quality. Fast delivery.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://hatsmaster.com'),
};


// export const metadata: Metadata = {
//   title: "Custom Cap Manufacturer | Quality Headwear Production – Hatsmaster",
//   description: "Custom Cap Manufacturer | Quality Headwear Production – Hatsmaster | Custom Hats Wholesale | Bulk Cap Production – Hatsmaster | Private Label Hat Supplier | Private Label Hat Supplier for Fashion Brands – Hatsmaster | Wholesale Cap Factory | Bulk Custom Hats for Global Buyers | Headwear Manufacturer | Headwear Manufacturer for Brands & Retailers – Trusted Worldwide | Snapback Hat Factory | Flat Brim Caps for Urban Brands | Beanie Manufacturer | Custom Knit Hats for Cold-Weather Brands"
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className='dark:bg-white dark:text-black min-h-screen mb-24  md:px-0  mx-auto '>
          {children}
        </div>
        {/* <Footer /> */}
        <NewFooter />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
