// "use client";
import Image from "next/image";
import clientImage from '@/assets/client.gif'
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
          The Sauce work with FMCG’s, corporate and consumer brands,
          breweries, ad agencies and influences to produce customised
          merchandise for events and activations based on our clients
          specific brief.
        </p>
        <p className="mb-4 text-gray-900">
          We work with apparel brands and start-ups to develop and
          supply full apparel ranges and accessories.
        </p>
        <p className="mb-4 text-gray-900">
          At The Sauce we strongly believe that the quality and design
          of merchandise directly influences a customer&apos;s perception of
          your brand. Our business relationships are built on trust and
          our integrity to your brand. Our high standard of quality
          ensures your brand’s integrity.
        </p>
        <p className="mb-6 text-gray-900">
          We make sure you receive a unique and creative experience to
          suit your brand’s product needs and budgets, saving you
          valuable time and operating costs.
        </p>
        <button className="px-8  rounded-md py-3 cursor-pointer border-2 border-black text-lg text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
          GET STARTED
        </button>
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
