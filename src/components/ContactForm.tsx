import React from "react";

export const ContactForm = () => {
  return (
    <section id="contact" className="section">
      <div className="flex items-center justify-center flex-col">
        <h2 className="center">Contact Us</h2>
        <span className="text-base uppercase font-bold">Get in Touch</span>
      </div>

      <div className="max-w-5xl mx-auto py-10">
        <form action="https://formspree.io/f/mnqygbqz" method="post">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              required
              name="fname"
              className="p-2 bg-transparent border-2 border-yellow-400 focus:outline-none text-black"
            ></input>

            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              className="p-2 bg-transparent border-2 border-yellow-400 focus:outline-none text-black"
            ></input>
          </div>

          <div className="mt-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="p-2 w-full bg-transparent border-2 border-yellow-400 focus:outline-none text-black"
            ></input>
          </div>

          <div className="mt-5">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-2 w-full bg-transparent border-2 border-yellow-400 focus:outline-none text-black"
            ></input>
          </div>

          <div className="mt-5">
            <textarea
              name="Your Message"
              required
              cols={30}
              rows={6}
              placeholder="Your Message"
              className="p-2 w-full bg-transparent border-2 border-yellow-400 focus:outline-none text-black"
            ></textarea>
          </div>

          <button type="submit" className="btn-black mx-auto block mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
