import styled from "styled-components";


export const CVWord = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundLight2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
`;

export const MainContainer = styled.div`
  height: calc(100% - 22px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CVMain = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 30px;
  margin: auto;
  height: 100%;


  @media (max-width: 1439px) {
    gap: 20px;
  

  @media (max-width: 1079px) {
    flex-direction: column;
    padding: 30px;
    height: auto;
  }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  gap: 30px;

  @media (max-width: 1439px) {
    gap: 20px;
  }
`;

// *********Column 1***********

export const Column1 = styled(Column)`
  width: 260px;

  @media (max-width: 1079px) {
    flex-direction: row;
    width : 100%;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const PresentationFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 75px;

  @media (max-width: 1079px) {
    width: 260px;
  }
`;

export const Picture = styled.img`
  position: absolute;
  top: -75px;
  object-fit: cover;
  aspect-ratio: 1/1;
  width: 150px;
  border-radius: 50%;
`;

export const NamePositionContainer = styled.div`
  background-color: ${({ theme }) => theme.activeItemLight};
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: 20px;
  gap: 10px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
  padding-bottom: 10px;
  
`;

export const Name = styled.address`
  margin-top: 40px;
`;
export const NameH2 = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.textLight};
  margin: 0;
`;

export const PositionH2 = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.textLight};
  margin: 0;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1079px) {
    width: 260px;
  }
`;

export const TextH2 = styled.h2`
  margin: 0;
  font-size: 36px;
  line-height: 36px;
  color: ${({ theme }) => theme.activeItemLight};

  @media (max-width: 1439px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const TextH3 = styled.h3`
  font-size: 21px;
  color: ${({ theme }) => theme.textLight};
  margin: 0;

  @media (max-width: 1439px) {
    font-size: 16px;
  }
`;

export const TextH4 = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.textLight};
  margin: 0;
  margin-left: 8px;

  @media (max-width: 1439px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

export const Phone = ListItem;

export const Email = ListItem;

export const EmailTo = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textLight};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    color: ${({ theme }) => theme.activeItemLight};

    &:hover > h3,h4 {
      color: ${({ theme }) => theme.activeItemLight};
    }
  }
`;

export const LinkedIn = ListItem;

export const LinkedInLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textLight}; 

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    color: ${({ theme }) => theme.activeItemLight};

    &:hover > h3,h4 {
      color: ${({ theme }) => theme.activeItemLight};
    }
  }
`;

export const Address = ListItem;

// *********Column 2 + 3***********

export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;

  @media (max-width: 1439px) {
    gap: 20px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

// *********Column 2***********

export const Column2 = styled(Column)`
  max-width: 500px;
  height: 80%;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

const ContainerCV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  gap: 20px;
  background-color: ${({ theme }) => theme.backgroundLight};
  border-radius: 20px;
  padding: 20px 0;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 1439px) {
    gap: 12px;
  }
`;

export const ContainerProfile = ContainerCV;

export const ContainerExperience = ContainerCV;

export const ContainerInside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 5px;
  padding: 0 40px;
  box-sizing: border-box;
`;

export const TextShrinkH2 = styled(TextH2)`
  margin: 0 15px;
  text-align: center;
`;

export const TextShrinkH3 = styled(TextH3)`
  font-size: 16px;
  text-align: justify;

  @media (max-width: 1439px) {
    font-size: 14px;
  }
`;

export const TextShrinkH4 = styled(TextH4)`
  font-size: 14px;
  text-align: justify;

  @media (max-width: 1439px) {
    font-size: 12px;
  }
`;

// *********Column 3***********

export const Column3 = styled(Column)`
  max-width: 500px;
  height: 80%;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const TextShrinkH2Special = styled(TextShrinkH2)`
  margin: 4px 15px;
`;

export const ContainerSkills = ContainerCV;
export const ContainerFormation = ContainerCV;
