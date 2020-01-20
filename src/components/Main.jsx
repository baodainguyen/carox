import React, {Component} from 'react';
import {gameScreen} from '../global'
import Menu from './Menu'
import './Menu.css';
import Board from './board/Board'

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			screenIndex: gameScreen.Home,
			board: {
				size: {row: 3, col: 3}
			}
		}
	}

	onMenuClick = (screenIndex) => {
		console.log('onMenuClick ' + screenIndex);
		this.setState({screenIndex});
	}

	render(){
		const {screenIndex, board} = this.state;
		switch(screenIndex){
			case gameScreen.Caro:
				board.size = {row: 30, col: 52};
				return (
					<div>
						<Board board={board}/>
						<div className="menu-button" 
							onClick={() => this.onMenuClick(gameScreen.Home)}>
							<h2>Back</h2>
						</div>
					</div>
				);
			break;
			case gameScreen.TicTacToe:
				board.size = {row: 3, col: 3};
				return (
					<div>
						<Board board={board}/>
						<div className="menu-button menu-button-back" 
							onClick={() => this.onMenuClick(gameScreen.Home)}>
							<h2>Back</h2>
						</div>
					</div>
				);
			break;
			default:
				return (
					<Menu onMenuClick={this.onMenuClick}/>
				);
			break;
		}
	}
}