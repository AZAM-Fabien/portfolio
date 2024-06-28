import styled from "styled-components";

export const TimeContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: calc(23px + min(4vw, 20px));
  right: 20px;

  @media (max-width: 612px) {
    top: 10px;
    bottom: unset;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.textDark};
`;
