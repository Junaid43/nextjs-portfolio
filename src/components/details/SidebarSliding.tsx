"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function SidebarSliding() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="fixed top-4 right-4 z-49 p-2 bg-white text-black border-black sm:bg-black sm:text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
      </button>
      <aside
        className={`fixed top-0 left-0 h-screen w-full bg-black shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="fixed top-4 right-4 z-50 rounded-md p-2 text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
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
            href="/projects"
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
        </nav>
      </aside>
    </>
  );
}

export default SidebarSliding;
