import styled from "styled-components";

export const Sutom = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10;
`;

export const MainContainer = styled.div`
  height: calc(100% - 22px);
  overflow-x: hidden;
`;