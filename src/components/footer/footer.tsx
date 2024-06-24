import * as S from "./footer_styled";
import ScreenDisplay from "../screenDisplay/screenDisplay.tsx";

const Footer = () => {
  return (
    <S.Container>
      <S.ContainerMenu>
        <S.MeteoContainer></S.MeteoContainer>
        <S.Menu>
          <div> test </div>
        </S.Menu>
        <S.Date></S.Date>
      </S.ContainerMenu>
      <ScreenDisplay />
    </S.Container>
  );
};

export default Footer;
