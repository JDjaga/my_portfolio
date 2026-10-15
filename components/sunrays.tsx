"use client";

import { motion, useReducedMotion } from "framer-motion";

export const Sunrays = () => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Violet beam roaming top-left → bottom-right */}
      <motion.div
        className="absolute -top-[25%] left-[-15%] h-[65vmax] w-[65vmax] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,0.22)_0%,rgba(148,0,211,0.10)_40%,transparent_70%)] blur-[90px]"
        animate={{ x: ["0vw", "55vw", "0vw"], y: ["0vh", "45vh", "0vh"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyan beam roaming top-right → bottom-left */}
      <motion.div
        className="absolute -top-[25%] right-[-15%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(76,201,240,0.16)_0%,rgba(59,130,246,0.08)_45%,transparent_70%)] blur-[90px]"
        animate={{ x: ["0vw", "-55vw", "0vw"], y: ["0vh", "50vh", "0vh"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow rotating halo for soft sunray streaks */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(203,172,249,0.05)_20deg,transparent_40deg,transparent_180deg,rgba(76,201,240,0.05)_200deg,transparent_220deg)] blur-[60px]"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
