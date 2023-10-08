"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function SidebarMenu({
  href,
  children,
}: {
  href: any;
  children: any;
}) {
  let segment = useSelectedLayoutSegments();

  let active = href === `/${segment}`;

  return (
    <>
      <Link
        href={href}
        className={active ? "bg-blue text-white px-4 py-4 " : "px-4 py-4"}
      >
        {children}
      </Link>
    </>
  );
}
