import styled, { keyframes } from "styled-components";

const scale = keyframes`
  100% {
    scale: 3;
  }
`;
export const Circle1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: ${scale} 0.5s forwards;
`;

export const Circle2 = styled(Circle1)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${scale} 0.5s forwards;
  background-color: ${({ theme }) => theme.background2} !important;
`;