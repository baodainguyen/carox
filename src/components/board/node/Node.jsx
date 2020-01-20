import React, {Component} from 'react';
import './Node.css';

export default class Node extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickClass: ""
        };
    }

    onNodeClick = () => {
        const {x, y} = this.props;
        this.setState({clickClass: "node-x"});
        this.props.onNodeClick(x, y);
    }
    
    render(){
        const {xplayer, oplayer, classSize} = this.props;
        var extraClassName = xplayer ? 'node-x' : oplayer ? 'node-o' : '';
        
        return  <div 
                    className={`node ${classSize} ${extraClassName} ${this.state.clickClass}`}
                    onClick={() => this.onNodeClick()}
                >
                    <img alt="" />
                </div>;
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0
};