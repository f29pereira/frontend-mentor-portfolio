import type { Metadata } from "next";
import "./globals.css";
import { Inter, Caprasimo } from "next/font/google";
import Nav from "./components/Nav/Nav";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  variable: "--font-caprasimo",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Frontend Mentor Portfolio",
  description: "Frontend Mentor Challenges Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caprasimo.variable} ${inter.variable}`}>
      <body className="bg-slate-100">
        <Nav />
        {children}
      </body>
    </html>
  );
}
