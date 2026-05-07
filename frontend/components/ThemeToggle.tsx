// components/ThemeToggle.tsx
// Bottone animato per alternare tra tema chiaro e scuro.

"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      title={isDark ? "Tema chiaro" : "Tema scuro"}
      className="relative w-10 h-10 rounded-full border border-surface-l2 bg-surface/60 backdrop-blur-md flex items-center justify-center
                 hover:border-primary/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer
                 hover:shadow-[0_0_15px_rgba(255,106,85,0.3)]"
    >
      {/* Sole (visibile in dark mode → per andare a light) */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Luna (visibile in light mode → per andare a dark) */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-500 ${
          isDark ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
