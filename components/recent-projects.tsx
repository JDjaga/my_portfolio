import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { ParallaxSection } from "@/components/parallax-section";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center py-20"
    >
      <ParallaxSection glowSide="left">
      <h1 className="heading">
        Resume projects — <span className="text-purple">applied AI + full-stack</span>
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-100 md:text-base">
        6 live builds from resume: RAG copilot, 102-language audio ID, meeting
        intelligence, phytoplankton detection, inbox intelligence and 3D VR.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title, ...rest }) => (
            <div
              key={id}
              className="flex min-h-[36rem] w-[90vw] items-center justify-center sm:w-[570px] lg:min-h-[38rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10"
                  />
                </div>

                <h1 className="line-clamp-2 min-h-[3.5rem] text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="mt-2 line-clamp-3 text-sm font-light lg:text-base lg:font-normal">
                  {des}
                </p>

                <p className="mt-2 line-clamp-2 text-xs text-purple/90">
                  {"tech" in rest ? (rest as { tech: string }).tech : ""}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-purple md:text-xs lg:text-xl"
                    >
                      Source Code
                    </Link>

                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
      </ParallaxSection>
    </section>
  );
};
