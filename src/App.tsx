import { useState } from 'react';
import './App.css';

type buttonState = {
  num: Number;
  symbol: string;
}

function App() {

  const [buttonStates, setButtonStates] = useState<buttonState[]>
    (Array.from({ length: 9 }, (_, i) => ({ num: i, symbol: '' }))
    );
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [count, setCount] = useState(0)
  const [xcount, setxCount] = useState(0)

  const handleClick = (num: Number) => {
    const square = buttonStates.find(bs => bs.num === num);
    if (square?.symbol) return;

    const updated = buttonStates.map((bs) =>
      bs.num === num ? { ...bs, isSelected: true, symbol: currentPlayer } : bs
    );



    setButtonStates(updated);

    const winner = checkWinner(updated);
    if (winner) {
      if (winner === 'X') setCount(prev => prev + 1);
      else if (winner === 'O') setxCount(prev => prev + 1);
      
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };
  const checkWinner = (board: buttonState[]): 'X' | 'O' | null => {
    for (let combo of winCombinations) {
      const [a, b, c] = combo;
      if (
        board[a].symbol &&
        board[a].symbol === board[b].symbol &&
        board[a].symbol === board[c].symbol
      ) {
        return board[a].symbol as 'X' | 'O'
      }
    }
    return null;
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Player X Wins: {count}</h2>
        <h2>Player O Wins: {xcount}</h2>
      </div>
      <div style={styles.board}>
        {
          buttonStates.map((bs) => (
            <button style={styles.square} key={bs.num.toString()} onClick={() => handleClick(bs.num)} >{bs.symbol}</button>
          ))
        }
      </div>
    </>
  );
}
const styles = {
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridGap: '5px',
    marginTop: '50px',
    justifyContent: 'center',
  },
  square: {
    width: '100px',
    height: '100px',
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
export const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
export default App;
