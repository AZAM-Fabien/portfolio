import styled from "styled-components";

export const Settings = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  height: 20px;
  background-color: ${({ theme }) => theme.activeItemLight};;
`;

export const TextH2 = styled.h2`
  margin: 0;
  margin-left: 1rem;
  font-size: 12px;
  color: ${({ theme }) => theme.textLight};
`;

export const CloseButton = styled.button`
color: ${({ theme }) => theme.textLight};
background-color: ${({ theme }) => theme.itemLight};
border: none;
height: 100%;

&:hover {
  cursor: pointer;
  background-color: ${({ theme }) => theme.itemLight2};
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 22px);
  z-index: 1000;
  overflow-y: auto;
`;

export const ColorsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

export const ImageMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

export const ImageContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

export const ImageContainer2 = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
