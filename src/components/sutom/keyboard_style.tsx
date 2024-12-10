import styled from "styled-components";

export const Keyboard = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  margin-top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: auto;
  width: min(800px, 60%);
  background-color: ${({ theme }) => theme.activeItem};
  border-radius: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Key = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 5vw;
  height: 5vw;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 3px;
  color : ${({ theme }) => theme.text};

  @media (max-width: 700px) {
    flex: 0 1 10vw;
    height: 10vw;
  }

  &.backspace {
    padding: 0 5px;
  }

  &.enter {
    padding: 0 5px;
  }

  &:active {
    background: rgb(44, 44, 44);
  }
`;
