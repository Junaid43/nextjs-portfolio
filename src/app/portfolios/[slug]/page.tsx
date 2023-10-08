import Link from "next/link";
import { getPortfolio, getPortfolios } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const allportfolio = await getPortfolios();

  return allportfolio.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

export default async function Project({ params }: Props) {
  const portfolio = await getPortfolio(params.slug);
  return (
    <>
      <section>
        <div className="bg-black min-h-[32rem] text-white flex justify-center items-center">
          <h1> {portfolio.name}</h1>
        </div>
      </section>

      <section className="section">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-5 flex-wrap">
          <div>
            <Image
              src={portfolio.image}
              width={500}
              height={500}
              alt={portfolio.name}
            />
          </div>
          <div>
            <p className="py-5">
              <PortableText value={portfolio?.content || []} />
            </p>

            <Link href="/portfolios" className="btn-black mt-10">
              Back to Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
