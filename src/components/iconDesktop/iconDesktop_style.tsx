import styled from "styled-components";

export const IconDesktop = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4vw;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  border-radius: 10px;
  background-color: ${( props ) => props.color + "44"};

  ${({ className }) =>
    className === "bootstrap" &&
    `
    background-color: transparent;
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.h2 <{ color: string; $owncolor: string }>`
  font-size: 12px;
  margin: 0;
  color: ${({ $owncolor, theme, color }) => ($owncolor == "true" ? theme.text : color)};
`;
