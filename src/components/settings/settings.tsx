import * as S from "./settings_style";
import { useDispatch } from "react-redux";
import { closeSettings } from "../../redux/SettingsSlice";
import { resetActiveIcon } from "../../redux/iconSlice";
import ColorsBox from "../colorsBox/colorsBox";
import { blueTheme, greyTheme, redTheme } from "../../theme/theme";

const Settings: React.FC = () => {
  const blue = blueTheme.itemLight2;
  const red = redTheme.itemLight2;
  const grey = greyTheme.itemLight2;
  const dispatch = useDispatch();

  return (
    <S.Settings>
      <S.TopContainer>
        <S.TextH2>Settings</S.TextH2>
        <S.CloseButton
          type="button"
          className="modal-btn"
          onClick={() => {
            dispatch(closeSettings()), dispatch(resetActiveIcon());
          }}
        >
          X
        </S.CloseButton>
      </S.TopContainer>
      <S.Container>
        <S.ColorsMenu>
          <S.TextH2>Colors</S.TextH2>
          <S.ColorsContainer>
            <ColorsBox color={blue} />
            <ColorsBox color={red} />
            <ColorsBox color={grey} />
          </S.ColorsContainer>
        </S.ColorsMenu>
        <S.ImageMenu>
          <S.TextH2>Image</S.TextH2>
          <S.ImageMainContainer>
            <S.ImageContainer1>
              {/* <S.ImageBox />
              <S.ImageBox />
              <S.ImageBox /> */}
            </S.ImageContainer1>
            <S.ImageContainer2>
              {/* <S.ImageBox />
              <S.ImageBox />
              <S.ImageBox /> */}
            </S.ImageContainer2>
          </S.ImageMainContainer>
        </S.ImageMenu>
      </S.Container>
    </S.Settings>
  );
};

export default Settings;
