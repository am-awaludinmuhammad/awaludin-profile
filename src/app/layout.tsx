import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <title>Portfolio | Awaludin</title>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />

        <main className="flex-1 w-full pt-6">
          {children}
        </main>
      </body>
    </html>
  );
}