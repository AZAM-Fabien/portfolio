import * as S from "./chrome_style";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";
import TopContainer from "../../components/topContainer/topContainer";
import Slider from "../../components/slider/slider";
import React, { useRef, useEffect } from "react";

const Chrome: React.FC = () => {
  const chromeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chromeRef.current?.focus();
  }, []);

  const dispatch = useDispatch();

  const handleCloseChrome = () => {
    dispatch(resetActiveIcon());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      console.log("Escape pressed");
      dispatch(resetActiveIcon());
    }
  };

  return (
    <S.Chrome ref={chromeRef} tabIndex={0} onKeyDown={handleKeyDown}>
      <TopContainer title="Chrome" onClick={handleCloseChrome} />
      <S.MainContainer>
        <S.ChromeContainer>
          <S.TextH2>Portfolio</S.TextH2>
          <S.Container>
            <S.PictureWrapper>
              <S.Picture src="Portfolio/Myself.webp" />
              <S.PictureBlur src="Portfolio/Myself.webp" />
            </S.PictureWrapper>
            <S.Story>
              <p>
                {" "}
                Je suis Fabien Azam, jeune développeur front-end passionné.
                Titulaire d'un master en ingénierie biomédicale et ayant
                effectué un stage de recherche en analyse de données médicales
                par machine learning, j'ai acquis une rigueur d'ingénieur qui me
                pousse à toujours aller plus loin dans mes idées, projets et
                connaissances ainsi qu'a surmonter les difficultés qui
                deviennent des challenges. Mon objectif est de maîtriser les
                différentes technologies front-end, en commençant par me
                perfectionner en HTML, CSS, SCSS, JS, React et TypeScript. Je
                m'intéresse particulièrement au développement créatif, notamment
                aux animations et transitions complexes que je souhaite
                apprendre.{" "}
              </p>
            </S.Story>
          </S.Container>
          <S.Container2>
            <S.TextH2>Projets</S.TextH2>
            <S.Story2>
              <p> voici quelques projets sur lesquels j'ai pu travailler. </p>
            </S.Story2>
            <S.ContainerSlider>
              <Slider />
            </S.ContainerSlider>
          </S.Container2>
        </S.ChromeContainer>
      </S.MainContainer>
    </S.Chrome>
  );
};
export default Chrome;
