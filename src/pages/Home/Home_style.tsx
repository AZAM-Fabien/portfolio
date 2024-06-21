import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const h2Layout = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2.5vw;
  width: 100%;
  height: 15.5vw;
  min-height: 110px;
`;

export const h2 = styled.h2`
  background: black;
  border-radius: 2.5vw;
  height: 100%;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3.4vw;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 20px;
  }
`;

const gap = "4.4vw";

export const container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 2.5vw;
  gap: ${gap};
  padding: 56px 50px;
  margin: 50px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    background-color: transparent;
  }
`;

export const link = styled(NavLink)`
  position: relative;
  display: flex;
  aspect-ratio: 1/1;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 1020px) {
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const oppacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(10, 10, 10, 0) 42%,
    rgba(4, 4, 4, 0.2) 99.99%,
    rgba(0, 0, 0, 0.5) 100%
  );
  margin: 0;
`;
export const h3 = styled.h3`
  color: #fff;
  padding: 0.3vw 0.5vw 0.3vw 0.5vw;
  margin-right: 2vw;
  font-family: Montserrat;
  font-size: 1.2vw;
  font-weight: 700;
  line-height: 142.6%; /* 25.668px */
  position: absolute;
  bottom: 0vw;
  left: 1.4vw;

  @media (max-width: 1020px) {
    font-size: 1.5vw;
  }

  @media (max-width: 768px) {
    font-size: 3.6vw;
  }
`;
