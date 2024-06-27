import * as S from "./Home_style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Settings from "../../components/settings/settings";

function Home() {

  const image = useSelector((state: RootState) => state.image.activeImage);
  const isOpen = useSelector((state: RootState) => state.settings.isOpen);
  
  return (
    <>
      <S.Container> 
        <S.Image src={`wallpaper/${image}.webp`} alt={image} />
        {isOpen && <Settings />}
      </S.Container>
    </>
  );
}

export default Home;
