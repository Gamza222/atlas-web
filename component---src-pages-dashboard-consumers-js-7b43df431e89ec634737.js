"use strict";(self.webpackChunkatlas_website=self.webpackChunkatlas_website||[]).push([[492,191,181,602],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(l),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},c.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return r.createElement(i,c({attr:c({},e.attr)},t),u(e.child))}}function i(e){var t=function(t){var n,l=e.attr,a=e.size,u=e.title,s=o(e,["attr","size","title"]),i=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(l)}},4018:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(7294),l=n(8505);function a(e){var t=e.children;return r.createElement("div",null,r.createElement(l.default,null),t)}},7736:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(7294);function l(e){return console.log(e.OrderNo),r.createElement("div",{className:"ConsumerItem-module--ConsumerItem--L5tor"},e.OrderPlaced,r.createElement("p",null,e.OrderNo),r.createElement("p",null,e.StoreLocation),e.Customer,r.createElement("p",null,e.Value))}},8505:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r={};n.r(r),n.d(r,{W2:function(){return c},ZU:function(){return o},kS:function(){return u},A0:function(){return s}});var l=n(7294),a=n(1360),c="HeaderDashboard-module--dashboardHeader__container--zeeJm",o="HeaderDashboard-module--dashboardHeader__container__buttons--d00fF",u="HeaderDashboard-module--logout--tVSxu",s="HeaderDashboard-module--overviewBTN--9Xk2f";n(5795);function i(){var e=(0,l.useState)(!1),t=e[0],n=e[1];return l.createElement("header",{id:"dashboard-header",className:r.dashboardHeader},l.createElement(a.default,{activeMenu:t,setActiveMenu:n}),l.createElement("div",{className:"containerDb "+c},l.createElement("h2",null,"ATLAS"),l.createElement("div",{className:o},l.createElement("button",{onClick:function(){return n(!t)},id:s,className:"buttonDb"},"Overwiew"),l.createElement("button",{id:u,className:"buttonDb"},"Log out"))))}},2461:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),l=n(4018),a=n.p+"static/consumers-pic-7860e2d2ed5622f18f10e0a44ecb8d86.svg",c=n(1997),o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE4IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04Ljk0ODU3IDlMMC42MTUwNTEgMEwxNy4yODIxIDBMOC45NDg1NyA5WiIgZmlsbD0iIzAwMEE2OCIvPgo8L3N2Zz4K",u=n(7736),s=["1 May - 31 May","1 June - 31 June","1 July - 31 July"],i=["Mike’s Chiswick","1 June - 31 June","1 July - 31 July"];function m(){var e=(0,r.useState)(!1),t=e[0],n=e[1],m=(0,r.useState)(!1),d=m[0],E=m[1],f=(0,r.useState)(!1),p=f[0],_=f[1],b=(0,r.useState)(s[0]),v=b[0],h=b[1],N=(0,r.useState)(i[0]),y=N[0],w=N[1];return console.log(d),r.createElement(l.default,null,r.createElement("div",{className:"db-container-content"},r.createElement("div",{className:"db-header"},r.createElement("img",{src:a,alt:"consumersPic"}),r.createElement("h1",null,"Consumers"),r.createElement("img",{src:a,alt:"consumersPic"})),r.createElement("div",{className:"consumers-container"},r.createElement("form",{action:"",className:"consumers-search "+(t?"isFocus":"")},r.createElement(c.lnn,null),r.createElement("input",{type:"text",className:"consumers-search__input",onFocus:function(){return n(!0)},onBlur:function(){return n(!1)}}),r.createElement("input",{type:"submit",hidden:!0})),r.createElement("div",{className:"consumers-filter"},r.createElement("div",{className:"consumers-filter__item"},r.createElement("p",null,"Period:"),r.createElement("button",{className:"buttonDb consumers-filter__item__button",onClick:function(){return E(!d)}},"("+v+")",r.createElement("img",{src:o,alt:"arrow"})),r.createElement("div",{className:"consumers-filter__item__list "+(d?"consumer-filter__item__list-active":"")},s.map((function(e){return r.createElement("button",{className:"buttonDb consumers-filter__item__list__button",onClick:function(){h(e),E(!d)}},e)})))),r.createElement("div",{className:"consumers-filter__item"},r.createElement("p",null,"Store Location:"),r.createElement("button",{className:"buttonDb consumers-filter__item__button",onClick:function(){return _(!p)}},"("+y+")",r.createElement("img",{src:o,alt:"arrow"})),r.createElement("div",{className:"consumers-filter__item__list "+(p?"consumer-filter__item__list-active":"")},i.map((function(e){return r.createElement("button",{className:"buttonDb consumers-filter__item__list__button",onClick:function(){w(e),_(!p)}},e)})))),r.createElement("div",{className:"consumers-filter__item-price"},r.createElement("p",null,"Total revenue: ",r.createElement("span",null,"£150.00")))),r.createElement("div",{className:"consumers-list"},r.createElement("p",null,"Table Available only on desctop"),r.createElement("div",{className:"consumers-list__header"},r.createElement("p",null,"Order Placed"),r.createElement("p",null,"Order No. "),r.createElement("p",null,"Store Location"),r.createElement("p",null,"Customer"),r.createElement("p",null,"Value")),r.createElement("div",{className:"consumers-list__content"},r.createElement(u.default,{OrderPlaced:r.createElement("p",null,'"27th May, 2022',r.createElement("span",null,"1.03pm")),OrderNo:"#1234",StoreLocation:"Mike’s Chiswick",Customer:r.createElement("p",null,"Hailee Peterson",r.createElement("span",null,"Hailee.p@gmail.com")),Value:"£7.55"}),r.createElement(u.default,{OrderPlaced:r.createElement("p",null,'"27th May, 2022',r.createElement("span",null,"1.03pm")),OrderNo:"#1234",StoreLocation:"Mike’s Chiswick",Customer:r.createElement("p",null,"Hailee Peterson",r.createElement("span",null,"Hailee.p@gmail.com")),Value:"£7.55"}),r.createElement(u.default,{OrderPlaced:r.createElement("p",null,'"27th May, 2022',r.createElement("span",null,"1.03pm")),OrderNo:"#1234",StoreLocation:"Mike’s Chiswick",Customer:r.createElement("p",null,"Hailee Peterson",r.createElement("span",null,"Hailee.p@gmail.com")),Value:"£7.55"}),r.createElement(u.default,{OrderPlaced:r.createElement("p",null,'"27th May, 2022',r.createElement("span",null,"1.03pm")),OrderNo:"#1234",StoreLocation:"Mike’s Chiswick",Customer:r.createElement("p",null,"Hailee Peterson",r.createElement("span",null,"Hailee.p@gmail.com")),Value:"£7.55"}))))))}}}]);
//# sourceMappingURL=component---src-pages-dashboard-consumers-js-7b43df431e89ec634737.js.map