import { useState } from 'react';
import * as S from './imageBox_style'

type ImageBoxProps = {
    src: string;
    alt: string;
    onClick?: () => void;
  };
  
  const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, onClick }) => {

    const [isAnimated, setIsAnimated] = useState(false);

    const handleOnClick = () => {
      setIsAnimated(true);
      onClick?.();

      setTimeout(() => {
        setIsAnimated(false);
      }, 500);
    };

    return <S.ImageBox src={src} alt={alt} onClick={handleOnClick} className={isAnimated ? "animated" : ""}/>;
  };
export default ImageBox