import * as S from "./garbageCan_style";
import TopContainer from "../topContainer/topContainer";
import { useDispatch } from "react-redux";
import IconBureau from "../iconBureau/iconBureau";
import { resetActiveIcon } from "../../redux/iconSlice";

const GarbageCan: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseGarbageCan = () => {
    dispatch(resetActiveIcon());
  };

  return (
    <S.GarbageCan>
      <TopContainer title="Corbeille" onClick={handleCloseGarbageCan} />
      <S.TextH3>ici repose en paix </S.TextH3>
      <S.Icon>
        <IconBureau
          src="garbageCan\bootsrap"
          alt="icon boostrap"
          text="Bootstrap"
          width="50px"
          height="50px"
          colorText = {true}
        />
      </S.Icon>
    </S.GarbageCan>
  );
};

export default GarbageCan;
