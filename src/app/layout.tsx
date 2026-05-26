import type { Metadata } from "next";
import "./globals.css";
import { Inter, Caprasimo } from "next/font/google";
import clsx from "clsx";
import ThemeProvider from "./components/context/ThemeProvider/ThemeProvider";
import Nav from "./components/sections/Navigation/Nav/Nav";
import Footer from "./components/sections/Footer/Footer";

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
      <ThemeProvider>
        <body
          className={clsx(
            "flex flex-col min-h-screen",
            "bg-slate-100 transition-colors duration-500",
            "dark:bg-dark-app-bg",
          )}
        >
          <Nav />
          <main
            className={clsx(
              "flex-1 px-6 py-8",
              "sm:px-10 md:px-12",
              "lg:px-14 xl:px-16 2xl:px-20",
              "3xl:px-40 3xl:py-20",
            )}
          >
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
