(this["webpackJsonpsentry-demo"]=this["webpackJsonpsentry-demo"]||[]).push([[0],{58:function(e,n,t){t(59),e.exports=t(78)},67:function(e,n,t){},68:function(e,n,t){},69:function(e,n,t){},75:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r,c,a=t(1),s=t.n(a),i=t(48),o=t(83),l=t(54),j=(t(67),t(68),t(82)),d=t(7),u=t(29),b=t(26);!function(e){e.MAIN="main",e.RENDER_ERROR="render-error",e.WITHOUT_SENTRY="without-sentry"}(c||(c={}));var h,O=c.MAIN,m=c.RENDER_ERROR,_=c.WITHOUT_SENTRY,f=(r={},Object(b.a)(r,O,"/sentry-demo"),Object(b.a)(r,m,"/sentry-demo/render-error"),Object(b.a)(r,_,"/sentry-demo/without-sentry"),r),x=(t(69),t(2)),v=c.MAIN,N=c.RENDER_ERROR,p=c.WITHOUT_SENTRY,E=function(){var e=Object(d.g)().pathname,n=e===f[v],t=e.includes(f[N]),r=e.includes(f[p]),c="navigation__link",a="navigation__link navigation__link_active";return Object(x.jsxs)("div",{className:"navigation",children:[Object(x.jsx)(u.a,{className:n?a:c,to:f[v],children:Object(x.jsx)("span",{className:"navigation__text",children:"Handlers errors"})}),Object(x.jsx)(u.a,{className:t?a:c,to:f[N],children:Object(x.jsx)("span",{className:"navigation__text",children:"Render errors"})}),Object(x.jsx)(u.a,{className:r?a:c,to:f[p],children:Object(x.jsx)("span",{className:"navigation__text",children:"Without sentry"})})]})},R=t(30),g=(t(75),t(11)),T=function(){var e=Object(a.useState)(!1),n=Object(R.a)(e,2),t=n[0],r=n[1],c=t?"handlers-errors__button handlers-errors__button_disabled":"handlers-errors__button";Object(a.useEffect)((function(){if(t){var e=setTimeout((function(){return r(!1)}),3e3);return function(){return clearTimeout(e)}}}),[t]);return Object(x.jsxs)("div",{className:"handlers-errors",children:[Object(x.jsx)("button",{className:"handlers-errors__button",onClick:function(){throw Error("error")},children:"Error throw"}),Object(x.jsx)("button",{className:c,onClick:function(){var e=void 0;try{e.value=20}catch(n){g.a(n),r(!0)}},children:t?"Error handled":"Hidden handler"})]})},S=t(44);t(77);!function(e){e.NAME="name",e.SURNAME="surname"}(h||(h={}));var k=h.NAME,I=h.SURNAME,y=function(){var e=Object(a.useState)({seconds:0}),n=Object(R.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)({name:"",surname:""}),s=Object(R.a)(c,2),i=s[0],o=s[1],l=void 0;Object(a.useEffect)((function(){return function(){return l&&clearInterval(l)}}),[l]);var j=function(e){var n=e.target,t=n.name,r=n.value,c=t===k;o((function(e){var n=e.name,t=e.surname;return{name:c?r:n,surname:c?t:r}}))};return Object(x.jsxs)("div",{className:"render-errors",children:[Object(x.jsxs)("div",{className:"render-errors__tile",children:[Object(x.jsx)("h3",{children:"Error while using timer"}),"\u041f\u0440\u043e\u0448\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438: ".concat(t.seconds," \u0441\u0435\u043a."),Object(x.jsx)("button",{className:"render-errors__button",onClick:function(){l=setInterval((function(){r((function(e){var n=e.seconds;return n>3?void 0:Object(S.a)(Object(S.a)({},t),{},{seconds:n+1})}))}),1e3)},children:"Start timer"})]}),Object(x.jsxs)("div",{className:"render-errors__tile",children:[Object(x.jsx)("h3",{children:"Error on form submit"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{className:"render-errors__input",name:k,placeholder:"\u0418\u043c\u044f",value:i.name,onChange:j}),Object(x.jsx)("input",{className:"render-errors__input",name:I,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:i.surname,onChange:j})]}),Object(x.jsx)("button",{className:"render-errors__button",onClick:function(){return o(void 0)},children:"Submit"})]})]})},w=t(12),C=c.MAIN,M=c.RENDER_ERROR,A=c.WITHOUT_SENTRY,D=function(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsx)("div",{className:"app__wrapper",children:Object(x.jsx)(j.a,{fallback:Object(x.jsx)("div",{className:"app__fallback",children:"Some Error"}),showDialog:!0,children:Object(x.jsxs)(d.c,{history:Object(w.a)(),children:[Object(x.jsx)(E,{}),Object(x.jsx)("div",{className:"app__content",children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{path:f[C],exact:!0,children:Object(x.jsx)(j.a,{beforeCapture:function(e){e.setTag("location","handlers")},fallback:Object(x.jsx)("div",{className:"app__fallback",children:"Some Error"}),children:Object(x.jsx)(T,{})})}),Object(x.jsx)(d.b,{path:f[M],exact:!0,children:Object(x.jsx)(j.a,{beforeCapture:function(e){e.setTag("location","render")},fallback:Object(x.jsx)("div",{className:"app__fallback",children:"Some Error"}),children:Object(x.jsx)(y,{})})}),Object(x.jsx)(d.b,{path:f[A],exact:!0,children:Object(x.jsx)(y,{})}),Object(x.jsx)(d.b,{children:Object(x.jsx)(d.a,{to:C})})]})})]})})})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))},U=t(52);o.a({dsn:"https://3f9c2ea790284aac886af2de7f6a22d8@o419881.ingest.sentry.io/6052334",integrations:[new U.a.BrowserTracing],tracesSampleRate:1,beforeSend:function(e){return e.exception&&l.b({eventId:e.event_id}),e}}),Object(i.render)(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root")),H()}},[[58,1,2]]]);
//# sourceMappingURL=main.ab084835.chunk.js.map