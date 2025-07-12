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

  const handleClick = (num: Number) => {
    const square = buttonStates.find(bs => bs.num === num);
    if (square?.symbol) return;

    const updated = buttonStates.map((bs) =>
      bs.num === num ? { ...bs, isSelected: true, symbol: currentPlayer } : bs
    );

    
    setButtonStates(updated);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }
  return (
    <div style={styles.board}>
      {
        buttonStates.map((bs) => (
          <button style={styles.square} key={bs.num.toString()} onClick={() => handleClick(bs.num)} >{bs.symbol}</button>
        ))
      }
    </div>
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
