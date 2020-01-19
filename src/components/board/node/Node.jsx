import React, {Component} from 'react';
import './Node.css';

export default class Node extends Component {
    constructor(props){
        super(props);
        this.state = {
            eClassName: ""
        };
    }

    onNodeClick = () => {
        const {x, y} = this.props;
        this.setState({eClassName: "node-x"});
        this.props.onNodeClick(x, y);
    }
    
    render(){
        const {xplayer, oplayer} = this.props;
        const extraClassName = xplayer ? 'node-x' : oplayer ? 'node-o' : '';
        
        return  <div 
                    className={`node ${extraClassName} ${this.state.eClassName}`}
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