import styled from "styled-components";

export const Settings = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundLight2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
`;

export const TextH2 = styled.h2`
  margin: 0;
  margin-left: 1rem;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.textLight};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4vw;
`;

export const ColorsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vw;
`;

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  gap: 3vw;
  padding-left: 3vw;
  padding-right: 3vw;
`;

export const ImageMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vw;
`;

export const ImageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 3vw;
`;

export const ImageContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3vw;
  padding-left: 3vw;
  padding-right: 3vw;
  box-sizing: border-box;

  @media (max-width: 612px) {
    flex-direction: column;
    padding-left: 6vw;
    padding-right: 6vw;
  }
`;

export const ImageContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3vw;
  padding-left: 3vw;
  padding-right: 3vw;
  box-sizing: border-box;

  @media (max-width: 612px) {
    flex-direction: column;
    padding-left: 6vw;
    padding-right: 6vw;
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  height: 40vw;
  max-height: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 612px) {
    height: auto;
  }
`;
