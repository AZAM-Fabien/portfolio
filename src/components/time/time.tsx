import React, { useState, useEffect } from 'react';
import * as S from './time_style';

const Time: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.TimeContainer>
      <S.Text>{time}</S.Text>
    </S.TimeContainer>
  );
};

export default Time;
