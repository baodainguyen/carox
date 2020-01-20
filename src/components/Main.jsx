import React, {Component} from 'react';
import {gameScreen} from '../global'
import Menu from './Menu'
import './Menu.css';
import Board from './board/Board'

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			screenIndex: gameScreen.Home
		}
	}

	onMenuClick = (screenIndex) => {
		this.setState({screenIndex});
	}

	render(){
		const {screenIndex} = this.state;
		switch(screenIndex){
			case gameScreen.Caro:
				
				return (
					<div>
						<div id="main-caro">
							<Board size={{row: 30, col: 52}}/>
						</div>
						<div className="menu-button menu-button-back" 
							onClick={() => this.onMenuClick(gameScreen.Home)}>
							<h2>Back</h2>
						</div>
					</div>
				);
			
			case gameScreen.TicTacToe:
				
				return (
					<div>
						<div id="tic-tac-toe">
							<Board size={{row: 3, col: 3}}/>
						</div>
						<div className="menu-button menu-button-back" 
							onClick={() => this.onMenuClick(gameScreen.Home)}>
							<h2>Back</h2>
						</div>
					</div>
				);
			
			default:
				return (
					<Menu onMenuClick={this.onMenuClick}/>
				);
			
		}
	}
}