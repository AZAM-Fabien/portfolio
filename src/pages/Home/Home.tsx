import * as S from "./Home_style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Settings from "../../components/settings/settings";
import IconBureau from "../../components/iconBureau/iconBureau";
import GarbageCan from "../../components/garbageCan/garbageCan";
import CVWord from "../../components/cvWord/cvWord";

function Home() {


  const image = useSelector((state: RootState) => state.image.activeImage);
  const settingsIsOpen = useSelector((state: RootState) => state.open.isOpen.settings);
  const garbageCanIsOpen = useSelector((state: RootState) => state.open.isOpen.garbageCan);
  const wordIsOpen = useSelector((state: RootState) => state.open.isOpen.word);



  return (
    <>
      <S.Container>
        <S.Image src={`wallpaper/${image}.webp`} alt={image} />
        {settingsIsOpen && <Settings />}
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
