"use client";

import React, { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

interface LottieAnimationProps {
  animationData: unknown;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      <Lottie
        src={animationData as any}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  );
}
