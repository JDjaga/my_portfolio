import { ParallaxSection } from "@/components/parallax-section";
import { certifications, education } from "@/data";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex min-h-screen flex-col justify-center py-20"
    >
      <ParallaxSection glowSide="left">
      <h1 className="heading">
        Education & <span className="text-purple">certifications</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="sunray-shine relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071d] p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple">
            {education[0].period}
          </p>
          <h2 className="mt-2 text-xl font-bold md:text-2xl">
            {education[0].degree}
          </h2>
          <p className="mt-1 text-white-100">
            {education[0].school} — {education[0].score}
          </p>
          <p className="mt-4 text-sm text-white-200">{education[0].details}</p>
        </div>

        <div className="stagger-shine flex flex-col gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="sunray-shine relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071d] p-5"
            >
              <h3 className="text-base font-bold md:text-lg">{cert.title}</h3>
              <p className="mt-1 text-sm text-white-100">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
      </ParallaxSection>
    </section>
  );
};
