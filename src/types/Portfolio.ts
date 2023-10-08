import { StaticImageData } from "next/image";

import { PortableTextBlock } from "sanity";

export type Portfolio = {
  _id: number;
  _createdAt?: Date;
  name: string;
  category?: string;
  image: StaticImageData;
  content?: PortableTextBlock[];
  slug?: string;
};
