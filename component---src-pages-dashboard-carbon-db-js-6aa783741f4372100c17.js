"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8083,558],{9897:function(e,l,t){t.r(l),t.d(l,{default:function(){return n}});var V=t(7294);function n(e){var l=e.beforeNum,t=(e.product,e.afterNum),n=e.pic,d=e.setProdWin,U=e.name,a=e.num,c=e.sold,N=e.setDiscountW,Z=e.returnNum,m=e.price,F=e.prevPrice,R=e.setProduct,W=e.materials,r=e.manufacturing,T=e.distribution,E=e.use,Q=e.recycling,i=e.maxDiscount,o=e.total;return V.createElement("button",{className:"BoxDbLog-module--container--u1z0M",onClick:function(){R({name:U,price:m,prevPrice:F,materials:W,manufacturing:r,distribution:T,use:E,beforeNum:l,afterNum:t,recycling:Q,returnNum:Z,maxDiscount:i,total:o}),d(!0)}},V.createElement("div",{className:"BoxDbLog-module--container__img--fcz08 containerCarbonAll__img"},n?V.createElement("img",{src:n,alt:""}):V.createElement("div",null)),V.createElement("h3",null,U),V.createElement("div",{className:"BoxDbLog-module--container__description--Ik7Ti containerCarbonAll__description"},V.createElement("div",{className:"BoxDbLog-module--container__description__num--KT4Eq"},V.createElement("div",null),a?V.createElement("p",null,a.split("").slice(0,a.indexOf(".")),V.createElement("span",null,a.split("").slice(a.indexOf(".")))):""),V.createElement("div",{className:"BoxDbLog-module--container__description__sold--+mevd containerCarbonAll__description__sold"},V.createElement("p",null,"> "+c+" Sold"))),V.createElement("p",{className:"BoxDbLog-module--container__returnNum--XRYWy containerCarbonAll__returnNum"},"CO2 Return: ",Z),V.createElement("div",{className:"BoxDbLog-module--container__price--oioqN containerCarbonAll__price"},V.createElement("p",null,"$",Math.round(F-F/100*i)),V.createElement("p",null,"$",F)),V.createElement("button",{className:"buttonDb",onClick:function(){R({name:U,price:m,materials:W,manufacturing:r,distribution:T,use:E,recycling:Q,returnNum:Z,maxDiscount:i,total:o}),N(!0)}},"Edit %"))}},7616:function(e,l,t){t.r(l),t.d(l,{default:function(){return r}});var V=t(2982),n=t(7294),d=t(6072),U=t(100),a=t(5753),c=t(1424),N=t(1279),Z=(t(3969),t(7947),t(9897)),m=t(6773),F=t.p+"static/teleg-76102e1dc9bde9b36d49cfd131139633.svg",R=t.p+"static/interaction-0a6d35e7e2d55376813d2652a0ad4721.svg",W=t.p+"static/recycle-07f98934c66acde757dac152ac14a9f0.svg";function r(){var e=(0,n.useState)(!1),l=e[0],t=e[1],r=(0,n.useState)("Search for a sector"),T=(r[0],r[1]),E=(0,n.useState)({}),Q=E[0],i=E[1],o=(0,n.useState)(!1),b=o[0],M=o[1],u=(0,n.useState)(!1),k=u[0],s=u[1],J=(0,n.useState)([]),B=J[0],S=J[1],z=(0,n.useState)(!1),p=z[0],Y=z[1],h=(0,n.useState)(!1),G=h[0],D=h[1];return console.log(B),console.log(B.indexOf("Sweaters")),n.createElement(d.default,{add:n.createElement("div",{className:"header-add"},n.createElement("div",null,n.createElement("h2",null,"Carbon Database"),n.createElement("img",{src:U.Z,alt:"",style:{height:"76px",width:"76px",marginLeft:"22px",marginTop:"-15px"}})),n.createElement("form",{action:"",className:"consumers-search "+(l?"isFocus":"")},n.createElement("img",{src:a.Z,alt:"search-pic"}),n.createElement("input",{type:"text",onChange:function(e){return T(e.target.value)},placeholder:"Search for a sector",className:"consumers-search__input",onFocus:function(){return t(!0)},onBlur:function(){return t(!1)}}),n.createElement("input",{type:"submit",hidden:!0}))),headerDel:!0},n.createElement("div",{className:"carbondb"},n.createElement("div",{className:"carbondb__filter"},n.createElement("button",{className:"carbondb__filter__button buttonDb",onClick:function(){return M(!b)}},n.createElement("p",null,"Product Categories"),n.createElement(c.Vmf,{style:{transform:b?"rotate(0deg)":"rotate(180deg)"}})),n.createElement("div",{className:"carbondb__filter__list",style:{display:b?"flex":"none"}},n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Sweaters")?S(B.filter((function(e){return"Sweaters"!==e}))):S([].concat((0,V.Z)(B),["Sweaters"]))}},n.createElement("div",null,-1!==B.indexOf("Sweaters")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Sweaters")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Shirts")?S(B.filter((function(e){return"Shirts"!==e}))):S([].concat((0,V.Z)(B),["Shirts"]))}},n.createElement("div",null,-1!==B.indexOf("Shirts")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Shirts")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Trousers")?S(B.filter((function(e){return"Trousers"!==e}))):S([].concat((0,V.Z)(B),["Trousers"]))}},n.createElement("div",null,-1!==B.indexOf("Trousers")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Trousers")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Skirts")?S(B.filter((function(e){return"Skirts"!==e}))):S([].concat((0,V.Z)(B),["Skirts"]))}},n.createElement("div",null,-1!==B.indexOf("Skirts")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Skirts")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Jackets")?S(B.filter((function(e){return"Jackets"!==e}))):S([].concat((0,V.Z)(B),["Jackets"]))}},n.createElement("div",null,-1!==B.indexOf("Jackets")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Jackets"))),n.createElement("div",{className:"carbondb__filter__line"}),n.createElement("button",{className:"carbondb__filter__button buttonDb",onClick:function(){return s(!k)}},n.createElement("p",null,"Sort By"),n.createElement(c.Vmf,{style:{transform:k?"rotate(0deg)":"rotate(180deg)"}})),n.createElement("div",{className:"carbondb__filter__list",style:{display:k?"flex":"none"}},n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Cost")?S(B.filter((function(e){return"Cost"!==e}))):S([].concat((0,V.Z)(B),["Cost"]))}},n.createElement("div",null,-1!==B.indexOf("Cost")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Cost")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("CO2 Cost")?S(B.filter((function(e){return"CO2 Cost"!==e}))):S([].concat((0,V.Z)(B),["CO2 Cost"]))}},n.createElement("div",null,-1!==B.indexOf("CO2 Cost")?n.createElement(N.bzc,null):""),n.createElement("p",null,"CO2 Cost")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("CO2 Return")?S(B.filter((function(e){return"CO2 Return"!==e}))):S([].concat((0,V.Z)(B),["CO2 Return"]))}},n.createElement("div",null,-1!==B.indexOf("CO2 Return")?n.createElement(N.bzc,null):""),n.createElement("p",null,"CO2 Return")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Discount")?S(B.filter((function(e){return"Discount"!==e}))):S([].concat((0,V.Z)(B),["Discount"]))}},n.createElement("div",null,-1!==B.indexOf("Discount")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Discount")),n.createElement("button",{className:"carbondb__filter__list__item buttonDb",onClick:function(){-1!==B.indexOf("Products Sold")?S(B.filter((function(e){return"Products Sold"!==e}))):S([].concat((0,V.Z)(B),["Products Sold"]))}},n.createElement("div",null,-1!==B.indexOf("Products Sold")?n.createElement(N.bzc,null):""),n.createElement("p",null,"Products Sold")))),n.createElement("div",{className:"carbodb__boxes"},n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"42",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:610.6,materials:26.58,manufacturing:500.88,setProdWin:D,distribution:24.32,use:61.5,recycling:-8.68,maxDiscount:"5"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"62",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:310.6,materials:23.58,manufacturing:300.88,setProdWin:D,distribution:34.32,use:31.5,recycling:-3.68,maxDiscount:"7"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"72",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:410.6,materials:46.58,manufacturing:400.88,setProdWin:D,distribution:44.32,use:41.5,recycling:-4.68,maxDiscount:"8"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"82",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:910.6,materials:96.58,manufacturing:900.88,setProdWin:D,distribution:94.32,use:91.5,recycling:-9.68,maxDiscount:"9"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"32",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:210.6,materials:26.58,manufacturing:200.88,setProdWin:D,distribution:24.32,use:21.5,recycling:-2.68,maxDiscount:"2"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"92",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:810.6,materials:86.58,manufacturing:800.88,setProdWin:D,distribution:84.32,use:81.5,recycling:-8.68,maxDiscount:"4"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"22",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:610.6,materials:26.58,manufacturing:500.88,setProdWin:D,distribution:24.32,use:61.5,recycling:-8.68,maxDiscount:"6"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Ball",num:"10.00",sold:"62",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:510.6,materials:56.58,manufacturing:500.88,setProdWin:D,distribution:54.32,use:51.5,recycling:-5.68,maxDiscount:"9"}),n.createElement(Z.default,{beforeNum:1e3,afterNum:500,name:"Yellow Sweater",num:"10.00",sold:"82",returnNum:30,price:67,prevPrice:77,setProduct:i,setDiscountW:Y,total:710.6,materials:76.58,manufacturing:700.88,setProdWin:D,distribution:74.32,use:71.5,recycling:-7.68,maxDiscount:"11"})),Q.name&&G&&!p?n.createElement("div",{className:"carbondb__productBox"},n.createElement("h5",null,Q.name+" (Product ID)"),n.createElement("div",{className:"carbondb__productBox__description"},n.createElement("div",{className:"carbondb__productBox__description__image"},Q.image?n.createElement("img",{src:"",alt:""}):n.createElement("p",null,"Image",n.createElement("span",null,"here"))),n.createElement("div",{className:"carbondb__productBox__description__descr"},n.createElement("p",{className:"carbondb__productBox__description__descr__discount"},"Max Discount ",Q.maxDiscount,"%"),n.createElement("p",null,Q.price,"kg"),n.createElement("p",null,Q.total,"kg CO2"),n.createElement("p",null,Q.returnNum,"kg")),n.createElement("p",{className:"carbondb__productBox__description__total"},"Total",n.createElement("span",null,Q.total,"kg"))),n.createElement("p",null,"Breakdown of Carbon Cost"),n.createElement("div",{className:"carbondb__productBox__items"},n.createElement("div",{className:"carbondb__productBox__items__item"},n.createElement("button",{className:"buttonDb"},n.createElement(N.ocf,null)),n.createElement("img",{src:F,alt:""}),n.createElement("p",null,Q.materials,"kg"),n.createElement("p",null,"Raw Materials")),n.createElement("div",{className:"carbondb__productBox__items__item"},n.createElement("button",{className:"buttonDb"},n.createElement(N.ocf,null)),n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNyAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSIzNyIgaGVpZ2h0PSIzNCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTEyNF85NDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMDQ0MTE3Nikgc2NhbGUoMC4wMDc4MTI1IDAuMDA4NTAxODQpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTBfMTEyNF85NDkiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FFQVlBQUFDVHJyMklBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQmdBQUFBWUFEd2EwTFBBQUFBQjNSSlRVVUg1Z1lIRHdJUzFJM0wwUUFBRlp0SlJFRlVlTnJ0M1h0OHp2WC94L0hIKzlyc2NDMHpwNXptOEtWZjBmSWxsRU9oZkhWQU9mVnRrVUppMTBhR0lTU3BFRkdFc1pPRVV0bStUdVZVU3VSVVgwMmo1QkQ2eGlKalFselh4cTdyL2Z0ajAzSG0ybllkdG4xZTkzKzIyM1Y5UHUvUDYvMnh6OVA3YzMwKzEvc0RRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQ2dybExjTEVNSzlBZzg4MDdWbVRTQXlaMWJyMXNBWGFvYko1TzJxL21BMnQxKzVBZ0ZqN0Y5OTlobjhjaTR4NmZ4NVQyMWNBa0NVVWVia3djblZxNFAyZGFSODl4Mm9KNmhjc2FLM3E3bzJQWlhrL2Z2Qk5xeGE1ai8vQ2ZDU3lzbHg5MVpMVWhJSzRVSTYyTzdmc21YSlAvQ3ZVdU1JYjlRSS9ENDVFVnkvdnFlMktnRWd5cXBwNmpaZlgyOFhVWGgrbzB5elBWZDNLZHhCUXJpQ3VxVGo3cjBYY3FhWkJoODc1cm50K3F6VHIzWG9BS1F5TWluSjIzdEJBa0FZVkU0UGJUbCtITEpYeFNVZVBlcTU3WnByUnBwdXZkWGJ2YjlLVGdHRU1EQUpBQ0VNVEFKQUNBT1RBQkRDd0NRQWhEQXd1UW9neWlpOWdwNCtQcUJDYVozZit6NGZtMHlIRDRQWkhCbnAwY0xPWWZmMnZ2bWRqQUJFR2FVcTZyU1NjN210TUJ5MnFsVTl0UzBKQUZGV2JWSDdUNTN5ZGhHRjUramdXSEhoZ3FlMkpxY0FvcXg2RWYrTWpHdS9yYXJwY1RObWdGNWttcGFaNmJteVZBeE5HelVDdlY5LzNhL2YzOTgzYmZMdGs1ME53S2Z1cjBZQ1FCaFVUaE05SlNFQnN0dkhKUjQ1NHJudG1tdEdEbm5vb2R6Zjh3c0F6NUpUQUNFTVRBSkFDQU9UQUJEQ3dDUUFoREF3Q1FBaERFd0NRQWdEa3dBUXdzQWtBSVF3TUFrQUlReE1Ba0FJQTVNQUVNTEFKQUNFTURBSkFDRU1UQUpBQ0FPVEFCREN3Q1FBaERBd21SQ2swQUlHUm1hMGJRdW0zanFqWjAvUVBzcDA2QkRZN29tL05TN08yOVY1dytEa0cyNkF3UE9Pai9yMEFSV3I5b1NGQVJ2c3pSWXRBdXZXeE1UZHU3MWRvOGlmQkVBQmhxN3o5d2Z6enB5bmV2VUNmYWZlSFIwTnFqd3ZOR3NHdktzQVVIbExCNXlOYkpLWkNWbVY0dmNrSjN1N2R2ZngxeFpkcng2WTdsUlhoZ3dCb3UybkJ3NEVWVU50Q2drQjBDMEE5RlpUV08vZVFQT0p1a1lOOE16ejdrWGhTQUQ4eHB3OE9MbDZkZEFkOUtTb0tNQjBwYmJGQW9UU28xbzFVRENwb1BWVkJrMXV1dzJBTWhVQUFmV2kzbTNmSGt4M0VSVWREVFRTYjNmckJoeGpoNDhQWUZINXJxZmFzcTlLRlFpODZhYzUxYXVEN1RDa3AzdTdOK0xQREJ3QTVyWVJFYzJhQWFrcTNHSUJQblNjNzlzWFZIL3VDZ2dBWUo2M2EvU3MzQkZQWUVET0IxMjdncnBEdno1eUpKQ3FSN1pzQ2F5a2Q5NkNPN3hkcVhBVlF3VEFSTzNyQ3dGblR6WHQyUk5NWS9TT1ljT0FwV3BrbXpZQS9BZUE1UVczb2ovaTQ4eE1VTVA0cVVJRjRBQlArWmJpL1JkNDRKbXVOV3NDbVZjNlJrVUJsUyszc2xoQU5WTWZWSzBLcERMU21YWjBPa05PblFJVnlyeHExYnpkSzFFNHBmZ1ArRm9xaGtRTXFsQUJzaHFwcC92M0IrVjdhbmxNREJCSzZ6cDFBSlJUZjlqRTZzaERoMEFua1RWL1B0amFha2RTRWdUT01uMTQ4aVNvOFJBYzdPM2VPczlzam9wcTNoekE4VWhFQkRBbDUzemZ2c0J5dFRGdnhQTmNnUTNVb1kzZERoeGkyL3Ixb0RvcDArelpvR0lZY3VPTm9ORzNMbDNxN1Y2S3dpa0RBZUQzeWFEeU45OE12dC83aEE0WkF0bmZVMjNnUUZEeExES2JuV2lnQ21rT0IrZ3g3TjIwQ1Jpby9lYk1BWnQvUXZ5YU5ibUxhUDNIRlNKcmVMdlBCWHYwVVI4ZkNNeXV0TEZ6WjJDQnVod2REWXpXdW1OSEFPWGNpQ2RCVHpoM0R0UkYxWEhKRW5DY2Q5aGZmeDJ5eGlZbUhUc0dyTTFkTHFoL1ZMdkhIL2QybjBYUmxLb0FtS2hOSmdqcWtoSFZvUVBvOWRveGJCalFpeUZkdWdCVzRsVHU1MUZuQ21wRmo2ZkhyNytDbXFKOTNuc1BUSDE5UG4zakRiZzRaTDUxLzM1Z0NGWnY5N1F3S3VoaE9pUUVMcmZKK3JKZlAxQytLajBtQnFoSTVkd1JqM1AwQ0k0ZlBBaHMwaFBpNHNEMnBINHBLUWtnWWI4MWQ0L3M5M1pmaGF1VjRBQ292SHJBNlBMbHdkYmIvMkx2M3FDZlAvWEZpQkdnSjBQRGhrQkEzbTFNVmdxKytoNU5qeU5IZ0U1cVZWSVMrSFZsVldJaW5MZkd4LzN5Q3pEWjJ6MHRuUEwxb3Z4dXVRWHNZM1NEd1lQaHlzanNDUU1IZ3RxanpoUnp4SE11YjhTejlzOGpIbEYybGFBQThPOGVFZEdnQVpocXFIOE1HZ1RXQy9TMVdFQ2hKNFdFZ0pyTVlxY2FpcVRLOXUyZzU2c3pzMmVEYmRxWkJTdFdBTk5TVXV3bDZMbXMxNWYvaU1kK1VlZU9lRVk2T2VLWnd1b0xGMENOMTIrLy96NllWbWpIckZsd3NVWGlGd2NPVU9wR1BNS1Z2QmdBQWRNaUJ0MTlONWhNNnVYb2FHQ2gydGl6Si9CeDN2WGx4UVZmZCtkQkRtWm5nMjZFT1RrWlREODVhczZZQVpkbUprNys1aHZ2OWF1b0tuVWF1aTQ0R0xLMjVIellxeGZvRWFjZWlva0JQWXZhdDl5Qzh5T2U4U3c2ZkJpNFd6MjFZQUg0dGZNN2taQUE1MGZNVnVmT0FTMjgzVk5SY25na0FQcnBnQUF3cHdkTUNBOEhuYVlPalI0TktoeWZ2QnRuWG5LcW1jdTBQSGtTOUJYZFB6RVJmSi96L2UvY3VmRHJsSGt0UGZsd1IxZnhEeDJjZk5OTllIcllmbVRnUUxDMXVkekVZZ0cxUlgwUUVnSnFGcldkYXVpdkk1N3haeDVlc1FJZ0pTNXZ4R1BJRzVTRk05d1FBT2EyRVJFMWFvRCtYQ1ZZTE1BMjFlQ1paNENidWI5eVpWQlF5Y21tUGt0TkJRN3BSK2ZNQVd0bzlmN3Z2Z3VvMG5sTDZkOUhQSTdjRWM5aTlhTlRJNTVIdUM4ckMzUWRGcWFrZ09rV29xZFBoMHQ5NHgvNDlsdHY5MDZVVGk0SWdLdlhsL1VJZld6WU1HQTlpM3YzQmhXRUtlOUdtZnNMYktBdG95OWZCdjZsemF0WGcyTUVBMmZOZ3F4eUNRZDM3Z1JDZi91WXJwUjhYUGVYRWM5Mm5uajJXVkJQcVRmQ3dnQm5SenpsOU13VEowQ2ZJekFwNlU4am5yVjVJNTYxM3U2cEtPMEtGUUNQL3R2UER3SURxbFRwMWcxVUI3MHJKZ2JZckhXclZuOGFzajVWVUN2NklGa1pHY0FyK3BhMzNnSTIydGZFeG9MdG93WEQwdE9CWjcyOVU0cG91SzdXdmowRWJnamNPV1FJY0RObktsVUNCVzg0MmNKZlJ6eUJwWG5FSTBxREFnTWc5NEFQYWxxcDZlclZvRHVvckhidGdIaWRlN2xwTTNjNHVaWFBVbE5CWlJFemV6WllhNWVybmZ0bG1ibWRzN085dlFPSzRBek5UUG5NbzZBK1Y3KzJhd2Q4enBJQzE3LzY0ZVZqUkx6M0hxZ3YyVGRuRGxobnhoLzgrbXRLNFlpbllPcW95UklYQiticGxuQ2J6WU1iVG1WdmFPaTEzell0TTIzZnRnM01qUzJiUFJxd20vZ21JQUM0bVgzNXZhM1BxNDluemdUemRNdkpDeGNLMFc0OWxYUGlCUEM5NnZIUlIyQWRIL2ZWK3ZYWFcwbGQrNjNBNlpIbkZ5OEc5U0pqK3ZaMW9vQ0d2SldUQS9UUy8xdTVFaHdPL2NLY09ibDNqbTNiNXNFZDdHYUJOMFV1eWNrQmRTTHZhc1gxNUgxNFNXdStpWXNETllnSEVoSnl6OTB6TXJ6ZG0rSXpSdzcrdi9IamdTV09mMDB1RTVGVlJpeGkvT3paWUEyUHJ6MTgrTFVXS21nRWtLNVRhOWVHYTZXRVhrSGZzMmVCMVhwTFVoTG93YVlUOCtaQlZ1UDR5c2VQZTd2M2JoU3FXOWp0d0FtVmZ3RFUwSk4yN1FKVlc0WE5uZzJYTm1lZVNVa0J0cWI4NS9KbFlDc3p2ZDBGVjFLbkhTRldLOGk5UXlWTWY2WU1Hd1lCVnl4ZGxpMkRySElKYTNmdS9PdENCUVhBUExVbkxRM3doM3Z2L2YzbHE3ZlMyaDUwTE1vTmlNUkVxeFdJWTV5Mysrd1JMK28zaGc4SGZaeUpyN3dDcEtvYUdSbWdWOW5qSWlJZzYwaFMxUzFiZ0NPL3JmRWZiNWZzVHBlV3grK2FOUXNDSDR5TTdkNGQxRU9jdS8xMjBLdVlldm8wcUIyYy9PVVhMeFpZVG45ZG93WVFyUzVXcUFCY1lvNVN4VzNVaFlLSTFocllyeTJuVHdQcjFIZEZ1cXpka1A4MWFjTGZ2cVZxV3FuYXRtOFBRRDRCVUlEQXh5TGZlZlZWTUpzakk3WCsvV2ZnQWN2WnNqQjBGYUlzdVhwYy91MTR6VHVPOHllVGdncGhZQklBUWhpWUJJQVFCaVlCSUlTQlNRQUlZV0FTQUVJWW1BU0FFQVltQVNDRWdVa0FDR0ZnRWdCQ0dKZ0VnQkFHSmdFZ2hJR1ZvR25CaGJzOGVXTlFFSmovR2ZUMjBxV2c1eEYxOTkzQWFacWJpdk1mUUJlK3k4NEdZdFhKdDk0QzI4aTRzODg5Vi9obWdyUkYzM01QT0thcUwrTGlnSWJNZE1rekJuK2h6Y21Ub085VWZRY05ncXpHY1pWM0ZPR3hwdWIwcUlkZmZ4MjBXYi9TcHcrd21aZjkvSXBSVjEzYTJlMmdsdE5xODJhd3ZtSnI4ZVNUQUl0VlZwWUwrbDBvRWdCbG5ybUJlZC9qandPSG1kQ3RHNmdIcmpOSG8vUGE1djdRakJzSE4zd1Y0Vml5QkM2MlNFdzhjTUQ1UnZUdGF2aXJyNEk2UkhiRGhnQlVkbEY5Qnl0V0JEVkhINTQ2TmZlRnZLL0ZPcmZmMGkzUE4ya0MzS3pQeE1TQSt2MXAwY1d0NytwTVFQdisvVzhJTWdYdS91QUR1T1NBdDk5MlVjK2RKcWNBWmQ5YTFiSmlSZmR2SnNmZloyb2xaK2Q3L3FPbnFPTE8rblIxWGk5S1hhb1drenl4M3h3dGRaTWk3VGVYa0JHQTRlbCt1dTYxdnkvK0J4ZFZjR2dvcU9WODA2ZVBCK3JhelIxNzlnQ3pkY2FHRFU2czBFVjkzYVVMcUhBcTVUMXZ3cjMxdmNpclM1WUFQK2o1SjA4V3NPQlhhcVNQRDZoOVJJOGE1ZjY2Q2tjQ3dQQnNjUW5qeG82OS9uSlhuMnVnbHB0OFBCRUFxcG11KytXWFlMVW1QTzFNZllGTkxicDZkUUFWNVlrQW9LNnBaMndzMko2ZC8rbXVYUVV0T0xTSnZ6K1l6VmNvZVFFZ3B3QkNHSmdFZ0JBR0pnRWdoSUZKQUFoaFlQSWhvT0VGem9zMGI5eDQvZVhVUzl3ZkVnTEFweDRwTEVTdDdOSUZBbWM0V2Q4UUZvV0ZBY1c1U2FjUTFGVEhiYkd4RURndmNtZUJUL0E1Y1dXZXlRUTQrN1JuajVJQU1EdzFtcjRkT3pxMXFHY08vS3ZPWWE5Vks3ZStXcldjV042UEx6MWEzeUd5Nzd3enR6NlBidGVsNUJTZ3pITWNJKzdZTVRkdW9BNXQ3SFpnclgxc2VucmhWOWNaZk9IV0owbmRvNS8vOGNmQ3I1WlQyeWNsUFIwd0U2WGQrZGlqL3FZOVJhblBOV1FFVU9abDNaKzVJQ1VGQXJkWGFoc1dCcVNwc2ExYXVhRGhPL2hmVGc2WUhsTjdseTdOZlFaa1VZTEdmcS85ODZnbzhLMWdPalI1TXVnZzFjQVZkK0NwcXFwbVppWTQ1aXBWbE84b1pLZlBEejk4R013eGtjOFBIQWk2QytmQ3c0RURmT0RVTXlHdlY5OWNIYnQxSzlnczhRTldyeTUrZTBVakFXQUFLU2wyTzlqdUltWENCSmMyZktNckdybmNNZW5YUTRmZ010UUlEM2RwZllmLzhyTklyRFBqSnk5Y0NNeUVoUXRkV3Q4QWw3WldKSElLSUlTQlNRQUlZV0FsK0JRZ1lIbGsvYnZ1QW5XSk1STW5nb3BrcHZlK05lVUNXMWgzNkJEd2d5azFKZ2FzNGZQRGYvN1oyMFVKWXl2QkFXRDZqRHBMbGdBTCticCtmUUR1TFY2TFh0YWVHYzJiQS9YMW12UG5jMStLaXZKMlVjTFlTdklwd0FtVVU5ZC9TNXZ2ZE9mUVVHOFhJUVNVNkJIQXRlaTM5UEI5KzBEOVNJWHZ2dk4yTlFYVTJSWC9lKzRCMVV3OVY3V3F0NnVCZ0E1REhxOWJGNVREUHFsRkMrQUxOYU5ZVTRLbHNUQTdHd0phMmZ0dDJRSy9uRXRNdWpxeUtTeWxJR0JnWk1iZGQ0TjZSNzJRKzdYZTR0Rkw5Y2NuVGtEV0kvRkh0Mjh2ZWpzVktrUkZWYXdJbDVjNUhtelhEdWh1V2wrc0tjRWVkYnhwdDROKzF2VHpybDI1VTVXNTlUNklBcFhDQUZDeEtuSFpNckJ1alo4NWFaSzNxN2syYzZYSUw3ZHN5ZjNkbXdFUTFEOWlVT1BHb08zMkIvLzdYMkE1TXdJQ0FGTXg3MjVwbG5zWkszdUE2Y0RSbzBEc2lCMjUzOE9mMWNabWM3Nlp3TWNpMzVrMkRkUzd2UERzc3k2b0s0OTZNbmZxczhBelVkdGZmaGxzVmVLK21UalIrZlVycng0d3VueDVzTDJtVzZhbGdlcXAxdGVwNDRMNmxxdW5BVlE5YmI5MENmdytHVlMrV2JQZkw0ZDZWa2srQlJBdTRWaHBTdXZZRVZqT3hvQUFOMnhnSVEzcjE0ZkFaZGtUaWpRUlJ4dWlIMzdZalRzZ3k3R21hOWZDcjNacHYrKzVKazJBVkQ2cFU4Y05kYjNPQzBGQjRKTnAydVhrcmRodUlBRlE1cWt2eVN4WHp2M2IwYmZxNUtKc1I4RUlYM2VPUk5QVTZLSzA3ek5HSmJxMXJxdmU0SnduL24zeVZ3cFBBWVJyMlNjbzFhREI5WmRURnIyalJRc3doZEo2MlRJUEZMYUtiOTkvSCt5cHF2SDQ4ZGRmM09kYjNwMHhBMWlwZS9mczZmN3k5Q3gxZTQ4ZTREaEwydDY5MTE2dTNIMTJ1NThmT05xWlRQdjNlMkMvRllvRWdPRmxqNHVMTzNyMCtzc0ZxSWhCTld1Q3g0YU4zZldMRnk1QXRqVytvelAxQlNaWTlLKy9nbHFwUEhOeE5VUWwvL1FUWkZ2bWYxcFFmZG5qaHE3TG14UHdBOC9zdU1LUVV3QWhERXdDUUFnRGt3QVF3c0RrTXdERDg1OGFGWlYzcTNYQkl2U09taldCbDJudGtjSldxUmVEZzhFLzFibjYxT2VFbEM4UG9IdDdwTDV6T3J4V0xmQ2ZHblZ6WnVhMUZ5dDNYL2FxcXg4Q2VxU3VRcEVBTUR5ZlNWb2ZPZUxFZ3BNOGRPQmYxWjNiZXZVQ0g3VHUxY3VwTlR4ejRPZFJJL1RYSzFmQzllWUdjVXdxaVFmK1ZTVzROT0VhamdhNlVVNk8rN2VqM3RkOWk3SWRmWW1PZHJzYkM3dUpCNHJTdnYxVkhlR0ovVVl2MC9NZTJVNitKQURLUE5OS24zNmJOZ0Z0R1gzNXNoczIwSnlPeDQ2QmJZcWoxcmZmRm41MTFZVXYxcTkzNHc1WXEwYXZXMWY0MWN4Yi9IdnMzUXVVMHpOUG5IQkRYWTl3WDFZVytKeFdQMjdhNU1iK0YwaE9BY284YS9qODhMUTA4QThkbkJ3V0JpYUg1dmJiWGREd1NIMDhKd2Q4SFQ2MVAvOGMyQnFmYUxVV29iNG04U05Ham9TZ0xsR1I2OWFCNDFOd3haeUFwa1RkSXpNVHJIM2o0ai83clBEcm4xMC90L09GQzNCRDA2SHJtallGZStQTGI3WnRDNlNZbm5iRm5JQ09nVmZDdnZvS3JPMFhmUC9ERDhWdnIyZ2tBQXpqNmlTWEFJZUxOVXRlbmltLy9iYTJ1RTFwRFpmV3hzVi84b2tMTzl5WGVGYzBjekZ0YnVmVHA0RTBXTEVDd0RYdDB0NUY3UlNMbkFJSVlXQVNBRUlZbUFTQUVBWW1BU0NFZ1VrQUNHRmdFZ0JDR0pnRWdCQUdKZ0VnaElGSkFBaGhZQklBUWhpWUJJQVFCaVlCSUlTQlNRQUlZV0FGZkJ0UWZVcmp2SzkzYnZ2VDY4K3BSNEtEd1R6ZGNqSTUyWTIxeGRJanZ3Y202SjY4TjJvVW1FOVpOa2RFZUdPbk9Xa2RZL01lQ1hiTG4xNDMwYnA1Y3pCUHM3emsxdjFYVlBjcWEwNE9FRVAxVFp2QXVqVSthTUdDNGpmcnJ5MjZYajN3NmFaMmp4NE4zSzFyRnZqSXRCRDFwdGJBYmw3YnV4ZXM4ZVhlZmUwMWdMbWRzN09MWGtlbFRrUFhCUWVEcldQT0UyUEhnckk3OXQxMDAvWFgwNG5xa1dQSHdPZDlSOWkwYVhDeFJXTFNtVFBGMlNPUFB1cmpBMEgvcU54NStIRFFyNm9wZDl3Qi9NK3h0VWh6Q09VZGwvemw3KzBQeDNFKzFMWGJNMCtKYXRHcEV6QkZ0eWpLaEFxaWJGRFY5TGo3NzRkTFB5VFUzYml4Nk8yWVl5S2YzN1lOaU9mTVhYY1ZvWUhkZkR4bURGZ2J4aCtkUHIxNGRjeWRtMXZITTg4VWZuMDlRTGQvNXgyd3hTYjBmdkxKNHRVeFlFQnVIVysrV2ZSMnJtdVJYdE9wRTFqREU5STNiUGpybXdVa2pYVjgzRmNiTm9ETzBJUFhGdnNiMzZLMGN0UlZPWG4vc3hTTDdzcmp4V2xISHlMT0pYVlVaM1J4MmxFZnF2RXVxV09uZmloM0VsTTN5Y0t4WmszdWdmL1JSOWRhNkRvVGdtZ050aHVxTis3ZUhRSXJuRW9kT2hSWXBPYysrQ0NvUHFwZjVjcnVxMTlINkdYbHl3TlYxYWthTlVCbHN0VVZNN0Y0VFRjT1ptZUREbExxK0hGUTdmU2VLMWU4WFZRK2JtQ3kxcUNEbWJWbEM5ZzJaNDVkdGNvRjdjNXl6Qm8wQ1BRTHBsRlRwb0I2bWE0aElkZGZUUS9RTCs3ZkQrVmV5ZmwyNWt3b3hJT0g4Mi9QNFJnMVlRS281bXBNY0RDUXFyclVydTNFZWhrNjVlZWZ3VzZqLzZoUlFGVmFGYWNPMjA2OU1Da0pBclBWSTJGaG9Db1MzYXhaTWZxMVZDL096QVJHbTU1WXZ4NXNoMi84UGpZV2dFVHRtZ2N1Q3lHRUVFSUlJWVFRUWdnaFNwLy9CL3FUV0p6SWlsMUdBQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURJeUxUQTJMVEEzVkRFMU9qQXlPakU0S3pBd09qQXdPWG1RdFFBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXlNaTB3Tmkwd04xUXhOVG93TWpveE9Dc3dNRG93TUVna0tBa0FBQUFBU1VWT1JLNUNZSUk9Ii8+CjwvZGVmcz4KPC9zdmc+Cg==",alt:""}),n.createElement("p",null,Q.manufacturing,"kg"),n.createElement("p",null,"Manufacturing")),n.createElement("div",{className:"carbondb__productBox__items__item"},n.createElement("button",{className:"buttonDb"},n.createElement(N.ocf,null)),n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA0NCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI0NCIgaGVpZ2h0PSIyNSIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTEyNF85NTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMzE0Mjg2KSBzY2FsZSgwLjAwNzgxMjUgMC4wMTI3MjMyKSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzExMjRfOTUzIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBRUFZQUFBQ1RycjJJQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJnQUFBQVlBRHdhMExQQUFBQUIzUkpUVVVINWdZSER3TTBINXQvYlFBQUU1eEpSRUZVZU5ydDNXZGdGTlhhd1BIL21ZU1VEUkJxS0VvUlZCQUZxV0toQkM3d29uS2xTU3dVYVpJTm9KQkFVQVN2U0pFbVRZV0VoRGRpTGlnRXFia2dLQW9DOGdvQ1FWQUpLc1ZMN3lWa1YyS3k1LzJ3dXlsa0UxSlprT2YzaFREbnpKd3pzN3ZQekRselpnNElJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFQ0ovVk1hZlB2dERMbFNyQnNhZit2TFVxY0FUYkFrTUJCM0hPaDhmZDFkVWlPS2hoaEpnc1lCK1IzKzBjU01ZVTlMcXYvRUdKQjlaOE5PWk0rNnVYYkh2UFhqcllGMnpKaGdyVmRDZVBhQjZVYjVzV1hkWFRBajMwSmZZZXZvMEdIVlRWY09HZi9kQVlJREhvK3JMMmJQbGh5OEVnQ3BMeThxVndmYW14LzZwVTkxZG0rTG1DWFNtVWJ0MndBeFdaa2t6VThGaUFTSlpkdUNBdXlzcVJESHBTTlZISGdIV1U4ZmJPMk94R29XMWZYdDNWNjY0ZVFJeitKZWZYL1lrZlluU08zZUMxUko1c0UwYmQxZFVpT0xodTh6OHplN2RvRW94b1hIampPVjZuS3Bkc2lRUTZ1NGFGaWZEM1JVUVFyaVBCQUFoN21JU0FJUzRpMGtBRU9JdUpnRkFpTHVZQkFBaDdtSVNBSVM0aTNtNnV3SkMzSjdVSk5hWEtnVytLOHdUTDE1MGQyMHkrVXRQT0hrU2pGaGo5dkRoa0x3MkluTGp4b0p1VEFLQUVLNVppRkRxZGh3aXIyYVhMUXU2dFMxaXdRSUFJbXZXTE9pMnBBa2d4SjJwbzVxWWtsTFlqY2dWZ0JDdW1RalJHbmlSWVVlTzNNSnlWL0N3dHpkd21iUjc3bkdSbmtMelU2ZEFmNmdtOWVsVDJNSWtBQWpoa2g1RHg2UWtzSVpHbnFwZCs5YVZXMzUxLzJhbFNvSDFjNi9IejU0Rmx2TlY1dmR4NkIxY0sxRUNyRTBDZnR1MUM4anlWby84a2lhQUVMZVZDNTFqcGljbEFUOVNjc09HN09tcUpUOVhxQUIrc1dlK2JOV3FzS1ZKQUJEaXRxVEswWHZac3B6VDlUUTFvRWVQd3BZaUFVQ0kyNUpQYU1vcmE5WUEzV24vNTUvWjAvVW4rbzNubndkNFIzc1d1Q2t2ZlFCQ0ZJclh1ZUR2SDNnQVBEZlJQRG9hMktMYVZLdFcrTzFhditJSEFNNWlOdXduNnE4eXA2YzNCVWFkcnRlNk5TUlBnNisvem04cEVnQ0VLQlRQZm1yNTFLbkFOeXhzM1JxQXVrVmN4UFRjRXZVaTFkYlJGRGlRL3dBZ1RRQWhDdWM0S1M1djE5MGlPcDY2M2J0RHdab0NjZ1VnUlBFbzRuRUV1ajRkeTVjSEZjcFJmLytNNVlWckNrZ0FFS0o0OUdHWjFRcVdtWkdiaTJJY2dWK2crWmVlUFVGRHQwV0xzcWNYckNrZ1RRQWg3Z2czdlN0UW9LYUFCQUFoN2doNUhpRGthQXJralFRQUllNG9OeDBnbE5FVXlBTUpBRUxjVVlxMktTQUJRSWc3U3RFMkJTUUFDSEZIS3BxbWdBUUFJZTVJTjJzS1VKK3dmdjNBZDMzdzZzNmRjOXFLakFNUW9sRDBpd3hPU2dJMW5sbFpFaUk1YnpLQnFhLzUwdUhEUUVtNmFsMTA1ZDdzV1FHMk10M0xDeFFxUEM0T1RGWE5RN3AzQjh2SnlMbi8rWTh6a3dRQUlRcG5NcjNXcmdXZ3lULys0U0k5anRIMzNRY1UvVE1DVHJrK0srQU1CTFFrZlBseU1IMWh2dis1NThEeWFHVG9oZzNTQkJDaVVLeFhLdTM4OEVQQVRJWHZ2bk4zYlhMaENBUjZudzVhc2dSOEU0YytWN1dxWEFFSVVVanZxdFJVc016czhYemJ0bUF5bDk4WUhnNTZMajkzNndacUdEM0xsTG4xdGRLMU9WaWhBcWd4ZEM1ZE9tTzVDbFlUeXBRQjR2OTZMenhjQW9BUVJXVFo1eWtwWUltRVNaT0FTTzZaTk1sOXRmSHJPK2pWK3ZWQk56Rk11M2NEdTdHVUtKRXB3L2VxYWFkTzBnUVE0bThwZVdGVTlQNzl3RWs5ZXU5ZUZ4bTI4SFAxNmhJQWhQaGIwNjNVeDhuSkxoSzJNdDNMU3dLQUVIZXhJdWdEOEpreTZOVVdMY0JJTUo2Zk5nMm95T1JLbGR5OVkrS3VWUXZiaVJQQVNsdmQ0Y1BCc2pVcWFzOGVkMWZxZGxVRUFjQzRiRHkvY0NFUXowckhpdytLNjM2bkVIbFNxeGFBc1NrcXl2Ny9wazNkWGFQYlZWSGNCVGpOWTQ2UlNDdmR2VHRDT09sVHREQU13SitEN3E1TGNmTFpIM0toV2pVd1dtbi91WE9CbnJSNytPRk1HYTVRdTJwVkFBNW5YN3NJQW9ENldKZnAzeDkwbk5yMC92dEFmNnJjWHJPcGlydktZWkxPbmdXbVVYbllNSGRYcHZpcEpiclBwRW5BZGFyOTg1OUFUTFlyOEs5eVhyc0lBa0N5bXE4MmI3Yi8zYlFwOE5IZk8rS0tPOFE2ZDFmZ0Z2bEpML0h3QUZEaCtWOVpCZ0lKY1VlenJhTGttREZnekNNMklBRFVBUjZ6OTRFNFhPRzFxbFhKTnNtb25RUUFJZTVvMTlWOGRmU28vZS8yN1FIWW5EbmR0NS81bVUyYjdGTUlCd2JldUxhTUF4RGlMdVlKZWd4ZGs1SkFUV0pscVZJWlNlb0tYenp4QkppR21nTVBIWEozUmNYZFN2dmpkL1FvR0orcTBOQlFTRDRTMFc3ZnZwenplMDhPQ2FsVkM0elhiQ0VmZkFEcVRmWDZRdy9sVWtBUGVqbG05cW1UZWJHYVJZMlNKY0UwMUZ3blA5OS9QWlRlU1VuQUFmM3dtVFBBWmVydTJnV3MwdUZyMW9CMWRWVDBqaDN1UHFwT25xQ1NLZWQ4dDVoOXRsR0g5ZFR4OXJiL21hVk5JY1F0cExCLy8zUVQvVVJVRkhBRUhuODg1L3dlbitrdU0yY0NFOVM4WjU4RkNqb3U1VHdORFFPSXlkLzNYOFU0WHRTQitzRzVyRU1IQU9YeDFsdGdhbWxPM3JFRGREbmI4R0hEM0IwUUROQnhxZHREUTBIdjBlK2RPK2V1aWdpUk83Mlp5MW1lWnNzcDMvcTg1WE9iM1l4bzNoelVNU04yMnpidzlUYzNDdzExVjJVOHdmcjdnbUhIajRQZjB3T2o2OWNIMnplZURkNTdEOVFpVGdZR2dtNUx4Y3ozOVZVdnlydTh6MStYajFOVFFZL2x1YVNrdkZkQkRlZVl2ejhaRVRldi9zV3hhOWVBbzN6bjRRSEU4cUt2N3kwOGRzN3l6OUxJTUVoL0JWU2VGZkI0M1cyVW1hQkRoNEJ1dG5GRGg5NDh2OGN6T2prOEhHeWpqSmpTcFVFMzBKMnpESXk1V1htenFGYXlKTmtmbjcyWlBpeXhXb0dhUEpXV0JveDNiQ2NuaWZUejlMUmY0Y3ljQ2FaRTg0VVNKY0JTTi9Md3RHbTM3T2ptZnhWVFhYTnNhaXJ3WDdiYjd6ODZUT1NYclZ2QkVoYTVwVldybTIvSE56RzRmOU9tb0xxb3dPKy9kN0U5cHhTYW56b0Z1cS8rWXZKa01GcXBBVXVYUW5LZnlQODVlellqVzNyYjcxVzJ2ZklLcUFXNmVsaFlIajZJbTlESEdYTG1EUENZNmpwbENxZ3FhVzJYTHJXUE1UOTFLbFA1T2xqWHJBa2VyZFNJM3IxQjl5Smd4SWpza3ptbWN3UVEyN01xdGw0OStMTitSUGxqeHdwZVQxRTRmdmNOZktSU0piQ045OWlRbUpqcHhSazNjUGFaOFpidU1ITW0yS1lZZzJOajRmcm9pSWpEbWNiYW1lSUd4MVd1REhxeHpUOG9DTlJhVHI3NUp1REZqaXBWWEZTZ0FudHROckFaNnZXMmJlSFBveEV2Zi90dDRmZkx0NTk1MnFaTm9KWnlPUHRkQUxjRWdCNDlQRHpBWkNxL3o5SDJhZE9raVl0c28xVE10bTNnY2QzWTJxVUxKRTJlMi96Q2hielgwK3RjOFBjUFBBQ2VVU3B3M1RwZ0VuM3Z2ejhmTzlxRUdUdDJnSHFWYmM4OWx6M2czSXozdHdNVDc3c1BqTzg4TDYxYkIyb2luOVIxMVJydHFqNWJzUUlzaXlPdTJDZDBFTzdnMnprNGFmRmlVRitwOEpkZmRwSGhkYm9lT2dTcEk3VC8wMDlEU3NYNWovLzJXOTYzWDJyMGtCM2x5ME9hdDYzbHFsWEFOTjIvUll2cytYUWNGMy82Q2F5ZEtpMTk5RkdBZDVYTlZvajl1dDBDZ0o4TzFvR0JvUDFVeUtaTkxqSUVNZm5JRVNpeFVyM1ZwQWxjdVJJUmNlbFN3UStBMThaWFN6MzRJSGgrNjNGb3p4NWdCdi95ODh0bGhYc1pmZnc0R0ovYUpqWnFCTmVhUmtXZlAxL3c4dE1EUWFMbnFvUUVGMWNFam1tazA4N3BCclZxWmIydks0cWY4MHpOU052TUV5ZkkzaFIxWEttbE5rM2IwcVFKcExTTFR2cjExNEtYNSs4ZkVsSzJMUHpWWHBmYXN3ZFl4OVdhTmJQbmN3WUNGY1NQMTY4WFlnZk45SGpvSWJJMVVlMVhNbTRZQ0tSSHFMZHpPOU1wVk9leFkrSEtsWWd0aGZuaE96ay9NSStQZzczbXpBR0Y0cTIzY2xtaGtaNHhibHpoZi9oTzExc3ZxSHZrQ0poYW1zTm16TEF2R3o4K1V3WUxFVXFCU3VWWXQyNzJSVE5uRnI1Y2tUZTZRZHI2TGwxQW5WY3UrNkIwSmIzNGd3OGdwVjEwbWNMODhKMmNKelMvOCthQXNXTnpudTViQlZIdWtVY0FhRk9vQWlOeCtTMVdKWFNEOWVzTEVBQjBLQ2V2WFFNVkNsbk9aTCt5cjJsVE1Kbk1kWGJ0eW1VREFTVFVzZDl4clpabHVaa0tGZ3Nrei9TWnN0TCtYT0dUcmxZM3RSdzBxSEZqMEM4YWk2Wk9CVFdmbGNuSmtQYWo3akI4ZU01blVJODVyRmk4R0d6Z09nQzBKRHdsQlh5dWVoMWN0Z3dzOElHcjhwM3ZXck4xVmdQZWZ4OVVkeFdUa2dKcFZZMTJvYUZ3L2ZpOG9OOS96NzVlMmpQS3VuZ3hlT3pXV1FPQTh3UDVXbzBaTXdaTUp2UHZMaTlCUmJIUXlUU3FVUU9BbjEybE83ODNPVWwvR20rMG5qSm5EdWdXREN4ZEdyalBHRHg2TkZoZm1QZjFEejlrWHk5NXMrK3FGU3ZBRkdaZFo3R1EvMDdrZ3U2djgyNWZwN1IvaDRVVklBQW9SYXB6M0VCUVVLYUVUTDN3THR2MFR1TmRMOWJOZGE4alJ3Qm0xYlZhYzltQmFLTjVUQXlveGhqMk5wTDlNV1NQWGtaUVdwbzlqNnNyakd0N0svZExUQVJUNHpNaHFhbWs5OEttYThUdng0N0J4U2tmUG5QMWFpN2xIekptUjBlRDZtbS9uWU9QZlR5bHNkT21EUU9vQ283N3oxazRPNGxNWWVheHJqNXcxWTNZY3VVQWFPUDRWOXdDcXFYckh6N1ZlVEl0RGE3dHZSaC9NSmZIMjR3LzllV3BVNEZ2U09yYUZkUTM5Z2xDOUZqYnhOaFlBTDUyUFJCcDFwTldLK2kyNXFERGgwRkZwcC94czlDTHVGQ1lLMkVWcmVPdVhnWGRWeTNadEFuVVBvK05vMGVENWZmNXcwNmZMc2dWd0IvOFgxZ1lzRWYvdTAwYlVJM1ZXeFVyRnNFblVVblo4dFRac1lKNmpnRktXZUtxbnE2amZIeUF4YnlRNi9vVitjVm1BeEp2bUZDaENqdnpVcjcrVEovMzlnYjE0QTBkS0hPSnpmNndoUXNCSkRqS3FaYUgzTUpkS3RwNzVVbXNGK2VZMGNkMWo5bHMxZGorZmRRdlpWNnM5ckF5VDkrSHlteDNmQjg2WlY2c1Y5RG40a1d3ZG94OHNuejVRdTJKdmQ1ZnVFb3FRQUN3VG9wY2UrSUVtQjRkdkxGQkE5Q3owaUttVEFHMVNDMXYwd1owS0VzekR5bk9WcHVKckNsVmlteG5ZUFU5NGZZWlZIbzg3K1VGenRjczMwaHYxR0hCd2NBNjliOGZmUVJxR3IyVGs4RXdQTDRkTlNybmNyM09uZDVSdXpaUVF5MjBiLzhHMy9KTjllb0Fnd2Jaejh4UlVSYUxpL0l2R1NXSERBRit0WTJlT3hkVWEweC8vUVVxaERsaFljQWsxcm9xMzNtcFNITTl4dVZ0U1VjVFJBZnpwc3VYT0lwaW9SWTVyc1F5alh3RjBzY0JPTDgzS1JYQlZhOS9hcjlVMitqUjRQbUFaMHhBQU9ocWVtcTVjbUNzVUFkemZ4L0JhK3U4dlVGdC9HdXV5NUdHcWN3K2ViTFk5NzY0QzhqT2QzNndYcmdRVktnS2VlV1Y3T2s2MU40WlpwMFV1WFpsRWI1anlOUXQ1T214WTRIMXVzYUVDYmtja2lEMVM4K2VrTHd3WXN1bm54WmQrWDQrd2V0SGpnUnRxRlhUWFUzbVZGMC85czQ3WUVtYzMzLzgrSHh2WGhTUUtkRmNhOVFvb0RFZHBrNTFrYUdqK3VQdHQ4R3lJdUtMaVJPTHJsemYzc0VsdW5VRHRWd05XTDQ4ZTdxZXBTTSsrUVNzd2ZOVjM3N0Z0ZmZ1ZUJyd00zVTRQajZYOUZxMHN4OW81NW00Y0p4blh0M1Z0bURFaUp2bjF3L29uZSsrQytWWDl3L1A3VW9tcjB3dEJ3MnFVZ1ZzMzZuZjNuZ2psNHpqUFVxdVdWUDQ4a1QrR0lzTWovaDQwbS9IM2tqMzBpWER3c0QzL29GejdyMjNLRXJzSGVEbkJ6eWt0dVErY1lnUnRXcFZzZTk5Y1JlUW5YVnpwVnFyVjVNK3NPSkc2alVPMXFzSEpzTmc2ZEpNQnl5ZjdIT2ZnU3FoVjhYSDV6eXlLeHZIZ0NHTHJVVDN6ejh2ZUNEd2l6VnZDQWdBRGhydDE2eXhkelpWcUpBOW41NU83TWFOWUFtYUYrUnlBZ2RScks1Tm5QZmJnUU9najJxMXpzVmJoTktIdm0vMjZCSWZueEhRODgvK1BmYTladHE0ZEduT0E4TjBLTWNPSGdScmNNQ2dqRmw4aTR0YjNnZGduMHVOV05ZTUgwNk9rUmNmakU2ZHdIZU1YN1BkdThGbi82RFVGMTRBQ04zdWFzeC82Y2NIekNoWERuem5oTFFiTWdUd1N5MlhrQUNxTVQ4NDdoWmsxY1RlZHMrcGZOVlRMZXpRQWF6LzU5VXVJUUg4QXMwQlBYdENUZ0hKWHcvVFpjcUE3eFh6Z09CZzBQMDV1WGN2Y0kydlhiNlZ0aU1IcjE4SDFWbUhqUnpwanM5QlpPYlJnbDJqUnBFeHB2OEc2a0UxdVdGRDBLdU4xeElTd0hkcGNPTGd3UmtEZTdLelg4SDZmR25lOE9LTFlJb3hmYmxuRDZpQTlLY1VzM0o4RDlVV05kRitwZXI0blJRck4vUUIzTWozQmJQOWZuNDgyM0xyeEV2bitPSFFTYy82NHc5Z25mclV5d3M0alAwUzdjYmJlemR5M043UlI5WDJsMTRDQTF1WEdqVnlhWnZmeU5GWlJ5c2UvdTkvZ2Q4NDVlRUJIR0xDdmZkeTg0ZEluQUhIb2lMTlpyQllJaUtjcjY4VzdtZUtDOVo5K3dLRDFiNllHTklIYXVYSThWQVh0UmgyL0Rqd2pINDVKUVg0andxdFVZUHNuWXM1MEYvcGVoTW5ndldwK2ErLy9mYXQydHZiSUFBQUtBVytJY0dUSjA4R3RVdzlNMm9VTnovdytlV003RzMxcGNHRHdSSTBYeTFjbUpHYzNrbjRpMzVwM0RoeWZqaXBvQnhYSEhvQ0E0Y05BMnRnWkwySWlPSS90cUpnVEM4RXZ6NWdBSEJaRFpzM2ovVHB0WXV1QVB1SlFDZXFYaE1tZ0xWQ3hQNXg0K3hKTHErSWk4VnRFZ0N5SEplNDRIczdkZ1Q5bzNwMDltejc0NWwxNmhSaWc0NTUyNDJYYldjSERvUnJUYU9pRWhOenp1NnpQK1RDazArQzJxbGpvNk16K2lRSzdFRzhkKzRFdlVRbkRSa0MxcnJ6WTNJZEtTbHVLNmE0d1hFTkd3TExiZjd6NWdIeHJIemlpWUp2VDMrc2gvLzhNeWhGdTVFandSSTAvL2o2OWU3YXU5c3dBR1I0UnhzRytGNC9YZmJaWjBHVjVmTk9uVUNmVXA4MWF3YXF1djZ3VWlVZ1dTMVZDaWhIeVJNbmdNLzBROXUyQVJjOGZ2bmtrOEoxcmlrRlBnUE5aMXUwQURXWGhONjlnWE82YnJObWdFbGRyVklGMU9PVWR2UWx6RHg1RXBpaFg5MitIVlJiSGw2OU91dHIwOFdkejJlZytXekxsbUNNVXdPNmRBRmUwa3VlZWdvNHcvbDc3Z0hPNklxR0FWUWcrY1FKNEJRL0ppUUFRWlJjdlJvc0N5L09zSStrWGJiTU9YSlZDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkIzanY4SFNDWVNGVkNNaVVzQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNakl0TURZdE1EZFVNVFU2TURNNk5USXJNREE2TUREMmdhby9BQUFBSlhSRldIUmtZWFJsT20xdlpHbG1lUUF5TURJeUxUQTJMVEEzVkRFMU9qQXpPalV5S3pBd09qQXdoOXdTZ3dBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KPC9kZWZzPgo8L3N2Zz4K",alt:""}),n.createElement("p",null,Q.distribution,"kg"),n.createElement("p",null,"Distribution")),n.createElement("div",{className:"carbondb__productBox__items__item"},n.createElement("button",{className:"buttonDb"},n.createElement(N.ocf,null)),n.createElement("img",{src:R,alt:""}),n.createElement("p",null,Q.use,"kg"),n.createElement("p",null,"Use of Product")),n.createElement("div",{className:"carbondb__productBox__items__item"},n.createElement("button",{className:"buttonDb"},n.createElement(N.ocf,null)),n.createElement("img",{src:W,alt:""}),n.createElement("p",null,Q.recycling,"kg"),n.createElement("p",null,"Recycling"))),n.createElement("button",{className:"carbondbproductBoxbutton buttonDb",onClick:function(){i({}),D(!1)}},n.createElement(N.oHP,null))):"",p?n.createElement(m.default,{beforeNum:Q.beforeNum,product:Q,afterNum:Q.afterNum,prevPrice:Q.prevPrice,maxDiscount:Q.maxDiscount,name:Q.name,setProduct:i,setDiscountW:Y}):""))}}}]);
//# sourceMappingURL=component---src-pages-dashboard-carbon-db-js-6aa783741f4372100c17.js.map