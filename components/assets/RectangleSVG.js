"use client";

import { useEffect, useState } from "react";

const RectangleSVG = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#282c33");

  useEffect(() => {
    setMounted(true);
    // Dynamically import and use useTheme only after mount
    import("next-themes").then(({ useTheme }) => {
      const { resolvedTheme } = useTheme();
      setStrokeColor(resolvedTheme === "dark" ? "#abb2bf" : "#282c33");
    });
  }, []);

  return (
    <svg
      // width="86"
      // height="86"
      viewBox="0 0 86 86"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="85"
        height="85"
        stroke={strokeColor}
      />
    </svg>
  );
};

export default RectangleSVG;
