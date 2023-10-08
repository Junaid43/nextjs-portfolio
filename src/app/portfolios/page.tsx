import AllProjects from "@/components/AllProjects";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <section>
        <div className="bg-black min-h-[32rem] text-white flex justify-center items-center">
          <h1> Portfolios</h1>
        </div>
      </section>

      {/* @ts-ignore */}

      <AllProjects />
    </>
  );
}
