const portfolio = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "Wordpress", value: "wordpress" },
          { title: "SEO", value: "seo" },
          { title: "Other", value: "other" },
        ],
      },
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hostpot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },

    {
      name: "url",
      title: "Url",
      type: "url",
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default portfolio;
