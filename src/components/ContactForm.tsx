/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { toast } from "sonner";
import React from "react";

export default function ContactForm() {

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Sending email....");
    const form = e.currentTarget;
    const name = form.fullname.value || "";
    const email = form.email.value || "";
    const phone = form.phone.value || "";
    const comment = form.comment.value || "";

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
      className="  flex-1 max-w-2xl 
     mx-auto p-12"
    >
      <form onSubmit={handleForm} className="space-y-6">
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            required
            className="flex-1 border border-gray-300 px-3 py-1.5placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="flex-1 border border-gray-300 px-3 py-1.5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          required
          className="w-full border border-gray-300 px-3 py-1.5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="bg-black w-full hover:bg-white hover:text-black cursor-pointer text-white px-8 py-1.5   transition-all duration-500 border border-transparent hover:border-black"
        >
          Send
        </button>
      </form>
    </section>
  );
}
