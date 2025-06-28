import React, { useState } from 'react';
import './App.css';

type buttonState = {
  num: Number,
  isSelected: Boolean
}

function App() {

  const [buttonStates, setButtonStates] = useState<buttonState[]>([
    { num: 0, isSelected: false },
    { num: 1, isSelected: false },
    { num: 2, isSelected: false },
    { num: 3, isSelected: false },
    { num: 4, isSelected: false },
    { num: 5, isSelected: false },
    { num: 6, isSelected: false },
    { num: 7, isSelected: false },
    { num: 8, isSelected: false },
  ]);

  const handleClick = (num: Number) => {
    const updated = buttonStates.map((bs) =>
      bs.num === num ? { ...bs, isSelected: true } : bs
    );
    setButtonStates(updated);

  }
  return (
    <div style={styles.board}>
      {
        buttonStates.map((bs) => (
          <button style={styles.square} key={bs.num.toString()} onClick={() => handleClick(bs.num)} >{bs.isSelected ? "yes" : "no"}</button>
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
export default App;
