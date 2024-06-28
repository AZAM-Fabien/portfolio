import styled, { keyframes } from "styled-components";
import chroma from 'chroma-js';


// Créer un dégradé de couleurs arc-en-ciel
const rainbow = chroma.scale(['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'black']).mode('lch').colors(40);

// Générer le dégradé de couleurs pour l'animation
const generateGradient = () => {
  return rainbow.join(', ');
};

// Créer une animation pour déplacer le gradient
const waveAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  10% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const Led = styled.div<{ $delay: number }>`
  width: 15vw;
  height: 4px;
  background: linear-gradient(90deg, ${generateGradient()});
  background-size: 24000%;
  animation: ${waveAnimation} 8s infinite linear;
  animation-delay: ${props => props.$delay}s;
`;