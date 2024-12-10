import * as S from "./sutomPage_style";
import TopContainer from "../../components/topContainer/topContainer";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";
import { useEffect, useRef } from "react";
import Sutom from "../../components/sutom/sutom";
const SutomPage: React.FC = () => { 
    const SutomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        SutomRef.current?.focus();
    }, []);

    const dispatch = useDispatch();
    const handleCloseSutom = () => {
        dispatch(resetActiveIcon());
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Escape" || event.key === "Esc") {
            console.log("Escape pressed");
            dispatch(resetActiveIcon());
        }
    }

    return (
        <S.Sutom role="dialog" aria-modal="true" ref={SutomRef} onKeyDown={handleKeyDown} tabIndex={0} > 
            <TopContainer title="Sutom" onClick={handleCloseSutom} /> 
            <S.MainContainer>
                <Sutom />
            </S.MainContainer>
        </S.Sutom>
    );
}

export default SutomPage;