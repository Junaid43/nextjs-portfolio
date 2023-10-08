import Link from "next/link";
import React, { useId } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const HomepageHeroSection = () => {
  return (
    <section
      id="hero-section"
      className="section flex items-center justify-center h-[400px] sm:h-[600px] md:h-[700px]  text-white bg-black text-center bg-hero-pattern bg-scroll bg-top bg-cover"
    >
      <div className="max-w-5xl">
        <h1 className="">I am Muhammad Junaid</h1>
        <span className="text-base uppercase font-bold">
          Web Developer & Designer
        </span>

        <Link
          href="/portfolios"
          className="btn-white group mt-5 flex items-center justify-center mx-auto w-60"
        >
          View Projects
          <IoMdArrowDropright
            size={30}
            className="group-hover:rotate-90 duration-500 "
          />
        </Link>
      </div>
    </section>
  );
};
