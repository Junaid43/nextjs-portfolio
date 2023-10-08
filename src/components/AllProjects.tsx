import Image from "next/image";
import React from "react";

import { PortableText } from "@portabletext/react";
import { getPortfolios } from "../../sanity/sanity-utils";
import Link from "next/link";

export default async function AllProjects() {
  const newPortfolio = await getPortfolios();

  return (
    <>
      <section id="projects" className="section ">
        <div className="max-w-7xl mx-auto">
          <h2 className="pb-2 bold font-bold uppercase text-center">
            Portfolio
          </h2>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 max-w-7xl mx-auto">
          {newPortfolio.map((portfolio) => (
            <div
              className="px-4 py-4 bg-white shadow-lg rounded-lg overflow-hidden"
              key={portfolio._id}
            >
              <div
                className=" max-w-lg max-h-96 overflow-hidden object-top hover:object-bottom"
                key={portfolio._id}
              >
                <Image
                  src={portfolio.image}
                  alt={portfolio.name}
                  width={500}
                  height={500}
                ></Image>
              </div>
              <div key={portfolio._id} className="p-6">
                <h4
                  key={portfolio._id}
                  className="text-black text-2xl font-semibold"
                >
                  {portfolio.name}
                </h4>
                <p key={portfolio._id}>
                  <PortableText value={portfolio.content || []} />
                </p>

                <div className="mt-5">
                  <Link
                    key={portfolio._id}
                    href={`/portfolios/${portfolio.slug}`}
                    className="btn-black"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
