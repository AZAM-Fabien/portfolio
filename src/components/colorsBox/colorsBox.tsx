import * as S from "./colorsBox_style";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/colorThemeSlice";
import { blueTheme, greyTheme, redTheme } from "../../theme/theme";


interface ColorProps {
    color: string;
    color2: string;
  }

const ColorsBox: React.FC<ColorProps> = ({ color, color2}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        if (color === blueTheme.itemLight2) {
            dispatch(setTheme(blueTheme));
        } else if (color === greyTheme.itemLight2) {
            dispatch(setTheme(greyTheme));
        } else if (color === redTheme.itemLight2) {
            dispatch(setTheme(redTheme));
        }
    };

    return <S.ColorsBox $colors={color} $colors2={color2} onClick={handleClick}/>;
};

export default ColorsBox;