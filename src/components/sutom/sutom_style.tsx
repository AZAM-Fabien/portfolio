import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin: 15px 0;
  font-size: 28px;
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

export const OpenButton = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  border: 1px solid rgb(0, 0, 0);
  background-color: ${({ theme }) => theme.activeItem};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  font-size: 24px;
  padding: 0px 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.activeItem};;
  border: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const ModalText = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const Background = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  outline: none;
`;

export const Message = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 22px;
`;

export const ButtonMots = styled(Message)`
  &:hover {
    cursor: pointer;
  }
`;
