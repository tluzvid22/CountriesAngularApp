import{$ as S,A as o,B as n,C as a,J as i,M as y,N as l,R as A,W as P,X as x,Y as k,_ as D,aa as L,ba as M,da as w,k as r,r as c,u as s}from"./chunk-VQU4PAI4.js";var u=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["shared-about-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"about-page works!"),n())}})};var g=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["shared-contact-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"contact-page works!"),n())}})};var C=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["shared-home-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"home-page works!"),n())}})};var E=[{path:"home",component:C},{path:"about",component:u},{path:"contact",component:g},{path:"countries",loadChildren:()=>import("./chunk-5J7PLWMG.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}];var F={providers:[A({eventCoalescing:!0}),M(E),P(x())]};var b=()=>({exact:!0}),v=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["shared-sidebar"]],decls:10,vars:6,consts:[[1,"list-group"],["routerLink","countries/by-capital","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLink","countries/by-country","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLink","countries/by-region","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"]],template:function(e,m){e&1&&(o(0,"h2"),i(1,"Pa\xEDses"),n(),a(2,"hr"),o(3,"ul",0)(4,"li",1),i(5," Por capital "),n(),o(6,"li",2),i(7," Por pa\xEDs "),n(),o(8,"li",3),i(9," Por regi\xF3n "),n()()),e&2&&(c(4),s("routerLinkActiveOptions",l(3,b)),c(2),s("routerLinkActiveOptions",l(4,b)),c(2),s("routerLinkActiveOptions",l(5,b)))},dependencies:[S,L]})};var h=class t{title="CountryApp";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-root"]],standalone:!0,features:[y],decls:5,vars:0,consts:[[1,"row","p-4","w-100"],[1,"col-3"],[1,"col"]],template:function(e,m){e&1&&(o(0,"div",0)(1,"div",1),a(2,"shared-sidebar"),n(),o(3,"div",2),a(4,"router-outlet"),n()())},dependencies:[D,w,v],styles:[".container[_ngcontent-%COMP%]{background-color:red;width:100%}"]})};k(h,F).catch(t=>console.error(t));
