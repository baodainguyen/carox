(this.webpackJsonpcarox=this.webpackJsonpcarox||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),s=(n(15),n(8)),i=n.n(s),u=(n(16),n(9)),l=n(1),m=n(2),d=n(4),h=n(3),f=n(5),v=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.o,a=t?"node-x":n?"node-o":"";return o.a.createElement("div",{className:"node ".concat(a)})}}]),t}(a.Component)),p=(n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={nodes:[],size:{row:30,col:52}},n.guess={block:[]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.size.row;t++){for(var n=[],a=0;a<this.state.size.col;a++){var o={col:a,row:t,x:0===t&&0===a,o:0===t&&a===this.state.size.col-1};n.push(o)}e.push(n)}this.setState({nodes:e})}},{key:"render",value:function(){var e=this.state.nodes;return o.a.createElement("div",{className:"grid"},e.map((function(e,t){return o.a.createElement("div",{key:t},e.map((function(e,t){var n=e.x,a=e.o;return o.a.createElement(v,Object(u.a)({key:t,x:n,o:a,test:"foo"},"test","kappa"))})))})))}}]),t}(a.Component));var b=function(){return o.a.createElement("div",{className:"Carox"},o.a.createElement("img",{src:i.a,className:"Carox-logo",alt:"logo"}),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("carox")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2098febc.chunk.js.map