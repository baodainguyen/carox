import React, {Component} from 'react';
import Node from './node/Node';

import './Board.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.turn = {
          xplayer: 0,
          oplayer: 0,
          num: 0
        }
    }
    
    componentDidMount(){
        const nodes = [];
        for(let row = 0; row < this.props.board.size.row; row++){
            const currentRow = [];
            for(let col = 0; col < this.props.board.size.col; col++){
                const currentNode = {
                    col, 
                    row,
                    xplayer: false,
                    oplayer: col === 0 && row === 0,
                    y: this.props.board.size.row - row - 1,
                    x: col
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes});
    }

    onBoardClick (x, y) {
      console.log(x, y);
    }

    render(){
        const {nodes} = this.state,
              {size} = this.props.board;
        
        
        return (
            <div className="grid">
              {nodes.map((row, rowIdx) => {
                    return (
                     <div key={rowIdx}>
                       {row.map((node, nodeIdx) => {
                        const {xplayer, oplayer, x, y} =  node;
                                
                        return (
                         <Node 
                             key={nodeIdx} 
                             xplayer={xplayer} 
                             oplayer={oplayer}
                             x={x}
                             y={y}
                             classSize={size.row < 5 && size.col < 5 ? 'node-100' : (size.row < 10 && size.col < 10 ? 'node-50' : 'node-25')} 
                             onNodeClick={this.onBoardClick}
                          />
                        );}
                      )}
                     </div>
                    );
                })}
            </div>
        );
    }
}