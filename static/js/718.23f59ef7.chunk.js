"use strict";(self.webpackChunkteam_slice=self.webpackChunkteam_slice||[]).push([[718],{8857:function(t,n,e){e.d(n,{r:function(){return s}});var i,r=e(2791),o=["title","titleId"];function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},a.apply(this,arguments)}function l(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function d(t,n){var e=t.title,d=t.titleId,s=l(t,o);return r.createElement("svg",a({width:24,height:12,viewBox:"0 0 24 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":d},s),e?r.createElement("title",{id:d},e):null,i||(i=r.createElement("path",{d:"M0.274948 6.68502C0.275228 6.68531 0.275463 6.68565 0.275791 6.68594L5.17442 11.7182C5.54141 12.0952 6.13498 12.0938 6.50028 11.7149C6.86553 11.3361 6.86412 10.7234 6.49714 10.3463L3.2082 6.96774L23.0625 6.96774C23.5803 6.96774 24 6.53448 24 6C24 5.46552 23.5803 5.03226 23.0625 5.03226L3.20825 5.03226L6.49709 1.65368C6.86408 1.27664 6.86548 0.663918 6.50023 0.285095C6.13494 -0.0938247 5.54131 -0.0951303 5.17437 0.281805L0.275745 5.31407C0.275463 5.31436 0.275228 5.31469 0.2749 5.31498C-0.0922724 5.69328 -0.0910993 6.30799 0.274948 6.68502Z",fill:"#FF6B08"})))}var s=r.forwardRef(d);e.p},6718:function(t,n,e){e.r(n),e.d(n,{default:function(){return rn}});var i,r,o,a,l,d,s,c=e(139),h=e(8857),p=e(9434),u=e(4807),x=e(3265),f=e(5097),m=e(5705),g=e(469),b=e(5562),w=e(184),j=function(t){var n=t.handleFormOpen,e=void 0===n?null:n,i=t.isMobile,r=(0,f.Z)(),o=(0,p.I0)();return(0,w.jsx)(c.$,{children:(0,w.jsx)(c.W,{children:(0,w.jsxs)(u.im,{children:[i&&(0,w.jsx)(u.a5,{type:"button",onClick:e,"aria-label":"Return button",children:(0,w.jsx)(h.r,{width:"24",height:"24"})}),(0,w.jsx)(m.J9,{onSubmit:function(t,n){var r=t.title,a=t.author,l=t.publishYear,d=t.pagesTotal,s=n.resetForm;b.Notify.success("Your book '".concat(r,"' has been successfully added!")),o((0,x.bD)({title:r,author:a,publishYear:l,pagesTotal:d})),s(),i&&e()},initialValues:{title:"",author:"",publishYear:"",pagesTotal:""},validationSchema:g.mP,children:(0,w.jsxs)(u.RL,{children:[(0,w.jsx)(u.Ao,{children:(0,w.jsxs)(u.pO,{children:[r.libraryForm.book,(0,w.jsx)(u.II,{placeholder:"...",type:"text",name:"title","aria-label":"Input book name"}),(0,w.jsx)(m.Bc,{name:"title",render:function(){return(0,w.jsx)(u.jj,{children:"Enter the title"})}})]})}),(0,w.jsxs)(u.tT,{children:[(0,w.jsxs)(u.Uk,{children:[r.libraryForm.author,(0,w.jsx)(u.II,{placeholder:"...",type:"text",name:"author","aria-label":"Input author"}),(0,w.jsx)(m.Bc,{name:"author",render:function(){return(0,w.jsx)(u.jj,{children:"Enter the author"})}})]}),(0,w.jsxs)(u.__,{children:[r.libraryForm.date,(0,w.jsx)(u.II,{placeholder:"...",type:"text",name:"publishYear","aria-label":"Input publish year"}),(0,w.jsx)(m.Bc,{name:"publishYear",render:function(){return(0,w.jsx)(u.jj,{children:"Min 1000AC"})}})]}),(0,w.jsxs)(u.__,{children:[r.libraryForm.pages,(0,w.jsx)(u.II,{placeholder:"...",type:"text",name:"pagesTotal","aria-label":"Input total book pages"}),(0,w.jsx)(m.Bc,{name:"pagesTotal",render:function(){return(0,w.jsx)(u.jj,{children:"Max 5000"})}})]})]}),(0,w.jsx)(u.wp,{type:"submit","aria-label":"Add book to the books list",children:r.libraryForm.btnAdd})]})})]})})})},y={goingToRead:"goingToRead",currentlyReading:"currentlyReading",finishedReading:"finishedReading"},v=e(885),Z=e(168),k=e(3081),O=k.Z.div(i||(i=(0,Z.Z)(["\n\tposition: relative;\n\tmargin-top: 16px;\n\tpadding: 20px 30px 20px 54px;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tbackground-color: ",";\n\tbox-shadow: ",";\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.shadow.box})),L=k.Z.table(r||(r=(0,Z.Z)(["\n\ttable-layout: fixed;\n\twidth: 100%;\n\tmax-width: 280px;\n\tmargin-top: 12px;\n"]))),C=k.Z.td(o||(o=(0,Z.Z)(["\n\twidth: 80px;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textSecondary})),F=k.Z.td(a||(a=(0,Z.Z)(["\n\twidth: 80px;\n"]))),I=k.Z.tr(l||(l=(0,Z.Z)(["\n\twidth: 200px;\n\tdisplay: block;\n\tmargin-bottom: 14px;\n\t&:last-of-type {\n\t\tmargin-bottom: 0;\n\t}\n"]))),E=k.Z.div(d||(d=(0,Z.Z)(["\n\tposition: absolute;\n\tleft: 20px;\n\twidth: fit-content;\n\theight: fit-content;\n"]))),R=e(6138),H=e(5188),S=e(2791),M=["title","titleId"];function z(){return z=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},z.apply(this,arguments)}function B(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function P(t,n){var e=t.title,i=t.titleId,r=B(t,M);return S.createElement("svg",z({width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),e?S.createElement("title",{id:i},e):null,s||(s=S.createElement("path",{d:"M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z",fill:"#FF6B08"})))}var T,Y=S.forwardRef(P),A=(e.p,["title","titleId"]);function _(){return _=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},_.apply(this,arguments)}function V(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function D(t,n){var e=t.title,i=t.titleId,r=V(t,A);return S.createElement("svg",_({width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),e?S.createElement("title",{id:i},e):null,T||(T=S.createElement("path",{d:"M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z",stroke:"#FF6B08"})))}var W,$,K,N,Q,U,X,q,J,G,tt,nt,et,it=S.forwardRef(D),rt=(e.p,[{id:1},{id:2},{id:3},{id:4},{id:5}]),ot=function(t){return rt.map((function(n){var e=n.id;return(0,w.jsx)("li",{children:e<=t?(0,w.jsx)(Y,{}):(0,w.jsx)(it,{})},e)}))},at=e(7796),lt=e(5778),dt=function(t){var n=t.value,e=t.changeHandler;return(0,w.jsx)(lt.Z,{rating:n,starRatedColor:"#FF6B08",starEmptyColor:"grey",starHoverColor:"#FF6B08",changeRating:e,numberOfStars:5,name:"rating",starDimension:"17px",starSpacing:"4px"})},st=k.Z.form(W||(W=(0,Z.Z)(["\n\tcolor: ",";\n\ttext-align: left;\n"])),(function(t){return t.theme.colors.textMain})),ct=k.Z.div($||($=(0,Z.Z)(["\n    height: 395px;\n\n\t@media screen and (min-width: 768px) {\n        width:560px;\n        height: 399px;\n\t}\n"]))),ht=k.Z.p(K||(K=(0,Z.Z)(["\n\tline-height: 1.22;\n\tmargin-bottom: 20px;\n    font-weight: 500;\n    font-size: 16px;\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 12px;\n\t}\n"]))),pt=k.Z.h3(N||(N=(0,Z.Z)(["\n\tmargin: 20px 0 8px 0;\n    font-weight: 500;\n    font-size: 16px;\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin: 12px 0 20px 0;\n\t}\n\n"]))),ut=k.Z.textarea(Q||(Q=(0,Z.Z)(["\n\twidth: 100%;\n\theight: 170px;\n    overflow: scroll;\n\tmargin-bottom: 20px;\n\tpadding: 12px;\n\tresize: none;\n    border-color: ",";\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 28px;\n        height: 170px;\n\t}\n\n"])),(function(t){return t.theme.colors.textSecondary})),xt=k.Z.div(U||(U=(0,Z.Z)(["\n\tdisplay: flex;\n\tgap: 28px;\n\tjustify-content: center;\n"]))),ft=k.Z.button(X||(X=(0,Z.Z)(["\n\theight: 40px;\n\twidth: 97px;\n\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: ",";\n\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\n\t@media screen and (min-width: 768px) {\n\t\twidth: 130px;\n\t}\n"])),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.textMain})),mt=k.Z.button(q||(q=(0,Z.Z)(["\n\theight: 40px;\n\twidth: 97px;\n\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: ",";\n\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\n\t@media screen and (min-width: 768px) {\n\t\twidth: 130px;\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.brand}),(function(t){return t.theme.colors.brand})),gt=function(t){var n=t.onClose,e=t.initRating,i=void 0===e?0:e,r=t.id,o=(0,S.useState)(" "),a=(0,v.Z)(o,2),l=a[0],d=a[1],s=(0,S.useState)(i),c=(0,v.Z)(s,2),h=c[0],u=c[1],m=(0,p.I0)(),g=(0,f.Z)();return(0,w.jsx)(ct,{children:(0,w.jsx)(st,{onSubmit:function(t){t.preventDefault();var e={id:r,rating:h,feedback:l};m((0,x.nP)(e)),t.currentTarget.reset(),n()},autoComplete:"off",children:(0,w.jsxs)("label",{children:[(0,w.jsx)(ht,{children:g.resumeModal.title}),(0,w.jsx)(dt,{value:h,changeHandler:function(t){u(Math.ceil(t))}}),(0,w.jsx)(pt,{children:g.resumeModal.resume}),(0,w.jsx)(ut,{type:"text",name:"resume",value:l,onChange:function(t){d(t.target.value)}}),(0,w.jsxs)(xt,{children:[(0,w.jsx)(ft,{type:"button",onClick:n,children:g.resumeModal.btnBack}),(0,w.jsx)(mt,{type:"submit",children:g.resumeModal.btnSave})]})]})})})},bt=function(t){var n=t.title,e=t.author,i=t.publishYear,r=t.fill,o=t.pagesTotal,a=t.isFinishedReading,l=t.rating,d=t.id,s=(0,f.Z)(),c=(0,S.useState)(!1),h=(0,v.Z)(c,2),p=h[0],u=h[1],x=function(){u(!1)};return(0,w.jsxs)(O,{children:[(0,w.jsxs)(E,{children:[" ",(0,w.jsx)(R.r,{fill:r,width:22,height:17})]}),(0,w.jsx)(H.H6,{children:n}),(0,w.jsx)(L,{children:(0,w.jsxs)("tbody",{children:[(0,w.jsxs)(I,{children:[(0,w.jsx)(C,{children:s.mobileLibraryItem.author}),(0,w.jsx)(F,{children:e})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(C,{children:s.mobileLibraryItem.year}),(0,w.jsx)(F,{children:i})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(C,{children:s.mobileLibraryItem.pages}),(0,w.jsx)(F,{children:o})]}),a&&(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(I,{children:[(0,w.jsx)(C,{children:s.mobileLibraryItem.rating}),(0,w.jsx)(F,{children:(0,w.jsx)(H.KF,{children:ot(l)})})]})})]})}),a&&(0,w.jsx)(H.zx,{onClick:function(){u(!0)},"aria-label":"Add book resume",children:s.mobileLibraryItem.btn}),p&&(0,w.jsx)(at.Z,{onClose:x,children:(0,w.jsx)(gt,{initRating:l,id:d,onClose:x})})]})},wt=function(t){var n=t.title,e=t.author,i=t.publishYear,r=t.fill,o=t.pagesTotal,a=t.isFinishedReading,l=t.rating,d=t.id,s=(0,S.useState)(!1),c=(0,v.Z)(s,2),h=c[0],p=c[1],u=function(){p(!1)};return a?(0,w.jsxs)(H.oY,{children:[(0,w.jsx)(R.r,{fill:r,width:22,height:17}),(0,w.jsx)(H.H6,{children:n}),(0,w.jsx)(H.H6,{children:e}),(0,w.jsx)("span",{children:i}),(0,w.jsx)("span",{children:o}),(0,w.jsx)(H.KF,{children:ot(l)}),(0,w.jsx)(H.zx,{onClick:function(){p(!0)},"aria-label":"Open resume form",children:"Resume"}),h&&(0,w.jsx)(at.Z,{onClose:u,children:(0,w.jsx)(gt,{initRating:l,id:d,onClose:u})})]}):(0,w.jsxs)(H.f$,{children:[(0,w.jsx)(R.r,{fill:r,width:22,height:17}),(0,w.jsx)(H.H6,{children:n}),(0,w.jsx)(H.H6,{children:e}),(0,w.jsx)("span",{children:i}),(0,w.jsx)("span",{children:o})]})},jt=e(4805),yt=k.Z.h2(J||(J=(0,Z.Z)(["\n\tmargin-bottom: 20px;\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 24px;\n\t}\n"]))),vt=(k.Z.div(G||(G=(0,Z.Z)(["\n\tdisplay: inline;\n\twidth: fit-content;\n\theight: fit-content;\n"]))),function(t){return t.books.books}),Zt=function(t){return t.books.status},kt=k.Z.div(tt||(tt=(0,Z.Z)(["\n    display: none;\n    @media screen and (min-width: 768px) {\n    color: ",";\n    display: grid;\n    grid-template-columns:  357px 195px 100px 78px;\n    }\n    @media screen and (min-width: 1280px) {\n    grid-template-columns:  640px 380px 120px 80px;\n    }\n"])),(function(t){return t.theme.colors.textSecondary})),Ot=function(){var t=(0,f.Z)();return(0,w.jsxs)(kt,{children:[(0,w.jsx)("span",{children:t.listHeaders.title}),(0,w.jsx)("span",{children:t.listHeaders.author}),(0,w.jsx)("span",{children:t.listHeaders.year}),(0,w.jsx)("span",{children:t.listHeaders.pages})]})},Lt=k.Z.div(nt||(nt=(0,Z.Z)(["\n    display: none;\n    \n    @media screen and (min-width: 768px) {\n    color: ",";\n    display: grid;\n    grid-template-columns:  215px 115px 70px 68px 200px;\n    }\n    @media screen and (min-width: 1280px) {\n    grid-template-columns:  360px 270px 115px 140px 360px;\n    }\n"])),(function(t){return t.theme.colors.textSecondary})),Ct=function(){var t=(0,f.Z)();return(0,w.jsxs)(Lt,{children:[(0,w.jsx)("span",{children:t.readingListHeaders.title}),(0,w.jsx)("span",{children:t.readingListHeaders.author}),(0,w.jsx)("span",{children:t.readingListHeaders.year}),(0,w.jsx)("span",{children:t.readingListHeaders.pages}),(0,w.jsx)("span",{children:t.readingListHeaders.rating})]})},Ft=function(t){var n=t.category,e=(0,f.Z)(),i=(0,jt.useMediaQuery)({minWidth:768}),r=(0,S.useMemo)((function(){return n===y.currentlyReading?"#FF6B08":"#A6ABB9"}),[n]),o=(0,p.v9)(function(t){return function(n){return n.books.books[t]}}(n)),a=n===y.finishedReading;return!!o.length&&(0,w.jsx)(c.$,{children:(0,w.jsxs)(c.W,{children:[(0,w.jsx)(yt,{children:e.libraryListHeaders[n]}),i&&(0,w.jsx)(w.Fragment,{children:a?(0,w.jsx)(Ct,{}):(0,w.jsx)(Ot,{})}),(0,w.jsx)("ul",{children:o.map((function(t){var n=t.title,e=t.author,o=t.publishYear,l=t.rating,d=void 0===l?0:l,s=t.pagesTotal,c=t._id;return(0,w.jsxs)("li",{children:[" ",i?(0,w.jsx)(wt,{rating:d,title:n,author:e,publishYear:o,pagesTotal:s,fill:r,isFinishedReading:a,id:c}):(0,w.jsx)(bt,{rating:d,title:n,author:e,publishYear:o,pagesTotal:s,fill:r,isFinishedReading:a,id:c})]},c)}))})]})})},It=["title","titleId"];function Et(){return Et=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Et.apply(this,arguments)}function Rt(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function Ht(t,n){var e=t.title,i=t.titleId,r=Rt(t,It);return S.createElement("svg",Et({width:10,height:12,viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),e?S.createElement("title",{id:i},e):null,et||(et=S.createElement("path",{d:"M8.59013 8.58096C8.56655 8.46653 8.47333 8.41332 8.40533 8.34181C7.91179 7.82059 7.41058 7.30395 6.91595 6.78217C6.70538 6.56075 6.68673 6.32446 6.85289 6.15625C7.01905 5.98805 7.25101 6.00292 7.4561 6.2169C8.24648 7.03658 9.03467 7.85854 9.82067 8.6828C10.062 8.93626 10.0592 9.11362 9.81574 9.36936C9.03632 10.1871 8.25489 11.0026 7.47145 11.8158C7.25539 12.0401 7.04372 12.0572 6.86824 11.8799C6.69276 11.7025 6.71909 11.4731 6.92747 11.2534C7.41607 10.7385 7.90905 10.2281 8.3982 9.71436C8.46674 9.64227 8.55722 9.58677 8.58519 9.47292C8.50787 9.39396 8.41245 9.43115 8.32746 9.43115C5.75121 9.42848 3.17387 9.42714 0.595428 9.42714C0.106829 9.42714 0.00318837 9.31615 0.00318841 8.80695C0.00318865 6.08054 0.00318889 3.35336 0.00318913 0.625427C-0.00296343 0.530019 -0.000206818 0.434212 0.0114165 0.33936C0.0530927 0.128243 0.181412 -0.00391615 0.391986 8.88054e-05C0.60256 0.00409376 0.727041 0.136827 0.765975 0.348517C0.775414 0.433781 0.777432 0.519761 0.772006 0.605405C0.772006 3.18001 0.775843 5.75461 0.767618 8.32636C0.767618 8.56951 0.833969 8.62616 1.0577 8.62501C3.47876 8.617 5.89982 8.62043 8.32088 8.61872C8.4141 8.62329 8.51007 8.65648 8.59013 8.58096Z",fill:"#FF6B08"})))}var St,Mt=S.forwardRef(Ht),zt=(e.p,["title","titleId"]);function Bt(){return Bt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Bt.apply(this,arguments)}function Pt(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function Tt(t,n){var e=t.title,i=t.titleId,r=Pt(t,zt);return S.createElement("svg",Bt({width:15,height:17,viewBox:"0 0 15 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),e?S.createElement("title",{id:i},e):null,St||(St=S.createElement("path",{d:"M7.36 2L7.76 4H13V10H9.64L9.24 8H2V2H7.36ZM9 0H0V17H2V10H7.6L8 12H15V2H9.4L9 0Z",fill:"#A6ABB9"})))}var Yt,At,_t,Vt,Dt,Wt=S.forwardRef(Tt),$t=(e.p,k.Z.div(Yt||(Yt=(0,Z.Z)(["\n\twidth: 280px;\n\theight: 425px;\n\tpadding: 45px 20px;\n\tmargin: 80px auto;\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-size: 14px;\n\tline-height: 1.2;\n\t@media screen and (min-width: 768px) {\n\t\twidth: 608px;\n\t\theight: 272px;\n\t\tpadding: 40px;\n\t\tmargin: 40px auto;\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.textMain}))),Kt=k.Z.p(At||(At=(0,Z.Z)(["\n\tmargin-bottom: 8px;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 16px;\n\t\tfont-size: 19px;\n\t}\n"]))),Nt=k.Z.p(_t||(_t=(0,Z.Z)(["\n\tmargin-bottom: 8px;\n\tfont-size: 16px;\n\tfont-weight: 600;\n"]))),Qt=k.Z.p(Vt||(Vt=(0,Z.Z)(["\n\tmargin: 8px 20px 20px 25px;\n\tcolor: ",";\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 24px;\n\t}\n"])),(function(t){return t.theme.colors.textSecondary})),Ut=k.Z.button(Dt||(Dt=(0,Z.Z)(["\n\tdisplay: block;\n\twidth: 100px;\n\theight: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\n\tbackground-color: ",";\n\tcolor: ",";\n\tborder: none;\n\n\t:hover {\n\t\tborder: 1px solid black;\n\t\tbackground: transparent radial-gradient(circle, transparent 1%, #ff6b08 1%)\n\t\t\tcenter/15000%;\n\t\tcolor: #242a37;\n\t}\n\t:active {\n\t\tbackground-color: transparent;\n\t\tbackground-size: 100%;\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: none;\n\t}\n"])),(function(t){return t.theme.colors.brand}),(function(t){return t.theme.colors.white})),Xt=function(t){var n=t.openFormHandler,e=void 0===n?null:n,i=(0,f.Z)();return(0,w.jsxs)($t,{children:[(0,w.jsxs)("ul",{children:[(0,w.jsxs)("li",{children:[(0,w.jsx)(Kt,{children:i.libraryEmpty.step1}),(0,w.jsxs)(Nt,{children:[(0,w.jsx)(R.r,{style:{marginRight:5},fill:"#FF6B08"}),i.libraryEmpty.text1]}),(0,w.jsxs)(Qt,{children:[(0,w.jsx)(Mt,{style:{marginRight:5}}),i.libraryEmpty.text2]})]}),(0,w.jsxs)("li",{children:[(0,w.jsx)(Kt,{children:i.libraryEmpty.step2}),(0,w.jsxs)(Nt,{children:[(0,w.jsx)(Wt,{style:{marginRight:5}}),i.libraryEmpty.text3]}),(0,w.jsxs)(Qt,{children:[(0,w.jsx)(Mt,{style:{marginRight:5}}),i.libraryEmpty.text4]})]})]}),(0,w.jsx)(Ut,{onClick:e,type:"button","aria-label":"Add book button",children:i.libraryEmpty.btn})]})},qt=e(3037),Jt=function(t){var n=t.isLibraryEmpty,e=(0,S.useState)(!1),i=(0,v.Z)(e,2),r=i[0],o=i[1],a=function(){o((function(t){return!t}))};return(0,w.jsx)(w.Fragment,{children:r?(0,w.jsx)(j,{isMobile:!0,handleFormOpen:a}):n?(0,w.jsx)(Xt,{openFormHandler:a}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ft,{category:y.finishedReading}),(0,w.jsx)(Ft,{category:y.currentlyReading}),(0,w.jsx)(Ft,{category:y.goingToRead}),(0,w.jsx)(qt.o,{type:"button",onClick:a,"aria-label":"Add new book",children:"+"})]})})},Gt=e(6137),tn=e(5240),nn=e(7208),en=e(3905),rn=function(){var t=(0,f.Z)(),n=(0,jt.useMediaQuery)({minWidth:768}),e=(0,p.v9)(Zt),i=(0,p.v9)(nn.hP),r=e===tn.Z.pending,o=(0,p.I0)(),a=(0,p.v9)(vt),l=Object.values(a).every((function(t){return 0===t.length}))&&e===tn.Z.fulfilled;return(0,S.useEffect)((function(){i&&(o((0,x.l6)()),o((0,en.Dq)()))}),[i,o]),r?(0,w.jsx)(Gt.Z,{}):n?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j,{isMobile:!n}),l?(0,w.jsx)(Xt,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ft,{category:y.finishedReading,going:t.libraryListHeaders.going}),(0,w.jsx)(Ft,{category:y.currentlyReading}),(0,w.jsx)(Ft,{category:y.goingToRead})]})]}):(0,w.jsx)(Jt,{isLibraryEmpty:l})}},4807:function(t,n,e){e.d(n,{Ao:function(){return w},II:function(){return Z},RL:function(){return b},Uk:function(){return O},__:function(){return v},a5:function(){return L},im:function(){return g},jj:function(){return y},pO:function(){return k},tT:function(){return j},wp:function(){return C}});var i,r,o,a,l,d,s,c,h,p,u,x=e(168),f=e(3081),m=e(5705),g=f.Z.div(i||(i=(0,x.Z)(["\n\twidth: 100%;\n\theight: 100vh;\n\t@media screen and (min-width: 768px) {\n\t\theight: auto;\n\t}\n"]))),b=(0,f.Z)(m.l0)(r||(r=(0,x.Z)(["\n\twidth: 100%;\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n"]))),w=f.Z.div(o||(o=(0,x.Z)(["\n\twidth: 100%;\n\theight: fit-content;\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 346px;\n\t\tmargin: 0;\n\t\tmargin-right: 16px;\n\t}\n"]))),j=f.Z.div(a||(a=(0,x.Z)(["\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: flex;\n\t\theight: fit-content;\n\t\twidth: 100%;\n\t\tgap: 32px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\twidth: fit-content;\n\t\tgap: 16px;\n\t\tmargin: 0;\n\t}\n"]))),y=f.Z.p(l||(l=(0,x.Z)(["\n\tposition: absolute;\n\tbottom: -20px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tmargin-top: 5px;\n\tfont-weight: 400;\n\tfont-size: 11px;\n\tline-height: 1.12;\n\tcolor: red;\n\ttext-align: center;\n"]))),v=f.Z.label(d||(d=(0,x.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tmargin-bottom: 20px;\n\n\tfont-size: 14px;\n\tline-height: 1.2;\n\tfont-weight: 500;\n\tcolor: ",";\n\t@media screen and (min-width: 768px) {\n\t\twidth: 152px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tmargin: 0;\n\t}\n"])),(function(t){return t.theme.colors.textSecondary})),Z=(0,f.Z)(m.gN)(s||(s=(0,x.Z)(["\n\twidth: auto;\n\theight: 42px;\n\tmargin-top: 8px;\n\tpadding: 12px;\n\tcolor: ",";\n\tbackground-color: inherit;\n\tborder: 1px solid #a6abb9;\n\toutline: none;\n\t&:focus,\n\t&:active {\n\t\tbox-shadow: 0px 1px 2px 0px #1d1d1b26 inset;\n\t}\n"])),(function(t){return t.theme.colors.textMain})),k=f.Z.label(c||(c=(0,x.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tmargin-bottom: 20px;\n\n\tfont-size: 14px;\n\tline-height: 1.2;\n\tfont-weight: 500;\n\tcolor: ",";\n\t@media screen and (min-width: 768px) {\n\t\twidth: 100%;\n\t\tmargin-bottom: 24px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tmargin: 0;\n\t}\n"])),(function(t){return t.theme.colors.textSecondary})),O=f.Z.label(h||(h=(0,x.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tmargin-bottom: 20px;\n\n\tfont-size: 14px;\n\tline-height: 1.2;\n\tfont-weight: 500;\n\tcolor: ",";\n\t@media screen and (min-width: 768px) {\n\t\twidth: 336px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 250px;\n\t\tmargin: 0;\n\t}\n"])),(function(t){return t.theme.colors.textSecondary})),L=f.Z.button(p||(p=(0,x.Z)(["\n\twidth: 40px;\n\theight: 40px;\n\tpadding: 0;\n\tbackground-color: transparent;\n\tborder: none;\n\n"]))),C=f.Z.button(u||(u=(0,x.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 171px;\n\theight: 42px;\n\tmargin: 40px auto;\n\tcolor: ",";\n\tfont-size: inherit;\n\tline-height: inherit;\n\tfont-weight: inherit;\n\tbackground-color: transparent;\n\ttransition: ",";\n\tborder: 1px solid ",";\n\t@media screen and (min-width: 768px) {\n\t\tmargin: 20px auto;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tmargin: 0 auto;\n\t\talign-self: flex-end;\n\t}\n\t&:hover,\n\t&:focus {\n\t\tborder: none;\n\t\tcolor: ",";\n\t\tbackground-color: ",";\n\t}\n"])),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.transition}),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.brand}))},5188:function(t,n,e){e.d(n,{H6:function(){return p},KF:function(){return u},f$:function(){return c},oY:function(){return h},zx:function(){return x}});var i,r,o,a,l,d=e(168),s=e(3081),c=s.Z.div(i||(i=(0,d.Z)(["\n\tdisplay: grid;\n\tpadding: 16px 20px;\n\tmargin-top: 16px;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tbox-shadow: ",";\n\tbackground-color: ",";\n\t@media screen and (min-width: 768px) {\n\t\tgrid-template-columns: 35px 300px 200px 100px 80px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: 40px 580px 380px 120px 80px;\n\t}\n"])),(function(t){return t.theme.shadow.box}),(function(t){return t.theme.colors.white})),h=s.Z.div(r||(r=(0,d.Z)(["\n\tdisplay: grid;\n\tgap: 5px;\n\talign-items: center;\n\tpadding: 16px 20px;\n\tmargin-top: 16px;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tbox-shadow: ",";\n\tbackground-color: ",";\n\t@media screen and (min-width: 768px) {\n\t\tgrid-template-columns: 35px 150px 110px 75px 45px 120px 75px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: 35px 300px 260px 115px 130px 155px 210px;\n\t}\n"])),(function(t){return t.theme.shadow.box}),(function(t){return t.theme.colors.white})),p=s.Z.p(o||(o=(0,d.Z)(["\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n"]))),u=s.Z.ul(a||(a=(0,d.Z)(["\n\twidth: fit-content;\n\tdisplay: flex;\n"]))),x=s.Z.button(l||(l=(0,d.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 127px;\n\theight: 40px;\n\tmargin: 10px auto;\n\n\tbackground-color: ",";\n\tborder: none;\n\tcolor: ",";\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\ttransition: ",";\n\t:hover {\n\t\tborder: 1px solid ",";\n\t\tbackground: transparent;\n\t\tcolor: ",";\n\t}\n\t@media screen and (min-width: 768px) {\n\t\tmargin: 0;\n\t\twidth: 80px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 130px;\n\t}\n"])),(function(t){return t.theme.colors.bookIcons}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.transition}),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.textMain}))},3037:function(t,n,e){e.d(n,{o:function(){return o}});var i,r=e(168),o=e(3081).Z.button(i||(i=(0,r.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position:fixed;\n    bottom: 90px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 52px;\n    height: 52px;\n\n    background-color: ",";\n    color: ",";\n\n    font-size: 25px;\n    border: none;\n    border-radius: 50%;\n"])),(function(t){return t.theme.colors.brand}),(function(t){return t.theme.colors.white}))},7796:function(t,n,e){e.d(n,{Z:function(){return h}});var i,r,o=e(2791),a=e(168),l=e(3081),d=l.Z.div(i||(i=(0,a.Z)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ",";\n\tz-index: 1200;\n"])),(function(t){return t.theme.colors.backdrop})),s=l.Z.div(r||(r=(0,a.Z)(["\n\twidth: 100%;\n\tmax-width: 300px;\n\ttext-align: center;\n\n\tmin-height: 395px;\n\tpadding: 48px;\n\tmargin: 0 auto;\n\n\tbackground-color: ",";\n\n\t@media screen and (min-width: 768px) {\n\t\tmin-height: 250px;\n\t\tmax-width: fit-content;\n\n\t\tmin-width: 394px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tmin-width: 608px;\n\t}\n"])),(function(t){return t.theme.colors.white})),c=e(184);var h=function(t){var n=t.onClose,e=t.children,i=t.offBackdrop,r=void 0!==i&&i;return(0,o.useEffect)((function(){var t=function(t){"Escape"===t.code&&n()};return document.body.style.overflow="hidden",window.addEventListener("keydown",t),function(){document.body.style.overflow="auto",window.removeEventListener("keydown",t)}}),[]),(0,c.jsx)(d,{onClick:function(t){r||t.currentTarget===t.target&&n()},children:(0,c.jsx)(s,{children:e})})}}}]);
//# sourceMappingURL=718.23f59ef7.chunk.js.map