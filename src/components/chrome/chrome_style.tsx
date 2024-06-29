import styled from "styled-components";

export const Chrome = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundLight2};
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
`;

export const TextH2 = styled.h2`
  margin: 0;
  font-size: 46px;
  line-height: 20px;
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
  height: calc(100% - 22px);
  padding: 80px 40px;
  gap: 4vw;
  box-sizing: border-box;
`;

export const Container = styled(ContainerRow)`
  width: 100%;
  height: 60%;
  gap: 4vw;
  box-sizing: border-box;
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

export const Container2 = styled(ContainerRow)`
  width: 72%;
  height: 100%;
  gap: 4vw;
`;

export const Story = styled.div`
  width: 100%;
  height: 40%;
`;
