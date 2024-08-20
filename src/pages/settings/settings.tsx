import * as S from "./settings_style";
import { useDispatch } from "react-redux";
import ColorsBox from "../../components/colorsBox/colorsBox";
import { blueTheme, greyTheme, redTheme } from "../../theme/theme";
import ImageBox from "../../components/imageBox/imageBox";
import { setActiveImage } from "../../redux/homeSlice";
import TopContainer from "../../components/topContainer/topContainer";
import { resetActiveIcon } from "../../redux/iconSlice";
import React, { useEffect, useRef } from "react";

const Settings: React.FC = () => {
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    settingsRef.current?.focus();
  }, []);

  const blue = blueTheme.itemLight2;
  const blue2 = blueTheme.itemDark;
  const red = redTheme.itemLight2;
  const red2 = redTheme.itemDark;
  const grey = greyTheme.itemLight2;
  const grey2 = greyTheme.itemDark;
  const dispatch = useDispatch();

  const handleClick = (src: string) => {
    dispatch(setActiveImage(`${src}`));
  };

  const handleCloseSettings = () => {
    dispatch(resetActiveIcon());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      console.log("Escape pressed");
      dispatch(resetActiveIcon());
    }
  };

  return (
    <S.Settings role="dialog" aria-modal="true"ref={settingsRef} onKeyDown={handleKeyDown} tabIndex={0}>
      <TopContainer title="Paramètre" onClick={handleCloseSettings} />
      <S.MainContainer>
        <S.Container>
          <S.ColorsMenu>
            <S.TextH2>Theme et couleurs</S.TextH2>
            <S.ColorsContainer>
              <ColorsBox color={blue} color2={blue2} />
              <ColorsBox color={red} color2={red2} />
              <ColorsBox color={grey} color2={grey2} />
            </S.ColorsContainer>
          </S.ColorsMenu>
          <S.ImageMenu>
            <S.TextH2>Image</S.TextH2>
            <S.ImageMainContainer>
              <S.ImageContainer1>
                {[
                  { src: "bike", alt: "ma moto 690 SMCR KTM" },
                  { src: "climbing", alt: "photo d'escalade" },
                  { src: "climbpan", alt: "photo d'escalade" },
                ].map(({ src, alt }, index) => (
                  <S.BoxImage key={index}>
                    <ImageBox
                      src={`wallpaper/${src}.webp`}
                      alt={alt}
                      onClick={() => handleClick(src)}
                    />
                  </S.BoxImage>
                ))}
              </S.ImageContainer1>
              <S.ImageContainer2>
                {[
                  { src: "dreamCar", alt: "mustang shelby gt350R 1965" },
                  { src: "PC", alt: "Mon PC monté par mes soins" },
                  { src: "travel", alt: "avion" },
                ].map(({ src, alt }, index) => (
                  <S.BoxImage key={index}>
                    <ImageBox
                      src={`wallpaper/${src}.webp`}
                      alt={alt}
                      onClick={() => handleClick(src)}
                    />
                  </S.BoxImage>
                ))}
              </S.ImageContainer2>
            </S.ImageMainContainer>
          </S.ImageMenu>
        </S.Container>
      </S.MainContainer>
    </S.Settings>
  );
};

export default Settings;
