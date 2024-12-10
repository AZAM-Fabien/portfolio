import { useState, useEffect, useRef } from "react";
import * as S from "./sutom_style.tsx";
import words from "./words.json";
import Game from "./game";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root") ?? "");

function LetterBoxes() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [normalizedWords, setNormalizedWords] = useState<string[]>([]);
  const [reveler, setReveler] = useState(false);

  const handleClick = () => {
    setReveler(!reveler);
  };

  useEffect(() => {
    const normalized = words.map((word) =>
      word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
    );
    setNormalizedWords(normalized);
  }, []);

  const wordToGuessRef = useRef(wordToGuess);
  useEffect(() => {
    wordToGuessRef.current = wordToGuess;
  }, [wordToGuess]);

  useEffect(() => {
    const randomWord =
      normalizedWords[Math.floor(Math.random() * words.length)];
    setWordToGuess(randomWord);

    if (divRef.current) {
      divRef.current.focus();
    }
  }, [normalizedWords]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <S.Title>Wordle Remake</S.Title>

      <S.OpenButton onClick={openModal}>?</S.OpenButton>
      <S.ModalStyle
        style={{ overlay: { zIndex: 100 } }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="My Modal"
      >
        <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        <S.ModalTitle>tutoriel</S.ModalTitle>
        <S.ModalText>
          Vous avez 6 chances de deviner le mot <br />
          si une lettre est en gris, elle n'est pas dans le mot.
          <br />
          si une lettre est en orange, elle est dans le mot mais mal placée.
          <br />
          si une lettre est en vert, elle est bien positionnée.
        </S.ModalText>
      </S.ModalStyle>
      <S.Background tabIndex={0} ref={divRef}>
        <S.Message>Tapez le mot sur votre clavier</S.Message>
        <S.Message>Appuyez sur entrée pour valider votre mot</S.Message>
        {reveler ? (
          <S.ButtonMots onClick={handleClick}>
            {" "}
            mot à trouver: {wordToGuess}{" "}
          </S.ButtonMots>
        ) : (
          <S.ButtonMots onClick={handleClick}>
            {" "}
            révéler le mot ? cliquez ici{" "}
          </S.ButtonMots>
        )}
        <Game
          wordToGuess={wordToGuess}
          setWordToGuess={setWordToGuess}
          normalizedWords={normalizedWords}
        />
      </S.Background>
    </>
  );
}

export default LetterBoxes;
