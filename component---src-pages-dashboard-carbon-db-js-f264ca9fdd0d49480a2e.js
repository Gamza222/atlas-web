"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8083,558],{9897:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var l=n(7294);function r(e){var t=e.pic,n=e.name,r=e.num,c=e.sold,a=e.returnNum,i=e.price,o=e.prevPrice,u=e.setProduct,s=e.materials,m=e.manufacturing,_=e.distribution,d=e.use,b=e.recycling,E=e.maxDiscount,f=e.total;return l.createElement("button",{className:"buttonDb containerCarbonAll BoxDbLog-module--container--u1z0M",onClick:function(){return u({name:n,price:i,materials:s,manufacturing:m,distribution:_,use:d,recycling:b,returnNum:a,maxDiscount:E,total:f})}},l.createElement("div",{className:"BoxDbLog-module--container__img--fcz08 containerCarbonAll__img"},t?l.createElement("img",{src:t,alt:""}):l.createElement("div",null)),l.createElement("h3",null,n),l.createElement("div",{className:"BoxDbLog-module--container__description--Ik7Ti containerCarbonAll__description"},l.createElement("div",{className:"BoxDbLog-module--container__description__num--KT4Eq"},l.createElement("div",null),r?l.createElement("p",null,r.split("").slice(0,r.indexOf(".")),l.createElement("span",null,r.split("").slice(r.indexOf(".")))):""),l.createElement("div",{className:"BoxDbLog-module--container__description__sold--+mevd containerCarbonAll__description__sold"},l.createElement("p",null,"> "+c+" Sold"))),l.createElement("p",{className:"BoxDbLog-module--container__returnNum--XRYWy containerCarbonAll__returnNum"},"CO2 Return: ",a),l.createElement("div",{className:"BoxDbLog-module--container__price--oioqN containerCarbonAll__price"},l.createElement("p",null,"$",i),l.createElement("p",null,"$",o)),l.createElement("button",{className:"buttonDb"},"Edit %"))}},9396:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(2982),r=n(7294),c=n(8916),a=n(100),i=n(5753),o=n(1424),u=n(1279),s=(n(3969),n(6217),n(9897));function m(){var e=(0,r.useState)(!1),t=e[0],n=e[1],m=(0,r.useState)("Search for a sector"),_=(m[0],m[1]),d=(0,r.useState)({}),b=d[0],E=d[1],f=(0,r.useState)(!1),p=f[0],x=f[1],g=(0,r.useState)(!1),N=g[0],C=g[1],v=(0,r.useState)([]),D=v[0],O=v[1];return console.log(D),console.log(D.indexOf("Sweaters")),r.createElement(c.default,{add:r.createElement("div",{className:"header-add"},r.createElement("div",null,r.createElement("h2",null,"Carbon Database"),r.createElement("img",{src:a.Z,alt:"",style:{height:"76px",width:"76px",marginLeft:"22px",marginTop:"-15px"}})),r.createElement("form",{action:"",className:"consumers-search "+(t?"isFocus":"")},r.createElement("img",{src:i.Z,alt:"search-pic"}),r.createElement("input",{type:"text",onChange:function(e){return _(e.target.value)},placeholder:"Search for a sector",className:"consumers-search__input",onFocus:function(){return n(!0)},onBlur:function(){return n(!1)}}),r.createElement("input",{type:"submit",hidden:!0}))),headerDel:!0},r.createElement("div",{className:"carbondb"},r.createElement("div",{className:"carbondb__filter"},r.createElement("button",{className:"carbondb__filter__button buttonDb",onClick:function(){return x(!p)}},r.createElement("p",null,"Product Categories"),r.createElement(o.Vmf,{style:{transform:p?"rotate(0deg)":"rotate(180deg)"}})),r.createElement("div",{className:"carbondb__filter__list",style:{display:p?"flex":"none"}},r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Sweaters")?O(D.filter((function(e){return"Sweaters"!==e}))):O([].concat((0,l.Z)(D),["Sweaters"]))}},r.createElement("div",null,-1!==D.indexOf("Sweaters")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Sweaters")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Shirts")?O(D.filter((function(e){return"Shirts"!==e}))):O([].concat((0,l.Z)(D),["Shirts"]))}},r.createElement("div",null,-1!==D.indexOf("Shirts")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Shirts")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Trousers")?O(D.filter((function(e){return"Trousers"!==e}))):O([].concat((0,l.Z)(D),["Trousers"]))}},r.createElement("div",null,-1!==D.indexOf("Trousers")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Trousers")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Skirts")?O(D.filter((function(e){return"Skirts"!==e}))):O([].concat((0,l.Z)(D),["Skirts"]))}},r.createElement("div",null,-1!==D.indexOf("Skirts")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Skirts")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Jackets")?O(D.filter((function(e){return"Jackets"!==e}))):O([].concat((0,l.Z)(D),["Jackets"]))}},r.createElement("div",null,-1!==D.indexOf("Jackets")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Jackets"))),r.createElement("div",{className:"carbondb__filter__line"}),r.createElement("button",{className:"carbondb__filter__button buttonDb",onClick:function(){return C(!N)}},r.createElement("p",null,"Sort By"),r.createElement(o.Vmf,{style:{transform:N?"rotate(0deg)":"rotate(180deg)"}})),r.createElement("div",{className:"carbondb__filter__list",style:{display:N?"flex":"none"}},r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Cost")?O(D.filter((function(e){return"Cost"!==e}))):O([].concat((0,l.Z)(D),["Cost"]))}},r.createElement("div",null,-1!==D.indexOf("Cost")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Cost")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("CO2 Cost")?O(D.filter((function(e){return"CO2 Cost"!==e}))):O([].concat((0,l.Z)(D),["CO2 Cost"]))}},r.createElement("div",null,-1!==D.indexOf("CO2 Cost")?r.createElement(u.bzc,null):""),r.createElement("p",null,"CO2 Cost")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("CO2 Return")?O(D.filter((function(e){return"CO2 Return"!==e}))):O([].concat((0,l.Z)(D),["CO2 Return"]))}},r.createElement("div",null,-1!==D.indexOf("CO2 Return")?r.createElement(u.bzc,null):""),r.createElement("p",null,"CO2 Return")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Discount")?O(D.filter((function(e){return"Discount"!==e}))):O([].concat((0,l.Z)(D),["Discount"]))}},r.createElement("div",null,-1!==D.indexOf("Discount")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Discount")),r.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==D.indexOf("Products Sold")?O(D.filter((function(e){return"Products Sold"!==e}))):O([].concat((0,l.Z)(D),["Products Sold"]))}},r.createElement("div",null,-1!==D.indexOf("Products Sold")?r.createElement(u.bzc,null):""),r.createElement("p",null,"Products Sold")))),r.createElement("div",{className:"carbodb__boxes"},r.createElement(s.default,{name:"Yellow Sweater",num:"10.00",sold:"42",returnNum:30,price:67,prevPrice:77,setProduct:E,total:610.6,materials:26.58,manufacturing:500.88,distribution:24.32,use:61.5,recycling:-8.68,maxDiscount:"5%"}),r.createElement(s.default,{name:"Yellow Sweater",num:"10.00",sold:"42",returnNum:30,price:67,prevPrice:77,setProduct:E,total:610.6,materials:26.58,manufacturing:500.88,distribution:24.32,use:61.5,recycling:-8.68,maxDiscount:"5%"})),b.name?r.createElement("div",{className:"carbondb__productBox"},r.createElement("h5",null,b.name+" (Product ID)"),r.createElement("div",{className:"carbondb__productBox__description"},r.createElement("div",{className:"carbondb__productBox__description__image"},b.image?r.createElement("img",{src:"",alt:""}):r.createElement("p",null,"Image",r.createElement("span",null,"here"))),r.createElement("div",{className:"carbondb__productBox__description__descr"},r.createElement("p",{className:"carbondb__productBox__description__descr__discount"},"Max Discount ",b.maxDiscount),r.createElement("p",null,b.price,"kg"),r.createElement("p",null,b.total,"kg CO2"),r.createElement("p",null,b.returnNum,"kg")),r.createElement("p",{className:"carbondb__productBox__description__total"},"Total",r.createElement("span",null,b.total,"kg"))),r.createElement("p",null,"Breakdown of Carbon Cost"),r.createElement("div",{className:"carbondb__productBox__items"},r.createElement("div",{className:"carbondb__productBox__items__item"},r.createElement("img",{src:"",alt:""}),r.createElement("p",null,b.materials,"kg"),r.createElement("p",null,"Raw Materials")),r.createElement("div",{className:"carbondb__productBox__items__item"},r.createElement("img",{src:"",alt:""}),r.createElement("p",null,b.manufacturing,"kg"),r.createElement("p",null,"Manufacturing")),r.createElement("div",{className:"carbondb__productBox__items__item"},r.createElement("img",{src:"",alt:""}),r.createElement("p",null,b.distribution,"kg"),r.createElement("p",null,"Distribution")),r.createElement("div",{className:"carbondb__productBox__items__item"},r.createElement("img",{src:"",alt:""}),r.createElement("p",null,b.use,"kg"),r.createElement("p",null,"Use of Product")),r.createElement("div",{className:"carbondb__productBox__items__item"},r.createElement("img",{src:"",alt:""}),r.createElement("p",null,b.recycling,"kg"),r.createElement("p",null,"Recycling"))),r.createElement("button",{className:"carbondbproductBoxbutton buttonDb",onClick:function(){return E({})}},r.createElement(u.oHP,null))):""))}}}]);
//# sourceMappingURL=component---src-pages-dashboard-carbon-db-js-f264ca9fdd0d49480a2e.js.map