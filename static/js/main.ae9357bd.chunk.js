(this.webpackJsonptechgig=this.webpackJsonptechgig||[]).push([[0],{27:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),r=n.n(s),c=n(14),i=n.n(c),o=(n(27),n(3)),l=n(10),u=n(26),d=n(16),h=n(17),j=n(21),b=n(19),g=n(36),p=n.n(g),m=(n(64),n(70)),v="LOGIN",O="LOGOUT",f=function(e,t){var n=!1;return"foo"===e.username&&"bar"===e.password&&(localStorage.setItem("active",!0),n=!0,t.history.push("/home")),{type:v,payload:n}},x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={photos:[],isLoading:!1,page:0,prevY:0},e.handleLogout=function(){e.props.logoutUser(e.props.history)},e}return Object(h.a)(n,[{key:"getAlbums",value:function(e){var t=this;this.setState({isLoading:!0}),p.a.get("https://jsonplaceholder.typicode.com/photos?_page=".concat(e,"&_limit=10")).then((function(e){return t.setState((function(t){return{photos:[].concat(Object(u.a)(t.photos),Object(u.a)(e.data)),isLoading:!1}}))}))}},{key:"observerHandler",value:function(e){var t=this.state,n=t.photos,a=t.prevY,s=e[0].boundingClientRect.y;if(a>s){var r=n[n.length-1],c=null===r||void 0===r?void 0:r.albumId;this.getAlbums(c),this.setState({page:c})}this.setState({prevY:s})}},{key:"componentDidMount",value:function(){this.getAlbums(this.state.page);this.observer=new IntersectionObserver(this.observerHandler.bind(this),{root:null,rootMargin:"0px",threshold:1}),this.observer.observe(this.loadingRef)}},{key:"render",value:function(){var e,t=this,n={display:"block"};return Object(a.jsxs)("div",{className:"main-listing",children:[Object(a.jsx)("header",{className:"main-listing__heading",children:Object(a.jsx)("button",{onClick:this.handleLogout,children:"Logout"})}),Object(a.jsxs)("div",{className:"main-listing__body",children:[Object(a.jsx)("div",{className:"cards",children:null===(e=this.state.photos)||void 0===e?void 0:e.map((function(e){return Object(a.jsx)("div",{className:"cards__image",children:Object(a.jsx)("img",{src:e.url,alt:e.title},Object(m.a)())})}))}),Object(a.jsx)("div",{className:"loadmore",ref:function(e){return t.loadingRef=e},children:Object(a.jsx)("h1",{style:n,children:"Loading..."})})]})]})}}]),n}(s.Component),y=Object(l.b)(null,{logoutUser:function(e){return localStorage.removeItem("active"),e.push("/"),{type:O,payload:!1}}})(Object(o.g)(x)),L=n(18),S=(n(67),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.value,s=n.name;e.setState(Object(L.a)({},s,a))},e.handleSubmit=function(t){var n;t.preventDefault();var a=e.state,s={username:a.username,password:a.password};e.props.loginUser(s,e.props),(null===(n=e.props)||void 0===n?void 0:n.status).isLoggedIn||e.setState({message:"Wrong credential"},(function(){setTimeout((function(){return e.setState({message:""})}),2e3)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.message;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"login-form",children:Object(a.jsxs)("div",{className:"form-section",children:[e.length>0&&Object(a.jsx)("div",{className:"info",children:e}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:"fields",children:Object(a.jsx)("input",{type:"text",name:"username",placeholder:"Enter Username: foo",onChange:this.handleChange})}),Object(a.jsx)("div",{className:"fields",children:Object(a.jsx)("input",{type:"text",name:"password",placeholder:"Enter password: bar",onChange:this.handleChange})}),Object(a.jsx)("div",{className:"fields",children:Object(a.jsx)("input",{type:"submit",value:"submit"})})]})]})})})}}]),n}(s.Component));var N=Object(l.b)((function(e){return{status:e.credential}}),{loginUser:f})(S),w=n(9),C=n(37);var I=function(e){var t=e.component,n=e.authed,s=Object(C.a)(e,["component","authed"]);return Object(a.jsx)(o.b,Object(w.a)(Object(w.a)({},s),{},{render:function(e){return!0===n?Object(a.jsx)(t,Object(w.a)({},e)):Object(a.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var k=Object(l.b)((function(e){return{status:e.credential}}),{loginUser:f})(Object(o.g)((function(e){var t=e.status.isLoggedIn;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",component:N}),Object(a.jsx)(I,{authed:t,path:"/home",component:y})]})})}))),_=n(12),U=n(20),F={isLoggedIn:!1};var A=Object(U.a)({credential:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case O:return Object(w.a)(Object(w.a)({},e),{},{isLoggedIn:t.payload});default:return e}}}),T=Object(U.b)(A),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{store:T,children:Object(a.jsx)(_.a,{children:Object(a.jsx)(k,{})})})}),document.getElementById("root")),D()}},[[68,1,2]]]);
//# sourceMappingURL=main.ae9357bd.chunk.js.map