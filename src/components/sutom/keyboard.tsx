import * as S from "./keyboard_style";

interface VirtualKeyboardProps {
    onKeyPress: (key: string) => void;
  }
  
  const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress }) => {
    // ...
    const handleKeyPress = (key: string) => {
      onKeyPress(key);
    };

  return (
    <>
      <S.Keyboard>
        <S.Row>
          <S.Key onClick={() => handleKeyPress('A')}>A</S.Key>
          <S.Key onClick={() => handleKeyPress('Z')}>Z</S.Key>
          <S.Key onClick={() => handleKeyPress('E')}>E</S.Key>
          <S.Key onClick={() => handleKeyPress('R')}>R</S.Key>
          <S.Key onClick={() => handleKeyPress('T')}>T</S.Key>
          <S.Key onClick={() => handleKeyPress('Y')}>Y</S.Key>
          <S.Key onClick={() => handleKeyPress('U')}>U</S.Key>
          <S.Key onClick={() => handleKeyPress('I')}>I</S.Key>
          <S.Key onClick={() => handleKeyPress('O')}>O</S.Key>
          <S.Key onClick={() => handleKeyPress('P')}>P</S.Key>
        </S.Row>
        <S.Row>
          <S.Key onClick={() => handleKeyPress('Q')}>Q</S.Key>
          <S.Key onClick={() => handleKeyPress('S')}>S</S.Key>
          <S.Key onClick={() => handleKeyPress('D')}>D</S.Key>
          <S.Key onClick={() => handleKeyPress('F')}>F</S.Key>
          <S.Key onClick={() => handleKeyPress('G')}>G</S.Key>
          <S.Key onClick={() => handleKeyPress('H')}>H</S.Key>
          <S.Key onClick={() => handleKeyPress('J')}>J</S.Key>
          <S.Key onClick={() => handleKeyPress('K')}>K</S.Key>
          <S.Key onClick={() => handleKeyPress('L')}>L</S.Key>
          <S.Key onClick={() => handleKeyPress('M')}>M</S.Key>
          
        </S.Row>
        <S.Row>
          <S.Key onClick={() => handleKeyPress('W')}>W</S.Key>
          <S.Key onClick={() => handleKeyPress('X')}>X</S.Key>
          <S.Key onClick={() => handleKeyPress('C')}>C</S.Key>
          <S.Key onClick={() => handleKeyPress('V')}>V</S.Key>
          <S.Key onClick={() => handleKeyPress('B')}>B</S.Key>
          <S.Key onClick={() => handleKeyPress('N')}>N</S.Key>
          <S.Key className="backspace" onClick={() => handleKeyPress('Backspace')}>Backspace</S.Key>
          <S.Key className="enter" onClick={() => handleKeyPress('Enter')}>Enter</S.Key>

        </S.Row>
      </S.Keyboard>
    </>
  );
}

export default VirtualKeyboard;
