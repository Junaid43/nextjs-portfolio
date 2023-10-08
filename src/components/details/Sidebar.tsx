import Image from "next/image";
import React from "react";

import Envelope from "@/icons/envelope";
import Github from "@/icons/github";
import Linkedin from "@/icons/linkedin";
import Link from "next/link";

import profile from "../../../public/muhammad_junaid.jpg";
import SidebarMenu from "./SidebarMenu";
// import { Envelope, Linkedin, Github } from "./icons/index";

export default function Sidebar({ data }: { data: any }) {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col w-full content-between p-10 h-auto sm:justify-around sm:fixed sm:w-1/3 sm:h-screen md:h-screen">
      <div className="text-white flex flex-col items-center justify-center">
        <Image
          src={profile}
          alt="Muhammad Junaid"
          width={250}
          height={250}
          className="rounded-full h-full mb-6"
        />
        <h1 className="mb-2 text-5xl font-bold">{name}</h1>
        <h2 className="mb-8 text-2xl font-bold">{role}</h2>

        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
      </div>

      <div className="text-white text-center mb-4 mt-4">
        <h3 className="mb-3 uppercase text-bold">Contact Me</h3>

        <div className="flex flex-row justify-start gap-4 flex-wrap">
          <Link
            className="icon-sidebar"
            href={`mailto:${contactLinks?.[0]}`}
            target="_blank"
          >
            <Envelope />
            {contactLinks?.[0]}
          </Link>
          <Link
            className="icon-sidebar"
            href={contactLinks?.[1]}
            target="_blank"
          >
            <Linkedin />

            {contactLinks?.[1]}
          </Link>
          <Link
            className="icon-sidebar"
            href={contactLinks?.[2]}
            target="_blank"
          >
            <Github />

            {contactLinks?.[2]}
          </Link>
        </div>
      </div>
    </div>
  );
}
