"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  const applyTheme = (value: Theme) => {
    document.documentElement.dataset.theme = value;
  };

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    const initial = stored === "light" || stored === "dark" ? stored : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(storageKey, next);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle}>
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
