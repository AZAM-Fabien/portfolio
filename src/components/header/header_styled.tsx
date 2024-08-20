import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  bottom: min(7vw, 33px);
  width: 100%;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundDark2};
  height: 40px;

  
`;