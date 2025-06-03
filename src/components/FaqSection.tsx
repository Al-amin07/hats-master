// components/FAQSection.tsx

// import { faqs } from '@/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const hatsmasterFAQs = [
  {
    question: "What makes Hatsmaster different from other headwear manufacturers?",
    answer: "We blend world-class craftsmanship with modern manufacturing; delivering custom headwear that reflects your brand’s identity, quality, and story."
  },
  {
    question: "What types of headwear do you produce?",
    answer: "From streetwear snapbacks to luxury felt hats, we produce a wide range of styles, custom-designed for fashion labels, sports brands, and lifestyle retailers."
  },
  {
    question: "Do you support low-volume or specialty runs?",
    answer: "Yes. Whether you're launching a capsule collection or testing a new design, we offer flexible MOQs with no minimums; built to grow with your brand."
  },
  {
    question: "What is your production capacity and scalability?",
    answer: "We produce up to 5,000 units per day and can scale by 30% for blank or solid styles ideal for fast-moving campaigns and high-volume launches."
  },
  {
    question: "Can you develop exclusive designs and private label collections?",
    answer: "Absolutely. We specialize in private label development from concept to packaging, crafted to meet the highest standards of global fashion brands."
  },
  {
    question: "How does Hatsmaster ensure premium quality?",
    answer: "Every piece is inspected by skilled hands and guided by global compliance standards. We don’t just meet expectations; we aim to exceed them."
  },
  {
    question: "Where are your products made?",
    answer: "All Hatsmaster products are proudly made in Bangladesh at the heart of the world’s most trusted apparel sourcing hub."
  },
  {
    question: "What is your typical turnaround time for production?",
    answer: "Standard production takes 3–6 weeks, depending on complexity. Urgent orders? We offer fast-track solutions without compromising quality."
  },
  {
    question: "How do I submit my tech pack or artwork?",
    answer: "You can send your tech packs, logos, or inspiration files directly via email. Our product team will translate your vision into production-ready reality."
  },
  {
    question: "How do I start working with Hatsmaster?",
    answer: "Just drop us a message. Our team will guide you from first sketch to final shipment; every step aligned with your brand’s goals and global standards."
  }
];

export default function FAQSection() {



  return (
    <div>
      <section className=" container mx-auto ">
        <h2 className="text-2xl mb-8 md:text-3xl font-serif text-center ">
          Frequently Asked Questions [FAQs]

        </h2>

        {/* <div className=" divide-y divide-gray-200">
          {hatsmasterFAQs.map((faq, index) => (
            <div
              key={index}
              className={`${(index + 1) % 3 === 0 ? 'bg-[#d7e6e4]' : (index + 1) % 2 === 0 ? 'bg-white' : 'bg-[#f6efe4]'} transition px-6 md:px-16 lg:px-28 py-8 `}
            // className={`${index % 2 === 0 ? 'bg-[#f6efe4]' : 'bg-white'} transition`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left cursor-pointer flex justify-between items-center font-medium"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className=" pb-6 mt-2.5 text-sm text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div> */}
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto"
          defaultValue="item-1"
        >
          {
            hatsmasterFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))
          }

        </Accordion>
      </section>
    </div>
  );
}
