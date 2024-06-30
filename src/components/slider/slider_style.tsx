import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 612px) {
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

  @media (max-width: 612px) {
    aspect-ratio: 3/2;
    width: 100%;
    height: auto;
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
  bottom: -60px;
  display: flex;
  gap: 10px;
  z-index: 10;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.itemDark};
  color: ${({ theme }) => theme.textDark};
  border: none;
  border-radius: 5px;
`;
