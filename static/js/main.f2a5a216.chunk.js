(this["webpackJsonpsentry-demo"]=this["webpackJsonpsentry-demo"]||[]).push([[0],{57:function(e,n,t){t(58),e.exports=t(77)},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){},74:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var r,c=t(1),a=t.n(c),s=t(47),i=t(82),o=t(53),l=(t(66),t(67),t(81));!function(e){e.MAIN="/",e.RENDER_ERROR="/render-error",e.WITHOUT_SENTRY="/without-sentry"}(r||(r={}));var j,d=t(7),b=t(28),u=(t(68),t(2)),h=r.MAIN,O=r.RENDER_ERROR,_=r.WITHOUT_SENTRY,f=function(){var e=Object(d.g)().pathname,n=e===h,t=e===O,r=e===_,c="navigation__link",a="navigation__link navigation__link_active";return Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsx)(b.a,{className:n?a:c,to:h,children:Object(u.jsx)("span",{className:"navigation__text",children:"Handlers errors"})}),Object(u.jsx)(b.a,{className:t?a:c,to:O,children:Object(u.jsx)("span",{className:"navigation__text",children:"Render errors"})}),Object(u.jsx)(b.a,{className:r?a:c,to:_,children:Object(u.jsx)("span",{className:"navigation__text",children:"Without sentry"})})]})},x=t(29),m=(t(74),t(11)),v=function(){var e=Object(c.useState)(!1),n=Object(x.a)(e,2),t=n[0],r=n[1],a=t?"handlers-errors__button handlers-errors__button_disabled":"handlers-errors__button";Object(c.useEffect)((function(){if(t){var e=setTimeout((function(){return r(!1)}),3e3);return function(){return clearTimeout(e)}}}),[t]);return Object(u.jsxs)("div",{className:"handlers-errors",children:[Object(u.jsx)("button",{className:"handlers-errors__button",onClick:function(){throw Error("error")},children:"Error throw"}),Object(u.jsx)("button",{className:a,onClick:function(){var e=void 0;try{e.value=20}catch(n){m.a(n),r(!0)}},children:t?"Error handled":"Hidden handler"})]})},p=t(44);t(76);!function(e){e.NAME="name",e.SURNAME="surname"}(j||(j={}));var N=j.NAME,E=j.SURNAME,g=function(){var e=Object(c.useState)({seconds:0}),n=Object(x.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)({name:"",surname:""}),s=Object(x.a)(a,2),i=s[0],o=s[1],l=void 0;Object(c.useEffect)((function(){return function(){return l&&clearInterval(l)}}),[l]);var j=function(e){var n=e.target,t=n.name,r=n.value,c=t===N;o((function(e){var n=e.name,t=e.surname;return{name:c?r:n,surname:c?t:r}}))};return Object(u.jsxs)("div",{className:"render-errors",children:[Object(u.jsxs)("div",{className:"render-errors__tile",children:[Object(u.jsx)("h3",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0430\u0439\u043c\u0435\u0440\u0430"}),"\u041f\u0440\u043e\u0448\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438: ".concat(t.seconds," \u0441\u0435\u043a."),Object(u.jsx)("button",{className:"render-errors__button",onClick:function(){l=setInterval((function(){r((function(e){var n=e.seconds;return n>3?void 0:Object(p.a)(Object(p.a)({},t),{},{seconds:n+1})}))}),1e3)},children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u0435\u0440"})]}),Object(u.jsxs)("div",{className:"render-errors__tile",children:[Object(u.jsx)("h3",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{className:"render-errors__input",name:N,placeholder:"\u0418\u043c\u044f",value:i.name,onChange:j}),Object(u.jsx)("input",{className:"render-errors__input",name:E,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:i.surname,onChange:j})]}),Object(u.jsx)("button",{className:"render-errors__button",onClick:function(){return o(void 0)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},R=t(12),T=r.MAIN,k=r.RENDER_ERROR,S=r.WITHOUT_SENTRY,C=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)("div",{className:"app__wrapper",children:Object(u.jsx)(l.a,{fallback:Object(u.jsx)("div",{className:"app__fallback",children:"Some Error"}),showDialog:!0,children:Object(u.jsxs)(d.c,{history:Object(R.a)(),children:[Object(u.jsx)(f,{}),Object(u.jsx)("div",{className:"app__content",children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{path:T,exact:!0,children:Object(u.jsx)(l.a,{beforeCapture:function(e){e.setTag("location","handlers")},fallback:Object(u.jsx)("div",{className:"app__fallback",children:"Some Error"}),children:Object(u.jsx)(v,{})})}),Object(u.jsx)(d.b,{path:k,exact:!0,children:Object(u.jsx)(l.a,{beforeCapture:function(e){e.setTag("location","render")},fallback:Object(u.jsx)("div",{className:"app__fallback",children:"Some Error"}),children:Object(u.jsx)(g,{})})}),Object(u.jsx)(d.b,{path:S,exact:!0,children:Object(u.jsx)(g,{})}),Object(u.jsx)(d.b,{children:Object(u.jsx)(d.a,{to:T})})]})})]})})})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))},w=t(51);i.a({dsn:"https://3f9c2ea790284aac886af2de7f6a22d8@o419881.ingest.sentry.io/6052334",integrations:[new w.a.BrowserTracing],tracesSampleRate:1,beforeSend:function(e){return e.exception&&o.b({eventId:e.event_id}),e}}),Object(s.render)(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),I()}},[[57,1,2]]]);
//# sourceMappingURL=main.f2a5a216.chunk.js.map