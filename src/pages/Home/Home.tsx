import * as S from "./Home_style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Settings from "../settings/settings";
import Chrome from "../chrome/chrome";
import IconBureau from "../../components/iconBureau/iconBureau";
import GarbageCan from "../garbageCan/garbageCan";
import CVWord from "../cvWord/cvWord";
import { useRef, useEffect } from "react";
import { toggleGarbageCan, toggleWord } from "../../redux/openSlice";
import { useDispatch } from "react-redux";


function Home() {
  const image = useSelector((state: RootState) => state.image.activeImage);
  const settingsIsOpen = useSelector(
    (state: RootState) => state.open.isOpen.settings
  );
  const garbageCanIsOpen = useSelector(
    (state: RootState) => state.open.isOpen.garbageCan
  );
  const chromeIsOpen = useSelector(
    (state: RootState) => state.open.isOpen.chrome
  )
  const wordIsOpen = useSelector((state: RootState) => state.open.isOpen.word);
  const activeIcon = useSelector((state: RootState) => state.icon.activeIcon);

  const dispatch = useDispatch();
  const previousIcon = useRef(activeIcon);

  useEffect(() => {
    
    if (activeIcon === "iconBureau/garbageCan") {
      setTimeout(() => {
        dispatch(toggleGarbageCan());
      }, 100);
    }

    if (previousIcon.current === "iconBureau/garbageCan" && activeIcon !== "iconBureau/garbageCan") {
      setTimeout(() => {
        dispatch(toggleGarbageCan());
      }, 100);
    }

    if (activeIcon === "iconBureau/word") {
      setTimeout(() => {
        dispatch(toggleWord());
      }, 100);
    }

    if (previousIcon.current === "iconBureau/word" && activeIcon !== "iconBureau/word") {
      setTimeout(() => {
        dispatch(toggleWord());
      }, 100);
    }

    previousIcon.current = activeIcon;

  }, [activeIcon, dispatch]);

  return (
    <>
      <S.Container>
        <S.Image src={`wallpaper/${image}.webp`} alt={image} />
        {settingsIsOpen && <Settings />}
        {chromeIsOpen && <Chrome />}
        {garbageCanIsOpen && <GarbageCan />}
        {wordIsOpen && <CVWord />}
        <S.IconContainer>
          {[
            { src: "garbageCan", alt: "icon poubelle", text: "corbeille" },
            { src: "word", alt: "icon word", text: " CV.PDF" },
          ].map(({ src, alt, text }, index) => (
            <IconBureau
              key={index}
              src={`iconBureau/${src}`}
              alt={`${alt}`}
              text={`${text}`}
            />
          ))}
        </S.IconContainer>
      </S.Container>
    </>
  );
}

export default Home;
