import * as S from "./screenDisplay_styled";
import Led from "../led/led.tsx";

const ScreenDisplay = () => {
  return (
    <S.ScreenDisplay>
      <S.Text>MSI</S.Text>
      <S.LedContainer>
        <Led delay={3.75} />
        <Led delay={2.5} />
        <Led delay={1.25} />
        <Led delay={0} />
      </S.LedContainer>
    </S.ScreenDisplay>
  );
};

export default ScreenDisplay;
