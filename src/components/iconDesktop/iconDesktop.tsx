import * as S from "./iconDesktop_style";
import Icon from "../icon/icon";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIcon } from "../../redux/iconSlice";
import { RootState } from "../../redux/store";

type IconDesktopProps = {
  href: string;
  class?: string;
  text: string;
  width?: string;
  height?: string;
  colorText?: boolean;
};

const IconDesktop: React.FC<IconDesktopProps> = ({
  href: iconHref,
  class: iconClass,
  text: iconText,
  width: widthIcon,
  height: heightIcon,
  colorText: textColor,
}) => {
  const dispatch = useDispatch();

  const handleIconDesktopClick = (iconDesktop: string) => {
    dispatch(setActiveIcon(iconDesktop));
  };


  let colorIcon = "#0D1520";
  let color= "#C2E6FF"

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
      colorIcon = "#0D1520";
      color= "#C2E6FF";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
      colorIcon = "#191111";
      color= "#FFD1D9";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
      colorIcon = "#111111";
      color= "#EEEEEE";
  }

  return (
    <S.IconDesktop
      className={iconClass}
      color={colorIcon}
      onClick={() => handleIconDesktopClick(iconHref)}
    >
      <Icon
        href={`${iconHref}.svg#${iconHref}`}
        alt={`logo ${iconHref}`}
        width={widthIcon}
        height={heightIcon}
      />
      <S.Text color={color} $owncolor={textColor ? "true" : "false"}>
        {" "}
        {iconText}
      </S.Text>
    </S.IconDesktop>
  );
};

export default IconDesktop;
