import { useMemo, useState } from "react";
import * as S from "./sliderTheme_style";
import "./sliderTheme.css";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeState } from "../../redux/sliderThemeSlice";
import { RootState } from "../../redux/store";
import {
  blueThemeDark,
  blueThemeLight,
  greyThemeDark,
  greyThemeLight,
  redThemeDark,
  redThemeLight,
} from "../../theme/theme";
import { setTheme } from "../../redux/colorThemeSlice";

const SliderTheme: React.FC = () => {
  const dispatch = useDispatch();
  const [starPositions, setStarPositions] = useState<
    { widthHeight: string; top: string; left: string }[]
  >([]);

  const isMoved = useSelector((state: RootState) => state.slider.sliderTheme);
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  const handleClick = () => {
    dispatch(changeThemeState());

    const blueThemes = isMoved ? blueThemeDark : blueThemeLight;
    const greyThemes = isMoved ? greyThemeDark : greyThemeLight;
    const redThemes = isMoved ? redThemeDark : redThemeLight;

    if (theme === blueThemeLight || theme === blueThemeDark) {
      dispatch(setTheme(blueThemes));
    }
    if (theme === greyThemeLight || theme === greyThemeDark) {
      dispatch(setTheme(greyThemes));
    }
    if (theme === redThemeLight || theme === redThemeDark) {
      dispatch(setTheme(redThemes));
    }
  };

  useMemo(() => {
    if (isMoved === false) {
      const newStarPositions = Array.from({ length: 12 }, () => {
        return {
          widthHeight: `${Math.max(1, Math.floor(Math.random() * 8))}`,
          top: `${Math.min(90, Math.max(10, Math.floor(Math.random() * 90)))}%`,
          left: `${Math.min(
            70,
            Math.max(10, Math.floor(Math.random() * 70))
          )}%`,
        };
      });
      setStarPositions(newStarPositions);
    }
  }, [isMoved]);

  return (
    <S.MainContainer onClick={handleClick} $themechoice={isMoved.toString()}>
      <S.Sun className={isMoved ? "sun-left" : "sun-right"}>
        <S.Moon className={isMoved ? "moon-left" : "moon-right"}>
          <S.MoonCrater1></S.MoonCrater1>
          <S.MoonCrater2></S.MoonCrater2>
          <S.MoonCrater3></S.MoonCrater3>
        </S.Moon>
      </S.Sun>
      <S.Circle1 className={isMoved ? "sun-left" : "sun-right"}></S.Circle1>
      <S.Circle2 className={isMoved ? "sun-left" : "sun-right"}></S.Circle2>
      <S.Circle3 className={isMoved ? "sun-left" : "sun-right"}></S.Circle3>
      {starPositions.map((star, i) => (
        <S.Star
          key={i}
          className={isMoved ? "invisible" : "visible"}
          src="SliderTheme/star.svg"
          alt="star"
          style={{
            width: `${star.widthHeight}px`,
            height: `${star.widthHeight}px`,
            top: star.top,
            left: star.left,
          }}
        />
      ))}
      {[...Array(8)].map((_, i) => {
        const index: number = [2, 5, 2, 5, 2, 5, 2, 5][i];
        const size: number = [80, 50, 50, 30, 20, 60, 80, 40][i];
        const bottom: number = [-20, -15, -7, 12, 25, -33, -47, -27][i];
        const right: number = [-20, -1, 50, -12, 45, 27, 62, 71][i];
        const color: string = [
          "#96B8EE",
          "#F8F9FD",
          "#96B8EE",
          "#F8F9FD",
          "#96B8EE",
          "#F8F9FD",
          "#96B8EE",
          "#F8F9FD",
        ][i];
        return (
          <S.Cloud
            key={i}
            style={{
              zIndex: `${index}`,
              width: `${size}px`,
              height: `${size}px`,
              bottom: `${bottom + (isMoved ? 0 : -80)}px`,
              right: `${right}px`,
              backgroundColor: `${color}`,
              transition: "bottom 0.6s ease-in-out",
            }}
          />
        );
      })}
    </S.MainContainer>
  );
};

export default SliderTheme;
