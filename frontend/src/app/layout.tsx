import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LearnPath - Platform Pembelajaran Online",
    template: "%s | LearnPath",
  },
  description:
    "Platform pembelajaran online berbahasa Indonesia dengan learning path terstruktur untuk web development, mobile development, data science, dan lainnya.",
  keywords: [
    "belajar programming",
    "kursus online",
    "web development",
    "mobile development",
    "data science",
    "belajar coding",
    "sertifikat digital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
