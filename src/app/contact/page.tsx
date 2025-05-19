import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import FAQSection from '@/components/FaqSection'
import React from 'react'

export default function ContactPage() {
  return (
    <div className='mt-28 space-y-16 container mx-auto'>
        <ContactInfo />
        <ContactForm />
        <FAQSection />
    </div>
  )
}
