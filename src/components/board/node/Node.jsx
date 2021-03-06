import React, {Component} from 'react';
import './Node.css';

export default class Node extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickClass: ""
        };
    }

    onNodeClick = (extraClassName) => {
        const {clickClass} = this.state;
        if(extraClassName === 'node-o' || clickClass === 'node-x') {
            return;
        }

        const {x, y} = this.props;
        this.setState({clickClass: "node-x"});
        this.props.onNodeClick(x, y);
    }
    
    render(){
        const {xplayer, oplayer, size, x, y} = this.props;
        let extraClassName = xplayer ? 'node-x' : oplayer ? 'node-o' : '';
        let classSize = 'node-' + (size ? size : '25');
        
        return (
            <div
                id={`${x}-${y}`} 
                min="0"
                className={`node ${classSize} ${extraClassName} ${this.state.clickClass}`}
                onClick={() => this.onNodeClick(extraClassName)}
            >
                <span></span>
            </div>
        );
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0
};