import BackgroundVideoEmbed from "@/components/BackgroundVideoEmbed";
import Form from "@/components/Form";
import PasswordProtect from "@/components/PasswordProtect";
import { getPage } from "@/sanity/sanity-utils";

export default async function Home() {
  const homePage = await getPage("/");

  return (
    <div className="max-w-5xl mx-auto py-20 flex flex-col items-center justify-center h-screen">
      <BackgroundVideoEmbed
        embed={homePage.videoEmbed}
        title={homePage.videoEmbedTitle}
      />
      <h1 className="text-4xl font-bold text-center">{homePage.title}</h1>
      <div className="text-2xl text-center mb-8">{homePage.intro}</div>
      <div className="w-fit text-center">
        <PasswordProtect />
        <Form title={homePage.formTitle} />
      </div>
    </div>
  );
}
