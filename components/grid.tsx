import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ParallaxSection } from "@/components/parallax-section";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center py-20"
    >
      <ParallaxSection glowSide="left">
      <h1 className="heading">
        About <span className="text-purple">me</span>
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white-100 md:text-base">
        B.Tech AI &amp; Data Science graduate crafting applied AI systems and
        Dockerized full-stack products.
      </p>

      <BentoGrid className="mt-12 stagger-shine">
        {gridItems.map((gridItem) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
      </ParallaxSection>
    </section>
  );
};
