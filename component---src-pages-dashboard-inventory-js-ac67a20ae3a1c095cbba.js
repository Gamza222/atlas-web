"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8358],{3459:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var i=n(7294),a=n(8916),c=n.p+"static/Inventory-pic-422fbd83616c752e8c717414213c0e29.svg",s=n(7559),l=n(2910),m=n(2605),r=n(760),o=n(7781),u=n(7987),d=n(1126),b=n(1852),h=n(4806),E=n(2457),p=n(2946),g=[{name:"January",width1:"60%",width2:"17%",kg:"5kg"},{name:"February",width1:"60%",width2:"17%",kg:"5kg"},{name:"March",width1:"60%",width2:"30%",kg:"10kg"},{name:"April",width1:"60%",width2:"30%",kg:"10kg"},{name:"May",width1:"60%",width2:"30%",kg:"10kg"},{name:"June",width1:"60%",width2:"30%",kg:"10kg"},{name:"July",width1:"60%",width2:"30%",kg:"10kg"},{name:"August",width1:"60%",width2:"30%",kg:"10kg"},{name:"September",width1:"60%",width2:"30%",kg:"10kg"}],w=[{name:"Chiswick",width1:"60%",width2:"17%",kg:"5kg"},{name:"Chiswick",width1:"60%",width2:"30%",kg:"10kg"},{name:"Chiswick",width1:"60%",width2:"30%",kg:"10kg"},{name:"Chiswick",width1:"60%",width2:"30%",kg:"10kg"},{name:"Chiswick",width1:"60%",width2:"30%",kg:"10kg"},{name:"Chiswick",width1:"60%",width2:"30%",kg:"10kg"},{name:"Chiswick",width1:"60%",width2:"30%",kg:"10kg"}],f=[{number:2,name:"Switch to Renewable Energy",pic:E.Z,buttons:[{span:"Change to",button:"Octopus Energy:",num:1,description:"monthly estimate",span2:"£531,11",circles:{circle1:{number:2e3,width:117.1},circle2:{number:500,width1:133.6,width2:150}}},{span:"Change to",button:"Octopus Energy:",num:2,description:"annual estimate",span2:"£627.02",circles:{circle1:{number:4e3,width1:117.1},circle2:{number:500,width1:155.6,width2:200}}}]},{number:3,name:"Install Smart Meter",pic:p.Z,buttons:[{span:"Change to",button:"British Gas:",num:3,description:"annual estimate",span2:"£627.02",circles:{circle1:{width:147,number:500},circle2:{width1:137,number:500,width2:140}}},{span:"Change to",button:"Octopus Energy:",num:4,description:"monthly estimate",span2:"£531,11",circles:{circle1:{width:127,number:500},circle2:{width1:137,number:500,width2:"200px"}}}]}];function k(){var e=(0,i.useState)(2),t=e[0],n=e[1],E=(0,i.useState)(f[0].buttons[0].num),p=E[0],k=E[1],v=(0,i.useState)(!1),N=v[0],_=v[1],y=(0,i.useState)("HTL"),x=y[0],C=y[1],S=(0,i.useState)(""),D=S[0],L=S[1];return console.log(D),i.createElement(a.default,{name:"Inventory",pic:c},i.createElement("div",{className:"db-container-content"},i.createElement("div",{className:"db-header"}),i.createElement("div",{className:"boxes-container"},i.createElement(s.default,null,i.createElement("h3",null,"Suggested solutions"),i.createElement("div",{className:"box-content"},i.createElement("div",{className:"box-sollutions-content"},i.createElement("div",{className:"box-sollutions-content__text"},i.createElement("div",{className:"subsidy"},i.createElement("p",null,"Total subsidy for reduction solutions: "),i.createElement("span",null,"£"+a.totalSubsidy),i.createElement("button",{className:"buttonDb"},i.createElement("img",{src:o.Z,alt:""}))),f.map((function(e){return i.createElement("div",{className:"box-buttons"},i.createElement("button",{className:"buttonDb "+(t==e.number?"box-btn__active":""),onClick:function(){n(e.number),k(e.buttons[0].num)}},i.createElement("div",null),e.name,i.createElement("img",{src:e.pic,alt:""})),i.createElement("div",null,e.buttons.map((function(n){return i.createElement("div",{style:{display:t==e.number?"flex":"none"}},i.createElement("p",null,i.createElement("div",null,i.createElement("span",null,n.span),i.createElement("button",{className:"buttonDb",onClick:function(){return k(n.num)}},n.button)),i.createElement("span",null,n.span2),n.description),i.createElement("button",{className:"buttonDb"},"Go to site"))}))))})))))),i.createElement(s.default,null,i.createElement("button",{className:"buttonDb"},i.createElement("img",{src:o.Z,alt:"info-pic"})),i.createElement("button",{className:"buttonDb"},i.createElement("img",{src:r.Z,alt:"load-pic"})),i.createElement("h3",null,i.createElement("span",null,"Emmisions")," benchmark"),i.createElement("div",{className:"box-content"},i.createElement("div",{className:"box-circles-content"},i.createElement("div",{className:"emissions-content emissions-content1"},i.createElement("p",null,"Industry ",i.createElement("br",null)," Benchmark"),i.createElement(l.default,{Width:f.find((function(e){return e.number==t})).buttons.find((function(e){return e.num==p})).circles.circle1.width,Number:f.find((function(e){return e.number==t})).buttons.find((function(e){return e.num==p})).circles.circle1.number}),i.createElement("div",{className:"emissions-description"},i.createElement("div",{className:"emissions-description-item emissions-description-item-1"},i.createElement("div",null),i.createElement("p",null,"net emissions")))),i.createElement("div",{className:"emissions-content emissions-content2"},i.createElement("p",null,"Your",i.createElement("br",null)," Emissions"),i.createElement(m.default,{Widt1:f.find((function(e){return e.number==t})).buttons.find((function(e){return e.num==p})).circles.circle2.width1,Width2:f.find((function(e){return e.number==t})).buttons.find((function(e){return e.num==p})).circles.circle2.width2,Number:f.find((function(e){return e.number==t})).buttons.find((function(e){return e.num==p})).circles.circle2.number}),i.createElement("div",{className:"emissions-description"},i.createElement("div",{className:"emissions-description-item emissions-description-item-1"},i.createElement("div",null),i.createElement("p",null,"net emissions")),i.createElement("div",{className:"emissions-description-item emissions-description-item-2"},i.createElement("div",null),i.createElement("p",null,"net reduction"))))))),i.createElement(s.default,null,i.createElement("h3",null,i.createElement("span",null,"Emissions")," by store"),i.createElement("div",{className:"box-content"},i.createElement("div",{className:"box-ems-content"},i.createElement("div",{className:"box-ems-content__graphs"},i.createElement("div",{className:"box-ems-content__graphs__nav"},i.createElement("div",{className:"box-ems-content__graphs__nav__search"},i.createElement("input",{type:"text",onChange:function(e){return L(e.target.value)},placeholder:"Search by Site..."})),i.createElement("div",{className:"box-ems-content__graphs__nav__dropdown"},i.createElement("button",{className:"buttonDb",onClick:function(){return _(!N)}},i.createElement("img",{src:d.Z,alt:""}),"HTL"===x?"Rank Highest to Lowest":"Rank Lowest to Highest"),i.createElement("div",{style:N?{display:"block"}:{}},i.createElement("button",{className:"buttonDb",onClick:function(){C("HTL"),_(!N)}},"Rank Highest to Lowest"),i.createElement("button",{className:"buttonDb",onClick:function(){C("LTH"),_(!N)}},"Rank Lowest to Highest")))),i.createElement("div",{className:"box-ems-content__graphs__line"}),i.createElement("div",{className:"box-ems-content__graphs__items"},w.map((function(e){return i.createElement(u.default,{GRSWidth1:e.width1,GRSWidth2:e.width2,Name:e.name,Kg:e.kg})}))))))),i.createElement(s.default,null,i.createElement("div",{className:"over-time-header"},i.createElement("h3",null,"Emmisions by ",i.createElement("span",null,"month")),i.createElement("button",{className:"buttonDb"},"Monthly",i.createElement(b.lzl,null))),i.createElement("div",{className:"box-content last-box"},i.createElement("div",{className:"graphsOT"},i.createElement("div",{className:"graphsOT__graphs"},g.map((function(e){return i.createElement(h.default,{GRSWidth1:e.width1,GRSWidth2:e.width2,Name:e.name.split("")[0],Kg:e.kg})}))),i.createElement("div",{className:"graphsOT__line"})))))))}},2946:function(e,t,n){t.Z=n.p+"static/install-pic-85624d476305c8f9497c44778a2663b4.svg"},2457:function(e,t,n){t.Z=n.p+"static/switch-pic-9bc12621aa812f14912d0f09c60ef5f2.svg"}}]);
//# sourceMappingURL=component---src-pages-dashboard-inventory-js-ac67a20ae3a1c095cbba.js.map