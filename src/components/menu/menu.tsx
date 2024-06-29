// src/components/menu/Menu.tsx
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveIcon } from "../../redux/iconSlice";
import * as S from "./menu_style";
import Icon from "../icon/icon";
import Bubble from "../bubble/bubble";
import { toggleChrome, toggleSettings } from "../../redux/openSlice";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const activeIcon = useSelector((state: RootState) => state.icon.activeIcon);

  const handleIconClick = (iconName: string) => {
    dispatch(setActiveIcon(iconName));
  };

  const previousIcon = useRef(activeIcon);

  useEffect(() => {
    if (activeIcon === "github") {
      setTimeout(() => {
        window.open(
          "https://github.com/AZAM-Fabien?tab=repositories",
          "_blank"
        );
      }, 240);
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
    <S.Menu>
      <S.Ul>
        {["settings", "chrome", "github"].map((icon) => (
          <S.Li key={icon} onClick={() => handleIconClick(icon)}>
            <Icon src={`${icon}.svg`} alt={icon} />
          </S.Li>
        ))}
        <Bubble activeIcon={activeIcon} />
      </S.Ul>
    </S.Menu>
  );
};

export default Menu;
