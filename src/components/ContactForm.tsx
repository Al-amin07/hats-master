/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

// import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
//       const [state, setState] = useState({
//     "id-b02": "",
//   })

//   const handleChange = (evt: React.FormEvent<HTMLFormElement>) => {
//     const value = evt.target.value
//     setState({
//       ...state,
//       [evt.target.name]: value,
//     })
//   }
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const toastId = toast.loading('Sending email....')
  const form = e.currentTarget
  const name = form.fullname.value || ''
  const email = form.email.value || ''
  const phone = form.phone.value || ''
  const comment = form.comment.value || ''
    console.table({name, email, phone, comment})
    await new Promise(resolve => setTimeout(resolve,  2000));
  // your logic here
  try {
    toast.success('Email send successfully. wait for response', {id: toastId})
  } catch (error: any) {
    toast.error(error?.message || 'Failed to send email', {id: toastId})
    console.log(error)
  }
};
  return (
    <section className=" py-16 max-w-3xl 
     mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Contact</h2>

      <form onSubmit={handleForm} className="space-y-6">
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            className="flex-1 border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="flex-1 border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          className="w-full border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Comment */}
        <textarea
          rows={5}
          name="comment"
          placeholder="Comment" required
          className="w-full border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
              {/* <div className="relative border-2 my-6">
        <input
          id="id-b02"
          type="text"
          name="id-b02"
          placeholder="your name"
          value={state["id-b02"]}
          className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-b02"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Your name
        </label>
      </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black cursor-pointer text-white px-8 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Send
        </button>
      </form>

    </section>
  );
}
