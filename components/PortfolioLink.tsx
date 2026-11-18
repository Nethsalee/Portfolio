import { ArrowUpRight } from "lucide-react";
import type { PortfolioLink as LinkData } from "@/content";

// A missing URL is an explicit, non-interactive placeholder, never a dead link.
export default function PortfolioLink({ link, placeholder }: { link: LinkData; placeholder: string }) {
  if (!link.href) {
    return <span className="placeholder-link"><span>{link.label}</span><small>{placeholder}</small></span>;
  }
  return <a className="external-link" href={link.href} target="_blank" rel="noopener noreferrer">
    {link.label}<ArrowUpRight size={15} aria-hidden="true" />
  </a>;
}
