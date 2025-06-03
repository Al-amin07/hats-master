import ContactForm from '@/components/ContactForm'
// import ContactInfo from '@/components/ContactInfo'
import FAQSection from '@/components/FaqSection'
import React from 'react'
export const metadata = {
  title: 'Contact Us | Get in Touch with Our Headwear Sourcing Experts',
  description:
    'Have questions about sourcing caps and accessories? Contact our team to discuss bulk orders, customization, or partnerships. We respond promptly to all international sourcing inquiries.',
  keywords: [
    'contact cap supplier',
    'sourcing agent contact',
    'global hat manufacturer',
    'reach sourcing partner',
    'OEM headwear inquiry'
  ]
};
const details = [
  {
    name: "Phone",
    desc: "+8801611-247183",
  },

  {
    name: "Email",
    desc: "info.hatsmaster@gmail.com",
  },
  {
    name: "Our Address",
    desc: "House- 10, Road- 12, Sector- 04, Uttara, Dhaka, Bangladesh.",
  },
];
export default function ContactPage() {
  return (
    <div className='mt-28 space-y-16  '>
      <div className=' max-w-3xl mx-auto'>

        <h2 className="text-4xl text-center   uppercase  mb-8">how can we help you?</h2>
      </div>

      <div className='flex flex-col md:flex-row items-center '>
        <div className='bg-[#F6EFE4] max-w-lg p-8 md:p-12 lg:p-24 '>
          <h2 className='text-4xl font-semibold mb-6'>Get in Touch</h2>
          <div>
            {
              details.map((el, ind: number) => <div key={ind} className="mb-5">
                <h3 className="font-semibold text-xl text-gray-800 mb-1">{el.name} : </h3>
                <p className=" text-gray-600 text-lg leading-relaxed">
                  {el.desc}
                </p>
              </div>)
            }
          </div>
        </div>
        <ContactForm />
      </div>
      <div className='px-5 mt-12 space-y-16 container md:px-8 lg:px-16 mx-auto'>
        <FAQSection />
        {/* <ContactInfo /> */}
      </div>
    </div>
  )
}
