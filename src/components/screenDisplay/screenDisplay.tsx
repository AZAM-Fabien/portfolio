import * as S from "./screenDisplay_styled";
import Led from "../led/led.tsx";

const ScreenDisplay = () => {
  return (
    <S.ScreenDisplay>
      <S.Text> Sony </S.Text>
      <S.LedContainer>
        <Led delay={3} />
        <Led delay={2} />
        <Led delay={1} />
        <Led delay={0} />
      </S.LedContainer>
    </S.ScreenDisplay>
  );
};

export default ScreenDisplay;
