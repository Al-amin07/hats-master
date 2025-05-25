import { StaticImageData } from "next/image";

export interface ICap {
    id: number
    name: string
    title: string;
    description: string
    image: string | StaticImageData
    features: {heading: string, content: string}[]
}