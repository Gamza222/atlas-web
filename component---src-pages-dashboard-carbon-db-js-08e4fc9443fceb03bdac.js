"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8083,558],{9897:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(7294);function l(e){var t=e.beforeNum,n=(e.product,e.afterNum),l=e.pic,a=e.setProdWin,c=e.name,i=e.num,u=e.sold,o=e.setDiscountW,s=e.returnNum,m=e.price,d=e.prevPrice,_=e.setProduct,b=e.materials,f=e.manufacturing,E=e.distribution,p=e.use,N=e.recycling,g=e.maxDiscount,x=e.total;return r.createElement("button",{className:"BoxDbLog-module--container--u1z0M",onClick:function(){_({name:c,price:m,prevPrice:d,materials:b,manufacturing:f,distribution:E,use:p,beforeNum:t,afterNum:n,recycling:N,returnNum:s,maxDiscount:g,total:x}),a(!0)}},r.createElement("div",{className:"BoxDbLog-module--container__img--fcz08 containerCarbonAll__img"},l?r.createElement("img",{src:l,alt:""}):r.createElement("div",null)),r.createElement("h3",null,c),r.createElement("div",{className:"BoxDbLog-module--container__description--Ik7Ti containerCarbonAll__description"},r.createElement("div",{className:"BoxDbLog-module--container__description__num--KT4Eq"},r.createElement("div",null),i?r.createElement("p",null,i.split("").slice(0,i.indexOf(".")),r.createElement("span",null,i.split("").slice(i.indexOf(".")))):""),r.createElement("div",{className:"BoxDbLog-module--container__description__sold--+mevd containerCarbonAll__description__sold"},r.createElement("p",null,"> "+u+" Sold"))),r.createElement("p",{className:"BoxDbLog-module--container__returnNum--XRYWy containerCarbonAll__returnNum"},"CO2 Return: ",s),r.createElement("div",{className:"BoxDbLog-module--container__price--oioqN containerCarbonAll__price"},r.createElement("p",null,"$",Math.round(d-d/100*g)),r.createElement("p",null,"$",d)),r.createElement("button",{className:"buttonDb",onClick:function(){_({name:c,price:m,materials:b,manufacturing:f,distribution:E,use:p,recycling:N,returnNum:s,maxDiscount:g,total:x}),o(!0)}},"Edit %"))}},9396:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(2982),l=n(7294),a=n(8916),c=n(100),i=n(5753),u=n(1424),o=n(1279),s=(n(3969),n(7947),n(9897)),m=n(6773);function d(){var e=(0,l.useState)(!1),t=e[0],n=e[1],d=(0,l.useState)("Search for a sector"),_=(d[0],d[1]),b=(0,l.useState)({}),f=b[0],E=b[1],p=(0,l.useState)(!1),N=p[0],g=p[1],x=(0,l.useState)(!1),D=x[0],v=x[1],C=(0,l.useState)([]),P=C[0],S=C[1],O=(0,l.useState)(!1),k=O[0],B=O[1],y=(0,l.useState)(!1),h=y[0],w=y[1];return console.log(P),console.log(P.indexOf("Sweaters")),l.createElement(a.default,{add:l.createElement("div",{className:"header-add"},l.createElement("div",null,l.createElement("h2",null,"Carbon Database"),l.createElement("img",{src:c.Z,alt:"",style:{height:"76px",width:"76px",marginLeft:"22px",marginTop:"-15px"}})),l.createElement("form",{action:"",className:"consumers-search "+(t?"isFocus":"")},l.createElement("img",{src:i.Z,alt:"search-pic"}),l.createElement("input",{type:"text",onChange:function(e){return _(e.target.value)},placeholder:"Search for a sector",className:"consumers-search__input",onFocus:function(){return n(!0)},onBlur:function(){return n(!1)}}),l.createElement("input",{type:"submit",hidden:!0}))),headerDel:!0},l.createElement("div",{className:"carbondb"},l.createElement("div",{className:"carbondb__filter"},l.createElement("button",{className:"carbondb__filter__button buttonDb",onClick:function(){return g(!N)}},l.createElement("p",null,"Product Categories"),l.createElement(u.Vmf,{style:{transform:N?"rotate(0deg)":"rotate(180deg)"}})),l.createElement("div",{className:"carbondb__filter__list",style:{display:N?"flex":"none"}},l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Sweaters")?S(P.filter((function(e){return"Sweaters"!==e}))):S([].concat((0,r.Z)(P),["Sweaters"]))}},l.createElement("div",null,-1!==P.indexOf("Sweaters")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Sweaters")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Shirts")?S(P.filter((function(e){return"Shirts"!==e}))):S([].concat((0,r.Z)(P),["Shirts"]))}},l.createElement("div",null,-1!==P.indexOf("Shirts")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Shirts")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Trousers")?S(P.filter((function(e){return"Trousers"!==e}))):S([].concat((0,r.Z)(P),["Trousers"]))}},l.createElement("div",null,-1!==P.indexOf("Trousers")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Trousers")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Skirts")?S(P.filter((function(e){return"Skirts"!==e}))):S([].concat((0,r.Z)(P),["Skirts"]))}},l.createElement("div",null,-1!==P.indexOf("Skirts")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Skirts")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Jackets")?S(P.filter((function(e){return"Jackets"!==e}))):S([].concat((0,r.Z)(P),["Jackets"]))}},l.createElement("div",null,-1!==P.indexOf("Jackets")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Jackets"))),l.createElement("div",{className:"carbondb__filter__line"}),l.createElement("button",{className:"carbondb__filter__button buttonDb",onClick:function(){return v(!D)}},l.createElement("p",null,"Sort By"),l.createElement(u.Vmf,{style:{transform:D?"rotate(0deg)":"rotate(180deg)"}})),l.createElement("div",{className:"carbondb__filter__list",style:{display:D?"flex":"none"}},l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Cost")?S(P.filter((function(e){return"Cost"!==e}))):S([].concat((0,r.Z)(P),["Cost"]))}},l.createElement("div",null,-1!==P.indexOf("Cost")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Cost")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("CO2 Cost")?S(P.filter((function(e){return"CO2 Cost"!==e}))):S([].concat((0,r.Z)(P),["CO2 Cost"]))}},l.createElement("div",null,-1!==P.indexOf("CO2 Cost")?l.createElement(o.bzc,null):""),l.createElement("p",null,"CO2 Cost")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("CO2 Return")?S(P.filter((function(e){return"CO2 Return"!==e}))):S([].concat((0,r.Z)(P),["CO2 Return"]))}},l.createElement("div",null,-1!==P.indexOf("CO2 Return")?l.createElement(o.bzc,null):""),l.createElement("p",null,"CO2 Return")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Discount")?S(P.filter((function(e){return"Discount"!==e}))):S([].concat((0,r.Z)(P),["Discount"]))}},l.createElement("div",null,-1!==P.indexOf("Discount")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Discount")),l.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==P.indexOf("Products Sold")?S(P.filter((function(e){return"Products Sold"!==e}))):S([].concat((0,r.Z)(P),["Products Sold"]))}},l.createElement("div",null,-1!==P.indexOf("Products Sold")?l.createElement(o.bzc,null):""),l.createElement("p",null,"Products Sold")))),l.createElement("div",{className:"carbodb__boxes"},l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"42",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:610.6,materials:26.58,manufacturing:500.88,setProdWin:w,distribution:24.32,use:61.5,recycling:-8.68,maxDiscount:"5"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"62",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:310.6,materials:23.58,manufacturing:300.88,setProdWin:w,distribution:34.32,use:31.5,recycling:-3.68,maxDiscount:"7"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"72",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:410.6,materials:46.58,manufacturing:400.88,setProdWin:w,distribution:44.32,use:41.5,recycling:-4.68,maxDiscount:"8"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"82",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:910.6,materials:96.58,manufacturing:900.88,setProdWin:w,distribution:94.32,use:91.5,recycling:-9.68,maxDiscount:"9"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"32",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:210.6,materials:26.58,manufacturing:200.88,setProdWin:w,distribution:24.32,use:21.5,recycling:-2.68,maxDiscount:"2"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"92",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:810.6,materials:86.58,manufacturing:800.88,setProdWin:w,distribution:84.32,use:81.5,recycling:-8.68,maxDiscount:"4"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"22",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:610.6,materials:26.58,manufacturing:500.88,setProdWin:w,distribution:24.32,use:61.5,recycling:-8.68,maxDiscount:"6"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"62",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:510.6,materials:56.58,manufacturing:500.88,setProdWin:w,distribution:54.32,use:51.5,recycling:-5.68,maxDiscount:"9"}),l.createElement(s.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"82",returnNum:30,price:67,prevPrice:77,setProduct:E,setDiscountW:B,total:710.6,materials:76.58,manufacturing:700.88,setProdWin:w,distribution:74.32,use:71.5,recycling:-7.68,maxDiscount:"11"})),f.name&&h&&!k?l.createElement("div",{className:"carbondb__productBox"},l.createElement("h5",null,f.name+" (Product ID)"),l.createElement("div",{className:"carbondb__productBox__description"},l.createElement("div",{className:"carbondb__productBox__description__image"},f.image?l.createElement("img",{src:"",alt:""}):l.createElement("p",null,"Image",l.createElement("span",null,"here"))),l.createElement("div",{className:"carbondb__productBox__description__descr"},l.createElement("p",{className:"carbondb__productBox__description__descr__discount"},"Max Discount ",f.maxDiscount),l.createElement("p",null,f.price,"kg"),l.createElement("p",null,f.total,"kg CO2"),l.createElement("p",null,f.returnNum,"kg")),l.createElement("p",{className:"carbondb__productBox__description__total"},"Total",l.createElement("span",null,f.total,"kg"))),l.createElement("p",null,"Breakdown of Carbon Cost"),l.createElement("div",{className:"carbondb__productBox__items"},l.createElement("div",{className:"carbondb__productBox__items__item"},l.createElement("img",{src:"",alt:""}),l.createElement("p",null,f.materials,"kg"),l.createElement("p",null,"Raw Materials")),l.createElement("div",{className:"carbondb__productBox__items__item"},l.createElement("img",{src:"",alt:""}),l.createElement("p",null,f.manufacturing,"kg"),l.createElement("p",null,"Manufacturing")),l.createElement("div",{className:"carbondb__productBox__items__item"},l.createElement("img",{src:"",alt:""}),l.createElement("p",null,f.distribution,"kg"),l.createElement("p",null,"Distribution")),l.createElement("div",{className:"carbondb__productBox__items__item"},l.createElement("img",{src:"",alt:""}),l.createElement("p",null,f.use,"kg"),l.createElement("p",null,"Use of Product")),l.createElement("div",{className:"carbondb__productBox__items__item"},l.createElement("img",{src:"",alt:""}),l.createElement("p",null,f.recycling,"kg"),l.createElement("p",null,"Recycling"))),l.createElement("button",{className:"carbondbproductBoxbutton buttonDb",onClick:function(){E({}),w(!1)}},l.createElement(o.oHP,null))):"",k?l.createElement(m.default,{beforeNum:f.beforeNum,product:f,afterNum:f.afterNum,prevPrice:f.prevPrice,maxDiscount:f.maxDiscount,name:f.name,setProduct:E,setDiscountW:B}):""))}}}]);
//# sourceMappingURL=component---src-pages-dashboard-carbon-db-js-08e4fc9443fceb03bdac.js.map