import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.textLight};
  height: 20px;
  background-color: ${({ theme }) => theme.activeItemLight};
`;

export const TextH2 = styled.h2`
  margin: 0;
  margin-left: 1rem;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.textLight};
`;

export const TextH3 = styled(TextH2)`
  font-size: 10px;
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.textLight};
  background-color: ${({ theme }) => theme.itemLight};
  border: none;
  height: 100%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.itemLight2};
  }
`;