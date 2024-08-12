import * as S from "./cvWord_style";
import TopContainer from "../../components/topContainer/topContainer";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";
import React, { useEffect, useRef } from "react";

const CVWord: React.FC = () => {
  const CVRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CVRef.current?.focus();
  }, []);

  const dispatch = useDispatch();

  const handleCloseCV = () => {
    console.log("Close CV");
    dispatch(resetActiveIcon());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      console.log("Escape pressed");
      dispatch(resetActiveIcon());
    } 
  };


  return (
    <S.CVWord ref={CVRef} tabIndex={0} onKeyDown={handleKeyDown}>
      <TopContainer title="CV PDF" onClick={handleCloseCV} />
      <S.MainContainer>
        <S.TextH2> CV en Maintenance </S.TextH2>
        <S.TextH2> Merci de patienter ! </S.TextH2>
      </S.MainContainer>
    </S.CVWord>
  );
};

export default CVWord;
