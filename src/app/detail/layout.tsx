import "@/app/globals.css";
import { Header } from "@/components/Header";
import Sidebar from "@/components/details/Sidebar";
import SidebarMenu from "@/components/details/SidebarMenu";
import { personalData } from "@/data/page-data";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar data={personalData} />
      <section className="grow-full p-8 sm:p-16 w-full sm:w-2/3 ml-auto">
        {children}
      </section>
    </>
  );
}
