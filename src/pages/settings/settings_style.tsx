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
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: 34px;
  color: ${({ theme }) => theme.textLight};
`;

export const MainContainer = styled.div`
  height: calc(100% - 22px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4vw;
  margin: auto;
  padding: 30px 0;
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
  justify-content: center;
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

  @media (max-width: 680px) {
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

  @media (max-width: 680px) {
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

  @media (max-width: 680px) {
    height: auto;
  }
`;
