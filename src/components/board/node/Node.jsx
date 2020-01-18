import React, {Component} from 'react';
import './Node.css';

export default class Node extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        const {x, o} = this.props;
        const extraClassName = x ? 'node-x' : o ? 'node-o' : '';
        
        return <div className={`node ${extraClassName}`}></div>;
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0
};