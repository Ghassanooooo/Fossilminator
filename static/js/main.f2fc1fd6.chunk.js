(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=52,r=.001;function o(e){var t=e.transport.carKmPerWeek*a*r;return{consumption:5,transport:t,result:5+t}}},36:function(e,t){},37:function(e,t){},39:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,n){"use strict";var a=n(35);n.d(t,"calculateFossilEmissions",function(){return a.a});n(36),n(37)},43:function(e,t,n){e.exports=n(69)},48:function(e,t,n){},56:function(e,t){},61:function(e,t,n){},63:function(e,t,n){},67:function(e){e.exports={application:{title:"CO2 Calculator"},actions:{calculateUsage:"Calculate"},transport:{enterWeeklyCarUsage:"Enter your weekly car mileage"},emissions:{yourAnnualEmissionsAre:"Your annual fossil fuel emissions are %{emissions} tonnes of CO2",yourEmissionsAreTooHigh:"Your fossil fuel usage is too high!"}}},68:function(e){e.exports={application:{title:"Kalkulator zu\u017cycia CO2"},actions:{calculateUsage:"Oblicz"},transport:{enterWeeklyCarUsage:"Wprowad\u017a sw\xf3j tygodniowy przebieg samochodem"},emissions:{yourAnnualEmissionsAre:"Twoje roczne zu\u017cycie paliw kopalnych to %{emissions} ton CO2",yourEmissionsAreTooHigh:"Twoje zu\u017cycie CO2 jest zbyt wysokie!"}}},69:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"SetNavigationSectionType",function(){return S}),n.d(a,"SetNavigationSection",function(){return k}),n.d(a,"DetermineNavigationSectionType",function(){return C}),n.d(a,"DetermineNavigationSection",function(){return x});var r={};n.r(r),n.d(r,"PatchTransportUsageType",function(){return U}),n.d(r,"PatchTransportUsage",function(){return A});var o={};n.r(o),n.d(o,"ComputeFossilEmissionsType",function(){return I}),n.d(o,"ComputeFossilEmissions",function(){return z}),n.d(o,"SetFossilEmissionsResultType",function(){return F}),n.d(o,"SetFossilEmissionsResult",function(){return W});var s=n(1),i=n.n(s),c=n(13),l=n.n(c),u=(n(48),n(19)),m=n(20),p=n(22),f=n(21),d=n(23),E=n(16),g=n(6),v=(n(61),n(39)),h=n.n(v),b=(n(63),function(){return i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})}),O=function(){return i.a.createElement("header",null,i.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-primary"},i.a.createElement("span",{className:"navbar-brand"},i.a.createElement(b,null),i.a.createElement(g.Translate,{value:"application.title"}))))},y=function(e){var t=e.children;return i.a.createElement("main",{role:"main",className:"container"},t)},w=n(9),T=n(8);function j(e,t){return{type:e,payload:t}}var N,S="[NAVIGATION] SetNavigationSection",k=function(e){return j(S,e)},C="[NAVIGATION] DetermineNavigationSection",x=function(){return j(C)},U="[FOSSIL_USAGE] PatchTransportUsage",A=function(e){return j(U,e)},I="[FOSSIL_EMISSIONS] ComputeFossilEmissions",z=function(){return j(I)},F="[FOSSIL_EMISSIONS] SetFossilEmissionsResult",W=function(e){return j(F,e)};!function(e){e.None="NONE",e.Welcome="WELCOME",e.Transport="TRANSPORT"}(N||(N={}));var P={navigation:{section:N.Welcome},fossilUsage:{transport:{carKmPerWeek:0}},fossilEmission:{consumption:0,transport:0,result:0}},_=n(42),M=n(15),R=Object(T.c)({navigation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.navigation,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SetNavigationSectionType:return Object(M.a)({},e,{section:t.payload});default:return e}},fossilUsage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.fossilUsage,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.PatchTransportUsageType:return Object(M.a)({},e,{transport:Object(M.a)({},e.transport,t.payload)});default:return e}},fossilEmission:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.fossilEmission,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.SetFossilEmissionsResultType:return Object(M.a)({},e,t.payload);default:return e}}}),D=n(11),L=n.n(D),K=n(31),G=n(7),H=L.a.mark(function e(t){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.b)(a.DetermineNavigationSection());case 2:case"end":return e.stop()}},e,this)}),V=[Object(G.d)(a.SetNavigationSectionType,H)],Y=n(40),B=L.a.mark(function e(){var t,n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)(function(e){return e.fossilUsage});case 2:return t=e.sent,n=Object(Y.calculateFossilEmissions)(t),e.next=6,Object(G.b)(o.SetFossilEmissionsResult(n));case 6:case"end":return e.stop()}},e,this)}),J=[Object(G.d)(r.PatchTransportUsageType,B)],X=L.a.mark($);function $(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)(Object(K.a)(V).concat(Object(K.a)(J)));case 2:case"end":return e.stop()}},X,this)}var q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,Q=function(){return i.a.createElement(w.a,{color:"danger"},i.a.createElement(g.Translate,{value:"emissions.yourEmissionsAreTooHigh"}))},Z=function(e){var t=e.emission,n=e.limit,a=e.label,r=t.transport/n*100,o=t.consumption/n*100;return i.a.createElement("div",{className:"d-flex flex-column justify-content-end align-items-center",style:{height:300,width:80}},i.a.createElement("strong",{className:"text-center"},a),i.a.createElement("small",null,Math.round(t.result)," ton CO2"),i.a.createElement("div",{className:"chart-segment",style:{height:"".concat(r,"%"),width:"100%",backgroundColor:"red"}}),i.a.createElement("div",{className:"chart-segment",style:{height:"".concat(o,"%"),width:"100%",backgroundColor:"green"}}))},ee=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.transport,n=e.patchTransportUsage,a=e.fossilEmission,r={consumption:6,transport:19,result:25},o=1.5*Math.max(r.result,a.result);return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.b,null,i.a.createElement(w.e,null,i.a.createElement("h4",{className:"font-weight-light"},i.a.createElement(g.Translate,{value:"application.title"}))),i.a.createElement(w.c,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-6"},i.a.createElement("h6",null,i.a.createElement(g.Translate,{value:"transport.enterWeeklyCarUsage"})),i.a.createElement(w.g,null,i.a.createElement(w.h,{addonType:"prepend"},"km"),i.a.createElement(w.f,{placeholder:"Car travel per week",type:"number",step:"1",value:t.carKmPerWeek,onChange:function(e){return n({carKmPerWeek:e.currentTarget.value})}})),i.a.createElement("h6",{className:"pt-5"},i.a.createElement(g.Translate,{value:"emissions.yourAnnualEmissionsAre",emissions:Math.round(a.result)})),i.a.createElement(Q,null)),i.a.createElement("div",{className:"col-6 col-md-3 d-flex flex-column align-items-center"},i.a.createElement(Z,{emission:a,limit:o,label:"You"})),i.a.createElement("div",{className:"col-6 col-md-3 d-flex flex-column align-items-center"},i.a.createElement(Z,{emission:r,limit:o,label:"Avg"})))),i.a.createElement(w.d,null,i.a.createElement("div",{className:"font-weight-light d-flex justify-content-between"},i.a.createElement("span",null,"Wersja demo zmodernizowanego kalkulatora CO2"),i.a.createElement("span",null,"Wi\u0119cej na ",i.a.createElement("a",{href:"https://ziemianarozdrozu.pl/"},"ziemianarozdrozu.pl"))))))}}]),t}(i.a.Component);var te=Object(E.b)(function(e){var t=e.fossilUsage,n=e.fossilEmission;return{transport:t.transport,fossilEmission:n}},function(e){return Object(T.b)({patchTransportUsage:r.PatchTransportUsage},e)})(ee),ne=function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(te,null)))},ae=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title=g.I18n.t("application.title")}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,null),i.a.createElement(y,null,i.a.createElement(ne,null)))}}]),t}(s.Component),re=Object(E.b)()(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(e){var t=n(67),a=n(68);g.I18n.setTranslations({en:t,pl:a}),g.I18n.setLocale(e)}("pl"),l.a.render(i.a.createElement(E.a,{store:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=Object(_.a)(),t=Object(T.e)(R,q(Object(T.a)(e)));return t.runSagaTask=function(){return t.sagaTask=e.run($)},t.runSagaTask(),t}()},i.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.f2fc1fd6.chunk.js.map