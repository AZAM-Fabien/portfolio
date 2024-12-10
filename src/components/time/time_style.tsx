import styled from "styled-components";

export const TimeContainer = styled.div <{ color: string }>`
  position: absolute;
  z-index: 9;
  bottom: calc(23px + min(4vw, 20px));
  right: 20px;

  @media (max-width: 680px) {
    top: 10px;
    bottom: unset;
    padding: 4px;
    border-radius: 8px;
    background-color: ${(props) => props.color + "44"};
  }
`;

export const Text = styled.p <{ color: string }>`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.color };
`;
