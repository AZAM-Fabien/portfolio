import * as S from "./Home_style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Settings from "../settings/settings";
import Chrome from "../chrome/chrome";
import IconDesktop from "../../components/iconDesktop/iconDesktop";
import GarbageCan from "../garbageCan/garbageCan";
import CVWord from "../cvWord/cvWord";
import { useRef, useEffect } from "react";
import { toggleGarbageCan } from "../../redux/openSlice";
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
  );
  const cvWordIsOpen = useSelector(
    (state: RootState) => state.open.isOpen.cvWord
  );
  const activeIcon = useSelector((state: RootState) => state.icon.activeIcon);

  const dispatch = useDispatch();
  const previousIcon = useRef(activeIcon);

  useEffect(() => {
    if (activeIcon === "garbageCan") {
      setTimeout(() => {
        dispatch(toggleGarbageCan());
      }, 100);
    }

    if (previousIcon.current === "garbageCan" && activeIcon !== "garbageCan") {
      setTimeout(() => {
        dispatch(toggleGarbageCan());
      }, 100);
    }

    if (activeIcon === "github") {
      setTimeout(() => {
        window.open(
          "https://github.com/AZAM-Fabien?tab=repositories",
          "_blank"
        );
      }, 100);
    }

    previousIcon.current = activeIcon;
  }, [activeIcon, dispatch]);

  return (
    <>
      <S.Container>
        <S.PostIt>
          <S.TextPostIt>
            {" "}
            Azam Fabien,  Développeur front-end avec une double formation en ingénierie biomédicale et développement web, je recherche des missions en freelance restant ouvert au CDI, <br/> privilégiant le <br/>télétravail
          </S.TextPostIt>
          <S.ImagePostIt src={`wallpaper/PostIt.webp`} alt="Post-It" />
        </S.PostIt>
        <S.Image src={`wallpaper/${image}.webp`} alt={image} />
        {settingsIsOpen && <Settings />}
        {chromeIsOpen && <Chrome />}
        {garbageCanIsOpen && <GarbageCan />}
        {cvWordIsOpen && <CVWord />}
        <S.IconContainer>
          {[
            { src: "garbageCan", text: "corbeille" },
            { src: "github", text: "github" },
            { src: "settings", text: "settings" },
            { src: "word", text: " CV.PDF" },
            { src: "chrome", text: "chrome" },
          ].map(({ src, text }, index) => (
            <IconDesktop key={index} href={`${src}`} text={`${text}`} />
          ))}
        </S.IconContainer>
      </S.Container>
    </>
  );
}

export default Home;
