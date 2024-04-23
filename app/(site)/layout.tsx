import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Image from "next/image";
import Logo from "../../public/logo/upscale-logo.png";
import IGwhite from "@/public/icons/IG-white";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upscale Gear Co",
  description: "Upscale gear to wear",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="text-white bg-dark">
        <header className="flex justify-center pt-20 mx-auto fixed inset-x-0 top-0">
          {/* <Link href={"/"} className="">
            <Image src={Logo} alt="Upscale Logo" width={250} height={65} />
          </Link> */}
        </header>
        <main>{children}</main>
        <footer className="flex justify-between md:max-w-lg lg:max-w-md 2xl:max-w-2xl mx-auto text-center py-4 px-4 absolute inset-x-0 bottom-0">
          <div className="text-sm sm:text-base">
            ©copyright paper route inc, est. 23
          </div>
          <Link
            href={"https://www.instagram.com/upscalegearco"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IGwhite width={25} height={25} fill={"#fff"} />
          </Link>
        </footer>
      </body>
    </html>
  );
}
