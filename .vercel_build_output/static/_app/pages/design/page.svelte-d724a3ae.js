import{S as e,i as t,s as a,e as l,t as s,c as r,a as n,g as o,d as c,f as i,F as m,h as u,k as f,E as p,n as h,b as d,G as g,H as v,O as $,P as b,z as x,l as y,K as S,L as D,v as E,r as I,j as L,M as w,m as V,o as R,w as k}from"../../chunks/vendor-5afb54f7.js";import{L as B}from"../../chunks/LazyImage-be376821.js";function T(e,t,a){const l=e.slice();return l[3]=t[a],l}function j(e){let t,a,f,p=e[3].label+"";return{c(){t=l("option"),a=s(p),this.h()},l(e){t=r(e,"OPTION",{value:!0});var l=n(t);a=o(l,p),l.forEach(c),this.h()},h(){t.__value=f=e[3].value,t.value=t.__value},m(e,l){i(e,t,l),m(t,a)},p(e,l){1&l&&p!==(p=e[3].label+"")&&u(a,p),1&l&&f!==(f=e[3].value)&&(t.__value=f,t.value=t.__value)},d(e){e&&c(t)}}}function C(e){let t,a,s,o,u,b,x,y,S=e[0],D=[];for(let l=0;l<S.length;l+=1)D[l]=j(T(e,S,l));return{c(){t=l("div"),a=l("select");for(let e=0;e<D.length;e+=1)D[e].c();s=f(),o=l("div"),u=p("svg"),b=p("path"),this.h()},l(e){t=r(e,"DIV",{class:!0});var l=n(t);a=r(l,"SELECT",{class:!0});var i=n(a);for(let t=0;t<D.length;t+=1)D[t].l(i);i.forEach(c),s=h(l),o=r(l,"DIV",{class:!0});var m=n(o);u=r(m,"svg",{class:!0,xmlns:!0,viewBox:!0},1);var f=n(u);b=r(f,"path",{d:!0},1),n(b).forEach(c),f.forEach(c),m.forEach(c),l.forEach(c),this.h()},h(){d(a,"class","block appearance-none w-full bg-gray-200 border py-3 px-4 mb-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"),d(b,"d","M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"),d(u,"class","fill-current h-4 w-4"),d(u,"xmlns","http://www.w3.org/2000/svg"),d(u,"viewBox","0 0 20 20"),d(o,"class","pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"),d(t,"class","relative w-auto")},m(l,r){i(l,t,r),m(t,a);for(let e=0;e<D.length;e+=1)D[e].m(a,null);m(t,s),m(t,o),m(o,u),m(u,b),x||(y=g(a,"change",e[1]),x=!0)},p(e,[t]){if(1&t){let l;for(S=e[0],l=0;l<S.length;l+=1){const s=T(e,S,l);D[l]?D[l].p(s,t):(D[l]=j(s),D[l].c(),D[l].m(a,null))}for(;l<D.length;l+=1)D[l].d(1);D.length=S.length}},i:v,o:v,d(e){e&&c(t),$(D,e),x=!1,y()}}}function P(e,t,a){const l=b();let{lists:s=[{label:" Type 1 Residential, bathroom, toilet room : LL = 150 kg/sqm.",value:150},{label:" Type 2 Hotel, Dormitory, Condominium  : LL = 200 kg/sqm.",value:200},{label:" Type 3 Bank, Office : LL = 250 kg/sqm.",value:250},{label:" Type 4 Commercial building, university, college, school : LL = 300 kg/sqm.",value:300},{label:" Type 5 shopping malls, auditoriums, theaters, restaurants, car parks : LL = 400 kg/sqm.",value:400},{label:" Type 6 warehouse, museum, amphitheater, industrial factory, printing house, storage room for documents and supplies  : LL = 500 kg/sqm.",value:500}]}=t;x((()=>{l("selected",s[0].value)}));return e.$$set=e=>{"lists"in e&&a(0,s=e.lists)},[s,({target:e})=>{l("selected",e.value)}]}class N extends e{constructor(e){super(),t(this,e,P,C,a,{lists:0})}}function O(e){let t,a,s,n;return{c(){t=l("input"),this.h()},l(e){t=r(e,"INPUT",{type:!0,class:!0}),this.h()},h(){d(t,"type",e[0]),d(t,"class",a="appearance-none block w-full "+e[1]+" text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white")},m(a,l){i(a,t,l),s||(n=g(t,"keyup",e[2]),s=!0)},p(e,l){1&l&&d(t,"type",e[0]),2&l&&a!==(a="appearance-none block w-full "+e[1]+" text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white")&&d(t,"class",a)},d(e){e&&c(t),s=!1,n()}}}function _(e){let t,a="text"==e[0]&&O(e);return{c(){a&&a.c(),t=y()},l(e){a&&a.l(e),t=y()},m(e,l){a&&a.m(e,l),i(e,t,l)},p(e,[l]){"text"==e[0]?a?a.p(e,l):(a=O(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:v,o:v,d(e){a&&a.d(e),e&&c(t)}}}function z(e,t,a){let{type:l="text"}=t,{bgColor:s="bg-gray-200"}=t;const r=b();return e.$$set=e=>{"type"in e&&a(0,l=e.type),"bgColor"in e&&a(1,s=e.bgColor)},[l,s,e=>{r("value",e.target.value)}]}class q extends e{constructor(e){super(),t(this,e,z,_,a,{type:0,bgColor:1})}}function F(e){let t,a,s,o,m;const u=e[4].default,f=S(u,e,e[3],null);return{c(){t=l("button"),f&&f.c(),this.h()},l(e){t=r(e,"BUTTON",{type:!0,class:!0});var a=n(t);f&&f.l(a),a.forEach(c),this.h()},h(){d(t,"type","button"),d(t,"class",a="w-full focus:outline-none text-white text-lg py-2.5 px-5 rounded-md "+e[0]+" hover:shadow-lg block")},m(a,l){i(a,t,l),f&&f.m(t,null),s=!0,o||(m=g(t,"click",e[1]),o=!0)},p(e,[l]){f&&f.p&&8&l&&D(f,u,e,e[3],l,null,null),(!s||1&l&&a!==(a="w-full focus:outline-none text-white text-lg py-2.5 px-5 rounded-md "+e[0]+" hover:shadow-lg block"))&&d(t,"class",a)},i(e){s||(E(f,e),s=!0)},o(e){I(f,e),s=!1},d(e){e&&c(t),f&&f.d(e),o=!1,m()}}}function A(e,t,a){let{$$slots:l={},$$scope:s}=t;const r=b();let{type:n="button"}=t,o="";"primary"==n&&(o="bg-blue-500 hover:bg-blue-600");return e.$$set=e=>{"type"in e&&a(2,n=e.type),"$$scope"in e&&a(3,s=e.$$scope)},[o,()=>{r("click",!0)},n,s,l]}class H extends e{constructor(e){super(),t(this,e,A,F,a,{type:2})}}function M(e){let t;return{c(){t=s("Design")},l(e){t=o(e,"Design")},m(e,a){i(e,t,a)},d(e){e&&c(t)}}}function U(e){let t,a,p,g,v,$,b,x,y,S,D,E,I,L,w,V,R,k,B,T,j,C,P,N;return{c(){t=l("div"),a=l("p"),p=s("Summary Result: "),g=s(e[4]),v=s(" mm."),$=f(),b=l("div"),x=l("div"),y=s("Design Result Type of slab: ONE WAY SLAB"),S=f(),D=l("div"),E=s("Short span lenght (S) : "),I=s(e[0]),L=s(" m."),w=f(),V=l("div"),R=s("Long span lenght (L): "),k=s(e[1]),B=s(" m."),T=f(),j=l("div"),C=s("Slab thickness (t) : "),P=s(e[3]),N=s(" cm. Short Span Reinforcement"),this.h()},l(l){t=r(l,"DIV",{class:!0});var s=n(t);a=r(s,"P",{class:!0});var i=n(a);p=o(i,"Summary Result: "),g=o(i,e[4]),v=o(i," mm."),i.forEach(c),$=h(s),b=r(s,"DIV",{});var m=n(b);x=r(m,"DIV",{});var u=n(x);y=o(u,"Design Result Type of slab: ONE WAY SLAB"),u.forEach(c),S=h(m),D=r(m,"DIV",{});var f=n(D);E=o(f,"Short span lenght (S) : "),I=o(f,e[0]),L=o(f," m."),f.forEach(c),w=h(m),V=r(m,"DIV",{});var d=n(V);R=o(d,"Long span lenght (L): "),k=o(d,e[1]),B=o(d," m."),d.forEach(c),T=h(m),j=r(m,"DIV",{});var O=n(j);C=o(O,"Slab thickness (t) : "),P=o(O,e[3]),N=o(O," cm. Short Span Reinforcement"),O.forEach(c),m.forEach(c),s.forEach(c),this.h()},h(){d(a,"class","font-bold text-blue-600"),d(t,"class","bg-blue-50 rounded text-blue-600 shadow-lg mt-4 p-4")},m(e,l){i(e,t,l),m(t,a),m(a,p),m(a,g),m(a,v),m(t,$),m(t,b),m(b,x),m(x,y),m(b,S),m(b,D),m(D,E),m(D,I),m(D,L),m(b,w),m(b,V),m(V,R),m(V,k),m(V,B),m(b,T),m(b,j),m(j,C),m(j,P),m(j,N)},p(e,t){16&t&&u(g,e[4]),1&t&&u(I,e[0]),2&t&&u(k,e[1]),8&t&&u(P,e[3])},d(e){e&&c(t)}}}function W(e){let t,a,u,p,g,v,$,b,x,y,S,D,T,j,C,P,O,_,z,F,A,W,Y,G,K,J,Q,X,Z,ee,te,ae,le,se,re,ne,oe,ce,ie,me,ue,fe,pe,he,de,ge,ve,$e,be,xe,ye,Se,De,Ee,Ie,Le,we,Ve,Re,ke,Be,Te,je,Ce,Pe,Ne,Oe,_e,ze,qe,Fe,Ae,He,Me,Ue,We,Ye;j=new B({props:{alt:"content",className:"object-cover object-center",src:"https://tolt2.csb.app/images/slab01.jpg"}}),X=new N({}),se=new q({}),se.$on("value",e[15]),me=new q({}),me.$on("value",e[16]),be=new N({props:{lists:e[7]}}),be.$on("selected",e[9]),Ie=new B({props:{alt:"content",className:"object-cover object-cente mr-4 mb-4",src:"https://tolt2.csb.app/images/round_bar.jpg"}}),we=new B({props:{alt:"content",className:"object-cover object-cente ml-4 mt-4",src:"https://tolt2.csb.app/images/deformed_bar.jpg"}}),Ne=new N({props:{lists:e[5]}}),Ne.$on("selected",e[10]),Ae=new N({props:{lists:e[8]}}),Ae.$on("selected",e[11]),Ue=new H({props:{type:"primary",$$slots:{default:[M]},$$scope:{ctx:e}}}),Ue.$on("click",e[12]);let Ge=e[2]&&e[6]&&U(e);return{c(){t=f(),a=l("section"),u=l("h2"),p=l("b"),g=s("Online Nonexpert Floor"),v=f(),$=l("p"),b=s("Construction System using Reinforced Concrete Slab"),x=f(),y=l("div"),S=l("div"),D=l("div"),T=l("div"),L(j.$$.fragment),C=f(),P=l("div"),O=l("div"),_=l("p"),z=s("Data Input:"),F=f(),A=l("p"),W=s("Please select type of building for define Living Loaded (LL)"),Y=f(),G=l("div"),K=l("div"),J=s("Select Type:"),Q=f(),L(X.$$.fragment),Z=f(),ee=l("div"),te=l("div"),ae=s("Lenght of Short span (S):"),le=f(),L(se.$$.fragment),re=f(),ne=l("div"),oe=l("div"),ce=s("Lenght of Short span (L):"),ie=f(),L(me.$$.fragment),ue=f(),fe=l("p"),pe=s("Select Steel reinforcement bar size"),he=f(),de=l("div"),ge=l("div"),ve=s("Select Type:"),$e=f(),L(be.$$.fragment),xe=f(),ye=l("p"),Se=s("Reinforcement bar type example"),De=f(),Ee=l("div"),L(Ie.$$.fragment),Le=f(),L(we.$$.fragment),Ve=f(),Re=l("p"),ke=s("If select RB steel grade use SR24, if select DB steel grade use SD30 or SD40"),Be=f(),Te=l("div"),je=l("div"),Ce=s("Select Steel grade:"),Pe=f(),L(Ne.$$.fragment),Oe=f(),_e=l("div"),ze=l("div"),qe=s("Input bar size (bar size for select: 10 mm.,12 mm.,16 mm.,20 mm,22 mm.,25 mm.):"),Fe=f(),L(Ae.$$.fragment),He=f(),Me=l("div"),L(Ue.$$.fragment),We=f(),Ge&&Ge.c(),this.h()},l(e){w('[data-svelte="svelte-ebu3pf"]',document.head).forEach(c),t=h(e),a=r(e,"SECTION",{class:!0});var l=n(a);u=r(l,"H2",{class:!0});var s=n(u);p=r(s,"B",{class:!0});var i=n(p);g=o(i,"Online Nonexpert Floor"),i.forEach(c),v=h(s),$=r(s,"P",{class:!0});var m=n($);b=o(m,"Construction System using Reinforced Concrete Slab"),m.forEach(c),s.forEach(c),x=h(l),y=r(l,"DIV",{class:!0});var f=n(y);S=r(f,"DIV",{class:!0});var d=n(S);D=r(d,"DIV",{class:!0});var E=n(D);T=r(E,"DIV",{class:!0});var I=n(T);V(j.$$.fragment,I),I.forEach(c),E.forEach(c),d.forEach(c),f.forEach(c),C=h(l),P=r(l,"DIV",{class:!0});var L=n(P);O=r(L,"DIV",{class:!0});var R=n(O);_=r(R,"P",{class:!0});var k=n(_);z=o(k,"Data Input:"),k.forEach(c),F=h(R),A=r(R,"P",{});var B=n(A);W=o(B,"Please select type of building for define Living Loaded (LL)"),B.forEach(c),Y=h(R),G=r(R,"DIV",{class:!0});var N=n(G);K=r(N,"DIV",{class:!0});var q=n(K);J=o(q,"Select Type:"),q.forEach(c),Q=h(N),V(X.$$.fragment,N),N.forEach(c),Z=h(R),ee=r(R,"DIV",{class:!0});var H=n(ee);te=r(H,"DIV",{class:!0});var M=n(te);ae=o(M,"Lenght of Short span (S):"),M.forEach(c),le=h(H),V(se.$$.fragment,H),H.forEach(c),re=h(R),ne=r(R,"DIV",{class:!0});var U=n(ne);oe=r(U,"DIV",{class:!0});var Ye=n(oe);ce=o(Ye,"Lenght of Short span (L):"),Ye.forEach(c),ie=h(U),V(me.$$.fragment,U),U.forEach(c),ue=h(R),fe=r(R,"P",{class:!0});var Ke=n(fe);pe=o(Ke,"Select Steel reinforcement bar size"),Ke.forEach(c),he=h(R),de=r(R,"DIV",{class:!0});var Je=n(de);ge=r(Je,"DIV",{class:!0});var Qe=n(ge);ve=o(Qe,"Select Type:"),Qe.forEach(c),$e=h(Je),V(be.$$.fragment,Je),Je.forEach(c),xe=h(R),ye=r(R,"P",{class:!0});var Xe=n(ye);Se=o(Xe,"Reinforcement bar type example"),Xe.forEach(c),De=h(R),Ee=r(R,"DIV",{class:!0});var Ze=n(Ee);V(Ie.$$.fragment,Ze),Le=h(Ze),V(we.$$.fragment,Ze),Ze.forEach(c),Ve=h(R),Re=r(R,"P",{class:!0});var et=n(Re);ke=o(et,"If select RB steel grade use SR24, if select DB steel grade use SD30 or SD40"),et.forEach(c),Be=h(R),Te=r(R,"DIV",{class:!0});var tt=n(Te);je=r(tt,"DIV",{class:!0});var at=n(je);Ce=o(at,"Select Steel grade:"),at.forEach(c),Pe=h(tt),V(Ne.$$.fragment,tt),tt.forEach(c),Oe=h(R),_e=r(R,"DIV",{class:!0});var lt=n(_e);ze=r(lt,"DIV",{class:!0});var st=n(ze);qe=o(st,"Input bar size (bar size for select: 10 mm.,12 mm.,16 mm.,20 mm,22 mm.,25 mm.):"),st.forEach(c),Fe=h(lt),V(Ae.$$.fragment,lt),lt.forEach(c),He=h(R),Me=r(R,"DIV",{class:!0});var rt=n(Me);V(Ue.$$.fragment,rt),rt.forEach(c),We=h(R),Ge&&Ge.l(R),R.forEach(c),L.forEach(c),l.forEach(c),this.h()},h(){document.title="Design Page | RC Slab Design Online",d(p,"class","text-red-500"),d($,"class","text-indigo-400 p-2"),d(u,"class","text-center text-3xl"),d(T,"class","rounded-lg max-h-7xl max-w-3xl overflow-hidden"),d(D,"class","mb-10 px-4"),d(S,"class","flex flex-wrap -mx-4 -mb-10 text-center justify-center"),d(y,"class","container py-2 mx-auto"),d(_,"class","font-bold text-blue-600"),d(K,"class","mb-2"),d(G,"class"," mt-4"),d(te,"class","mb-2"),d(ee,"class"," mt-4"),d(oe,"class","mb-2"),d(ne,"class"," mt-4"),d(fe,"class","font-bold text-blue-600"),d(ge,"class","mb-2"),d(de,"class"," mt-2"),d(ye,"class","font-bold text-blue-600"),d(Ee,"class","flex flex-wrap justify-center items-center p-4"),d(Re,"class","font-bold text-blue-600"),d(je,"class","mb-2"),d(Te,"class"," mt-2"),d(ze,"class","mb-2"),d(_e,"class","mt-4"),d(Me,"class"," mr-2 mt-2 md:inline-block"),d(O,"class","p-4 text-1xl"),d(P,"class","mt-8 shadow-lg"),d(a,"class","p-10 lg:p-60 xl:p-96 xl:pt-0 lg:pt-0")},m(e,l){i(e,t,l),i(e,a,l),m(a,u),m(u,p),m(p,g),m(u,v),m(u,$),m($,b),m(a,x),m(a,y),m(y,S),m(S,D),m(D,T),R(j,T,null),m(a,C),m(a,P),m(P,O),m(O,_),m(_,z),m(O,F),m(O,A),m(A,W),m(O,Y),m(O,G),m(G,K),m(K,J),m(G,Q),R(X,G,null),m(O,Z),m(O,ee),m(ee,te),m(te,ae),m(ee,le),R(se,ee,null),m(O,re),m(O,ne),m(ne,oe),m(oe,ce),m(ne,ie),R(me,ne,null),m(O,ue),m(O,fe),m(fe,pe),m(O,he),m(O,de),m(de,ge),m(ge,ve),m(de,$e),R(be,de,null),m(O,xe),m(O,ye),m(ye,Se),m(O,De),m(O,Ee),R(Ie,Ee,null),m(Ee,Le),R(we,Ee,null),m(O,Ve),m(O,Re),m(Re,ke),m(O,Be),m(O,Te),m(Te,je),m(je,Ce),m(Te,Pe),R(Ne,Te,null),m(O,Oe),m(O,_e),m(_e,ze),m(ze,qe),m(_e,Fe),R(Ae,_e,null),m(O,He),m(O,Me),R(Ue,Me,null),m(O,We),Ge&&Ge.m(O,null),Ye=!0},p(e,[t]){const a={};32&t&&(a.lists=e[5]),Ne.$set(a);const l={};2097152&t&&(l.$$scope={dirty:t,ctx:e}),Ue.$set(l),e[2]&&e[6]?Ge?Ge.p(e,t):(Ge=U(e),Ge.c(),Ge.m(O,null)):Ge&&(Ge.d(1),Ge=null)},i(e){Ye||(E(j.$$.fragment,e),E(X.$$.fragment,e),E(se.$$.fragment,e),E(me.$$.fragment,e),E(be.$$.fragment,e),E(Ie.$$.fragment,e),E(we.$$.fragment,e),E(Ne.$$.fragment,e),E(Ae.$$.fragment,e),E(Ue.$$.fragment,e),Ye=!0)},o(e){I(j.$$.fragment,e),I(X.$$.fragment,e),I(se.$$.fragment,e),I(me.$$.fragment,e),I(be.$$.fragment,e),I(Ie.$$.fragment,e),I(we.$$.fragment,e),I(Ne.$$.fragment,e),I(Ae.$$.fragment,e),I(Ue.$$.fragment,e),Ye=!1},d(e){e&&c(t),e&&c(a),k(j),k(X),k(se),k(me),k(be),k(Ie),k(we),k(Ne),k(Ae),k(Ue),Ge&&Ge.d()}}}function Y(e,t,a){let l,s;let r=[{label:"SR24",value:"RS24"},{label:"SD30",value:"SD30"},{label:"SD40",value:"SD40"}],n="RB",o=!1,c=0,i=0,m=0,u=0;const f=()=>{const e=(c+i)*(100/90)+parseInt(m);a(4,u=parseFloat(e).toFixed(2)||0)},p=({detail:e},t)=>{"S"==t&&a(0,c=parseInt(e)),"L"==t&&a(1,i=parseInt(e)),f()};return e.$$.update=()=>{16384&e.$$.dirty&&a(5,l=r.filter((e=>"RB"==n?"RS24"==e.value:"RS24"!=e.value))),3&e.$$.dirty&&a(6,s=!(!i||!c))},f(),[c,i,o,m,u,l,s,[{label:"RB (Round Bar)",value:"RB"},{label:"DB (Deformed Bar)",value:"DB"}],[{label:"10 mm.",value:"10"},{label:"12 mm.",value:"12"},{label:"16 mm.",value:"16"},{label:"20 mm.",value:"20"},{label:"22 mm.",value:"22"},{label:"25 mm.",value:"25"}],({detail:e})=>{a(14,n=e)},({detail:e})=>{},({detail:e})=>{a(3,m=parseInt(e)),f()},()=>{a(2,o=!0)},p,n,e=>p(e,"S"),e=>p(e,"L")]}export default class extends e{constructor(e){super(),t(this,e,Y,W,a,{})}}