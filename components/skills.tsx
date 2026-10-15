import { ParallaxSection } from "@/components/parallax-section";
import { skills } from "@/data";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col justify-center py-20"
    >
      <ParallaxSection glowSide="right">
      <h1 className="heading">
        My <span className="text-purple">technical skills</span>
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-100 md:text-base">
        From resume: languages, AI/ML &amp; NLP, LLM APIs, frontend, backend,
        databases, auth, cloud and tools.
      </p>

      <div className="stagger-shine mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="sunray-shine relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071d] p-6"
          >
            <h2 className="text-lg font-bold text-white">
              {group.category}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.1] bg-[#10132e] px-3 py-1.5 text-xs text-white-100 md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </ParallaxSection>
    </section>
  );
};
