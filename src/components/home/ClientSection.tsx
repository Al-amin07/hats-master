// "use client";
import Image from "next/image";
import clientImage from "@/assets/client.gif";
import Link from "next/link";
export default function ClientSection() {
  return (
    <section className="max-w-6xl  mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className=" pr-8">
        <h2 className="text-3xl md:text-[40px] font-extrabold leading-tight mb-6">
          HEADWEAR <br />
          STREET WEAR <br />
          BRANDS & MEDIA
        </h2>
        <p className="mb-4 text-gray-900">
          At HATSMASTER, we don’t just supply hats—we help shape the stories
          behind them. From classic silhouettes to modern streetwear, we
          collaborate with importers, apparel brands, and lifestyle companies to
          deliver custom headwear manufacturing with precision and soul.
        </p>
        <p className="mb-4 text-gray-900">
          As a trusted private label hat supplier, we blend heritage
          craftsmanship with smart sourcing—offering low MOQ, flexible
          production, and global shipping.
        </p>
        <p className="mb-6 text-gray-900">
          Whether you&apos;re launching a new label or scaling a range,
          HATSMASTER is your behind-the-scenes partner in premium cap and hat
          manufacturing—tailored, reliable, and always brand-focused.
        </p>

        <Link href={"/contact"}>
          <button className="px-8 py-3 cursor-pointer border-2 border-black text-lg text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
            GET STARTED
          </button>
        </Link>
      </div>

      {/* Right Content */}
      <div className=" ">
        <Image
          src={clientImage}
          alt="Deus Ex Machina"
          width={500}
          height={500}
          className="grayscale"
        />
      </div>
    </section>
  );
}
