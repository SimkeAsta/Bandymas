(this["webpackJsonpfinal-app"]=this["webpackJsonpfinal-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),o=a.n(r);a(38),a(29),a(39);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);var l=a(5),s=a(7),i=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/",className:"nav-link"},"Products")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/admin",className:"nav-link"},"Admin")),c.a.createElement("form",{className:"form-inline"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"}))),c.a.createElement(s.b,{to:"/cart"},c.a.createElement("button",{type:"button",className:"btn btn-light"},c.a.createElement("i",{className:"fas fa-cart-plus"}),"Cart items")))))},m=a(10),p=a(11),u=a(13),d=a(12),h=a(14),b={card:{width:"18rem"},image:{height:"200px"}},v=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card",style:b.card},c.a.createElement("img",{src:this.props.productImage,className:"card-img-top",alt:this.props.productTitle,style:b.image}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},this.props.productTitle),c.a.createElement("p",{className:"card-text"},this.props.productDescription),c.a.createElement("p",{className:"card-text"},this.props.productPrice," Eur"),c.a.createElement(s.b,{to:"/products/".concat(this.props.productTitle)},c.a.createElement("button",{className:"btn btn-warning",onClick:this.props.onDetailsClick},"Details"))))}}]),t}(n.Component),E=function(e){var t=e.products.map((function(t,a){return c.a.createElement(v,{key:a,productId:t.productId,productImage:t.productImage,productTitle:t.productTitle,productDescription:t.productDescription,productPrice:t.productPrice,onDetailsClick:function(a){return e.onDetailsClick(a,t.productTitle)}})}));return c.a.createElement("div",{className:"row"},t)},f=a(32),g=a.n(f),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleDetailsClick=function(e,t){console.log(t),e.preventDefault(),a.props.history.push("/products/"+t)},a.state={products:[]},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:8080/api/products").then((function(t){console.log(t),e.setState({products:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(E,{products:this.state.products,onDetailsClick:this.handleDetailsClick})))}}]),t}(n.Component);o.a.render(c.a.createElement(s.a,null,c.a.createElement(i,null),c.a.createElement(l.a,{exact:!0,path:"/",component:N})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ca59acb3.chunk.js.map