"use client";

import { useEffect } from "react";
import type { IOptions, RecursivePartial } from "tsparticles-engine";

const PARTICLES_ID = "tsparticles";

const particlesOptions: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
  particles: {
    // No ambient field: the page looks normal until the first click.
    // Every click spawns particles that drift very slowly.
    number: {
      value: 0,
      // Hard cap: adding beyond this removes the oldest particles first,
      // so fresh clicks always have room.
      limit: 60,
      density: {
        enable: false,
      },
    },
    color: {
      value: ["#8A2BE2", "#9400D3", "#ff00ff", "#BA55D3", "#FF00FF"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.2,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.8,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 180,
      color: "#6A0DAD",
      opacity: 0.4,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: true,
        rotateX: 800,
        rotateY: 1500,
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "parallax",
        parallax: {
          enable: true,
          force: 50,
          smooth: 12,
        },
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 2,
      },
    },
  },
};

export const ParticlesBackground = () => {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.getElementById(PARTICLES_ID)?.dataset.ready === "true"
    ) {
      return;
    }

    let container: { destroy: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ tsParticles }, { loadFull }] = await Promise.all([
        import("tsparticles-engine"),
        import("tsparticles"),
      ]);

      if (cancelled) return;

      await loadFull(tsParticles);

      if (cancelled) return;

      const created = await tsParticles.load(
        PARTICLES_ID,
        particlesOptions
      );

      if (!created) {
        console.error("[particles] engine loaded but container was not created");
      }

      if (cancelled) {
        created?.destroy();
        return;
      }

      container = created ?? undefined;

      document.getElementById(PARTICLES_ID)?.setAttribute("data-ready", "true");
    })().catch((err) => console.error("[particles] failed to start:", err));

    return () => {
      cancelled = true;
      container?.destroy();
      document.getElementById(PARTICLES_ID)?.removeAttribute("data-ready");
    };
  }, []);

  return (
    <div
      id={PARTICLES_ID}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
    />
  );
};
