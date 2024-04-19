import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Studio - Upscale Gear Co",
  description: "content management page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
