import React from 'react';
import './App.css';

function App() {

  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      Hello World.
      {
        numbers.map((num) => (
          <>{num}</>
        ))
      }
    </>
  );
}

export default App;
