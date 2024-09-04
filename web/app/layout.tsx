import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "react-audio",
  description: "Documentation for the @clxrity/react-audio package.",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clxrity.github.io/react-audio",
    description: "Documentation for the @clxrity/react-audio package.",
    siteName: "@clxrityy/react-audio",
    title: "react-audio",
    images: [
      {
        url: "https://clxrity.github.io/react-audio/icon.png",
        width: 500,
        height: 500, 
        alt: "react-audio",
      }
    ],
    emails: [
      "contact@mjanglin.com"
    ]
  },
  keywords: [
    "react",
    "audio",
    "typescript",
    "wav",
    "mp3",
    "ogg",
    "media",
    "player",
    "music",
    "sound",
    "play",
    "pause",
    "stop",
    "volume",
    "seek",
    "progress",
    "time",
    "duration",
    "metadata",
    "loading",
    "error",
    "next",
    "api",
    "waveform",
    "waveform-api",
    "waveform-data",
    "waveform-image"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="theme-color" content="currentColor" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-row gap-5 h-screen">
          <Sidebar />
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
