import React from 'react';
import logo from './logo.svg';
import './Carox.css';
import Board from './components/board/Board'

function Carox() {
  return (
    <div className="Carox">
      <img src={logo} className="Carox-logo" alt="logo"/>
      <Board />
    </div>
  );
}

export default Carox;
