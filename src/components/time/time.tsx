import React, { useState, useEffect } from 'react';
import * as S from './time_style';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Time: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let color = "#0D1520";
  let colorBg = "#0D1520";

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
      color = "#C2E6FF";
      colorBg = "#0D1520";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
      color = "#FFD1D9";
      colorBg = "#191111";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
      color = "#EEEEEE";
      colorBg = "#111111";
  }
  
  return (
    <S.TimeContainer color={colorBg} >
      <S.Text color={color}>{time}</S.Text>
    </S.TimeContainer>
  );
};

export default Time;
