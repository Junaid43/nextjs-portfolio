import { StaticImageData } from "next/image";

import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: number;
  _createdAt?: Date;
  name: string;
  category?: string;
  content?: PortableTextBlock[];
  slug?: string;
};
