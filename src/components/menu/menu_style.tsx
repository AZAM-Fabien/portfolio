import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d7ff0f;
  width: 200px;
  height: 80%;
  border-radius: 10px;
`;

export const Ul = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  position: relative;
  list-style: none;
  z-index: 10;
  display: flex;
`;