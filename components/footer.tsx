import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { ParallaxSection } from "@/components/parallax-section";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mb-[100px] flex min-h-screen w-full flex-col overflow-hidden pb-10 md:mb-auto"
    >
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <ParallaxSection
        glowSide="right"
        className="flex flex-1 flex-col justify-center"
      >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw]">
          Looking for an <span className="text-purple">AI / full-stack</span>{" "}
          engineer who ships measured products?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          I&apos;m {links.ownerName} — {links.education}. Skilled in Python,
          React, FastAPI, PyTorch & SQL. Reach out and let&apos;s build across
          the stack.
        </p>

        <Link
          href={`mailto:${links.ownerEmail}`}
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
        >
          <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          asChild
          />
        </Link>
      </div>
      </ParallaxSection>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            {links.ownerName}
          </Link>{" "}
          · {links.ownerEmail} · {links.phone} |{" "}
          <Link href={links.sourceCode} className="underline">
            Source Code
          </Link>
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
