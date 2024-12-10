import styled from 'styled-components';

export const Bubble = styled.div<{ color: string }>`
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color:   ${(props) => props.color};
  left: 12px;
  transition: transform 0.2s, opacity 0.5s;
`;