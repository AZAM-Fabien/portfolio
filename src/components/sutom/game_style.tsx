import styled from "styled-components";

export const Board = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  width: min(300px, 100%);
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
`;

export const Cube = styled.div`
  width: min(50px, calc(100% / 6));
  height: 50px;
  background-color: rgb(41, 41, 41);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.8em;

  &.correct {
    background-color: rgb(0, 105, 0);
    color: white;
  }

  &.present {
    background-color: rgb(249, 162, 0);
    color: black;
  }

  &.absent {
    background-color: grey;
    color: white;
  }
`;

import Modal from "react-modal";


export const ModalStyle = styled(Modal)`
  background-color: ${({ theme }) => theme.background2};
  color: ${({ theme }) => theme.text};
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 50%;
  height: auto;
  margin: auto;
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.activeItem};
  border: 1px solid rgb(0, 0, 0);
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;