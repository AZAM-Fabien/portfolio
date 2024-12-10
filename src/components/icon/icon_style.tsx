import styled from "styled-components";

export const Svg = styled.svg <{ color: string }>`
  width: ${({ width }) => (width ? width : "24px")};
  height: ${({ height }) => (height ? height : "24px")};
  color: ${(props) => props.color};
`;
