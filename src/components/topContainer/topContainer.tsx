import * as S from "./topContainer_style";

const TopContainer: React.FC<{ title: string; onClick: () => void }> = ({
  title,
  onClick,
}) => {
  return (
    <S.TopContainer  >
      <S.TextH3>{title}</S.TextH3>
      <S.CloseButton
        type="button"
        className="modal-btn"
        onClick={() => {
          onClick();
        }}
      >
        X
      </S.CloseButton>
    </S.TopContainer>
  );
};

export default TopContainer;
