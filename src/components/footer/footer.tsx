import * as S from "./footer_styled";
import ScreenDisplay from "../screenDisplay/screenDisplay.tsx";
import Menu from "../menu/menu.tsx";

const Footer = () => {
  return (
    <S.Container>
      <S.ContainerMenu>
        {/* <Meteo /> */}
        <Menu />
        {/* <Date />    afficher la date du jour et heure */}
      </S.ContainerMenu>
      <ScreenDisplay />
    </S.Container>
  );
};

export default Footer;
