const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "formTitle",
      title: "Form Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "VideoEmbed",
      name: "videoEmbed",
      type: "url",
    },
    {
      title: "VideoEmbedTitle",
      name: "videoEmbedTitle",
      type: "string",
    },
  ],
};

export default page;
