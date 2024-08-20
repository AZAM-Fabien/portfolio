import * as S from "./icon_style";

interface IconProps {
  href: string;
  alt: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IconProps> = ({ href, alt, width, height }) => {
  return (
    <S.Svg role="img" aria-label={alt} width={width} height={height}>
      <use href={href} />
    </S.Svg>
  );
};

export default Icon;
