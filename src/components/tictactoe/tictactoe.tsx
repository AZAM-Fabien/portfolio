import { useEffect, useState } from "react";
import Cross from "./components/cross";
import Circle from "./components/circle";
import * as S from "./tictactoe_style";

function TicTacToe() {
  const [matrice, setMatrice] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState<boolean>(true);
  const toggleTurn = () => {
    setTurn(!turn);
  };
  const [winner, setWinner] = useState<number>(0);
  const [drawCheck, setDrawCheck] = useState<number>(0);
  const [win, setWin] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const handleClick = (i: number, j: number) => (): void => {
    const newMatrice: number[][] = [...matrice];
    if (newMatrice[i][j] !== 0) return;
    if (winner !== 0) return;
    if (turn === true && newMatrice[i][j] === 0) {
      newMatrice[i][j] = 1;
    }
    if (turn === false && newMatrice[i][j] === 0) {
      newMatrice[i][j] = -1;
    }
    setMatrice(newMatrice);
    toggleTurn();
    setDrawCheck(drawCheck + 1);
  };

  useEffect(() => {
    if (winner !== 0) return;
    for (let i = 0; i < 3; i++) {
      const rowSum: number = matrice[i][0] + matrice[i][1] + matrice[i][2];
      const colSum: number = matrice[0][i] + matrice[1][i] + matrice[2][i];
      const diagSum: number = matrice[0][0] + matrice[1][1] + matrice[2][2];
      const antiDiagSum: number = matrice[0][2] + matrice[1][1] + matrice[2][0];
      if (rowSum === 3) {
        setWinner(1);
        const newWin: number[][] = [...win];
        newWin[i][0] = 1;
        newWin[i][1] = 1;
        newWin[i][2] = 1;
        setWin(newWin);
      } else if (colSum === 3) {
        setWinner(1);
        const newWin: number[][] = [...win];
        newWin[0][i] = 1;
        newWin[1][i] = 1;
        newWin[2][i] = 1;
        setWin(newWin);
      } else if (diagSum === 3) {
        setWinner(1);
        const newWin: number[][] = [...win];
        newWin[0][0] = 1;
        newWin[1][1] = 1;
        newWin[2][2] = 1;
        setWin(newWin);
      } else if (antiDiagSum === 3) {
        setWinner(1);
        const newWin: number[][] = [...win];
        newWin[0][2] = 1;
        newWin[1][1] = 1;
        newWin[2][0] = 1;
        setWin(newWin);
      }

      if (rowSum === -3) {
        setWinner(-1);
        const newWin: number[][] = [...win];
        newWin[i][0] = 1;
        newWin[i][1] = 1;
        newWin[i][2] = 1;
        setWin(newWin);
      } else if (colSum === -3) {
        setWinner(-1);
        const newWin: number[][] = [...win];
        newWin[0][i] = 1;
        newWin[1][i] = 1;
        newWin[2][i] = 1;
        setWin(newWin);
      } else if (diagSum === -3) {
        setWinner(-1);
        const newWin: number[][] = [...win];
        newWin[0][0] = 1;
        newWin[1][1] = 1;
        newWin[2][2] = 1;
        setWin(newWin);
      } else if (antiDiagSum === -3) {
        setWinner(-1);
        const newWin: number[][] = [...win];
        newWin[0][2] = 1;
        newWin[1][1] = 1;
        newWin[2][0] = 1;
        setWin(newWin);
      }
      if (
        drawCheck === 9 &&
        JSON.stringify(win) ===
          JSON.stringify([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ])
      ) {
        setWinner(2);
      }
    }
  }, [drawCheck, matrice, win, winner]);

  const Reset = (): void => {
    setMatrice([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setTurn(true);
    setWinner(0);
    setDrawCheck(0);
    setWin([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };
  return (
    <>
      <S.GameZone>
        <S.TextH1>Tic-Tac-Toe</S.TextH1>
        {winner === 0 ? (
          <S.TextH2 className={turn ? "Player--1" : "Player--2"}>
            {turn ? "Player 1" : "Player 2"}
          </S.TextH2>
        ) : winner === 1 ? (
          <S.TextH2 className=" Player--1 PlayerWin">Player 1 Victory</S.TextH2>
        ) : winner === -1 ? (
          <S.TextH2 className="Player--2 PlayerWin">Player 2 Victory</S.TextH2>
        ) : (
          <S.TextH2 className="Draw">Draw</S.TextH2>
        )}

        <S.Table>
          <tbody>
            <tr>
              <S.Td
                className={
                  winner === 1
                    ? win[0][0] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[0][0] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(0, 0)}
              >
                {matrice[0][0] === 1 ? (
                  <Cross />
                ) : matrice[0][0] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
              <S.Td
                className={
                  winner === 1
                    ? win[0][1] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[0][1] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(0, 1)}
              >
                {matrice[0][1] === 1 ? (
                  <Cross />
                ) : matrice[0][1] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
              <S.Td
                className={
                  winner === 1
                    ? win[0][2] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[0][2] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"}
                onClick={handleClick(0, 2)}
              >
                {matrice[0][2] === 1 ? (
                  <Cross />
                ) : matrice[0][2] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
            </tr>
            <tr>
              <S.Td
                className={
                  winner === 1
                    ? win[1][0] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[1][0] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(1, 0)}
              >
                {matrice[1][0] === 1 ? (
                  <Cross />
                ) : matrice[1][0] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
              <S.Td
                className={
                  winner === 1
                    ? win[1][1] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[1][1] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(1, 1)}
              >
                {matrice[1][1] === 1 ? (
                  <Cross />
                ) : matrice[1][1] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
              <S.Td
                className={
                  winner === 1
                    ? win[1][2] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[1][2] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(1, 2)}
              >
                {matrice[1][2] === 1 ? (
                  <Cross />
                ) : matrice[1][2] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
            </tr>
            <tr>
              <S.Td
                className={
                  winner === 1
                    ? win[2][0] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[2][0] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(2, 0)}
              >
                {matrice[2][0] === 1 ? (
                  <Cross />
                ) : matrice[2][0] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
              <S.Td
                className={
                  winner === 1
                    ? win[2][1] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[2][1] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(2, 1)}
              >
                {matrice[2][1] === 1 ? (
                  <Cross />
                ) : matrice[2][1] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
              <S.Td
                className={
                  winner === 1
                    ? win[2][2] === 1
                      ? "winRed"
                      : "tick"
                    : winner === -1
                    ? win[2][2] === 1
                      ? "winBlue"
                      : "tick"
                    : "tick"
                }
                onClick={handleClick(2, 2)}
              >
                {matrice[2][2] === 1 ? (
                  <Cross />
                ) : matrice[2][2] === -1 ? (
                  <Circle />
                ) : (
                  ""
                )}
              </S.Td>
            </tr>
          </tbody>
        </S.Table>
        <S.ResetButton onClick={Reset}>
          Reset
        </S.ResetButton>
      </S.GameZone>
    </>
  );
}

export default TicTacToe;
