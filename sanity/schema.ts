import { type SchemaTypeDefinition } from "sanity";
import portfolio from "./schema/portfolio-schema";
import blog from "./schema/blog-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, portfolio],
};
