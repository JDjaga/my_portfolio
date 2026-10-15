"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  /** Decorative glow orbs drifting behind the content at different speeds. */
  glow?: "violet" | "cyan" | "both" | "none";
  /** Which side the primary orb sits on — alternate per section. */
  glowSide?: "left" | "right";
};

export const ParallaxSection = ({
  children,
  className,
  glow = "both",
  glowSide = "left",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Content drifts gently against the scroll direction and fades in.
  const contentY = useTransform(scrollYProgress, [0, 1], [64, -64]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);

  // Orbs move at different rates for layered depth.
  const orbSlowY = useTransform(scrollYProgress, [0, 1], [110, -110]);
  const orbFastY = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  const contentStyle = reduceMotion
    ? undefined
    : { y: contentY, opacity: contentOpacity };
  const orbSlowStyle = reduceMotion ? undefined : { y: orbSlowY };
  const orbFastStyle = reduceMotion ? undefined : { y: orbFastY };

  return (
    <div ref={ref} className={cn("relative", className)}>
      {glow !== "none" && (glow === "both" || glow === "violet") && (
        <motion.div
          aria-hidden="true"
          style={orbSlowStyle}
          className={cn(
            "pointer-events-none absolute top-0 h-72 w-72 rounded-full bg-purple-700/20 blur-[110px]",
            glowSide === "left" ? "-left-24" : "-right-24"
          )}
        />
      )}

      {glow !== "none" && (glow === "both" || glow === "cyan") && (
        <motion.div
          aria-hidden="true"
          style={orbFastStyle}
          className={cn(
            "pointer-events-none absolute bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]",
            glowSide === "left" ? "-right-24" : "-left-24"
          )}
        />
      )}

      <motion.div style={contentStyle} className="relative">
        {children}
      </motion.div>
    </div>
  );
};
