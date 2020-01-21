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
      var _aNodes = [];
      function setAttr(dx, dy, minScore){
        let node0 = $('#'+ dx + '-' + dy),
        min0 = parseInt(node0.attr('min'));
        min0 += minScore;
        
        setNodeAttr(node0, min0.toString())
      };
      function setNodeAttr(node, min){
        node.attr("min", min.toString());
        node.children('span').text(min.toString());
      };
      function setNodeMore(x, y, dX, dY, minScore){
        let _node = $('#'+ x + '-' + y),
            min = minScore;
        if(_node.hasClass('node-x')) {
          min = setNodeMore(x + dX, y + dY, dX, dY, minScore * 10);
        } else {
          setNodeAttr(_node, minScore);
        }
        return min;
      }

      function setMinInNode(_x, _y){
        let node0 = $('#'+ _x + '-' + _y);

        if(node0.hasClass('node-x')) {
           let deltaX = _x - x,
              deltaY = _y - y;

           let _min = setNodeMore(_x + deltaX, _y + deltaY, deltaX, deltaY, -100);
           
           if(deltaX === 0 && deltaY === 0) {
            
           } else {
            let _node = $('#'+ (x - deltaX) + '-' + (y - deltaY));
            _aNodes.push({x: x - deltaX, y: y - deltaY, min: _min});

            setNodeAttr(_node, _min + parseInt(_node.attr('min')));
           }
        } else {
          let min = parseInt(node0.attr('min'));
          if(_aNodes.length < 1) {
            min += -1;
          } else {
            _aNodes.forEach(function(e){
              if(_x === e.x && _y === e.y) {
                
              } else {
                min += -1;
              }
            });
          }
          
          setNodeAttr(node0, min.toString());
        }
      }

      var _x = x - 1, _y = y - 1;
      setMinInNode(_x, _y);

      _x = x; _y = y - 1;
      setMinInNode(_x, _y);
      
      _x = x + 1; _y = y - 1;
      setMinInNode(_x, _y);

      _x = x - 1; _y = y;
      setMinInNode(_x, _y);

      _x = x + 1; _y = y;
      setMinInNode(_x, _y);

      _x = x - 1; _y = y + 1;
      setMinInNode(_x, _y);

      _x = x; _y = y + 1;
      setMinInNode(_x, _y);

      _x = x + 1; _y = y + 1;
      setMinInNode(_x, _y);
        
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