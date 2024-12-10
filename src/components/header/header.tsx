import * as S from "./header_styled.tsx";
import Menu from "../menu/menu.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.tsx";

const Header = () => {

  let color = "#0D1E33";

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
      color = " #0D1E33";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
      color = "#2A1115";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
      color = "#191919";
  }
  
  return (
    <S.Container>
      <S.ContainerMenu color={color}>
        <Menu />
      </S.ContainerMenu>
    </S.Container>
  );
};

export default Header;

