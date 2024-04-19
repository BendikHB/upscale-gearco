import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  intro: string;
  formTitle: string;
  content: PortableTextBlock[];
  videoEmbed: string;
  videoEmbedTitle: string;
};
