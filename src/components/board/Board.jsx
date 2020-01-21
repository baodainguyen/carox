import React, {Component} from 'react';
import Node from './node/Node';
import $ from 'jquery';

import './Board.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            MinScore: {}
        }
    }
    
    componentDidMount(){
        const nodes = [], {row, col} = this.props.size;
        const _nodeCen = {col: Math.floor(col/2), row: Math.floor(row/2)}
        for(let _row = 0; _row < row; _row++){
            const currentRow = [];
            for(let _col = 0; _col < col; _col++){
              let y = row - _row - 1, x = _col;
              let {MinScore} = this.state;
              MinScore[x.toString() + '_' + y.toString()] = 0;

              this.setState({MinScore});
              
                const currentNode = {
                    _col, 
                    _row,
                    xplayer: false,
                    oplayer: _col === _nodeCen.col && _row === _nodeCen.row,
                    y: y,
                    x: x
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
        (function resizeBoard () {
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
        })();
      });
    }

    onBoardClick (x, y) {
      var _x = x-1, _y = y-1,
          $node = $('#'+ _x + '-' + _y),
          min = parseInt($node.attr('min'));
      
      console.log(this.state, min);
      
      // if(minScore[mScoreKey] === 0) {
          
      //     minScore[mScoreKey] = -1;

      //   } else {
      //     let _minScore = minScore[mScoreKey];
      //     _minScore += -1;

      //       minScore[mScoreKey] = _minScore;
      //   }

      if($node.hasClass('node-x')) {
          //$('#'+ (x-2) + '-' + (y-2) + ' span').text('-100');

        } else {
          let $child = $node.children('span');
          switch(min){
            case -1:

            break;
            default:

            break;
          }
          if(min === 0) {
            min = -1;
            $child.text(min.toString());
          } else {

          }
          //$child.text(minScore[mScoreKey]);
        }
        
        $('#'+ (x-1) + '-' + (y-1) + ' span').text('-1');
        
        $('#'+ (x) + '-' + (y-1) + ' span').text('-1');
        
        $('#'+ (x+1) + '-' + (y-1) + ' span').text('-1');

        $('#'+ (x-1) + '-' + (y) + ' span').text('-1');
        
        $('#'+ (x+1) + '-' + (y) + ' span').text('-1');

        $('#'+ (x-1) + '-' + (y+1) + ' span').text('-1');
        
        $('#'+ (x) + '-' + (y+1) + ' span').text('-1');
        
        $('#'+ (x+1) + '-' + (y+1) + ' span').text('-1');

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