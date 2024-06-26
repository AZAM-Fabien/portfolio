// src/components/bubble/bubble_style.ts
import styled from 'styled-components';

export const Bubble = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #06e77a;
  left: 12px;
  transition: transform 0.5s, opacity 0.5s;
  transform: translateX(-100%);
  opacity: 0;
`;
