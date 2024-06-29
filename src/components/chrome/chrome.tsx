import * as S from "./chrome_style";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";
import TopContainer from "../topContainer/topContainer";

const Chrome: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseSettings = () => {
    dispatch(resetActiveIcon());
  };
  return (
    <S.Chrome>
      <TopContainer title="Chrome" onClick={handleCloseSettings} />
      <S.MainContainer>
        <S.Container>
          <S.PictureWrapper>
            <S.Picture src="Portfolio/Myself.webp" />
            <S.PictureBlur src="Portfolio/Myself.webp" />
          </S.PictureWrapper>
          <S.Container2>
            <S.TextH2>Portfolio</S.TextH2>
            {/* <S.Slider /> */}
          </S.Container2>
        </S.Container>
        <S.Story>
          <p>
            {" "}
            Je suis Fabien Azam, jeune développeur front-end passionné.
            Titulaire d'un master en ingénierie biomédicale et ayant effectué un
            stage de recherche en analyse de données médicales par machine
            learning, j'ai acquis une rigueur d'ingénieur qui me pousse à
            toujours aller plus loin dans mes idées, projets et connaissances ainsi qu'a surmonter les difficultés.
            Mon objectif est de maîtriser les différentes technologies
            front-end, en commençant par me perfectionner en HTML, CSS, SCSS, JavaScript, React et
            TypeScript. Je m'intéresse particulièrement au développement créatif, notamment aux animations
            et transitions complexes que je souhaite apprendre . Je m'intéresse
            également au back-end, avec l'ambition, d'un jour peut etre, de lancer mon
            propre SaaS.{" "}
          </p>
        </S.Story>
      </S.MainContainer>
    </S.Chrome>
  );
};
export default Chrome;
