// src/components/menu/Menu.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveIcon } from "../../redux/iconSlice";
import * as S from "./menu_style";
import Icon from "../icon/icon";
import Bubble from "../bubble/bubble";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const activeIcon = useSelector((state: RootState) => state.icon.activeIcon);

  const handleIconClick = (iconName: string) => {
    dispatch(setActiveIcon(iconName));
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
