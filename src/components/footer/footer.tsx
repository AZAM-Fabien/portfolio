import * as S from "./footer_styled";
import ScreenDisplay from "../screenDisplay/screenDisplay.tsx";
import Menu from "../menu/menu.tsx";


const Footer = () => {
  return (
    <S.Container>
      <S.ContainerMenu>
        <Menu />
      </S.ContainerMenu>
      <ScreenDisplay />
    </S.Container>
  );
};

export default Footer;
