import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
    title: "Nethsalee Samarawickrama | Portfolio",
    description: "Information Systems undergraduate exploring the connections between people, processes, and technology. Selected projects, skills, and a little about me.",
    authors: [{ name: "Nethsalee Samarawickrama" }],
    openGraph: { type: "website", locale: "en_US", title: "Nethsalee Samarawickrama | Portfolio", description: "Thoughtful ideas. Practical solutions. Explore my projects and approach." },
};
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>; }
