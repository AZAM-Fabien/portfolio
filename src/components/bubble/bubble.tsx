// src/components/bubble/Bubble.tsx
import React, { useEffect, useRef } from "react";
import * as S from "./bubble_style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface BubbleProps {
  activeIcon: string;
}

const Bubble: React.FC<BubbleProps> = ({ activeIcon }) => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  let color = "#0D1520";

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
      color = "#0D1520";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
      color = "#191111";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
      color = "#111111";
  }

  useEffect(() => {
    const iconPositions = {
      settings: "0px",
      chrome: "58.5px",
      word: "117px",
    };

    if (bubbleRef.current) {
      const position = iconPositions[activeIcon as keyof typeof iconPositions] || "-100%";
      bubbleRef.current.style.transform = `translateX(${position})`;
      bubbleRef.current.style.opacity =
        ["settings", "chrome", "word"].includes(activeIcon) ? "1" : "0";
    }
  }, [activeIcon]);

  return <S.Bubble ref={bubbleRef} color={color}/>;
};

export default Bubble;
