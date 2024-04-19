import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <>
      {page && (
        <div>
          <h1 className="text-5xl">{page.title}</h1>

          <div>
            <PortableText value={page.content} />
          </div>
        </div>
      )}
    </>
  );
}
