import * as S from "./colorsBox_style";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/colorThemeSlice";
import { RootState } from "../../redux/store";
import { blueThemeDark, blueThemeLight, greyThemeDark, greyThemeLight, redThemeDark, redThemeLight } from "../../theme/theme";


interface ColorProps {
    color: string;
    color2: string;
  }
const ColorsBox: React.FC<ColorProps> = ({ color, color2}) => {

    const dispatch = useDispatch();

    const sliderTheme  = useSelector((state: RootState) => state.slider.sliderTheme);

    const blueThemes = sliderTheme ? blueThemeLight : blueThemeDark;
    const greyThemes = sliderTheme ? greyThemeLight : greyThemeDark;
    const redThemes = sliderTheme ? redThemeLight : redThemeDark;

    const handleClick = () => {
        if (color === blueThemeLight.item2) {
            dispatch(setTheme(blueThemes));
        } else if (color === greyThemeLight.item2) {
            dispatch(setTheme(greyThemes));
        } else if (color === redThemeLight.item2) {
            dispatch(setTheme(redThemes));
        }
    };

    return <S.ColorsBox  $colors={color} $colors2={color2} onClick={handleClick}> choix de la couleur   </S.ColorsBox>;
};

export default ColorsBox;