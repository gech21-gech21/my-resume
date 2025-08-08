import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer/page";
import Header from "./Header/page";

export const metadata: Metadata = {
  title: "Getahun - Portfolio",
  description: "Professional Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
