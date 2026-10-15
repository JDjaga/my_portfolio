"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { links } from "@/config";

export const ProfileBadge = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);

    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <div ref={ref} className="fixed right-4 top-4 z-[200] md:right-6 md:top-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open profile card"
        aria-expanded={open}
        className="flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/25 bg-white/10 shadow-lg backdrop-blur-xl transition hover:scale-105 hover:border-purple-300/60"
      >
        <Image
          src="/profile-photo.png"
          alt={links.ownerName}
          width={44}
          height={44}
          className="h-full w-full object-cover"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/15 bg-[#0b0e23]/90 p-5 shadow-2xl backdrop-blur-xl">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-purple">
            Profile
          </p>
          <h3 className="mt-1 text-lg font-bold text-white">
            {links.ownerName}
          </h3>
          <p className="mt-0.5 text-sm text-white-100">
            AI Engineer &amp; Full-Stack Developer
          </p>
          <p className="mt-2 break-all text-xs text-white-200">
            {links.ownerEmail}
          </p>

          <div className="mt-4 flex gap-2">
            <Link
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-white transition hover:border-purple-300/60 hover:bg-white/10"
            >
              GitHub
            </Link>
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-white transition hover:border-purple-300/60 hover:bg-white/10"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
