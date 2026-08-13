import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/*
  The Figma file mixes four families, one of which ("Nimbus Sans") is Figma's
  fallback for a font that failed to load on the designer's machine — it shows up
  on body copy that elsewhere uses Inter. We normalise to the three real ones.
*/
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CessCare | Know Your Health Before It Becomes a Problem",
  description:
    "CessCare combines precision AI data with human-centric habits to help you navigate your well-being with clarity and intelligence.",
  openGraph: {
    title: "CessCare | Precision Health Intelligence",
    description:
      "A single, unified metric derived from thousands of data points across five critical health pillars.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        {/*
          Marks the document as JS-capable before first paint. Scroll-reveal
          styles are scoped to `.js`, so if this never runs — JS disabled, a
          script error, an old browser — every section stays visible instead of
          the page rendering blank below the fold. Inline and synchronous on
          purpose: a deferred script would cause a flash of visible content.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
