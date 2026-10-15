"use client";

import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";

interface BentoGridLottieProps {
  copied: boolean;
}

const BentoGridLottie = ({ copied }: BentoGridLottieProps) => {
  return (
    <div className="pointer-events-none block h-full w-full cursor-default">
      <Lottie
        options={{
          loop: copied,
          autoplay: copied,
          animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
    </div>
  );
};

export default BentoGridLottie;
