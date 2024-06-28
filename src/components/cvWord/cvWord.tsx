import * as S from "./cvWord_style";
import TopContainer from "../topContainer/topContainer";
import { useDispatch } from "react-redux";
import { toggleWord } from "../../redux/openSlice";

const CVWord: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseGarbageCan = () => {
    dispatch(toggleWord());
  };

  return (
    <S.CVWord>
      <TopContainer title="Corbeille" onClick={handleCloseGarbageCan} />
      
    </S.CVWord>
  );
};

export default CVWord;
