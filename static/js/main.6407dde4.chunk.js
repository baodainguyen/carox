(this.webpackJsonpcarox=this.webpackJsonpcarox||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=(n(15),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),d=n(9),p=n.n(d),h=(n(16),n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onNodeClick=function(){var e=n.props,t=e.x,a=e.y;n.setState({clickClass:"node-x"}),n.props.onNodeClick(t,a)},n.state={clickClass:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.xplayer,a=t.oplayer,r=t.classSize,o=n?"node-x":a?"node-o":"";return c.a.createElement("div",{className:"node ".concat(r," ").concat(o," ").concat(this.state.clickClass),onClick:function(){return e.onNodeClick()}},c.a.createElement("img",{alt:""}))}}]),t}(a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"carox-header"},c.a.createElement("div",{className:"flex-grow-1"},c.a.createElement("h5",{className:"player"},"Player 1"),c.a.createElement(h,{xplayer:!0})),c.a.createElement("div",{className:"flex-grow-8"},c.a.createElement("img",{src:p.a,className:"Carox-logo",alt:"logo"})),c.a.createElement("div",{className:"flex-grow-1"},c.a.createElement(h,{oplayer:!0}),c.a.createElement("h5",{className:"player"},"Player 2")))}}]),t}(a.Component),b=0,v=1,k=2,E=(n(7),function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"e-menu"},c.a.createElement("div",{className:"menu-button",onClick:function(){return e.props.onMenuClick(v)}},c.a.createElement("h2",null,"Gomoku - caro")),c.a.createElement("div",{className:"menu-button",onClick:function(){return e.props.onMenuClick(k)}},c.a.createElement("h2",null,"Tic Tac Toe")))}}]),t}(a.Component)),y=(n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={nodes:[]},n.turn={xplayer:0,oplayer:0,num:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.props.board.size.row;t++){for(var n=[],a=0;a<this.props.board.size.col;a++){var c={col:a,row:t,xplayer:!1,oplayer:0===a&&0===t,y:this.props.board.size.row-t-1,x:a};n.push(c)}e.push(n)}this.setState({nodes:e})}},{key:"onBoardClick",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e=this,t=this.state.nodes,n=this.props.board.size;return c.a.createElement("div",{className:"grid"},t.map((function(t,a){return c.a.createElement("div",{key:a},t.map((function(t,a){var r=t.xplayer,o=t.oplayer,l=t.x,i=t.y;return c.a.createElement(h,{key:a,xplayer:r,oplayer:o,x:l,y:i,classSize:n.row<5&&n.col<5?"node-100":n.row<10&&n.col<10?"node-50":"node-25",onNodeClick:e.onBoardClick})})))})))}}]),t}(a.Component)),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onMenuClick=function(e){console.log("onMenuClick "+e),n.setState({screenIndex:e})},n.state={screenIndex:b,board:{size:{row:3,col:3}}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.screenIndex,a=t.board;switch(n){case v:return a.size={row:30,col:52},c.a.createElement("div",null,c.a.createElement(y,{board:a}),c.a.createElement("div",{className:"menu-button",onClick:function(){return e.onMenuClick(b)}},c.a.createElement("h2",null,"Back")));case k:return a.size={row:3,col:3},c.a.createElement("div",null,c.a.createElement(y,{board:a}),c.a.createElement("div",{className:"menu-button menu-button-back",onClick:function(){return e.onMenuClick(b)}},c.a.createElement("h2",null,"Back")));default:return c.a.createElement(E,{onMenuClick:this.onMenuClick})}}}]),t}(a.Component);n(19);var x=function(){return c.a.createElement("div",{className:"Carox"},c.a.createElement(f,null),c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(x,null),document.getElementById("carox")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.6407dde4.chunk.js.map