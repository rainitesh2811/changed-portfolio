"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue (ensures the theme is loaded on the client)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render children, but only wrap with NextThemesProvider on client
  try {
    if (!mounted) {
      return <>{children}</>; // Prevents mismatch between server & client rendering
    }

    return (
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    );
  } catch (error) {
    console.error("ThemeProvider error:", error);
    return <>{children}</>;
  }
}
