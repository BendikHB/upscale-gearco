import Form from "@/components/Form";
import { getPage } from "@/sanity/sanity-utils";

export default async function Home() {
  const homePage = await getPage("/");

  return (
    <div className="max-w-5xl mx-auto py-20 flex flex-col items-center justify-center h-screen">
      {homePage && (
        <h1 className="text-5xl font-bold text-center">{homePage.title}</h1>
      )}
      <div className="w-fit">
        <div className="text-2xl text-center mb-8">{homePage.formTitle}</div>
        <Form />
      </div>
    </div>
  );
}
