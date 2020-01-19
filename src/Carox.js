import React from 'react';
import './Carox.css';
import Board from './components/board/Board'
import Header from './components/Header'

function Carox() {
  return (
    <div className="Carox">
      <Header />
      <Board />
    </div>
  );
}

export default Carox;
