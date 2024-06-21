import * as S from "./screenDisplay_styled";
import Led from "../led/led.tsx";

const ScreenDisplay = () => {

    return (
            <S.ScreenDisplay>
                <S.Text>
                    MSI
                </S.Text>
                <S.LedContainer>
                    <Led/>
                    <Led/>
                    <Led/>
                    <Led/>
                </S.LedContainer>
            </S.ScreenDisplay>
    )
}

export default ScreenDisplay

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
  max-width: 100%;
`;

export const Text = styled.div`
  padding: 4px;
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
  background-color: #250af0;
`;


import * as S from "./led_styled.tsx"

const Led = () => {

    return (
        <>
        <S.Led/>
        </>
    )
}

export default Led

import styled from "styled-components";

export const Led = styled.div`
    width: 15vw;
    height: 4px;
    background-color: #f00a0a;

`   