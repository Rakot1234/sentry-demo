(this["webpackJsonpsentry-demo"]=this["webpackJsonpsentry-demo"]||[]).push([[0],{58:function(e,t,n){n(59),e.exports=n(78)},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r,c,a=n(1),s=n.n(a),i=n(48),o=n(83),l=(n(67),n(68),n(82)),j=n(7),d=n(29),u=n(26);!function(e){e.MAIN="main",e.RENDER_ERROR="render-error",e.WITHOUT_SENTRY="without-sentry"}(c||(c={}));var b,h=c.MAIN,O=c.RENDER_ERROR,m=c.WITHOUT_SENTRY,_=(r={},Object(u.a)(r,h,"/sentry-demo"),Object(u.a)(r,O,"/sentry-demo/render-error"),Object(u.a)(r,m,"/sentry-demo/without-sentry"),r),f=(n(69),n(2)),x=c.MAIN,v=c.RENDER_ERROR,N=c.WITHOUT_SENTRY,p=function(){var e=Object(j.g)().pathname,t=e===_[x]||e==="".concat(_[x],"/"),n=e.includes(_[v]),r=e.includes(_[N]),c="navigation__link",a="navigation__link navigation__link_active";return Object(f.jsxs)("div",{className:"navigation",children:[Object(f.jsx)(d.a,{className:t?a:c,to:_[x],children:Object(f.jsx)("span",{className:"navigation__text",children:"Handlers errors"})}),Object(f.jsx)(d.a,{className:n?a:c,to:_[v],children:Object(f.jsx)("span",{className:"navigation__text",children:"Render errors"})}),Object(f.jsx)(d.a,{className:r?a:c,to:_[N],children:Object(f.jsx)("span",{className:"navigation__text",children:"Without sentry"})})]})},E=n(30),R=(n(75),n(11)),g=function(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=t[0],r=t[1],c=n?"handlers-errors__button handlers-errors__button_disabled":"handlers-errors__button";Object(a.useEffect)((function(){if(n){var e=setTimeout((function(){return r(!1)}),3e3);return function(){return clearTimeout(e)}}}),[n]);return Object(f.jsxs)("div",{className:"handlers-errors",children:[Object(f.jsx)("button",{className:"handlers-errors__button",onClick:function(){throw Error("error")},children:"Error throw"}),Object(f.jsx)("button",{className:c,onClick:function(){var e=void 0;try{e.value=20}catch(t){R.a(t),r(!0)}},children:n?"Error handled":"Hidden handler"})]})},T=n(44);n(77);!function(e){e.NAME="name",e.SURNAME="surname"}(b||(b={}));var S=b.NAME,k=b.SURNAME,y=function(){var e=Object(a.useState)({seconds:0}),t=Object(E.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({name:"",surname:""}),s=Object(E.a)(c,2),i=s[0],o=s[1],l=void 0;Object(a.useEffect)((function(){return function(){return l&&clearInterval(l)}}),[l]);var j=function(e){var t=e.target,n=t.name,r=t.value,c=n===S;o((function(e){var t=e.name,n=e.surname;return{name:c?r:t,surname:c?n:r}}))};return Object(f.jsxs)("div",{className:"render-errors",children:[Object(f.jsxs)("div",{className:"render-errors__tile",children:[Object(f.jsx)("h3",{children:"Error while using timer"}),"\u041f\u0440\u043e\u0448\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438: ".concat(n.seconds," \u0441\u0435\u043a."),Object(f.jsx)("button",{className:"render-errors__button",onClick:function(){l=setInterval((function(){r((function(e){var t=e.seconds;return t>3?void 0:Object(T.a)(Object(T.a)({},n),{},{seconds:t+1})}))}),1e3)},children:"Start timer"})]}),Object(f.jsxs)("div",{className:"render-errors__tile",children:[Object(f.jsx)("h3",{children:"Error on form submit"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{className:"render-errors__input",name:S,placeholder:"\u0418\u043c\u044f",value:i.name,onChange:j}),Object(f.jsx)("input",{className:"render-errors__input",name:k,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:i.surname,onChange:j})]}),Object(f.jsx)("button",{className:"render-errors__button",onClick:function(){return o(void 0)},children:"Submit"})]})]})},I=n(12),w=c.MAIN,C=c.RENDER_ERROR,M=c.WITHOUT_SENTRY,A=function(){return Object(f.jsx)("div",{className:"app",children:Object(f.jsx)("div",{className:"app__wrapper",children:Object(f.jsxs)(j.c,{history:Object(I.a)(),children:[Object(f.jsx)(p,{}),Object(f.jsx)("div",{className:"app__content",children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:_[w],exact:!0,children:Object(f.jsx)(l.a,{beforeCapture:function(e){e.setTag("location","handlers")},fallback:Object(f.jsx)("div",{className:"app__fallback",children:"Some Error"}),children:Object(f.jsx)(g,{})})}),Object(f.jsx)(j.b,{path:_[C],exact:!0,children:Object(f.jsx)(l.a,{beforeCapture:function(e){e.setTag("location","render")},fallback:Object(f.jsx)("div",{className:"app__fallback",children:"Some Error"}),showDialog:!0,children:Object(f.jsx)(y,{})})}),Object(f.jsx)(j.b,{path:_[M],exact:!0,children:Object(f.jsx)(y,{})}),Object(f.jsx)(j.b,{children:Object(f.jsx)(j.a,{to:w})})]})})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},H=n(52);o.a({dsn:"https://3f9c2ea790284aac886af2de7f6a22d8@o419881.ingest.sentry.io/6052334",integrations:[new H.a.BrowserTracing],tracesSampleRate:1}),Object(i.render)(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),D()}},[[58,1,2]]]);
//# sourceMappingURL=main.63e72918.chunk.js.map