import styled from "styled-components";

export const Menu = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.itemDark};
  width: 220px;
  height: 90%;
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