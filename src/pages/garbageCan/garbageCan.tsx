import * as S from "./garbageCan_style";
import TopContainer from "../../components/topContainer/topContainer";
import { useDispatch } from "react-redux";
import IconDesktop from "../../components/iconDesktop/iconDesktop";
import { resetActiveIcon } from "../../redux/iconSlice";
import { useEffect, useRef } from "react";

const GarbageCan: React.FC = () => {
  const GarbageCanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    GarbageCanRef.current?.focus();
  }, []);

  const dispatch = useDispatch();

  const handleCloseGarbageCan = () => {
    dispatch(resetActiveIcon());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      console.log("Escape pressed");
      dispatch(resetActiveIcon());
    }
  };

  return (
    <S.GarbageCan role="dialog" aria-modal="true" ref={GarbageCanRef} onKeyDown={handleKeyDown} tabIndex={0}>
      <TopContainer title="Corbeille" onClick={handleCloseGarbageCan} />
      <S.TextH3>ici repose en paix </S.TextH3>
      <S.Icon>
        <IconDesktop
          href="bootstrap"
          class="bootstrap"
          text="Bootstrap"
          width="50px"
          height="50px"
          colorText={true}
        />
      </S.Icon>
    </S.GarbageCan>
  );
};

export default GarbageCan;
