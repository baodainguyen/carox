import React, {Component} from 'react';
import Node from './node/Node';
import $ from 'jquery';

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
        const nodes = [], {row, col} = this.props.size;
        const _nodeCen = {col: Math.floor(col/2), row: Math.floor(row/2)}
        for(let _row = 0; _row < row; _row++){
            const currentRow = [];
            for(let _col = 0; _col < col; _col++){
                const currentNode = {
                    _col, 
                    _row,
                    xplayer: false,
                    oplayer: _col === _nodeCen.col && _row === _nodeCen.row,
                    y: row - _row - 1,
                    x: _col
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes});
        if(col > 50){
          this.jQueryDo();
        }
        
    }

    jQueryDo () {
      $(document).ready(function(){
        if($(window).width() < 1313) {
          var outerContent = $('#main-caro');
          var innerContent = $('#main-caro .grid');
          outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
          
          let windowHeight = $(window).height();
          if(windowHeight < 750 + 156){
            outerContent.height(windowHeight - 156);
            outerContent.scrollTop((innerContent.height() - outerContent.height()) / 2);
          }
        }
      });
    }

    onBoardClick (x, y) {
      console.log(x, y);
    }

    render(){
        const {nodes} = this.state,
              {size} = this.props;
        
        
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
                           size={size.row < 5 && size.col < 5 ? '100' : (size.row < 10 && size.col < 10 ? '50' : '')} 
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