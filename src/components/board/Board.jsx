import React, {Component} from 'react';
import Node from './node/Node';

import './Board.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            size: {row: 30, col: 52}
        };
        this.guess = {
          block: []
        }
    }

    
    componentDidMount(){
        const nodes = [];
        for(let row = 0; row < this.state.size.row; row++){
            const currentRow = [];
            for(let col = 0; col < this.state.size.col; col++){
                const currentNode = {
                    col, 
                    row,
                    x: row === 0 && col === 0,
                    o: row === 0 && col === this.state.size.col - 1
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes});
    }

    render(){
        const {nodes} = this.state;
        
        
        return (
            <div className="grid">
              {nodes.map((row, rowIdx) => {
                    return (
                     <div key={rowIdx}>
                       {row.map((node, nodeIdx) => {
                        const {x, o}=  node;
                                
                        return (
                         <Node 
                             key={nodeIdx} 
                             x={x} 
                             o={o} 
                             test={'foo'}
                             test={'kappa'}></Node>
                        );}
                      )}
                     </div>
                    );
                })}
            </div>
        );
    }
}