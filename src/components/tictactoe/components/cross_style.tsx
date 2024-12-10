import styled, { keyframes } from "styled-components";

const move = keyframes`
  90% {
    rotate: 50deg;
  }
  100% {
    rotate: 45deg;
  }    
`;
const moveopposite = keyframes`
  90% {
    rotate: -50deg;
  }
  100% {
    rotate: -45deg;
  }    
`;

export const Cross1 = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 50px;
    height: 5px;
    transform: rotate(0deg);
    animation: ${move} 0.5s forwards;
`;

export const Cross2 = styled(Cross1)`
    animation: ${moveopposite} 0.5s forwards;
`;
  
