import * as S from "./tictactoePage_style";
import TopContainer from "../../components/topContainer/topContainer";
import { useDispatch } from "react-redux";
import { resetActiveIcon } from "../../redux/iconSlice";
import { useEffect, useRef } from "react";
import TicTacToe from "../../components/tictactoe/tictactoe";

const TicTacToePage: React.FC = () => { 
    const TicTacToeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        TicTacToeRef.current?.focus();
    }, []);

    const dispatch = useDispatch();
    const handleCloseTicTacToe = () => {
        dispatch(resetActiveIcon());
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Escape" || event.key === "Esc") {
            console.log("Escape pressed");
            dispatch(resetActiveIcon());
        }
    }

    return (
        <S.Tictactoe role="dialog" aria-modal="true" ref={TicTacToeRef} onKeyDown={handleKeyDown} tabIndex={0} > 
            <TopContainer title="Tic Tac Toe" onClick={handleCloseTicTacToe} /> 
            <TicTacToe />
        </S.Tictactoe>
    );
}

export default TicTacToePage;