import React, { useState } from "react";
import * as S from "./slider_style";

// Définition du style pour le composant Slider

const images = [
  { src: "Portfolio/ArgentBank.webp", text: "live on Vercel" },
  { src: "Portfolio/Kasa.webp", text: "live on Vercel" },
  { src: "Portfolio/OhMYFood.webp", text: "live on Vercel" },
];

const positions = ["center", "left", "right"];

const imageVariants = {
  center: { x: "0%", scale: 1, zIndex: 5 },
  left: { x: "-50%", scale: 0.7, zIndex: 3 },
  right: { x: "50%", scale: 0.7, zIndex: 2 },
};

const Slider: React.FC = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 2) % 3
      );
      return updatedIndexes;
    });
  };

  const handleClick = (site: string) => {
    if (site === "Portfolio/ArgentBank.webp") {
      window.open(
        "https://vercel.com/azam-fabiens-projects/bank-website_backend_on_github",
        "_blank"
      );
    } else if (site === "Portfolio/Kasa.webp") {
      window.open(
        "https://vercel.com/azam-fabiens-projects/kasa",
        "_blank"
      );
    } else if (site === "Portfolio/OhMYFood.webp") {
      window.open(
        "https://vercel.com/azam-fabiens-projects/ohmy-food",
        "_blank"
      );
    }
  };

  return (
    <>
      <S.Box>
        {images.map((image, index) => (
          <S.Item
            key={index}
            img={image.src}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <S.Text onClick={() => handleClick(image.src)}>{image.text}</S.Text>
          </S.Item>
        ))}
      </S.Box>
      <S.ButtonContainer>
        <S.Button onClick={handleBack}>Back</S.Button>
        <S.Button onClick={handleNext}>Next</S.Button>
      </S.ButtonContainer>
    </>
  );
};

export default Slider;
