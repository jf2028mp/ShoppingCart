(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(269)},115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},261:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),i=(a(115),a(19)),l=a(20),s=a(22),u=a(21),m=a(23),d=(a(117),a(119),a(44)),h=a.n(d),p=a(45),E=a.n(p),f=a(12),g=a.n(f),v=a(100),y=a.n(v),b=a(97),O=a.n(b),C=a(93),j=a.n(C),k=a(46),P=a.n(k),S=a(101),N=a.n(S),T=a(92),w=a.n(T),x=a(102),A=a.n(x),q=a(95),I=a.n(q),z=a(98),B=a.n(z),H=a(96),Q=a.n(H),R=a(31),V=a.n(R),W=a(99),_=a.n(W),G=(a(121),a(43)),F=a.n(G),J=a(24),L=a.n(J),M=a(17),U=a(58),$=a.n(U);function D(e){return c.a.createElement(w.a,Object.assign({direction:"up"},e))}var K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1,dense:!1,products:[]},a.finalAmount=function(e){var t=0;return e.forEach(function(e,n){t+=a.amountPerProduct(e)}),t},a.amountPerProduct=function(e){return e.price*e.quantity},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.purchase=function(){L.a.remove("selectedProducts"),a.setState({products:[]}),M.ToastStore.success("Successful Purchase")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"deleteProduct",value:function(e){for(var t=this.state.products,a=0;a<t.length;a++)if(t[a].id===e){t.splice(a,1),M.ToastStore.success("removed from the cart");break}this.setState({products:t}),L.a.set("selectedProducts",t)}},{key:"renderSelectedProducts",value:function(){var e=this;return this.state.products=null==L.a.get("selectedProducts")?[]:L.a.get("selectedProducts"),this.state.products.map(function(t,a){return c.a.createElement(j.a,{key:"selected-product-list".concat(a)},c.a.createElement(I.a,null,c.a.createElement(Q.a,null,c.a.createElement("img",{src:t.image,alt:"Vr",className:"productImage"}))),c.a.createElement(O.a,{secondary:c.a.createElement(n.Fragment,null,c.a.createElement(g.a,{component:"span",className:"inline",color:"textPrimary"},"".concat(t.name)),e.amountPerProduct(t),c.a.createElement(g.a,{component:"span",className:"inline",color:"textPrimary"},"No ".concat(t.quantity)))}),c.a.createElement(B.a,null,c.a.createElement(P.a,{"aria-label":"Delete",onClick:function(a){return e.deleteProduct(t.id)}},c.a.createElement(_.a,null))))})}},{key:"render",value:function(){var e=this.state.dense;return c.a.createElement("div",null,c.a.createElement(P.a,{color:"inherit",onClick:this.handleClickOpen},c.a.createElement(F.a,null)),c.a.createElement(y.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:D},c.a.createElement(h.a,{className:"appBar"},c.a.createElement(E.a,null,c.a.createElement(P.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},c.a.createElement(N.a,null)),c.a.createElement(g.a,{variant:"h6",color:"inherit",className:"flex"},"Cart"),c.a.createElement($.a,{color:"inherit",onClick:this.purchase},"Purchase"))),c.a.createElement("div",{className:"gridMargin"},c.a.createElement(V.a,{item:!0,xs:12,md:6,lg:12},c.a.createElement(g.a,{variant:"h5",className:"titleTextSize"}),c.a.createElement("div",null,c.a.createElement(A.a,{dense:e},this.renderSelectedProducts()))),c.a.createElement("div",{className:"total"},c.a.createElement(g.a,{variant:"h6",color:"inherit",className:"flex"},"Total:".concat(this.finalAmount(this.state.products)))))),c.a.createElement(M.ToastContainer,{position:M.ToastContainer.POSITION.RIGHT,store:M.ToastStore}))}}]),t}(n.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"root"},c.a.createElement(h.a,{position:"static"},c.a.createElement(E.a,null,c.a.createElement(g.a,{variant:"h5",color:"inherit",className:"grow"},"Shoppig Cart"),c.a.createElement(K,null))))}}]),t}(n.Component),Y=a(103),Z=a.n(Y),ee=a(104),te=a.n(ee),ae=a(107),ne=a.n(ae),ce=a(106),re=a.n(ce),oe=a(105),ie=a.n(oe),le=a(47),se=a.n(le),ue=a(108),me=a.n(ue),de=a(109),he=a.n(de),pe=(a(261),[]),Ee=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={count:0,selectedProduct:{},products:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"selectQuantity",value:function(e){this.setState(function(t){return{count:"add"===e?t.count+1:t.count-1}})}},{key:"addToCart",value:function(e,t,a,n,c){this.setState({selectedProduct:{image:e,name:t,price:a,id:n,quantity:c}},function(){if(L.a.get("selectedProducts")){var e=L.a.get("selectedProducts");return e.push(this.state.selectedProduct),void L.a.set("selectedProducts",e)}pe.push(this.state.selectedProduct),L.a.set("selectedProducts",pe),pe=[]}),M.ToastStore.success("added to the cart"),this.setState({count:0})}},{key:"render",value:function(){var e=this.props.product;return c.a.createElement(V.a,{item:!0,xs:12,sm:4,lg:4,xl:3,className:"marginCard"},c.a.createElement(Z.a,null,c.a.createElement(te.a,null,c.a.createElement(ie.a,{src:e.image,title:e.name},c.a.createElement("img",{src:e.image,alt:"cv",width:250,height:230})),c.a.createElement(re.a,null,c.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"ProductName"},e.name),c.a.createElement(g.a,{gutterBottom:!0,variant:"h6",component:"h2"},e.description),c.a.createElement(g.a,{component:"p"},"$".concat(e.price)))),c.a.createElement(ne.a,null,c.a.createElement(se.a,{disabled:0===this.state.count,className:"QuantityChangeContainer",color:"primary","aria-label":"Add",onClick:this.addToCart.bind(this,e.image,e.name,e.price,e.id,e.quantity+this.state.count)},c.a.createElement(F.a,null)),c.a.createElement(se.a,{size:"small",color:"secondary","aria-label":"Add",onClick:this.selectQuantity.bind(this,"add")},c.a.createElement(me.a,null)),c.a.createElement("label",{className:"quantityText",spacing:8},this.state.count),c.a.createElement(se.a,{disabled:0===this.state.count,size:"small",color:"secondary","aria-label":"Add",onClick:this.selectQuantity.bind(this,"des")},c.a.createElement(he.a,null)),c.a.createElement(M.ToastContainer,{position:M.ToastContainer.POSITION.RIGHT,store:M.ToastStore,className:"toast-font-color"}))))}}]),t}(n.Component),fe=[{id:1,name:"THK shoes ",price:550,description:"Running shoes made with soft material very confortable to use",image:"https://novaclutch.typepad.com/novaclutch/images/2007/11/18/gmds1.jpg",quantity:0},{id:2,name:"Avenged Sevenfold T-shirt ",price:250,description:"Very nice T-shirt from album Hail to the king from Avenged Sevenfold ",image:"https://roxxbkk.com/wp-content/uploads/2016/12/avengedsevenfold019-1.jpg",quantity:0},{id:3,name:"Generic pants  ",price:300,description:"elegant pants to wear on special occasions or everyday",image:"https://images-na.ssl-images-amazon.com/images/I/615a3AWAVRL._UY606_.jpg",quantity:0},{id:4,name:"Metallica ",price:650,description:"Very soft",image:"https://images-na.ssl-images-amazon.com/images/I/71kFWqvvhSL._UX385_.jpg",quantity:0}],ge=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(V.a,{container:!0,spacing:8}," ",fe.map(function(e,t){return c.a.createElement(Ee,{product:e,key:"product-list-key".concat(t)})}))}}]),t}(n.Component),ve=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(X,null),c.a.createElement("div",{className:"container"},c.a.createElement(ge,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,2,1]]]);
//# sourceMappingURL=main.337e5d07.chunk.js.map