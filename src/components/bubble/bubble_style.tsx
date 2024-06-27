// src/components/bubble/bubble_style.ts
import styled from 'styled-components';


export const Bubble = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color:  ${({ theme }) => theme.activeItemDark};
  left: 12px;
  transition: transform 0.5s, opacity 0.5s;
`;
