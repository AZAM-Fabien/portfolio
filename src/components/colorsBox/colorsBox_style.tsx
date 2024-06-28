import styled from "styled-components";

export const ColorsBox = styled.button<{ $colors: string, $colors2: string }>`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${props => props.$colors};
  box-shadow: 0.8vw 0.8vw 2.4vw 0.2vw ${(props) => props.$colors2};
  border: none;
  border-radius: 2vw;
  padding: 0px;
  max-height: calc(100% - 20px);
  max-width: calc(100% - 20px); 

  &:hover {
    background-color: ${(props) => props.$colors2};
    box-shadow: 0.8vw 0.8vw 2.4vw 0.2vw ${(props) => props.$colors};
    cursor: pointer;
  }
`;
