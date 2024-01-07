import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="title" content="习惯养成器" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="习惯养成器,打卡养成好习惯" />

        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-512x512.png"
          sizes="512x512"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="习惯养成器" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="App Title" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="application-name" content="习惯养成器" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/icon-192x192.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
