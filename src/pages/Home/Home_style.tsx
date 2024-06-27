import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100% - (52px + min(4vw, 20px)));
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};;
  display: flex;
  justify-content: center;
`;


export const Image = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: contain;

  
  `;