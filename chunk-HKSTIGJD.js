import{$ as de,A as o,B as i,C as c,D as j,E as h,F as R,G as w,H as $,I as U,J as a,K as d,L as N,O as q,P as A,Q as ce,S as pe,T as G,U as le,V as me,Z as ue,a as x,aa as fe,b as ee,c as _,d as te,da as W,e as ne,ea as ge,f as v,g as ie,h as D,i as oe,j as F,k as p,l as L,m as k,n as V,o as re,p as ae,q as O,r as s,s as g,t as C,u as l,v as se,w as P,x as E,y as B,z as I}from"./chunk-PIBJIUAV.js";var m=class n{constructor(e){this.httpClient=e;this.cacheStore=this.fetchCacheFromLocalStorage()||{byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{countries:[]}}}apiUrl="https://restcountries.com/v3.1";cacheStore;fetchCacheFromLocalStorage(){let e=localStorage.getItem("countriesCacheStore");if(e)return JSON.parse(e)}saveCacheToLocalStorage(){localStorage.setItem("countriesCacheStore",JSON.stringify(this.cacheStore))}getCountriesRequest(e){return this.httpClient.get(e).pipe(te(t=>[]))}searchCapital(e){let t=`${this.apiUrl}/capital/${e}`;return this.getCountriesRequest(t).pipe(v(r=>this.cacheStore.byCapital={term:e,countries:r}),v(()=>this.saveCacheToLocalStorage()))}searchCountry(e){let t=`${this.apiUrl}/name/${e}`;return this.getCountriesRequest(t).pipe(v(r=>this.cacheStore.byCountries={term:e,countries:r}),v(()=>this.saveCacheToLocalStorage()))}searchRegion(e){let t=`${this.apiUrl}/region/${e}`;return this.getCountriesRequest(t).pipe(v(r=>this.cacheStore.byRegion={region:e,countries:r}),v(()=>this.saveCacheToLocalStorage()))}searchByCode(e){let t=`${this.apiUrl}/alpha?codes=${e}`;return this.getCountriesRequest(t)}static \u0275fac=function(t){return new(t||n)(oe(me))};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})};var T=class n{placeholder="";onValue=new ae;debouncer=new ee;debouncerSubscription;ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(ne(700)).subscribe(e=>{this.onValue.emit(e)})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}onKeyUp(e){this.debouncer.next(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},decls:2,vars:1,consts:[["searchInput",""],["type","text",1,"form-control",3,"keyup","placeholder"]],template:function(t,r){if(t&1){let u=j();o(0,"input",1,0),h("keyup",function(){k(u);let ve=U(1);return V(r.onKeyUp(ve.value))}),i()}t&2&&l("placeholder",r.placeholder)},encapsulation:2})};var y=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"span"),a(2,"Buscando"),i(),re(),o(3,"svg",1)(4,"g",2)(5,"circle",3),c(6,"animate",4)(7,"animate",5)(8,"animate",6),i(),o(9,"circle",3),c(10,"animate",7)(11,"animate",8)(12,"animate",9),i(),o(13,"circle",10),c(14,"animate",11),i()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;box-shadow:0 3px 5px #0000004d;color:#fff;display:flex;gap:.5rem;padding:5px 10px;position:fixed;right:15px}span[_ngcontent-%COMP%]{margin-left:5px}"]})};function _e(n,e){n&1&&(o(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),i())}function Pe(n,e){if(n&1&&(o(0,"tr")(1,"td"),a(2),i(),o(3,"td"),a(4),i(),o(5,"td"),c(6,"img",5),i(),o(7,"td"),a(8),i(),o(9,"td"),a(10),i(),o(11,"td"),a(12),q(13,"number"),i(),o(14,"td")(15,"a",6),a(16,"Info"),i()()()),n&2){let t=e.$implicit,r=e.$index,u=R(2);s(2),d(r+1),s(2),d(t.flag),s(2),w("alt",t.name.common+" flag"),l("src",t.flags.svg,O),s(2),d(t.name.common),s(2),d(t.capital),s(2),d(A(13,9,t.population)),s(3),$("routerLink","/countries/by/",u.getTableCode(t),"")}}function Ee(n,e){if(n&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th",4),a(4,"#"),i(),o(5,"th",4),a(6,"Icon"),i(),o(7,"th",4),a(8,"Bandera"),i(),o(9,"th",4),a(10,"Nombre"),i(),o(11,"th",4),a(12,"Capital"),i(),o(13,"th",4),a(14,"Poblaci\xF3n"),i(),c(15,"th",4),i()(),o(16,"tbody"),B(17,Pe,17,11,"tr",null,E),i()()),n&2){let t=R();s(17),I(t.countries)}}var b=class n{countries=[];getTableCode(e){return e.cioc?e.cioc:e.ccn3?e.ccn3:e.cca2?e.cca2:e.cca3?e.cca3:"NaN"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table"],["scope","col"],["width","25px",3,"src","alt"],[3,"routerLink"]],template:function(t,r){if(t&1&&C(0,_e,2,0,"div",1)(1,Ee,19,0,"ng-template",null,0,ce),t&2){let u=U(2);l("ngIf",r.countries.length===0)("ngIfElse",u)}},dependencies:[pe,fe,G]})};function Be(n,e){n&1&&c(0,"shared-loading-spinner")}var H=class n{constructor(e){this.countriesService=e;this.countries=this.countriesService.cacheStore.byCapital.countries,this.searchBoxPlaceholder=this.countriesService.cacheStore.byCapital.term||"Buscar por pa\xEDs"}countries=[];isLoading=!1;searchBoxPlaceholder;searchByCapital(e){return x(this,null,function*(){this.isLoading=!0,this.countries=yield _(this.countriesService.searchCapital(e)),this.isLoading=!1})}static \u0275fac=function(t){return new(t||n)(g(m))};static \u0275cmp=p({type:n,selectors:[["app-by-capital-page"]],decls:12,vars:3,consts:[[1,"sticky-top","bg-white"],[1,"row"],[1,"col"],[3,"onValue","placeholder"],[3,"countries"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"h2"),a(2,"Por capital"),i(),c(3,"hr"),o(4,"div",1)(5,"div",2)(6,"shared-search-box",3),h("onValue",function(S){return r.searchByCapital(S)}),i()()(),c(7,"hr"),i(),o(8,"div",1)(9,"div",2),C(10,Be,1,0,"shared-loading-spinner"),c(11,"countries-table",4),i()()),t&2&&(s(6),w("placeholder",r.searchBoxPlaceholder),s(4),P(r.isLoading?10:-1),s(),l("countries",r.countries))},dependencies:[T,y,b]})};function Ie(n,e){n&1&&c(0,"shared-loading-spinner")}var z=class n{constructor(e){this.countriesService=e;this.countries=this.countriesService.cacheStore.byCountries.countries,this.searchBoxPlaceholder=this.countriesService.cacheStore.byCountries.term||"Buscar por pa\xEDs"}countries=[];isLoading=!1;searchBoxPlaceholder;searchByCountry(e){return x(this,null,function*(){this.isLoading=!0,this.countries=yield _(this.countriesService.searchCountry(e)),this.isLoading=!1})}static \u0275fac=function(t){return new(t||n)(g(m))};static \u0275cmp=p({type:n,selectors:[["app-by-country-page"]],decls:12,vars:3,consts:[[1,"sticky-top","bg-white"],[1,"row"],[1,"col"],[3,"onValue","placeholder"],[3,"countries"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"h2"),a(2,"Por pa\xEDs"),i(),c(3,"hr"),o(4,"div",1)(5,"div",2)(6,"shared-search-box",3),h("onValue",function(S){return r.searchByCountry(S)}),i()()(),c(7,"hr"),i(),o(8,"div",1)(9,"div",2),C(10,Ie,1,0,"shared-loading-spinner"),c(11,"countries-table",4),i()()),t&2&&(s(6),w("placeholder",r.searchBoxPlaceholder),s(4),P(r.isLoading?10:-1),s(),l("countries",r.countries))},dependencies:[T,y,b]})};function Re(n,e){if(n&1){let t=j();o(0,"button",6),h("click",function(){let u=k(t).$implicit,S=R();return V(S.searchByRegion(u))}),a(1),i()}if(n&2){let t=e.$implicit,r=R();se("btn-outline-primary",r.selectedRegion===t),s(),N(" ",t," ")}}function we(n,e){n&1&&c(0,"shared-loading-spinner")}var J=class n{constructor(e){this.countriesService=e;this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}countries=[];isLoading=!1;regions=["Africa","Americas","Asia","Europe","Oceania"];selectedRegion;searchByRegion(e){return x(this,null,function*(){this.selectedRegion=e,this.isLoading=!0,this.countries=yield _(this.countriesService.searchRegion(e)),this.isLoading=!1})}static \u0275fac=function(t){return new(t||n)(g(m))};static \u0275cmp=p({type:n,selectors:[["app-by-region-page"]],decls:13,vars:2,consts:[[1,"sticky-top","bg-white"],[1,"row"],[1,"col","d-flex","justify-content-center","buttons"],[1,"btn","mx-2","hover-shadow",3,"btn-outline-primary"],[1,"col"],[3,"countries"],[1,"btn","mx-2","hover-shadow",3,"click"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"h2"),a(2,"Por regi\xF3n"),i(),c(3,"hr"),o(4,"div",1)(5,"div",2),B(6,Re,2,3,"button",3,E),i()(),c(8,"hr"),i(),o(9,"div",1)(10,"div",4),C(11,we,1,0,"shared-loading-spinner"),c(12,"countries-table",5),i()()),t&2&&(s(6),I(r.regions),s(5),P(r.isLoading?11:-1),s(),l("countries",r.countries))},dependencies:[y,b],styles:[".buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#408dfd;color:#fff;transition:all .2s ease}"]})};function Te(n,e){if(n&1&&(o(0,"span",8),a(1),i()),n&2){let t=e.$implicit;s(),d(t)}}var K=class n{country;constructor(e){this.country=e.snapshot.data.countryPageResolver[0]}getTableCode(e){return e.cioc?e.cioc:e.ccn3?e.ccn3:e.cca2?e.cca2:e.cca3?e.cca3:"NaN"}get translations(){let e=new Set;return Object.values(this.country.translations).forEach(t=>{e.add(t.common)}),Array.from(e)}static \u0275fac=function(t){return new(t||n)(g(ue))};static \u0275cmp=p({type:n,selectors:[["app-country-page"]],decls:29,vars:8,consts:[[1,"row"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap","gap-1"],[1,"badge","bg-primary"]],template:function(t,r){t&1&&(o(0,"h2"),a(1,"Pa\xEDs: "),o(2,"strong"),a(3),i()(),c(4,"hr"),o(5,"div",0)(6,"div",1)(7,"h4"),a(8,"Bandera"),i(),c(9,"img",2),i(),o(10,"div",3)(11,"h4"),a(12,"Informaci\xF3n"),i(),o(13,"ul",4)(14,"li",5)(15,"strong"),a(16,"Poblaci\xF3n: "),i(),a(17),q(18,"number"),i(),o(19,"li",5)(20,"strong"),a(21,"C\xF3digo: "),i(),a(22),i()()()(),o(23,"div",6)(24,"h4"),a(25,"Traducciones"),i(),o(26,"div",7),B(27,Te,2,1,"span",8,E),i()()),t&2&&(s(3),d(r.country.name.common),s(6),$("alt","",r.country.name.common," flag"),l("src",r.country.flags.svg,O),s(8),N(" ",A(18,6,r.country.population)," "),s(5),N(" ",r.getTableCode(r.country)," "),s(5),I(r.translations))},dependencies:[G]})};var he=n=>{let e=n.params.id;return F(m).searchByCode(e)};var ye=(n,e)=>{let t=e[1].toString();return!t||t.length<2||t.includes(",")?F(de).navigate(["not-found"]):!0};var Me=[{path:"by-capital",component:H},{path:"by-country",component:z},{path:"by-region",component:J},{path:"by/:id",component:K,resolve:{countryPageResolver:he},canMatch:[ye]},{path:"**",redirectTo:"by-capital"}],Q=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=D({imports:[W.forChild(Me),W]})};var be=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=D({imports:[le,Q,ge]})};export{be as CountriesModule};
