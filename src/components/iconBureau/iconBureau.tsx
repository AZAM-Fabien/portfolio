import * as S from "./iconBureau_style";
import Icon from "../icon/icon";
import { useDispatch } from "react-redux";
import { toggleGarbageCan, toggleWord } from "../../redux/openSlice";

type IconBureauProps = {
  src: string;
  text: string;
  alt: string;
  width?: string;
  height?: string;
  colorText?: boolean;
};

const IconBureau: React.FC<IconBureauProps> = ({
  src: iconSrc,
  alt: iconAlt,
  text: iconText,
  width: widthIcon,
  height: heightIcon,
  colorText: textColor,
}) => {
  const dispatch = useDispatch();
  const handleIconClick = (iconBureau: string) => {
    if (iconBureau === "iconBureau/garbageCan") {
      dispatch(toggleGarbageCan());
    }

    if (iconBureau === "iconBureau/word") {
      dispatch(toggleWord());
    }
  };

  return (
    <S.IconBureau onClick={() => handleIconClick(iconSrc)}>
      <Icon
        src={`${iconSrc}.svg`}
        alt={iconAlt}
        width={widthIcon}
        height={heightIcon}
      />
      <S.Text color={textColor ? `${textColor}` : undefined}> {iconText}</S.Text>
    </S.IconBureau>
  );
};

export default IconBureau;
