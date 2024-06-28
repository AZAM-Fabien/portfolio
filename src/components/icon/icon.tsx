import * as S from "./icon_style";

interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, width, height }) => {
  return <S.Icon src={src} alt={alt} width={width} height={height} />;
};

export default Icon;
