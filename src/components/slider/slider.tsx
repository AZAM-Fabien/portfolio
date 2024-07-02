import React, { useState, useEffect } from "react";
import * as S from "./slider_style";

// Définition du style pour le composant Slider

const images = [
  { src: "Portfolio/ArgentBank.webp" },
  { src: "Portfolio/Kasa.webp" },
  { src: "Portfolio/OhMYFood.webp" },
];

const positions = ["center", "left", "right"];

const imageVariants = {
  center: { x: "0%", scale: 1, zIndex: 5 },
  left: { x: "-50%", scale: 0.7, zIndex: 3 },
  right: { x: "50%", scale: 0.7, zIndex: 2 },
};

const Slider: React.FC = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [centerImage, setCenterImage] = useState(images[0].src);

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

  useEffect(() => {
    // Mettre à jour l'image centrée
    const centerIndex = positionIndexes.indexOf(0);
    setCenterImage(images[centerIndex].src);
  }, [positionIndexes]);

  const handleLive = () => {
    if (centerImage === images[0].src) {
      window.open("https://bank-website-one.vercel.app/", "_blank");
    }

    if (centerImage === images[1].src) {
      window.open("https://kasa-ashy-seven.vercel.app/", "_blank");
    }

    if (centerImage === images[2].src) {
      window.open("https://ohmy-food-ten.vercel.app/", "_blank");
    }
  };

  const handleGit = () => {
    if (centerImage === images[0].src) {
      window.open("https://github.com/AZAM-Fabien/bank-website", "_blank");
    }

    if (centerImage === images[1].src) {  
      window.open("https://github.com/AZAM-Fabien/Kasa", "_blank");
    }

    if (centerImage === images[2].src) {
      window.open("https://github.com/AZAM-Fabien/OhmyFood", "_blank");
    }
  };

  return (
    <>
      <S.Box>
        {images.map((image, index) => (
          <S.Item
            key={index}
            img={image.src}
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          ></S.Item>
        ))}
      </S.Box>
      <S.ButtonContainer>
        <S.Button onClick={handleBack}>Back</S.Button>
        <S.Button onClick={handleLive}>live</S.Button>
        <S.Button onClick={handleGit}>GitHub</S.Button>
        <S.Button onClick={handleNext}>Next</S.Button>
      </S.ButtonContainer>
    </>
  );
};

export default Slider;
