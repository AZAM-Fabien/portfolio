// src/components/menu/Menu.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveIcon } from "../../redux/iconSlice";
import * as S from "./menu_style";
import Icon from "../icon/icon";
import Bubble from "../bubble/bubble";
import { openSettings } from "../../redux/SettingsSlice";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const activeIcon = useSelector((state: RootState) => state.icon.activeIcon);

  const handleIconClick = (iconName: string) => {
    dispatch(setActiveIcon(iconName));
    if (iconName === "github") {
      setTimeout(() => {
        window.open(
          "https://github.com/AZAM-Fabien?tab=repositories",
          "_blank"
        );
      }, 580);
    }

    if (iconName === "settings") {
      setTimeout(() => {
        dispatch(openSettings());
      }, 580);
    }
  };

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
