import styled from "styled-components";


export const ScreenDisplay = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: black;
`;

export const Text = styled.div`
  padding-top: 4px;
  font-size: 2vw;
  color: silver
`;

export const LedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6px;
  background-color: black;
`;
