import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Image from "next/image";
import Logo from "../../public/logo/upscale-logo.png";

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
      <body className="bg-white text-white">
        <header className="flex justify-center pt-20 mx-auto fixed inset-x-0 top-0">
          <Link href={"/"} className="">
            <Image src={Logo} alt="Upscale Logo" width={250} height={65} />
          </Link>
        </header>
        <main>{children}</main>
        <footer>
          <div className="max-w-5xl mx-auto text-center py-4 absolute inset-x-0 bottom-0">
            ©copyright paper route inc, est. 23
          </div>
        </footer>
      </body>
    </html>
  );
}
