(this.webpackJsonpcarox=this.webpackJsonpcarox||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(14),a(15),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),p=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onNodeClick=function(){var e=a.props,t=e.x,n=e.y;a.setState({eClassName:"node-x"}),a.props.onNodeClick(t,n)},a.state={eClassName:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.xplayer,n=t.oplayer,r=a?"node-x":n?"node-o":"";return o.a.createElement("div",{className:"node ".concat(r," ").concat(this.state.eClassName),onClick:function(){return e.onNodeClick()}},o.a.createElement("img",{alt:""}))}}]),t}(n.Component)),d=(a(17),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={nodes:[],size:{row:30,col:52}},a.turn={xplayer:0,oplayer:0,num:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.size.row;t++){for(var a=[],n=0;n<this.state.size.col;n++){var o={col:n,row:t,xplayer:!1,oplayer:0===n&&0===t,y:this.state.size.row-t-1,x:n};a.push(o)}e.push(a)}this.setState({nodes:e})}},{key:"onBoardClick",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e=this,t=this.state.nodes;return o.a.createElement("div",{className:"grid"},t.map((function(t,a){return o.a.createElement("div",{key:a},t.map((function(t,a){var n=t.xplayer,r=t.oplayer,c=t.x,l=t.y;return o.a.createElement(p,{key:a,xplayer:n,oplayer:r,x:c,y:l,onNodeClick:e.onBoardClick})})))})))}}]),t}(n.Component)),h=a(8),f=a.n(h),y=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"carox-header"},o.a.createElement("div",{className:"flex-grow-1"},o.a.createElement("h5",{className:"player"},"Player 1"),o.a.createElement(p,{xplayer:!0})),o.a.createElement("div",{className:"flex-grow-8"},o.a.createElement("img",{src:f.a,className:"Carox-logo",alt:"logo"})),o.a.createElement("div",{className:"flex-grow-1"},o.a.createElement(p,{oplayer:!0}),o.a.createElement("h5",{className:"player"},"Player 2")))}}]),t}(n.Component));var v=function(){return o.a.createElement("div",{className:"Carox"},o.a.createElement(y,null),o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("carox")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.228cb140.chunk.js.map