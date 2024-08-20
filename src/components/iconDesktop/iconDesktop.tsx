import * as S from "./iconDesktop_style";
import Icon from "../icon/icon";
import { useDispatch } from "react-redux";
import { setActiveIcon } from "../../redux/iconSlice";

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

  return (
    <S.IconDesktop
      className={iconClass}
      onClick={() => handleIconDesktopClick(iconHref)}
    >
      <Icon
        href={`${iconHref}.svg#${iconHref}`}
        alt={`logo ${iconHref}`}
        width={widthIcon}
        height={heightIcon}
      />
      <S.Text color={textColor ? `${textColor}` : undefined}>
        {" "}
        {iconText}
      </S.Text>
    </S.IconDesktop>
  );
};

export default IconDesktop;
