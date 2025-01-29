import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from '../components/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apollo",
  description:"Software development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white`}
      >
        {/* Dotted Background */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] 
          [background-size:16px_16px] opacity-40 z-[-1]">
        </div>

        {/* Page Content */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
