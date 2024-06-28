import styled from "styled-components";

export const ImageBox = styled.img`
    position: relative;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: left;

  &:hover {
    cursor: pointer;
    filter: brightness(0.6);
    transition: filter 0.2s ease-in-out;
  }
`;
