import BackgroundVideoEmbed from "@/components/BackgroundVideoEmbed";
import Form from "@/components/Form";
import PasswordProtect from "@/components/PasswordProtect";
import { getPage } from "@/sanity/sanity-utils";
import { cookies } from "next/headers";
import Image from "next/image";
import GearOutline from "../../public/logo/UP-gear-outline-white-v2.png";
import IGwhite from "@/public/icons/IG-white";
import Link from "next/link";

export default async function Home() {
  const cookieStore = cookies();
  const loginCookies = cookieStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = !!loginCookies?.value;
  const homePage = await getPage("/");

  if (!isLoggedIn) {
    return (
      <div className="max-w-5xl mx-auto py-20 flex flex-col items-center justify-center h-screen">
        <BackgroundVideoEmbed
          embed={homePage.videoEmbed}
          title={homePage.videoEmbedTitle}
        />
        <h1 className="text-5xl font-bold text-center">{homePage.title}</h1>
        <div className="text-xl text-center font-Prototype">
          {homePage.intro}
        </div>
        <Image
          src={GearOutline}
          alt="upscale gear outline"
          width={315}
          height={51}
          className="mt-4 mb-16"
        />

        <div className="w-fit text-center">
          <PasswordProtect />
          <Form title={homePage.formTitle} />
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto py-20 flex flex-col items-center justify-center h-screen">
      <BackgroundVideoEmbed
        embed={homePage.videoEmbed}
        title={homePage.videoEmbedTitle}
      />
      <h1 className="text-4xl font-bold text-center">Logged in</h1>
    </div>
  );
}
