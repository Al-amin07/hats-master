import { unslugify } from "@/service/slug";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { ICap } from "@/type/cap.type";
import { capDatas } from "@/static/cap.data";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type Props = {
  params: Promise<{ title: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = unslugify((await params).title);
  const product = capDatas.find((el) => el.name === name);
  return {
    title: `${product?.title} | Hats Master`,
    description: `${product?.description} | ${product?.description2} | Hats Master`,
    keywords: `${product?.name}, ${product?.title}, custom hats, premium caps, hats supplier`,

  };
}

const accordian = [
  {
    question: "MINIMUM ORDER QUANTITY: 570 PIECES",
    answer:
      "Our standard MOQ is 3,000 pieces per color/design, but for small headwear brands, we’re flexible—starting as low as 570 pieces. Packed 24 per inner carton, 6 inners per master (144 pieces total). Don’t let MOQ stop you—let’s make it work.",
  },
  {
    question: "LEAD TIME: 30-45 DAYS",
    answer:
      "Lead times can vary, so if you're on a tight deadline or need exact dates, your sales representative is just a message away. We're here to help.",
  },
  {
    question: "DAILY PRODUCTION CAPACITY: 5K PIECES/DAY",
    answer:
      "With a production capacity of 3,000 to 5,000 pieces per day, we’re ready to handle small and large headwear orders alike.",
  },
];

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const title = unslugify((await params).title);
  const cap = capDatas?.find((el) => el.name === title) as ICap;
  console.log({ title });
  return (
    <div className=" mt-20 ">
      <div
        className={`container p-6 md:p-8 lg:p-12 mx-auto flex flex-col ${cap.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-start gap-6 `}
      >
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl pb-5 border-b border-gray-500 md:text-xl uppercase font-bold text-gray-900 mb-4">
            {cap?.title}
          </h2>
          <p className="text-gray-700 mb-4 ">{cap?.description2}</p>

          <Accordion type="single" collapsible className="w-full">
            {accordian?.map((el) => (
              <AccordionItem key={el.question} value={el.question}>
                <AccordionTrigger className="cursor-pointer">
                  {el.question}
                </AccordionTrigger>
                <AccordionContent>{el.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Link href="/contact">
            <button className="mt-4 bg-black border border-black text-white cursor-pointer px-5 py-1.5 hover:bg-transparent text-sm hover:text-black  transition-all duration-500">
              GET A QUOTE/ REQUEST SAMPLES
            </button>
          </Link>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <Image
            src={cap.image2 as string | StaticImageData}
            alt="Baseball cap manufacturers in Bangladesh"
            className=" border rounded-sm min-h-[400px] max-h-[700px] w-full object-fill"
            height={800}
            width={700}
          />
        </div>
      </div>
      <div>
        <div className="container p-6 md:p-8 lg:px-16 mx-auto flex flex-col items-start gap-6">
          <h2 className="text-2xl pb-5 border-b border-gray-500 md:text-xl uppercase font-bold text-gray-900 mb-4">
            {cap?.name} Features
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {cap?.features?.map((feature, index) => (
              <li key={index} className="text-gray-700">
                <strong>{feature.heading} : </strong> {feature.content}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-3">{cap?.featuresDetails}</p>
        </div>
      </div>
    </div>
  );
}
