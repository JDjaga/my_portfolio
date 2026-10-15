import Image from "next/image";

import { Button } from "@/components/ui/moving-borders";
import { ParallaxSection } from "@/components/parallax-section";
import { workExperience } from "@/data";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col justify-center py-20"
    >
      <ParallaxSection glowSide="right">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="sunray-shine relative flex flex-col gap-2 overflow-hidden rounded-xl p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                width={95}
                height={87}
                src={experience.thumbnail}
                alt={experience.title}
                className="w-16 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <p className="text-start text-xs font-semibold uppercase tracking-widest text-purple">
                  {"period" in experience ? experience.period : ""}
                </p>
                <h1 className="mt-1 text-start text-xl font-bold md:text-2xl">
                  {experience.title}
                </h1>
                <p className="mt-3 text-start text-sm font-semibold text-white-100 md:text-base">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      </ParallaxSection>
    </section>
  );
};
