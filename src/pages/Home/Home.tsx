import * as S from "./Home_style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Settings from "../settings/settings";
import Chrome from "../chrome/chrome";
import IconDesktop from "../../components/iconDesktop/iconDesktop";
import GarbageCan from "../garbageCan/garbageCan";
import CVWord from "../cvWord/cvWord";
import { useRef, useEffect } from "react";
import { toggleGarbageCan, toggleSutom, toggleTicTacToe } from "../../redux/openSlice";
import { useDispatch } from "react-redux";
import TicTacToePage from './../tictactoe/tictactoePage';
import SutomPage from "../sutomPage/sutomPage";

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
  const ticTacToeIsOpen = useSelector(
    (state: RootState) => state.open.isOpen.tictactoe
  );
  const sutomIsOpen = useSelector(
    (state: RootState) => state.open.isOpen.sutom
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

    if (activeIcon === "tictactoe") {
      setTimeout(() => {
        dispatch(toggleTicTacToe());
      }, 100);
    }

    if (previousIcon.current === "tictactoe" && activeIcon !== "tictactoe") {
      setTimeout(() => {
        dispatch(toggleTicTacToe());
      }, 100);
    }

    if (activeIcon === "sutom") {
      setTimeout(() => {
        dispatch(toggleSutom());
      }, 100);
    }

    if (previousIcon.current === "sutom" && activeIcon !== "sutom") {
      setTimeout(() => {
        dispatch(toggleSutom());
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

  let colorBg = "#0D1520";
  let colorText = "#113264";

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  if (theme.background === "#0D1520" || theme.background === "#FBFDFF") {
    colorBg = "#0D1520";
    colorText = "#113264";
  }
  if (theme.background === "#191111" || theme.background === "#FFFCFC") {
    colorBg = "#191111";
    colorText = "#641723";
  }
  if (theme.background === "#111111" || theme.background === "#FCFCFC") {
    colorBg = "#111111";
    colorText = "#202020";
  }

  return (
    <>
      <S.Container color={colorBg}>
        <S.PostIt>
          <S.TextPostIt color={colorText}>
            {" "}
            Azam Fabien, Développeur front-end avec une double formation en
            ingénierie biomédicale et développement web, je recherche des
            missions en freelance restant ouvert au CDI, <br /> privilégiant le{" "}
            <br />
            télétravail
          </S.TextPostIt>
          <S.ImagePostIt src={`wallpaper/PostIt.webp`} alt="Post-It" />
        </S.PostIt>
        <S.Image src={`wallpaper/${image}.webp`} alt={image} />
        {settingsIsOpen && <Settings />}
        {chromeIsOpen && <Chrome />}
        {garbageCanIsOpen && <GarbageCan />}
        {cvWordIsOpen && <CVWord />}
        {ticTacToeIsOpen && <TicTacToePage/>}
        {sutomIsOpen && <SutomPage/>}
        <S.IconContainer>
          {[
            { src: "garbageCan", text: "corbeille" },
            { src: "github", text: "github" },
            { src: "settings", text: "settings" },
            { src: "word", text: " CV.PDF" },
            { src: "chrome", text: "chrome" },
            { src: "tictactoe", text: "tictactoe" },
            { src: "sutom", text: "sutom" },
          ].map(({ src, text }, index) => (
            <IconDesktop key={index} href={`${src}`} text={`${text}`} />
          ))}
        </S.IconContainer>
      </S.Container>
    </>
  );
}

export default Home;
