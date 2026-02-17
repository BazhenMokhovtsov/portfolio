import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Bazhen Mokhovtsov · Back-end developer",
  description: "Portfolio of Bazhen Mokhovtsov (Back-end developer). Projects and tech stack sourced from GitHub.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Bazhen Mokhovtsov · Back-end developer",
    description:
      "Portfolio of Bazhen Mokhovtsov (Back-end developer). Projects and tech stack sourced from GitHub.",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Bazhen Mokhovtsov portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bazhen Mokhovtsov · Back-end developer",
    description:
      "Portfolio of Bazhen Mokhovtsov (Back-end developer). Projects and tech stack sourced from GitHub.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-black dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
