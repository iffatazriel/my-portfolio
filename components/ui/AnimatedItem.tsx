"use client";

import { useEffect, useRef } from "react";

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedItem({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getInitialTransform = () => {
      if (direction === "left")  return "translateX(-24px)";
      if (direction === "right") return "translateX(24px)";
      return "translateY(24px)";
    };

    el.style.opacity = "0";
    el.style.transform = getInitialTransform();
    el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                            transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}