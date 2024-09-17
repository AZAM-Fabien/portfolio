import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100% - (40px + min(7vw, 33px)));
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
  display: flex;
  justify-content: center;
`;

export const PostIt = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;

  @media (max-width: 680px) {
    bottom: -20px;
    right: -20px;
    top: unset;
  }
`;

export const TextPostIt = styled.h1`
  position: absolute;
  top: 86px;
  right: 86px;
  width: 300px;
  color: ${({ theme }) => theme.textLight};
  margin: 0;
  padding: 0;
  font-size: 24px;

  @media (max-width: 1079px) {
    font-size: 14px;
    top: 50px;
    right: 64px;
    width: 174px;
  }
`;

export const ImagePostIt = styled.img`
  width: 500px;
  object-fit: contain;
  object-position: center;

  @media (max-width: 1079px) {
    width: 300px;
  }
  
`;

export const Image = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 0px 20px;
  gap: 20px;
  height: auto;

  @media (max-width: 680px) {
    top: 80px;
    left: 0px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
