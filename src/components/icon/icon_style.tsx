import styled from "styled-components";

export const Icon = styled.img`
  position: relative;
  width: ${({ width }) => (width ? width : "20px")};
  height: ${({ height }) => (height ? height : "20px")};

  &:hover {
    cursor: pointer;
  }
`;
