import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
