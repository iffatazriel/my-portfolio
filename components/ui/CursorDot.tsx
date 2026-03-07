"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: MouseEvent) => {
      dot.style.left = e.clientX - 4 + "px";
      dot.style.top  = e.clientY - 4 + "px";
    };

    const expand = () => {
      dot.style.transform = "scale(3)";
      dot.style.opacity   = "0.4";
    };

    const shrink = () => {
      dot.style.transform = "scale(1)";
      dot.style.opacity   = "1";
    };

    document.addEventListener("mousemove", move);

    const targets = document.querySelectorAll("a, button, .hoverable");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed w-2 h-2 rounded-full bg-accent pointer-events-none z-[9998] transition-transform duration-150 mix-blend-multiply hidden md:block"
    />
  );
}
