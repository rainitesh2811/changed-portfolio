"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DotsSVG = ({ className }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const color = mounted && resolvedTheme === "dark" ? "#abb2bf" : "#282c33";

  return (
    <svg
      // width="84"
      // height="84"
      className={className}
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill={color} />
      <circle cx="22" cy="2" r="2" fill={color} />
      <circle cx="42" cy="2" r="2" fill={color} />
      <circle cx="62" cy="2" r="2" fill={color} />
      <circle cx="82" cy="2" r="2" fill={color} />
      <circle cx="2" cy="22" r="2" fill={color} />
      <circle cx="22" cy="22" r="2" fill={color} />
      <circle cx="42" cy="22" r="2" fill={color} />
      <circle cx="62" cy="22" r="2" fill={color} />
      <circle cx="82" cy="22" r="2" fill={color} />
      <circle cx="2" cy="42" r="2" fill={color} />
      <circle cx="22" cy="42" r="2" fill={color} />
      <circle cx="42" cy="42" r="2" fill={color} />
      <circle cx="62" cy="42" r="2" fill={color} />
      <circle cx="82" cy="42" r="2" fill={color} />
      <circle cx="2" cy="62" r="2" fill={color} />
      <circle cx="22" cy="62" r="2" fill={color} />
      <circle cx="42" cy="62" r="2" fill={color} />
      <circle cx="62" cy="62" r="2" fill={color} />
      <circle cx="82" cy="62" r="2" fill={color} />
      <circle cx="2" cy="82" r="2" fill={color} />
      <circle cx="22" cy="82" r="2" fill={color} />
      <circle cx="42" cy="82" r="2" fill={color} />
      <circle cx="62" cy="82" r="2" fill={color} />
      <circle cx="82" cy="82" r="2" fill={color} />
    </svg>
  );
};

export default DotsSVG;
