import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bricolage, caveat } from "./fonts";

export const metadata: Metadata = {
  title: "Tife Olatunji | TifeLogs",
  description:
    "Weekly vlogs, my training plan, runs and projects. Based in Toronto.",
};

export const viewport: Viewport = { themeColor: "#691a96" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${caveat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
