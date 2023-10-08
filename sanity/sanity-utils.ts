import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./env";

import { Portfolio } from "@/types/Portfolio";

import { Blog } from "@/types/Blog";

export async function getPortfolios(): Promise<Portfolio[]> {
  const client = createClient({ apiVersion, dataset, projectId, useCdn });

  return client.fetch(
    groq`*[_type=="portfolio"]{
        _id,
        _createdAt,
        name,
        category,
        content,
        "slug":slug.current,
        "image":image.asset->url,
        url,
    }`
  );
}

export async function getPortfolio(slug: string): Promise<Portfolio> {
  const client = createClient({ apiVersion, dataset, projectId, useCdn });

  return client.fetch(
    groq`*[_type=="portfolio" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        category,
        content,
        "slug":slug.current,
        "image":image.asset->url,
        url,
     
    }`,
    { slug }
  );
}

// export async function getBlogs(): Promise<Blog[]> {
//   const client = createClient({ apiVersion, dataset, projectId, useCdn });

//   return client.fetch(
//     groq`*[_type=="blog"]{
//         _id,
//         _createdAt,
//         name,
//         category,
//         "slug":slug.current,
//         content
//     }`
//   );
// }
