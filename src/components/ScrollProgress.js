import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    document.addEventListener("scroll", update, { passive: true });
    update();
    return () => document.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}
