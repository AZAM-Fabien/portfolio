import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  bottom: min(7vw, 33px);
  width: 100%;
`;

export const ContainerMenu = styled.div<{ color: string }>`
  position: relative;
  z-index: 8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  height: 40px;
`;
