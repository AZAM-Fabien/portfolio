import styled from "styled-components";

export const ColorsBox = styled.button <{ colors: string }>`
    width: 30px;
    height: 30px;
    background-color: ${props => props.colors};
    border: none;
    margin: 4px;
`;