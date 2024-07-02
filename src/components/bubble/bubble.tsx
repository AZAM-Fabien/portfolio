// src/components/bubble/Bubble.tsx
import React, { useEffect, useRef } from "react";
import * as S from "./bubble_style";

interface BubbleProps {
  activeIcon: string;
}

const Bubble: React.FC<BubbleProps> = ({ activeIcon }) => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iconPositions = {
      settings: "0px",
      chrome: "53px",
      github: "106px",
    };

    if (bubbleRef.current) {
      const position = iconPositions[activeIcon as keyof typeof iconPositions] || "-100%";
      bubbleRef.current.style.transform = `translateX(${position})`;
      bubbleRef.current.style.opacity =
        ["settings", "chrome", "github"].includes(activeIcon) ? "1" : "0";
    }
  }, [activeIcon]);

  return <S.Bubble ref={bubbleRef} />;
};

export default Bubble;
