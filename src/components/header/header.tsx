import * as S from "./header_styled.tsx";
import Menu from "../menu/menu.tsx";

const Header = () => {
  return (
    <S.Container>
      <S.ContainerMenu>
        <Menu />
      </S.ContainerMenu>
    </S.Container>
  );
};

export default Header;
