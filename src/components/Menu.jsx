import React, {Component} from 'react';
import {gameScreen} from '../global'

import './Menu.css';

export default class Menu extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="e-menu">
				<div className="menu-button" 
				onClick={() => this.props.onMenuClick(gameScreen.Caro)}>
					<h2>Gomoku - caro</h2>
				</div>
				<div className="menu-button" 
				onClick={() => this.props.onMenuClick(gameScreen.TicTacToe)}>
					<h2>Tic Tac Toe</h2>
				</div>
			</div>
		);
	}
}