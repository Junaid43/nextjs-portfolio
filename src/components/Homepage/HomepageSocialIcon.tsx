import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const HomepageSocialIcons = () => {
  return (
    <>
      <div>
        <div className="absolute sm:fixed -translate-x-24 w-36 hover:translate-x-0 duration-300 text-xl text-white bg-black top-[20vh] sm:top-[30vh] rounded-r-md py-3 px-3 left-0 ">
          <Link
            href="https://www.linkedin.com/in/wordpress-developer-seo-expert/"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            Linkedin
            <FaLinkedin size={25} />
          </Link>
        </div>
        <div className="absolute sm:fixed -translate-x-36 w-48 hover:translate-x-0 duration-300 text-xl text-white bg-black top-[30vh] sm:top-[40vh] rounded-r-md py-3 px-3 left-0 flex justify-center items-center gap-2">
          <Link
            href="https://github.com/Junaid43"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            Github Profile
            <FaGithub size={25} />
          </Link>
        </div>
        <div className="absolute sm:fixed -translate-x-28 w-40 hover:translate-x-0 duration-300 text-xl text-white bg-black top-[40vh] sm:top-[50vh] rounded-r-md py-3 px-3 left-0 flex justify-center items-center gap-2">
          <Link
            href="mailto:muhammad.junaid434@gmail.com"
            className="flex justify-center items-center gap-2"
          >
            Email Me
            <MdEmail size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};
