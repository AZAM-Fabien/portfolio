import styled from "styled-components";

export const Chrome = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundLight2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
  overflow-x: hidden;
`;

export const TextH2 = styled.h2`
  margin: 0;
  font-size: 46px;
  line-height: 46px;
  color: ${({ theme }) => theme.textLight};
`;

export const TextH3 = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.textLight};
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled(ContainerColumn)`
  width: 100%;
  padding: 40px 40px;
  gap: max(4vw, 20px);
  box-sizing: border-box;
`;

export const Container = styled(ContainerRow)`
  width: 100%;
  height: 60%;
  gap: 4vw;
  box-sizing: border-box;

  @media (max-width: 612px) {
    flex-direction: column;
  }
`;

export const PictureWrapper = styled.div`
  position: relative;
  width: 28%;
  height: 100%;
  max-width: 225px;
  max-height: 340px;
  min-width: 160px;
  min-height: 331px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse,
      rgba(255, 255, 255, 0) 70%,
      ${({ theme }) => theme.backgroundLight2} 100%
    );
    filter: blur(10px);
  }
`;

export const Picture = styled.img`
  object-fit: cover;
  object-position: right;
  height: 100%;
  width: 100%;
  clip-path: ellipse(45% 40% at 50% 46%);
`;

export const PictureBlur = styled(Picture)`
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(5px);
  clip-path: none;
  z-index: -1;
`;

export const Container2 = styled(ContainerColumn)`
  width: 100%;
  gap: 4vw;
`;

export const Story = styled.div`
  width: 72%;
  height: auto;
  line-height: 24px;
  font-size: min(2vw, 16px);

  @media (max-width: 612px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const Story2 = styled(Story)`
  width: 100%;
`;

export const ContainerSlider = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
