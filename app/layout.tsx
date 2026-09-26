import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nethsalee Samarawickrama | Project Manager & Full-Stack Developer",
  description: "Information Systems undergraduate with full-stack development background, seeking Project Manager Intern role. Skilled in MERN stack, project coordination, and technology-driven solutions.",
  keywords: ["Project Manager", "Full-Stack Developer", "Information Systems", "MERN Stack", "Sri Lanka"],
  authors: [{ name: "Nethsalee Samarawickrama" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nethsalee Samarawickrama | Project Manager & Full-Stack Developer",
    description: "Information Systems undergraduate with full-stack development background",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
