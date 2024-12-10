// src/components/menu/Menu.tsx
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveIcon } from "../../redux/iconSlice";
import * as S from "./menu_style";
import Icon from "../icon/icon";
import Bubble from "../bubble/bubble";
import { toggleChrome, toggleSettings, toggleCVWord } from "../../redux/openSlice";






const Menu: React.FC = () => {


  let color = "#004074";

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
      color = "#004074";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
      color = "#611623";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
      color = "#313131";
  }

  const dispatch = useDispatch();
  const activeIcon = useSelector((state: RootState) => state.icon.activeIcon);

  const handleIconClick = (iconName: string) => {
    dispatch(setActiveIcon(iconName));
  };

  const previousIcon = useRef(activeIcon);

  useEffect(() => {
    if (activeIcon === "word") {
      setTimeout(() => {
        dispatch(toggleCVWord());
      }, 240);
    }

    if (previousIcon.current === "word" && activeIcon !== "word") {
      setTimeout(() => {
        dispatch(toggleCVWord());
      }, 120);
    }

    if (activeIcon === "settings") {
      setTimeout(() => {
        dispatch(toggleSettings());
      }, 240);
    }

    if (previousIcon.current === "settings" && activeIcon !== "settings") {
      setTimeout(() => {
        dispatch(toggleSettings());
      }, 120);
    }

    if (activeIcon === "chrome") {
      setTimeout(() => {
        dispatch(toggleChrome());
      }, 240);
    }

    if (previousIcon.current === "chrome" && activeIcon !== "chrome") {
      setTimeout(() => {
        dispatch(toggleChrome());
      }, 120);
    }

    previousIcon.current = activeIcon;
  }, [activeIcon, dispatch]);

  return (
    <S.Menu color={color}>
      <S.Ul>
        {["settings", "chrome", "word"].map((icon) => (
          <S.Li key={icon} onClick={() => handleIconClick(icon)}>
            <Icon href={`${icon}.svg#${icon}`} alt={`logo ${icon}`} />
          </S.Li>
        ))}
        <Bubble activeIcon={activeIcon} />
      </S.Ul>
    </S.Menu>
  );
};

export default Menu;
