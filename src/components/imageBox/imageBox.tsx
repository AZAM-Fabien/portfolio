import * as S from './imageBox_style'

type ImageBoxProps = {
    src: string;
    alt: string;
    onClick?: () => void;
  };
  
  const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, onClick }) => {
    return <S.ImageBox src={src} alt={alt} onClick={onClick} />;
  };
export default ImageBox