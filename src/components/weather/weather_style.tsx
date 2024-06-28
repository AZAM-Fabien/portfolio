import styled from "styled-components";

export const WeatherContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: calc(15px + min(4vw, 20px));
  margin-left: 20px;

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
