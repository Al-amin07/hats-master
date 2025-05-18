import { Playfair_Display, Rajdhani } from "next/font/google";

export const playDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // customize as needed
  variable: "--font-poppins",
  display: "swap",
});
export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: choose weights you need
  variable: "--font-rajdhani", // optional for Tailwind integration
});
