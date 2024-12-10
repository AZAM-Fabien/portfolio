import styled from "styled-components";

export const GarbageCan = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10;
`;

export const TextH3 = styled.h3`
  margin: 0;
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
`;

export const Icon = styled.div`
  position: relative;
  padding-top: 20px;
  padding-left: 20px;
`;
