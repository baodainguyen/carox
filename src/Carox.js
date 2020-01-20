import React from 'react';

import Header from './components/Header'
import Main from './components/Main'
import {gameScreen} from './global'

import './Carox.css';

function Carox() {
  var screenIdx = gameScreen.Home;

  return (
    <div className="Carox">
      <Header />
      <Main />
    </div>
  );
}

export default Carox;
