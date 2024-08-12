import styled from "styled-components";

export const CVWord = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundLight2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 22px);
  gap: 4vw;
`;

export const TextH2 = styled.h2`
  margin: 0;
  font-size: 28px;
  line-height: 20px;
  color: ${({ theme }) => theme.textLight};
`


