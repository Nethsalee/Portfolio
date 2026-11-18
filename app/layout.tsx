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

// Set the saved/system theme before first paint. Storage failure falls back to the system setting.
const themeScript = `(()=>{let t;try{t=localStorage.getItem('portfolio-theme')}catch{}document.documentElement.dataset.theme=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><a className="skip-link" href="#main-content">{content.footer.skip}</a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
