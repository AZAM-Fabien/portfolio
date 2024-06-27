import styled from "styled-components";

export const WeatherContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: calc(15px + min(4vw, 20px));
  margin-left: 20px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
`;
