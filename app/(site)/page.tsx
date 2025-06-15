import BackgroundVideoEmbed from "@/components/BackgroundVideoEmbed";
import Form from "@/components/Form";
import PasswordProtect from "@/components/PasswordProtect";
import { getPage } from "@/sanity/sanity-utils";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const loginCookies = cookieStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = !!loginCookies?.value;
  const homePage = await getPage("/");

  // if (!isLoggedIn) {
  //   return (
  //     <div className="max-w-5xl mx-auto py-20 flex flex-col items-center justify-center h-dvh">
  //       <BackgroundVideoEmbed
  //         embed={homePage.videoEmbed}
  //         title={homePage.videoEmbedTitle}
  //       />
  //       {homePage.title && <h1 className="hidden">{homePage.title}</h1>}
  //       {homePage.intro && (
  //         <div className="text-xl text-center font-Prototype">
  //           {homePage.intro}
  //         </div>
  //       )}
  //       <div className="w-fit text-center z-10">
  //         <PasswordProtect />
  //         <Form title={homePage.formTitle} />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="max-w-5xl mx-auto py-20 flex flex-col items-center justify-center h-screen">
      <BackgroundVideoEmbed
        embed={homePage.videoEmbed}
        title={homePage.videoEmbedTitle}
      />
      <h1 className="text-4xl font-bold text-center">Welcome</h1>
      <a
        href="https://shop.upscalegear.store"
        className=" z-10 mt-4 px-2 py-2 text-white text-center font-bold font-Prototype text-xl xl:text-2xl border-2 border-white transition duration-200 hover:bg-dark hover:text-white w-1/4"
      >
        To the shop
      </a>
    </div>
  );
}
