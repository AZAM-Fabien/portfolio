import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { filter: brightness(1) }
 50% {filter: brightness(0.5) }
 100% {filter: brightness(1) }
`;

export const ImageBox = styled.img`
  position: relative;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: left;

  &:hover {
    cursor: pointer;
  }

  &.animated {
    cursor: pointer;
    transition: filter 0.8s ease-in-out;
    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
`;
