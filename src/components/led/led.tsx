import * as S from "./led_styled.tsx";

interface LedProps {
  delay: number;
}

const Led: React.FC<LedProps> = ({ delay }) => {
  return <S.Led $delay={delay} />;
};

export default Led;
