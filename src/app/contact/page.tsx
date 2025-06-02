import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
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

export default function ContactPage() {
  return (
    <div className='mt-28 space-y-16 container px-5 md:px-8 lg:px-16 mx-auto'>
      <div className=' max-w-3xl mx-auto'>

        <h2 className="text-4xl    uppercase  mb-8">how can we help you?</h2>
      </div>

      <ContactForm />
      <FAQSection />
      <ContactInfo />
    </div>
  )
}
