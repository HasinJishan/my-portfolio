import { useEffect, useRef } from "react";

// Attaches an IntersectionObserver to every element with class "reveal-init"
// inside the returned ref, adding "shown" once each enters the viewport.
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current
      ? containerRef.current.querySelectorAll(".reveal-init")
      : [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return containerRef;
}
