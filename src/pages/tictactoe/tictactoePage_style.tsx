import styled from "styled-components";

export const Tictactoe = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10;
`;