import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairfield Charity Organization - Justice Begins Where Inequality Ends",
  description: "We're building a world where everyone has the power to shape their lives. Join us in making a lasting impact today.",
  openGraph: {
    title: "Fairfield Charity Organization",
    description: "Justice Begins Where Inequality Ends. Join us in making a lasting impact.",
    url: "https://fairfieldcharity.org",
    siteName: "Fairfield Charity",
    images: [
      {
        url: "https://fairfieldcharity.org/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfield Charity Organization",
    description: "Justice Begins Where Inequality Ends.",
    images: ["https://fairfieldcharity.org/og-image.jpg"],
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
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
