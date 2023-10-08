"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import Image from "next/image";
import logo from "./../../public/jsol-tech.png";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  console.log(pathname);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <section className="px-5 sm:px-10 md:px-12 w-full fixed z-10">
      <div className="flex justify-between items-center flex-wrap">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={150}></Image>
        </Link>

        <button
          className={`z-10 ${
            pathname === "/detail" ? "text-black" : "text-white"
          }`}
          onClick={toggleSidebar}
        >
          {isOpen ? <IoMdClose size={40} /> : <IoMdMenu size={40} />}
        </button>

        <aside
          className={`fixed top-0 left-0 h-screen w-full bg-black shadow-lg transform transition-transform duration-300 z-5 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col justify-center h-full text-white items-center">
            <Link
              href="/"
              className="px-4 py-2 hover:underline text-3xl"
              onClick={closeSidebar}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 hover:underline text-3xl"
              onClick={closeSidebar}
            >
              About
            </Link>

            <Link
              href="/portfolios"
              className="px-4 py-2 hover:underline text-3xl"
              onClick={closeSidebar}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-3xl px-4 py-2 hover:underline"
              onClick={closeSidebar}
            >
              Contact
            </Link>

            <Link
              href="/detail"
              className="text-3xl px-4 py-2 hover:underline"
              onClick={closeSidebar}
            >
              CV
            </Link>
          </nav>
        </aside>
      </div>
    </section>
  );
};
