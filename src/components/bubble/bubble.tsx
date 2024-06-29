// src/components/bubble/Bubble.tsx
import React, { useEffect, useRef } from 'react';
import * as S from './bubble_style';

interface BubbleProps {
  activeIcon: string;
}

const Bubble: React.FC<BubbleProps> = ({ activeIcon }) => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bubbleRef.current) {
      const positions = {
        settings: '0px',
        chrome: '53px',
        github: '106px',
      };

      bubbleRef.current.style.transform = `translateX(${positions[activeIcon as keyof typeof positions] || '-100%'})`;
      bubbleRef.current.style.opacity = (activeIcon === 'settings' || activeIcon === 'chrome' || activeIcon === 'github')  ? '1' : '0';
    }
  }, [activeIcon]);

  return <S.Bubble ref={bubbleRef} />;
};

export default Bubble;
