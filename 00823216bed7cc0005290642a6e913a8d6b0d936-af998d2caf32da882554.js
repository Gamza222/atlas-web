"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7226,4191,181,4216,4918,5916,3083],{1046:function(e,t,l){l.d(t,{w_:function(){return m}});var a=l(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.createContext&&a.createContext(n),U=function(){return U=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},U.apply(this,arguments)},d=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l};function r(e){return e&&e.map((function(e,t){return a.createElement(e.tag,U({key:t},e.attr),r(e.child))}))}function m(e){return function(t){return a.createElement(F,U({attr:U({},e.attr)},t),r(e.child))}}function F(e){var t=function(t){var l,n=e.attr,c=e.size,r=e.title,m=d(e,["attr","size","title"]),F=c||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),a.createElement("svg",U({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,m,{className:l,style:U(U({color:e.color||t.color},t.style),e.style),height:F,width:F,xmlns:"http://www.w3.org/2000/svg"}),r&&a.createElement("title",null,r),e.children)};return void 0!==c?a.createElement(c.Consumer,null,(function(e){return t(e)})):t(n)}},6072:function(e,t,l){l.r(t),l.d(t,{default:function(){return d},totalSubsidy:function(){return c}});var a=l(7294),n=l(7629),c=112,U=[2021,2022];function d(e){var t=e.children,l=e.name,c=e.pic,d=e.add,r=e.headerDel,m=e.download,F=(0,a.useState)(!1),i=F[0],Q=F[1],N=(0,a.useState)(U[0]),B=N[0],o=N[1];return(0,a.useEffect)((function(){if("undefined"!=typeof window){var e=document.querySelectorAll(".box-content");console.log(e);var t,l,a=!1,n=function(n){a=!0,t=n.pageX-e.offsetLeft,l=e.scrollLeft},c=function(e){a=!1};e.forEach((function(e){e.addEventListener("mousemove",(function(n){if(n.preventDefault(),a){var c=n.pageX-e.offsetLeft-t;e.scrollLeft=l-c}}))})),e.forEach((function(e){e.addEventListener("mousedown",n,!1),e.addEventListener("mouseup",c,!1),e.addEventListener("mouseleft",c,!1),e.addEventListener("mouseright",c,!1),e.addEventListener("mouseleave",c,!1)})),e[3]&&e[3].addEventListener("wheel",(function(t){t.preventDefault(),e[3].scrollLeft+=t.deltaY}))}})),a.createElement("div",{className:"layout"},a.createElement(n.default,{name:l}),d||"",r?"":a.createElement("div",{className:"header-subtitle"},a.createElement("div",null,a.createElement("h2",null,l),c?a.createElement("img",{src:c,alt:""}):""),a.createElement("div",{className:"header-calendar"},m?a.createElement("button",{className:"buttonDb download-button",style:{height:"30px",width:"30px",color:"#000A68",marginRight:"25px"}},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTE2NF81MTEiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTU2MjUpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTBfMTE2NF81MTEiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBRUFZQUFBRDYrYTJkQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJnQUFBQVlBRHdhMExQQUFBQUIzUkpUVVVINWdZV0ZpRVZEeEtCRmdBQUJHUkpSRUZVZU5ydDIyOUlsVmNBeC9Idjg1UnB0K2FMcUkyV1FwQVFpMEd5cE5FTFlRTlpZWExudjEyaEY3TVhJN1VSdVNKUTdxdlJZaXhXRzR5NTU2b3dSNE1nYTh3bC9sbUx2VWpDTVdWL1hEaVpRYVRjL3MyLzZYUFQ5SjY5bUpmUm5XNTUvM2llZTgvNXZMejNjdm1kNS93NHp6M25VWU9rNDhxdCttbi9mdUNtYVBUNWdISG10MnlKNGdzenFCMGVCc3FOa2tPSHdQWisxdFBlTG51VXNXTEtEaEFIOThRR3l5TDZpUThaNXYyTURPQ2lNSHcrMllPTHRXUXNRR2pDWW0yQVhabVpzZ2NYYThsWUFHMFpkQUVVcHd1Z09GMEF4ZWtDS0U0WFFIRzZBSXJUQlZDY0xvRGlkQUVVcHd1Z09GMEF4ZWtDS0U0WFFIRzZBSXJUQlZDY0xvRGlkQUVVcHd1Z09GMEF4ZWtDS0U0WFFIRzZBSXJUQlZDY0xvRGlETmtCWU8zdlZXdmNiakJlRkQ3TEF0Ynd3K2JOc2xQRjBTd3YzN2tEWWxxOFUxRUJnVlRmK09YTHNzSTRvQUN1MVpXZisvMGsvOFNIU3hGbi9YNndKM3l1bVB3UFkwVDBMVUNlZGNZSklXU0hjRUFCZ3ZmNXVMb2FjRkVsLzRLc2dJVnhCbitqNjlneDJXRld5UTRBY3gvMDNMdHhBMUthY3JiT3pBQmZNNTZYSnp0VkhIMWo5TmJXUXVBRnE3VytYbllZQnhRZzVIRnp6M2RkWFpCeUpHZmZ4bzFBRC9idTNiSlR4WTRZbzZpaEFRTGJyS00xTmJMVGhEamdGaERPUGpzeVVGME5aRkhVMGlJN1RmVEVJSysydFVFZzliblhEaCtXblNhY0F3c0F6YzN6ODJEL0dyeDA0QUR3Q2o5MmQ4dk9GSkh2ZTNzaDhMeHBsSlVCdkd2TXpjbU9GTTZSQlFpcHI3ZHRNUDBwSjkxdXdFdlQ0S0RzVEU4aG4vUmJ0NEFtODJSQkFVQ2RaMnBLZHFpbE9Mb0FmNXY2K1pQOEJ3L0FESmlaYmplSXIzaHpkRlIycW44VEg3RjFZZ0tNOWNFeHR4dHNUNTNuN2wzWnFmNlBBdzZDbGl2dHJjcjd1YmxnamxKMjVRclF3ZmJVVkltQmNqa3hPd3ZHVGxHUW53L1RwMzM5VjYvS3ZrcFBLd0VMRUpJMldyblQ0d0V6bTdYbnp3Ti9rbTJ1NUlxMnNKODNSdWt1TDRmcG9GVng3cHpzcTdKY0NYQUxXTXFqRGRZdkZ5NEFIMUxvOVVvSWNNbXdhbXNUZGVKREhIUU9FS21WUGo5dzVuNCtVZ204QW9TTDkvbUJzL2Z6a1VxaUFzVHgvQ0FCOXZPUld1UkhvTXRWV1JuTlF4bmJ0aXpEQVQ4dTEyY2ZhZHUwQ1lKdlBDNitmaDA0eGNHc3JHVjhRV2cvN3pGejl1eHh6cll1dHZPVFZDdkFreUk5UDBqTS9YeWtrcmdBSVZQdjFmM1Izdy9pSWxtRmhjQStCbVptRnZuZ3duN2V2Q20rS0NtQjZhYjZocjQrMmVualRZRUNoRHhxdEo2OWRnM29aa2RwS2JDZDNxRWhZQmQ1dDI4RHRqRlpYSnhvQnpuUldpMDd3TXF6L2RhbnJhMkFIMXBiQVNpVm5Va2VoVllBYlRHNkFJclRCVkNjTG9EaWRBRVVwd3VnT0YwQXhjWGhIQ0RhczJwdEpla1ZRSEc2QUlyVEJWRGNJZ1VRWG9vZVBwUWRUSXUxMEdQdUp5MVNBS05EYkZQbmFaZzZESU81enM3d1Z4Y3B3S29oYzBkTkRZZ3ZHUmtia3gxYmk1Ym81TnVSRVJDbjU1NDVmano4M2YvNDA2MjB2cXFSekV3dzI0T3paODZBU0RGZTJyc1hEQyt2cDZmTEhwYTJGSEdLbHNsSk1OYnhka2ZIUHhNZkdHdzhPandjL3VtL0FJUGFpRUpmNG0zZEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREl5TFRBMkxUSXlWREl5T2pNek9qSXhLekF3T2pBdyt6bXg2QUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU1pMHdOaTB5TWxReU1qb3pNem95TVNzd01Eb3dNSXBrQ1ZRQUFBQW9kRVZZZEdSaGRHVTZkR2x0WlhOMFlXMXdBREl3TWpJdE1EWXRNakpVTWpJNk16TTZNakVyTURBNk1ERGRjU2lMQUFBQUFFbEZUa1N1UW1DQyIvPgo8L2RlZnM+Cjwvc3ZnPgo=",style:{height:"100%",width:"100%",color:"#000A68"}})):"",a.createElement("button",{className:"buttonDb calendar-button",onClick:function(){return Q(!i)}},a.createElement("div",null,a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xLjA5Mjc3IDguNDA0M0gxOC45MTY3IiBzdHJva2U9IiMwMDBBNjgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNC40NDIyIDEyLjMwOTdIMTQuNDUxNCIgc3Ryb2tlPSIjMDAwQTY4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTAuMDA0NiAxMi4zMDk3SDEwLjAxMzkiIHN0cm9rZT0iIzAwMEE2OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTUuNTU3ODcgMTIuMzA5N0g1LjU2NzEzIiBzdHJva2U9IiMwMDBBNjgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNC40NDIyIDE2LjE5NjJIMTQuNDUxNCIgc3Ryb2tlPSIjMDAwQTY4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTAuMDA0NiAxNi4xOTYySDEwLjAxMzkiIHN0cm9rZT0iIzAwMEE2OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTUuNTU3ODcgMTYuMTk2Mkg1LjU2NzEzIiBzdHJva2U9IiMwMDBBNjgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNC4wNDM1IDFWNC4yOTA3OCIgc3Ryb2tlPSIjMDAwQTY4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNNS45NjUzMyAxVjQuMjkwNzgiIHN0cm9rZT0iIzAwMEE2OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4yMzgzIDIuNTc5MTZINS43NzA5NkMyLjgzNDI3IDIuNTc5MTYgMSA0LjIxNTEgMSA3LjIyMjE5VjE2LjI3MTlDMSAxOS4zMjYyIDIuODM0MjcgMjEgNS43NzA5NiAyMUgxNC4yMjlDMTcuMTc1IDIxIDE5IDE5LjM1NDYgMTkgMTYuMzQ3NVY3LjIyMjE5QzE5LjAwOTIgNC4yMTUxIDE3LjE4NDIgMi41NzkxNiAxNC4yMzgzIDIuNTc5MTZaIiBzdHJva2U9IiMwMDBBNjgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K",alt:""}),a.createElement("p",null,"Jan 01, "+B+" — Dec 31, "+B)),i?a.createElement("div",null,U.map((function(e){return a.createElement("button",{className:"buttonDb",onClick:function(){return o(e)}},"Jan 01, "+e+" — Dec 31, "+e)}))):""))),t)}},7947:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});var a=l(7294),n=l(2910),c=l(2605),U=l(2293),d="CheckoutNL-module--container__circles__item--uyWVS",r="CheckoutNL-module--container__circles__item__emissions--3om7G",m=l(1279);function F(e){var t=e.price,l=e.name,F=e.beforeNum,i=e.afterNum,Q=e.line,N=e.setProduct;e.product;return a.createElement("div",{className:"CheckoutNL-module--container--A8zwx"},a.createElement("button",{onClick:function(){return N("")},className:"buttonDb"},a.createElement(m.oHP,null)),a.createElement("h3",null,a.createElement("span",null,"Sector:"),l||""),a.createElement("p",null,"Your Impact:"),a.createElement("div",{className:"CheckoutNL-module--container__circles--UjWb4"},a.createElement("div",{className:d},a.createElement("p",null,"Before"),a.createElement("div",null,a.createElement(n.default,{Width:F/5,Number:F})),a.createElement("p",{className:r},a.createElement("span",null),"current emissions")),a.createElement("img",{className:"CheckoutNL-module--container__circles__arrow--YAK6p",src:U.Z}),a.createElement("div",{className:d},a.createElement("p",null,"After"),a.createElement("div",null,a.createElement(c.default,{Width2:F/5,Width1:i/5,Number:i})),a.createElement("p",{className:r},a.createElement("span",null),"emissions after offset"),a.createElement("p",{className:"CheckoutNL-module--container__circles__item__reduction--j4TMy"},a.createElement("span",null),"total reduction"))),!1===Q?"":a.createElement("div",{className:"CheckoutNL-module--container__line--5j-eN"}),!1===Q?"":a.createElement("div",{className:"CheckoutNL-module--container__sub--ZV0JO"},a.createElement("p",null,"Subscribe to offset"),a.createElement("p",null,"£",t,a.createElement("span",null,"per month")),a.createElement("button",{className:"CheckoutNL-module--button--mtsXS"},"Go to Checkout")))}},2910:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var a=l(7294);function n(e){return a.createElement("div",{className:"IECircle-module--circle--MvIiC",style:{width:e.Width+"px",minWidth:"116px",maxWidth:"210px",height:e.Width+"px",minHeight:"116px",maxHeight:"210px",backgroundColor:""+e.Bg}},a.createElement("h4",null,e.Number,a.createElement("span",null,"Kg CO2")))}},6773:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});var a=l(7294),n=l(2910),c=l(2605),U=l(2293),d="ProductLog-module--container__circles__item--olgSM",r="ProductLog-module--container__circles__item__emissions--9k4KR",m=l(1279);function F(e){var t=e.prevPrice,l=e.name,F=e.beforeNum,i=e.maxDiscount,Q=e.afterNum,N=(e.line,e.setProduct),B=e.product,o=e.setDiscountW,u=(0,a.useState)(i),s=u[0],M=u[1];return a.createElement("div",{className:"ProductLog-module--container--wrpNl"},a.createElement("button",{onClick:function(){o(!1),N("")},className:"buttonDb"},a.createElement(m.oHP,null)),a.createElement("h3",null,a.createElement("span",null,"Edit Carbon Discount for "),"'",l||"","'"),a.createElement("div",{className:"ProductLog-module--container__edDisc--1BDkG"},a.createElement("p",null,"Edit Discount"),a.createElement("div",null,a.createElement("input",{style:s&&0!==s.length?{width:s.length+"ch"}:{},type:"text",value:s,onChange:function(e){return M(e.target.value)}}),a.createElement("span",null,"%"))),a.createElement("div",{className:"ProductLog-module--container__price--dGkJ3"},a.createElement("p",null,"New Price"),a.createElement("div",null,a.createElement("p",null,"$",Math.round(t-t/100*s)),a.createElement("span",null,"$",t))),a.createElement("div",{className:"ProductLog-module--container__circles--wmOKF"},a.createElement("div",{className:d},a.createElement("p",null,"Before"),a.createElement("div",null,a.createElement(n.default,{Width:F/5,Number:F})),a.createElement("p",{className:r},a.createElement("span",null),"current emissions")),a.createElement("img",{className:"ProductLog-module--container__circles__arrow--htsu5",src:U.Z}),a.createElement("div",{className:d},a.createElement("p",null,"After"),a.createElement("div",null,a.createElement(c.default,{Width2:F/5,Width1:Q/5,Number:Q})),a.createElement("p",{className:r},a.createElement("span",null),"emissions after offset"),a.createElement("p",{className:"ProductLog-module--container__circles__item__reduction--Y0ppd"},a.createElement("span",null),"total reduction"))),a.createElement("div",{className:"ProductLog-module--container__sub--MtbBF"},a.createElement("button",{className:"ProductLog-module--button--ayUmY",onClick:function(){var e=B;e.maxDiscount=s,N(e)}},"Confirm Change")))}},2605:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var a=l(7294);function n(e){return a.createElement("div",{className:"YECircle-module--bigCircle--4Ea9c",style:{width:e.Width2+"px",maxWidth:"210px",minWidth:"122px",height:e.Width2+"px",maxHeight:"210px",minHeight:"122px"}},a.createElement("div",{className:"YECircle-module--smallCircle--gOnJl",style:{width:e.Width1+"px",minWidth:"116px",maxWidth:"190px",height:e.Width1+"px",minHeight:"116px",maxHeight:"190px"}},a.createElement("h4",null,e.Number,a.createElement("span",null,"Kg CO2"))))}},3969:function(e,t,l){l.d(t,{Z:function(){return n}});var a=l(7294);function n(e){var t=e.img,l=e.imgName,n=e.name,c=e.text,U=e.color,d=e.setProduct,r=e.beforeNum,m=e.afterNum;return a.createElement("div",{className:"productNotLog-module--container--9VYkF",onClick:function(){return d({name:n,beforeNum:r,afterNum:m})}},a.createElement("div",{className:"productNotLog-module--container__image--zjVvn",style:{background:U}},t?a.createElement("img",{src:t,alt:l}):""),a.createElement("h4",null,n),a.createElement("p",null,c))}},7629:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(7294),n=l(4167),c=(l(5795),l(7781),l(1597));function U(e){e.name;var t=void 0;console.log(t);var l=(0,a.useState)(!1),U=l[0],d=l[1];return a.createElement("header",{id:"dashboard-header",className:"HeaderDashboard-module--dashboardHeader--Kc1VH"},a.createElement(n.default,{activeMenu:U,setActiveMenu:d}),a.createElement("div",{className:"containerDb HeaderDashboard-module--dashboardHeader__container--zeeJm"},a.createElement(c.rU,{to:"/dashboard",className:"HeaderDashboard-module--dashboardHeader__container__logo--dQZmr"},a.createElement("h3",null,"ATLAS"),a.createElement("p",null,"Carbon Dashboard")),a.createElement("div",{className:"HeaderDashboard-module--dashboardHeader__container__allBtns--anN57"},a.createElement("button",{className:"buttonDb"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cmVjdCB4PSItNCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjE4IiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPg0KPGRlZnM+DQo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4NCjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMF8xMDAxXzM5NCIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwNjYyMjUyIDAuMDEyNjU4MikiLz4NCjwvcGF0dGVybj4NCjxpbWFnZSBpZD0iaW1hZ2UwXzEwMDFfMzk0IiB3aWR0aD0iMTUxIiBoZWlnaHQ9Ijc5IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpjQUFBQlBDQU1BQUFEUkxLY0pBQUFEQUZCTVZFWC8vLyt6SWpROE8yNnpIekswS1RyNDd1NjVQa3V5SFREdzI5M0ljbm14RkNxdUFCdmt3TU92QUNMV25hR3dDQ1E0TjJ5a283WXRMR1l6TW1reVBIRXBKMlNPTFUxQlFIRkhSblcvdnN0TFNuZXVycjlUVW56WjJlSHQ3ZkZtWllxTWpLVmZYb1gzOS9uTXpOYUVnNTl3Y0pGNmVaZ2dIbUNhbWE4YkdWN2o0K2tBQUZjUURscTJ0c1c1c2IrUE8xbU1JRVcwcExTWlgzV3RrcU9pZW83RG42a0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNUSlZQbUFBQUZaVWxFUVZSb0JlMmFhWlBiTmd5R0VmWkltelFOUks2aSs3YU8xZHB0ZXYzL3Y5WVhKTzNOVERLZDJXcVF5UWNqbWZnTnRVdkJJQWc4b2szbS85dkRoOWV2dEl6RUxlYXJjOC9LM01hK3FCeCtROXV2dER1bHdUSGJuZGFvNm0wTm5sbE9vbkxaOWhqRzNQa0NwZTFYMWV4VjZkMUptdjBTMWRSV3RUamh0cUs5REtKNEs4YXFpMk5VemF6c0Z3OUVuYXlMNFpKb2ptcWszc3FZNGZhbWRrckNtRzJvU2lWZTMya1o4b3VIb2xwWWtnenFBaVVKVlU1Sjd3eUxrOU8yNFFWaldiR0pYMURwMUZjV2ZyMzZYc3NrNzB0cmMrTUd4Q3kzYVluN0x0WmtMR01sVkM1WDJaM2lXRkFHWThiKzlvT2ErZjBJMzdLNW1tYmNDK0dZazZqTXZEV3pUemVlVCsxYys2dGR2eTllSVdvRjZabmNETVk5VVJMVWlhZ0thaUc2WlA3cVRGUUVyN3VScHJBMXZvSmZTSzI2MldXdlNmSzAweElTeWpUTkthaDFuN2FZV3MwVWswemRMODVRQitxY0IrWVN0YUhPTFZRT1ZaWlF4c0hmckU3bFgveXZyTk1CMVVQZWcvSTZadm1XR0ZrdXpySytZcTlNUGhjc0N3ZEh1Z2tLRVRYNTBNZ1drREd6MjFMYkw3NGdlVUpDVlZmbEVvcHA1RGFpSnFSV1AxSVRhdTFwcEgzZ2g5OS9WRFBaajQ1R2Z6dXN6RWdsRmdobTJ6RlVXUFBVeGxwcjBtYU10ZmJjakVpM2h3OXZYbXVaMU5WdUtHY2tqMWVaVkZpRXA1Nk5KRDhHNnprOXdWY29WRE5zQTcvUXAwZFVYZVUraEVxUFdyOHUvVmxlb2VycUxLOXMwcUY2aXNvV1hqbGpXWlRESDNXL1pOMnlZaHhEWFhKRk96YWhtbFl0TmI1bDI1dHlTVXUrb09CM3RPTWxmckc3cGRZVFVZbG93TTR0RFZIdGhKYmt4eHE2VXRIRHg3ZnZ0TXozSWFRUHo5c3BWdE02bVpFOHNwREROc2VXelpjaHFqd1pFbjhWZStPUG45Uk0vRW9IUklDZGM4WVRJbHRnaEszN2xmMVk0RUlaQzF4bzJScDNyc0NGMm5VVk5KajRDbVdTYWErQzJxWTJDYlVLS2hBaTl6Y3U3QzhFUWxUMlM3Z3cwbUJOSkl1SlJhekJoU0cxc2lzWE1wUXNvVndHRjFydGVFVWF2SEpoU0o3QWhVZ3ljR0VpcVlXL1daRkl5NFlLWEtnY0wzQ2hFeTdFMWl1RkMxM2tRcWh5QmhjNllVWFBoUVpOMFN2a1BKWmIyeTlabVd5cHBzV25GaTlKVk1LRlMrVENmbzljT0FzWGhsN0ZmLzZzWnI1T1NNYmN1TkFKRi9vYjh6TGV1SENrUWtBRFRhdWxLV3dOMU5YM2I3UXMrSVZhRmJrUXQxNy9rd3ZYWnk1VXIvY1pGc1p6SWFndmNxSDVqQXZSa0lRTDgyY3UxUGJMOWtrcWk4VEducXFvdUN2V01HYUdDY3EzNzdvNUI1V2xPNVN5WDR6SG1wZzhJTVFwcEJFSU1UUnZJY1E5SlAvbWFSQnZ3SUVRVzNEaHg3ZHFKdmxsYVl3MHVJNlVoNzFtOS9nTS9na1hybWpac1hsUEJDNTBmLzJpWnZBcmNxRXNaRGNZNFVLRXJKNDVWSDZvOWNhRnF6eURTMEQ3SnlqdCt1VzVNRjE2Tkc5SkkxdFhhMVJEZ3VNZFQ0R3VlSXpLRkdqWm5ndTEvY0w3TitiU2pxRXVPVkdSQy9keENseVk3QlNVMjNacTVDRU45alg4WWg2cFJ1ZURnUXVqZW15dlNYYmViNm5WRUFMclRkMHZ2SDN1dGw2T2NtQ2ZjU0hHK05KSjg0YmxWWGZsUW0yL3Jsd29EeG9MWW1GQmlJRUx2V0k1T1l4YzZCVjI0cU53b2Z2N1Z6V1RPcEUwVGVJVHltelBYRmpjdUxENGxBdDl1cm0rRWk1OCtQanV2WmI1T25IbFF2Y0ZMdVI4bEZvRjR4em5oV0V4elU0WGVhNVZQWSsrbmhMaXpuVTRMNFFUa1F2Rm44Q0ZFSkVMb2RJbW5CZXErbVZLQjk3ejVoblFLNXdYWHNjWVhCakdoQXVqRktVYUwzdkFOUE1yT1dEL3FHM0hYL1VPU084ejN5UHdEVWRBalRpUFRVeHFoSDVzWXRMNndQWGd2SGUvWGhaQTBqcGdPRGd2cVozSUhKdjRHNjVnZDlmdUVkQ0xnTm9uRnNjbUpxMFBlQTdPZSs5REwreERML3Z4ci9iVHBQVUI5Y0Y1U2UwVC9XTVQ2eFdnKzh6M0NIekRFVkQ3eHR1eGlVbnJDNElINXlXdEwxUWVuUGZldDEvV1d1L3hlbG04L2dWRWJBb2RqeGVUV1FBQUFBQkpSVTVFcmtKZ2dnPT0iLz4NCjwvZGVmcz4NCjwvc3ZnPg0K",alt:"country"})),a.createElement("button",{className:"buttonDb HeaderDashboard-module--dashboardHeader__container__allBtns__profile--v0WXJ"},a.createElement("div",{className:"HeaderDashboard-module--dashboardHeader__container__allBtns__profile__pic--JCfrI"},""),a.createElement("div",{className:"HeaderDashboard-module--dashboardHeader__container__allBtns__profile__name--R2cvW"},a.createElement("p",null,"John Doe"),a.createElement("p",null,"Administrator"))),a.createElement("div",{className:"HeaderDashboard-module--dashboardHeader__container__allBtns__buttons--25YVF"},a.createElement("button",{onClick:function(){return d(!U)},id:"HeaderDashboard-module--overviewBTN--9Xk2f",className:"buttonDb"},"Overwiew"),a.createElement("button",{id:"HeaderDashboard-module--logout--tVSxu",className:"buttonDb"},"Log Out")))))}},2293:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA2NSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02NC43MDcxIDguNzA3MTFDNjUuMDk3NiA4LjMxNjU4IDY1LjA5NzYgNy42ODM0MiA2NC43MDcxIDcuMjkyODlMNTguMzQzMSAwLjkyODkzMkM1Ny45NTI2IDAuNTM4NDA4IDU3LjMxOTUgMC41Mzg0MDggNTYuOTI4OSAwLjkyODkzMkM1Ni41Mzg0IDEuMzE5NDYgNTYuNTM4NCAxLjk1MjYyIDU2LjkyODkgMi4zNDMxNUw2Mi41ODU4IDhMNTYuOTI4OSAxMy42NTY5QzU2LjUzODQgMTQuMDQ3NCA1Ni41Mzg0IDE0LjY4MDUgNTYuOTI4OSAxNS4wNzExQzU3LjMxOTUgMTUuNDYxNiA1Ny45NTI2IDE1LjQ2MTYgNTguMzQzMSAxNS4wNzExTDY0LjcwNzEgOC43MDcxMVpNMCA5SDY0VjdIMFY5WiIgZmlsbD0iIzVDQjY3QiIvPg0KPC9zdmc+DQo="},5753:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyNiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMS41NjIxIDE3LjEwNUMxNy4wOTA5IDE3LjEwNSAyMS41NzI5IDEzLjQzNzkgMjEuNTcyOSA4LjkxNDMxQzIxLjU3MjkgNC4zOTA3MyAxNy4wOTA5IDAuNzIzNjMzIDExLjU2MjEgMC43MjM2MzNDNi4wMzMyNyAwLjcyMzYzMyAxLjU1MTI3IDQuMzkwNzMgMS41NTEyNyA4LjkxNDMxQzEuNTUxMjcgMTMuNDM3OSA2LjAzMzI3IDE3LjEwNSAxMS41NjIxIDE3LjEwNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTE4LjY0NiAxNC43MUwyNC41MDA0IDE5LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},100:function(e,t,l){t.Z=l.p+"static/carbondb-pic-b6026b22e1663431eb33b5a03891ccdb.svg"},7781:function(e,t,l){t.Z=l.p+"static/info-pic-26a43ff317676b80e96d6216a1c1ddcf.svg"}}]);
//# sourceMappingURL=00823216bed7cc0005290642a6e913a8d6b0d936-af998d2caf32da882554.js.map