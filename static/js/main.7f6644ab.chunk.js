(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),o=n.n(c),l=(n(76),n(62)),i=n(24),u=(n(69),{normal:{borderBottom:"1px dotted rgb(0, 168, 0)"},hover:{borderBottom:"1px solid rgb(0, 168, 0)",color:"black"},active:"hover",touchActive:{borderBottom:"1px dashed rgb(0, 168, 0)",color:"black"},focusFromTab:{outline:"2px solid rgb(0, 152, 0)",outlineOffset:"2px",color:"black"},touchActiveTapOnly:!0}),m={};Object.keys(u).forEach(function(e){"touchActiveTapOnly"!==e&&(m["onParent".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))]=u[e])});var s={link:u,childLink:m,p:{margin:"3vh 0",lineHeight:"1.4"}},p=function(e){var t=e.children;return r.a.createElement("code",{style:{fontFamily:"monospace",fontSize:"15px",paddingLeft:"2px"}},t)},d=Object.create(s);d.main={padding:"20px"};var f=d;function E(){return r.a.createElement("div",{style:f.main},r.a.createElement("p",{style:f.p},"This is a test app. More to come."))}var h=n(31),v=n(32),b=n(38),g=n(33),y=n(39),O=Object.create(s);O.main={padding:"20px"};var x=O,j=n(34),k=n(40),w=r.a.createContext(),F={getFaction:function(e){return k[e]},getFactions:function(){return Object.values(k)},getUnits:function(e){return k[e].units}},C=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:x.main},r.a.createElement(w.Consumer,null,function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("h1",null,"Factions"),e.getFactions().map(function(e){return r.a.createElement(j.LinkContainer,{to:"/factions/".concat(e.id)},r.a.createElement("div",{style:{background:"purple"}},r.a.createElement("h2",null,e.name)))}))}))}}]),t}(r.a.Component);C.contextType=w;var B=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.match.params.factionName;return r.a.createElement("div",{style:x.main},r.a.createElement(w.Consumer,null,function(t){return r.a.createElement("div",null,r.a.createElement("h2",null,t.getFaction(e).name),t.getUnits(e).map(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.name))}))}))}}]),t}(r.a.Component);B.contextType=w;var T=Object.create(s);function A(e){var t=e.location;return r.a.createElement("p",{style:T.p},"Page not found - the path, ",r.a.createElement(p,null,t.pathname),", did not match any React Router routes.")}var P=n(23),H={"":"Home",factions:"Factions",finland:"Findland"};function L(e){var t=e.match,n=H[t.url.split("/").slice(-1)],a=void 0===n?"/":t.url;return r.a.createElement("span",null,r.a.createElement(P.a,Object.assign({},s.link,{to:a}),n||"Page Not Found"),!t.isExact&&n&&" / ",n&&r.a.createElement(i.a,{path:"".concat("/"===t.url?"":t.url,"/:path"),component:L}))}function S(){return r.a.createElement(i.a,{path:"/",component:L})}var N=n(131),U=n(133),I=n(132),J=function(){return r.a.createElement(N.a,{fluid:!0,staticTop:!0,collapseOnSelect:!0},r.a.createElement(N.a.Header,null,r.a.createElement(N.a.Brand,null,r.a.createElement(P.a,{to:"/"},"Bolt Action Army Builder")),r.a.createElement(N.a.Toggle,null)),r.a.createElement(N.a.Collapse,null,r.a.createElement(U.a,null,r.a.createElement(j.LinkContainer,{to:"/factions"},r.a.createElement(I.a,{eventKey:1},"Factions")))))},R=Object.create(s);R.title={padding:"20px"},R.breadcrumbs={padding:"20px"};var W=R;var q=n(35);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q.a,{basename:"/ba-armybuilder"},r.a.createElement(function(){return r.a.createElement("div",{style:W.root},r.a.createElement(w.Provider,{value:F},r.a.createElement(J,null),r.a.createElement("h1",{style:W.title},"Single Page Apps for GitHub Pages"),r.a.createElement("nav",{style:W.breadcrumbs},r.a.createElement(S,null)),r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{exact:!0,path:"/factions",component:C}),r.a.createElement(i.a,{exact:!0,path:"/factions/:factionName",component:B}),r.a.createElement(i.a,{component:A}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e){e.exports={finland:{id:"finland",name:"Finland",units:[{name:"Infantry Squad",rules:["faster"]}]}}},70:function(e,t,n){e.exports=n(129)},76:function(e,t,n){}},[[70,2,1]]]);
//# sourceMappingURL=main.7f6644ab.chunk.js.map