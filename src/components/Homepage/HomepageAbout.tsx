import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";

import aboutimage from "../../../public/about-image.jpg";
import { skills } from "@/data/page-data";
import HomepageSkills from "./HomepageSkills";


export const HomepageAbout = ({ data }: { data: any }) => {
  const { title, body } = data;
  return (
    <>
      <section id="about" className="section">
        <div className="flex items-center justify-center flex-col">
          <h2 className="center">About Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 py-10 items-center max-w-7xl mx-auto gap-6">
          <div>
            <p className="pb-5"> {body}</p>
            <HomepageSkills data={skills} />
            {/* <Certification data={certification} /> */}
            <Link href="/about" className="btn-black mt-10">
              Learn More
            </Link>
          </div>

          <div>
            <Image
              src={aboutimage}
              width={800}
              height={500}
              alt="business man"
              className="shadow-[15px_15px_0px_0px_rgba(250,204,22,1)]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
