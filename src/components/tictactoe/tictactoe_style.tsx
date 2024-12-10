import styled, { keyframes } from "styled-components";

const scaleUp = keyframes` 
    100% {
      transform: scale(1.5);
    }
  `;

const blink = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  `;

export const GameZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 22px);
  width: 100%;
  gap: 10px;
  overflow-x: hidden;
`;

export const TextH1 = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

export const TextH2 = styled.h2`
  &.Player--1 {
    color: red;
  }

  &.Player--2 {
    color: blue;
  }

  &.PlayerWin {
    animation: ${scaleUp} 1s forwards, ${blink} 1s 1s 2;
  }

  &.Draw {
    color: black;
    animation: scaleUp 1s forwards;
  }
`;

export const Table = styled.table`
  table {
    width: 300px;
    height: 300px;
    border-collapse: collapse;
  }
`;

export const Td = styled.td`
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
  }

  &.tick > * {
    background-color: ${({ theme }) => theme.text};
  }
  &.winRed > * {
    background-color: red;
  }

  &.winBlue > * {
    background-color: blue;
  }
`;

export const ResetButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
`;
