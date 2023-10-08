import { ContactForm } from "@/components/ContactForm";
import React from "react";

export default function ContactUs() {
  return (
    <main>
      <section>
        <div className="bg-black min-h-[32rem] text-white flex justify-center items-center">
          <h1> Contact Us</h1>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
