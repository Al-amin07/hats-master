import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Custom Cap Manufacturer | Quality Headwear Production – Hatsmaster",
  description: "Custom Cap Manufacturer | Quality Headwear Production – Hatsmaster | Custom Hats Wholesale | Bulk Cap Production – Hatsmaster | Private Label Hat Supplier | Private Label Hat Supplier for Fashion Brands – Hatsmaster | Wholesale Cap Factory | Bulk Custom Hats for Global Buyers | Headwear Manufacturer | Headwear Manufacturer for Brands & Retailers – Trusted Worldwide | Snapback Hat Factory | Flat Brim Caps for Urban Brands | Beanie Manufacturer | Custom Knit Hats for Cold-Weather Brands"
};

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
