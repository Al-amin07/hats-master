/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { toast } from "sonner";
// import { Resend } from "resend";
// import { ContactEmail } from "./ContactMail";
import React from "react";

export default function ContactForm() {
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // const resend = new Resend("re_XzC1ARAP_NejCmi2aYAKZ5mdKm7jFsVLz");

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Sending email....");
    const form = e.currentTarget;
    const name = form.fullname.value || "";
    const email = form.email.value || "";
    const phone = form.phone.value || "";
    const comment = form.comment.value || "";
    console.table({ name, email, phone, comment });
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // your logic here
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, comment }),
      });
      console.log({ result });
      if (result?.ok) {
        toast.success("Email send successfully. wait for response", {
          id: toastId,
        });
      } else {
        toast.error("Failed to send email", { id: toastId });
      }
      form.reset();
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <section
      className="  max-w-3xl 
     mx-auto"
    >
      <form onSubmit={handleForm} className="space-y-6">
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            required
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
          required
          className="w-full border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Comment */}
        <textarea
          rows={5}
          name="comment"
          placeholder="Comment"
          required
          className="w-full border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
        <button
          type="submit"
          className="bg-black hover:bg-white hover:text-black cursor-pointer text-white px-8 py-2 rounded-full  transition-all duration-500 border border-transparent hover:border-black"
        >
          Send
        </button>
      </form>
    </section>
  );
}
