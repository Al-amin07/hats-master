// components/FAQSection.tsx
'use client';
import { useState } from 'react';
// import { faqs } from '@/data/faqs';
import { ChevronDown } from 'lucide-react'; // Optional icon
// data/faqs.ts
const faqs = [
  {
    question: 'What does Dhaka Hats & Caps specialize in?',
    answer:
      'Dhaka Hats & Caps is a leading manufacturer in Bangladesh specializing in custom headwear, hats, and caps. We offer high-quality production services including cutting, printing, and embroidery.',
  },
  {
    question: 'What is your production capacity?',
    answer:
      'We have a production capacity of 10,000 pieces per day for caps and headwear. This capacity can be expanded by 30% for blank or solid products.',
  },
  {
    question: 'Do you have any minimum order requirements?',
    answer:
      'No, we offer flexible order quantities with no minimum requirement. You can order any quantity per design.',
  },
  {
    question: 'What is your production lead time?',
    answer:
      'For caps and headwear, our production lead time is typically 35 to 45 days, depending on the order quantity.',
  },
  {
    question: 'How can I send my design specifications?',
    answer:
      'You may email us or call us directly using the number provided above. You can provide design details, fabric specifications, and even physical samples or custom label artwork. We work closely with clients to develop new concepts and ensure your vision is realized.',
  },
  {
    question: 'Where can I find more information about your services?',
    answer:
      'For more details about our services, capabilities, and to discuss your specific requirements, please contact us directly at sales@dhcaps.com',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div>
      <section className="bg-[#d7e6e4] max-w-5xl mx-auto ">
      <h2 className="text-2xl py-16 md:text-3xl font-serif text-center ">
        Frequently asked questions
      </h2>

      <div className=" divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${(index + 1)  % 3 === 0 ? 'bg-[#d7e6e4]' : (index + 1) % 2 === 0 ? 'bg-white' : 'bg-[#f6efe4]'} transition px-6 md:px-16 lg:px-28 py-8 `}
            // className={`${index % 2 === 0 ? 'bg-[#f6efe4]' : 'bg-white'} transition`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left cursor-pointer flex justify-between items-center font-medium"
            >
              <span>{faq.question }</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className=" pb-6 mt-3 text-sm text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  </div>
  );
}
