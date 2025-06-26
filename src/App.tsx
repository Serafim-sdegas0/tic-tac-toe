import React from 'react';
import './App.css';

function App() {

  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div style={styles.board}>
      {
        numbers.map((num) => (
          <button style={styles.square} key={num}>{num}</button>
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
