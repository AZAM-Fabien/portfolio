import styled from "styled-components";

export const Svg = styled.svg`
  width: ${({ width }) => (width ? width : "24px")};
  height: ${({ height }) => (height ? height : "24px")};
  color: ${({ theme }) => theme.textDark};
`;
