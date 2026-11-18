import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { content } from "@/content";
import { MotionProvider } from "@/components/Reveal";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  authors: [{ name: content.person.name }],
  openGraph: {
    type: "website",
    title: content.metadata.title,
    description: content.metadata.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable}`}>
      <body><a className="skip-link" href="#main-content">{content.footer.skip}</a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
