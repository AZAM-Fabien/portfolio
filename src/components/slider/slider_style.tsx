import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 3/2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1079px) {
    max-width: 450px;
  }

  @media (max-width: 680px) {
    overflow: hidden;
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
  }
`;

export const Item = styled(motion.div)<{ img: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    aspect-ratio: 3/2;
    width: 100%;
    height: auto;
  }
`;

export const NextImage = styled(Box)`
  position: absolute;
  right: -68%;
  transform: scaleY(0.7) scaleX(0.35);
  z-index: 10000;

  &:hover {
    cursor: pointer;
  }
`;

export const PreviousImage = styled(Box)`
  position: absolute;
  left: -68%;
  transform: scaleY(0.7) scaleX(0.35);
  z-index: 10000;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.textLight};
  font-size: 2em;
  text-shadow: 0 5px 15px ${({ theme }) => theme.itemLight2};

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: -80px;
  display: flex;
  gap: 20px;
  z-index: 10;
  padding-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.itemDark};
  color: ${({ theme }) => theme.textDark};
  border: none;
  border-radius: 5px;
  width: 64px;

  &.next,
  &.previous {
    width: 72px;
    display:none;

    @media (max-width: 680px) {
      display: block;
    }
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.activeItemDark};
  }
`;
