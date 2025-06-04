import ContactForm from '@/components/ContactForm'
// import ContactInfo from '@/components/ContactInfo'
import FAQSection from '@/components/FaqSection'
import GetInTouch from '@/components/GetInTouch';
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

export default function ContactPage() {
  return (
    <div className='mt-28 space-y-16  '>


      <div className='flex flex-col md:flex-row  '>
        <GetInTouch />
        <ContactForm />
      </div>
      <div className='px-5 mt-12 space-y-16 container md:px-8 lg:px-16 mx-auto'>
        <FAQSection />
        {/* <ContactInfo /> */}
      </div>
    </div>
  )
}
