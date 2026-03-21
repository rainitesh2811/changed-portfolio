"use client";

import { useTheme as useThemeOriginal } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeSafe() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(null);
  const [resolvedTheme, setResolvedTheme] = useState(null);

  // Call the original hook, but only use it after mount
  let themeHook = null;
  try {
    themeHook = useThemeOriginal();
  } catch (e) {
    // Silently fail during SSR
  }

  useEffect(() => {
    setMounted(true);
    if (themeHook) {
      setTheme(themeHook.theme);
      setResolvedTheme(themeHook.resolvedTheme);
    }
  }, [themeHook]);

  return {
    theme,
    resolvedTheme,
    setTheme: themeHook?.setTheme || (() => {}),
    mounted,
  };
}
