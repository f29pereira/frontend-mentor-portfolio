import type { Metadata } from "next";
import "./globals.css";
import { Inter, Caprasimo } from "next/font/google";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

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
      <body className="bg-slate-100 flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1 py-10 px-4 lg:py-14 xl:py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
