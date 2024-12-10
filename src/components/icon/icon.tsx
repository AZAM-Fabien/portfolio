import { useSelector } from "react-redux";
import * as S from "./icon_style";
import { RootState } from "../../redux/store";

interface IconProps {
  href: string;
  alt: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IconProps> = ({ href, alt, width, height }) => {

  let color = "#C2E6FF";

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
      color = "#C2E6FF";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
      color = "#FFD1D9";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
      color = "#EEEEEE";
  }
  
  return (
    <S.Svg role="img" aria-label={alt} width={width} height={height} color={color}>
      <use href={href} />
    </S.Svg>
  );
};

export default Icon;
