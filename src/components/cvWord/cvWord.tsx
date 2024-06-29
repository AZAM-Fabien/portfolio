import * as S from "./cvWord_style";
import TopContainer from "../topContainer/topContainer";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";

const CVWord: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseGarbageCan = () => {
    dispatch(resetActiveIcon());
  };

  return (
    <S.CVWord>
      <TopContainer title="CV PDF" onClick={handleCloseGarbageCan} />
      <S.MainContainer>
        <S.TextH2> CV en Maintenance </S.TextH2>
        <S.TextH2> Merci de patienter ! </S.TextH2>
      </S.MainContainer>
    </S.CVWord>
  );
};

export default CVWord;
