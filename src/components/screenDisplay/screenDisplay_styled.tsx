import styled from "styled-components";

export const ScreenDisplay = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: min(7vw, 33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
`;

export const Text = styled.div`
  padding-top: 4px;
  font-size: min(4vw, 20px);
  color: silver;

  @media (max-width: 680px) {
    padding-top: 2px;
  }
`;

export const LedContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6px;
  background-color: black;
`;
