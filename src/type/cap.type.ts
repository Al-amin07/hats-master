import { StaticImageData } from "next/image";

export interface ICap {
    id: number
    name: string
    title: string;
    description: string
    description2: string
    image: string | StaticImageData
    features: {heading: string, content: string}[]
}