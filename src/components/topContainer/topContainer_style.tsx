import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text};
  height: 20px;
  background-color: ${({ theme }) => theme.activeItem};
`;

export const TextH2 = styled.h2`
  margin: 0;
  margin-left: 1rem;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
`;

export const TextH3 = styled(TextH2)`
  font-size: 14px;
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.item};
  border: none;
  height: 100%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.item2};
  }
`;
