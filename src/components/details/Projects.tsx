import Image from "next/image";
import React from "react";

import { PortableText } from "@portabletext/react";

import { getPortfolios } from "../../../sanity/sanity-utils";

export default async function Projects() {
  const newPortfolio = await getPortfolios();

  const firstThreePortfolios = newPortfolio.filter(
    (portfolio, index) => index < 3
  );

  return (
    <>
      <section id="projects">
        <h2 className="pb-2 bold font-bold uppercase">Projects</h2>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
          {firstThreePortfolios.map((portfolio) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
