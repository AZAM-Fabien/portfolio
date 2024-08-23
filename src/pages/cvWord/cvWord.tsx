import * as S from "./cvWord_style";
import TopContainer from "../../components/topContainer/topContainer";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";
import React, { useEffect, useRef } from "react";

const CVWord: React.FC = () => {
  const CVRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CVRef.current?.focus();
  }, []);

  const dispatch = useDispatch();

  const handleCloseCV = () => {
    console.log("Close CV");
    dispatch(resetActiveIcon());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      console.log("Escape pressed");
      dispatch(resetActiveIcon());
    }
  };

  return (
    <S.CVWord role="dialog" aria-modal="true" ref={CVRef} tabIndex={0} onKeyDown={handleKeyDown}>
      <TopContainer title="CV PDF" onClick={handleCloseCV} />
      <S.MainContainer>
        <S.CVMain>
          {/* Column 1 */}

          <S.Column1>
            <S.PresentationFrame>
              <S.Picture alt ="photo de Fabien" src="Portfolio/Myself.webp" />
              <S.NamePositionContainer>
                <S.Name>
                  <S.NameH2>AZAM Fabien</S.NameH2>
                </S.Name>
                <S.PositionH2>
                  Développeur Web
                  <br />
                  front-end
                </S.PositionH2>
              </S.NamePositionContainer>
            </S.PresentationFrame>
            <S.ContactDetails>
              <S.TextH2>Coordonnées</S.TextH2>
              <S.List>
                <S.Phone>
                  <S.TextH3>Téléphone:</S.TextH3>
                  <S.TextH4>06.64.08.06.72</S.TextH4>
                </S.Phone>
                <S.Email>
                  <S.EmailTo href="mailto:azam.fabien@gmail.com">
                    <S.TextH3>Email:</S.TextH3>
                    <S.TextH4>azam.fabien@gmail.com</S.TextH4>
                  </S.EmailTo>
                </S.Email>
                <S.LinkedIn>
                  <S.LinkedInLink
                    href="https://www.linkedin.com/in/azam-fabien-700a7b1b8/"
                    target="_blank"
                  >
                    <S.TextH3>LinkedIn:</S.TextH3>
                    <S.TextH4>azam-fabien-700a7b1b8</S.TextH4>
                  </S.LinkedInLink>
                </S.LinkedIn>
                <S.Address>
                  <S.TextH3>Addresse:</S.TextH3>
                  <S.TextH4>France, Saint-Luc 27930</S.TextH4>
                </S.Address>
              </S.List>
            </S.ContactDetails>
          </S.Column1>

          <S.ContainerColumn>
            {/* Column 2  */}

            <S.Column2>
              <S.ContainerProfile>
                <S.TextShrinkH2>Profil personnel</S.TextShrinkH2>
                <S.ContainerInside>
                  <S.TextShrinkH3>
                    Développeur front-end dynamique avec une double formation en ingénierie biomédicale et développement web, je recherche des missions en freelance, privilégiant le télétravail ou la région parisienne. Rigoureux, ambitieux, et passionné par la résolution de problèmes complexes et l'apprentissage continue, j'applique ces qualités dans la création de solutions web innovantes. Ouvert à des projets en français ou en anglais, je suis également réceptif à des offres en CDD ou CDI.
                  </S.TextShrinkH3>
                </S.ContainerInside>
              </S.ContainerProfile>

              <S.ContainerExperience>
                <S.TextShrinkH2>
                  Expérience professionnelle et associative
                </S.TextShrinkH2>
                <S.ContainerInside>
                  <S.TextShrinkH3>
                    Stage de Recherche (04/2022 à 09/2022) QUANTIF (LABORATOIRE
                    LITIS EA 4108) - Rouen
                  </S.TextShrinkH3>
                  <S.TextShrinkH4>
                    - Prédiction de la récidive des tumeurs cérébrales à partir
                    de données médicales (Python) - Analyse de données médicales
                    pour améliorer les algorithmes de prédiction - Collaboration
                    avec une équipe de chercheurs pour développer des solutions
                    innovantes
                  </S.TextShrinkH4>
                </S.ContainerInside>
                <S.ContainerInside>
                  <S.TextShrinkH3>
                    CA1 Entraineur de Football Américain - 12 ans (10/2019 -
                    05/2021) - FFFA
                  </S.TextShrinkH3>
                  <S.TextShrinkH4>
                    - Evreux Encadrement d'activités sportives en extérieur et
                    gestion du matériel
                  </S.TextShrinkH4>
                </S.ContainerInside>
              </S.ContainerExperience>
            </S.Column2>

            {/* Column 3  */}

            <S.Column3>
              <S.ContainerSkills>
                <S.TextShrinkH2>Compétences</S.TextShrinkH2>
                <S.ContainerInside>
                  <S.TextShrinkH3>
                    • Langages de programmation : HTML, CSS, SCSS, JavaScript,
                    React, TypeScript, Python.
                  </S.TextShrinkH3>
                  <S.TextShrinkH3>
                    • Gestion de données; state (Redux et Redux Toolkit).
                  </S.TextShrinkH3>
                  <S.TextShrinkH3>
                    • Débogage (React Developer Tools) et test unitaire
                    intégration E2E (Jest).
                  </S.TextShrinkH3>
                  <S.TextShrinkH3>
                    • SEO : Optimisation pour les moteurs de recherche, audit
                    SEO (Wave Lighthouse).
                  </S.TextShrinkH3>
                  <S.TextShrinkH3>
                    • Recherche sur publication / veille informationnelle.
                  </S.TextShrinkH3>

                  <S.TextShrinkH2Special>Soft skills</S.TextShrinkH2Special>

                  <S.TextShrinkH3>
                    • Travail en équipe; Communication; Méthodologies : Agile,
                    Scrum.
                  </S.TextShrinkH3>
                  <S.TextShrinkH3>• Résolution de problèmes</S.TextShrinkH3>
                  <S.TextShrinkH3>• Adaptabilité</S.TextShrinkH3>
                  <S.TextShrinkH3>
                    • Curiosité et apprentissage continu
                  </S.TextShrinkH3>
                </S.ContainerInside>
              </S.ContainerSkills>

              <S.ContainerFormation>
                <S.TextShrinkH2>Formation</S.TextShrinkH2>
                <S.ContainerInside>
                  <S.TextShrinkH3>
                    2023 – 2024 : OpenClassroom – développeur intégrateur web.
                    (Niveau 5 bac +2, RNCP36076)
                  </S.TextShrinkH3>
                </S.ContainerInside>
                <S.ContainerInside>
                  <S.TextShrinkH3>
                    2020 – 2022 : UFR Sciences et Techniques - Rouen Master
                    Ingéniérie pour le Bio-médical Ingénierie de la santé –
                    Mention Bien.
                  </S.TextShrinkH3>
                </S.ContainerInside>
              </S.ContainerFormation>
            </S.Column3>
          </S.ContainerColumn>
        </S.CVMain>
      </S.MainContainer>
    </S.CVWord>
  );
};

export default CVWord;
