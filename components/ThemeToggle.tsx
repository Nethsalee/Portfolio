"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { content } from "@/content";

function getTheme() {
  return document.documentElement.dataset.theme === "dark";
}

// Follow system changes until the visitor explicitly chooses a theme.
function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const sync = () => {
    let preference: string | null = null;
    try { preference = localStorage.getItem("portfolio-theme"); } catch { /* Storage can be unavailable. */ }
    document.documentElement.dataset.theme = preference === "dark" || (!preference && media.matches) ? "dark" : "light";
    callback();
  };
  window.addEventListener("portfolio-theme", callback);
  window.addEventListener("storage", sync);
  media.addEventListener("change", sync);
  return () => {
    window.removeEventListener("portfolio-theme", callback);
    window.removeEventListener("storage", sync);
    media.removeEventListener("change", sync);
  };
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getTheme, () => false);

  function toggle() {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* The selection still works for this visit. */ }
    window.dispatchEvent(new Event("portfolio-theme"));
  }

  return (
    <button type="button" className="icon-button theme-toggle" onClick={toggle}
      aria-label={dark ? content.navigation.light : content.navigation.dark}
      title={dark ? content.navigation.light : content.navigation.dark}>
      <Sun size={18} className="sun-icon" aria-hidden="true" />
      <Moon size={18} className="moon-icon" aria-hidden="true" />
    </button>
  );
}
