import styled from "styled-components";


export const IconBureau = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4vw;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.h2`
  font-size: 12px;
  margin: 0;
  color: ${({ color, theme }) => (color ? theme.textLight : theme.textDark)};
`;
