import styled from "styled-components";

export const CVWord = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundLight2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
`;
