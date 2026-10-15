"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

import { links } from "@/config";
import { techStack } from "@/data";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";

import { GridGlobe } from "../grid-globe";

const BentoGridLottie = dynamic(() => import("./bento-grid-lottie"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-4 md:grid-cols-6 md:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento sunray-shine relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {id === 6 && <BackgroundGradientAnimation />}

      {img && (
        <div
          className={cn(
            "w-full shrink-0 overflow-hidden",
            id === 1
              ? "relative min-h-48 flex-1"
              : "relative h-44 md:h-48"
          )}
        >
          <Image
            width={689}
            height={541}
            src={img}
            alt={typeof title === "string" ? title : `about-${id}`}
            className={cn("h-full w-full object-cover object-center", imgClassName)}
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#04071d] to-transparent" />
        </div>
      )}

      <div
        className={cn(
          "relative z-10 flex flex-1 flex-col gap-2 p-6 transition duration-200 group-hover/bento:translate-x-1 lg:p-8",
          id === 1 && "flex-none justify-end",
          titleClassName
        )}
      >
        {description ? (
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-purple md:text-sm">
            {description}
          </p>
        ) : null}

        {id === 4 && (
          <p className="font-sans text-xs text-white-100">
            Neural retrieval · speech intelligence · shipped full-stack
          </p>
        )}

        <h3 className="font-sans text-xl font-bold leading-snug md:text-2xl">
          {title}
        </h3>

        {id === 2 && (
          <div className="relative mt-2 h-64 shrink-0 overflow-hidden rounded-2xl md:h-72">
            <GridGlobe />
          </div>
        )}

        {id === 3 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[...techStack.stack1, ...techStack.stack2].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/[0.08] bg-[#10132e] px-3 py-2.5 text-center text-xs font-medium text-white-100 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {id === 6 && (
          <div className="relative z-10 mt-4 flex flex-col items-center gap-3">
            <div className="pointer-events-none h-24 w-44 overflow-hidden opacity-80">
              <BentoGridLottie copied={copied} />
            </div>

            <MagicButton
              title={copied ? "Email copied!" : "Copy my email"}
              icon={<IoCopyOutline />}
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
              asChild
            />
          </div>
        )}
      </div>
    </div>
  );
};
