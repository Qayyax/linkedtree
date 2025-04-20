import type { Metadata } from "next";
import "./globals.css";
import { caveat } from "./fonts";

export const metadata: Metadata = {
  title: "Tife Linkedtree",
  description: "Link to my socials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.className} antialiased`}>{children}</body>
    </html>
  );
}
