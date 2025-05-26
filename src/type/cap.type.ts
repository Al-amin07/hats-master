import { StaticImageData } from "next/image";

export interface ICap {
  id: number;
  name: string;
  title: string;
  description: string;
  description2: string;
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  features: { heading: string; content: string }[];
  featuresDetails: string;
}
