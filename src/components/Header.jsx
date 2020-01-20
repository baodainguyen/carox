import React, {Component} from 'react';
import logo from '../logo.svg';
import './Header.css';

import Node from './board/node/Node';

export default class Header extends Component {
	

	render(){

		return <div className="carox-header">
				 <div className="flex-grow-1"> 
				 	<h5 className="player">Player 1</h5>
				 	<Node xplayer={true} classSize={'node-25'}/> 
				 </div>
				 <div className="flex-grow-8">
				 	<img src={logo} className="Carox-logo" alt="logo"/>
				 </div>
				 <div className="flex-grow-1"> 
				 	<Node oplayer={true} classSize={'node-25'}/> 
				 	<h5 className="player">Player 2</h5>
				 </div>
			   </div>
	}

}