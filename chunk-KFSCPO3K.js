import{$ as Te,A as at,C as Vt,D as Ht,E as st,H as Wt,J as Ut,K as Gt,L as A,M as v,Q as oe,R as U,S as we,T as lt,U as Je,V as Kt,W as N,X as ke,Y as ae,Z as Xe,_ as ct,ca as k,ga as qt,ha as L,i as Ze,k as be,q as Rt,s as jt}from"./chunk-E263AWN5.js";import{$a as Nt,$b as Lt,Ac as At,Bb as $e,Db as xe,Ea as Et,Eb as Ce,Ha as C,Hb as ot,Ib as ue,Jb as pe,La as It,Pb as P,R as x,Rb as nt,S as Z,Ta as H,U as $t,Ua as X,Va as ee,X as h,Xa as E,Y as xt,Ya as z,Yb as it,ba as Se,ca as Ct,cb as F,cc as w,da as _t,db as f,dc as Dt,ea as wt,eb as Ot,ec as Mt,f as St,fb as tt,fc as rt,ga as S,gb as We,gc as _e,hb as K,ia as kt,lc as te,ma as se,na as Tt,ob as q,pb as Q,pc as qe,qa as J,qb as W,ra as He,rb as Ue,sb as Ge,sc as Qe,ta as ie,tb as Ft,tc as Bt,ub as Pt,uc as zt,vb as Ke,wb as _,xa as le,xb as ce,xc as re,yb as de,zc as Ye}from"./chunk-JMY2VTDN.js";import{a as $}from"./chunk-7CGTOI24.js";var Bo=Object.defineProperty,zo=Object.defineProperties,Ao=Object.getOwnPropertyDescriptors,et=Object.getOwnPropertySymbols,eo=Object.prototype.hasOwnProperty,to=Object.prototype.propertyIsEnumerable,Qt=(e,i,t)=>i in e?Bo(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,j=(e,i)=>{for(var t in i||(i={}))eo.call(i,t)&&Qt(e,t,i[t]);if(et)for(var t of et(i))to.call(i,t)&&Qt(e,t,i[t]);return e},dt=(e,i)=>zo(e,Ao(i)),Y=(e,i)=>{var t={};for(var o in e)eo.call(e,o)&&i.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&et)for(var o of et(e))i.indexOf(o)<0&&to.call(e,o)&&(t[o]=e[o]);return t};function Rn(...e){return ke(...e)}var Ro=Gt(),O=Ro;function Yt(e,i){Je(e)?e.push(...i||[]):oe(e)&&Object.assign(e,i)}function jo(e){return oe(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Vo(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ut(e="",i=""){return Vo(`${we(e,!1)&&we(i,!1)?`${e}-`:e}${i}`)}function oo(e="",i=""){return`--${ut(e,i)}`}function Ho(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function no(e,i="",t="",o=[],n){if(we(e)){let r=/{([^}]*)}/g,a=e.trim();if(Ho(a))return;if(N(a,r)){let s=a.replaceAll(r,c=>{let b=c.replace(/{|}/g,"").split(".").filter(p=>!o.some(g=>N(p,g)));return`var(${oo(t,Xe(b.join("-")))}${v(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,d=/var\([^)]+\)/g;return N(s.replace(d,"0"),l)?`calc(${s})`:s}return a}else if(Kt(e))return e}function Wo(e,i,t){we(i,!1)&&e.push(`${i}:${t};`)}function he(e,i){return e?`${e}{${i}}`:""}function Zt(e){return e.length===4?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:e}function Jt(e){var i=parseInt(e.substring(1),16),t=i>>16&255,o=i>>8&255,n=i&255;return{r:t,g:o,b:n}}function Uo(e,i,t){return`#${e.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}`}var io=(e,i,t)=>{e=Zt(e),i=Zt(i);var o=t/100,n=o*2-1,r=(n+1)/2,a=1-r,s=Jt(e),l=Jt(i),d=Math.round(s.r*r+l.r*a),c=Math.round(s.g*r+l.g*a),u=Math.round(s.b*r+l.b*a);return Uo(d,c,u)},Go=(e,i)=>io("#000000",e,i),Ko=(e,i)=>io("#ffffff",e,i),Xt=[50,100,200,300,400,500,600,700,800,900,950],Un=e=>{if(/{([^}]*)}/g.test(e)){let i=e.replace(/{|}/g,"");return Xt.reduce((t,o)=>(t[o]=`{${i}.${o}}`,t),{})}return typeof e=="string"?Xt.reduce((i,t,o)=>(i[t]=o<=5?Ko(e,(5-o)*19):Go(e,(o-5)*15),i),{}):e},qn=e=>{var i;let t=m.getTheme(),o=pt(t,e,void 0,"variable"),n=(i=o?.match(/--[\w-]+/g))==null?void 0:i[0],r=pt(t,e,void 0,"value");return{name:n,variable:o,value:r}},ge=(...e)=>pt(m.getTheme(),...e),pt=(e={},i,t,o)=>{if(i){let{variable:n,options:r}=m.defaults||{},{prefix:a,transform:s}=e?.options||r||{},d=N(i,/{([^}]*)}/g)?i:`{${i}}`;return o==="value"||A(o)&&s==="strict"?m.getTokenValue(i):no(d,void 0,a,[n.excludedKeyRegex],t)}return""};function qo(e,i={}){let t=m.defaults.variable,{prefix:o=t.prefix,selector:n=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=i,a=(d,c="")=>Object.entries(d).reduce((u,[b,p])=>{let g=N(b,r)?ut(c):ut(c,Xe(b)),y=jo(p);if(oe(y)){let{variables:M,tokens:V}=a(y,g);Yt(u.tokens,V),Yt(u.variables,M)}else u.tokens.push((o?g.replace(`${o}-`,""):g).replaceAll("-",".")),Wo(u.variables,oo(g),no(y,g,o,[r]));return u},{variables:[],tokens:[]}),{variables:s,tokens:l}=a(e,o);return{value:s,tokens:l,declarations:s.join(""),css:he(n,s.join(""))}}var R={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var o;return(o=i.map(n=>n.resolve(t)).find(n=>n.matched))!=null?o:this.rules.custom.resolve(t)})}},_toVariables(e,i){return qo(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:o,defaults:n}){var r,a,s,l,d,c,u;let{preset:b,options:p}=i,g,y,M,V,I,ne,B;if(v(b)&&p.transform!=="strict"){let{primitive:Ee,semantic:Ie,extend:Ne}=b,fe=Ie||{},{colorScheme:Oe}=fe,Fe=Y(fe,["colorScheme"]),Pe=Ne||{},{colorScheme:Le}=Pe,ye=Y(Pe,["colorScheme"]),ve=Oe||{},{dark:De}=ve,Me=Y(ve,["dark"]),Be=Le||{},{dark:ze}=Be,Ae=Y(Be,["dark"]),Re=v(Ee)?this._toVariables({primitive:Ee},p):{},je=v(Fe)?this._toVariables({semantic:Fe},p):{},Ve=v(Me)?this._toVariables({light:Me},p):{},mt=v(De)?this._toVariables({dark:De},p):{},ft=v(ye)?this._toVariables({semantic:ye},p):{},yt=v(Ae)?this._toVariables({light:Ae},p):{},vt=v(ze)?this._toVariables({dark:ze},p):{},[vo,So]=[(r=Re.declarations)!=null?r:"",Re.tokens],[$o,xo]=[(a=je.declarations)!=null?a:"",je.tokens||[]],[Co,_o]=[(s=Ve.declarations)!=null?s:"",Ve.tokens||[]],[wo,ko]=[(l=mt.declarations)!=null?l:"",mt.tokens||[]],[To,Eo]=[(d=ft.declarations)!=null?d:"",ft.tokens||[]],[Io,No]=[(c=yt.declarations)!=null?c:"",yt.tokens||[]],[Oo,Fo]=[(u=vt.declarations)!=null?u:"",vt.tokens||[]];g=this.transformCSS(e,vo,"light","variable",p,o,n),y=So;let Po=this.transformCSS(e,`${$o}${Co}`,"light","variable",p,o,n),Lo=this.transformCSS(e,`${wo}`,"dark","variable",p,o,n);M=`${Po}${Lo}`,V=[...new Set([...xo,..._o,...ko])];let Do=this.transformCSS(e,`${To}${Io}color-scheme:light`,"light","variable",p,o,n),Mo=this.transformCSS(e,`${Oo}color-scheme:dark`,"dark","variable",p,o,n);I=`${Do}${Mo}`,ne=[...new Set([...Eo,...No,...Fo])],B=U(b.css,{dt:ge})}return{primitive:{css:g,tokens:y},semantic:{css:M,tokens:V},global:{css:I,tokens:ne},style:B}},getPreset({name:e="",preset:i={},options:t,params:o,set:n,defaults:r,selector:a}){var s,l,d;let c,u,b;if(v(i)&&t.transform!=="strict"){let p=e.replace("-directive",""),g=i,{colorScheme:y,extend:M,css:V}=g,I=Y(g,["colorScheme","extend","css"]),ne=M||{},{colorScheme:B}=ne,Ee=Y(ne,["colorScheme"]),Ie=y||{},{dark:Ne}=Ie,fe=Y(Ie,["dark"]),Oe=B||{},{dark:Fe}=Oe,Pe=Y(Oe,["dark"]),Le=v(I)?this._toVariables({[p]:j(j({},I),Ee)},t):{},ye=v(fe)?this._toVariables({[p]:j(j({},fe),Pe)},t):{},ve=v(Ne)?this._toVariables({[p]:j(j({},Ne),Fe)},t):{},[De,Me]=[(s=Le.declarations)!=null?s:"",Le.tokens||[]],[Be,ze]=[(l=ye.declarations)!=null?l:"",ye.tokens||[]],[Ae,Re]=[(d=ve.declarations)!=null?d:"",ve.tokens||[]],je=this.transformCSS(p,`${De}${Be}`,"light","variable",t,n,r,a),Ve=this.transformCSS(p,Ae,"dark","variable",t,n,r,a);c=`${je}${Ve}`,u=[...new Set([...Me,...ze,...Re])],b=U(V,{dt:ge})}return{css:c,tokens:u,style:b}},getPresetC({name:e="",theme:i={},params:t,set:o,defaults:n}){var r;let{preset:a,options:s}=i,l=(r=a?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:s,params:t,set:o,defaults:n})},getPresetD({name:e="",theme:i={},params:t,set:o,defaults:n}){var r;let a=e.replace("-directive",""),{preset:s,options:l}=i,d=(r=s?.directives)==null?void 0:r[a];return this.getPreset({name:a,preset:d,options:l,params:t,set:o,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,o){let{cssLayer:n}=i;return n?`@layer ${U(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:o={},set:n,defaults:r}){let a=this.getCommon({name:e,theme:i,params:t,set:n,defaults:r}),s=Object.entries(o).reduce((l,[d,c])=>l.push(`${d}="${c}"`)&&l,[]).join(" ");return Object.entries(a||{}).reduce((l,[d,c])=>{if(c?.css){let u=ae(c?.css),b=`${d}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${b}" ${s}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:o={},set:n,defaults:r}){var a;let s={name:e,theme:i,params:t,set:n,defaults:r},l=(a=e.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,d=Object.entries(o).reduce((c,[u,b])=>c.push(`${u}="${b}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${d}>${ae(l)}</style>`:""},createTokens(e={},i,t="",o="",n={}){return Object.entries(e).forEach(([r,a])=>{let s=N(r,i.variable.excludedKeyRegex)?t:t?`${t}.${ct(r)}`:ct(r),l=o?`${o}.${r}`:r;oe(a)?this.createTokens(a,i,s,l,n):(n[s]||(n[s]={paths:[],computed(d,c={}){var u,b;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,c.binding):d&&d!=="none"?(b=this.paths.find(p=>p.scheme===d))==null?void 0:b.computed(d,c.binding):this.paths.map(p=>p.computed(p.scheme,c[p.scheme]))}}),n[s].paths.push({path:l,value:a,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(d,c={}){let u=/{([^}]*)}/g,b=a;if(c.name=this.path,c.binding||(c.binding={}),N(a,u)){let g=a.trim().replaceAll(u,V=>{var I;let ne=V.replace(/{|}/g,""),B=(I=n[ne])==null?void 0:I.computed(d,c);return Je(B)&&B.length===2?`light-dark(${B[0].value},${B[1].value})`:B?.value}),y=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,M=/var\([^)]+\)/g;b=N(g.replace(M,"0"),y)?`calc(${g})`:g}return A(c.binding)&&delete c.binding,{colorScheme:d,path:this.path,paths:c,value:b.includes("undefined")?void 0:b}}}))}),n},getTokenValue(e,i,t){var o;let r=(l=>l.split(".").filter(c=>!N(c.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),a=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(o=e[r])==null?void 0:o.computed(a)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},d)=>{let c=d,{colorScheme:u}=c,b=Y(c,["colorScheme"]);return l[u]=b,l},void 0)},getSelectorRule(e,i,t,o){return t==="class"||t==="attr"?he(v(i)?`${e}${i},${e} ${i}`:e,o):he(e,v(i)?he(i,o):o)},transformCSS(e,i,t,o,n={},r,a,s){if(v(i)){let{cssLayer:l}=n;if(o!=="style"){let d=this.getColorSchemeOption(n,a);i=t==="dark"?d.reduce((c,{type:u,selector:b})=>(v(b)&&(c+=b.includes("[CSS]")?b.replace("[CSS]",i):this.getSelectorRule(b,s,u,i)),c),""):he(s??":root",i)}if(l){let d={name:"primeui",order:"primeui"};oe(l)&&(d.name=U(l.name,{name:e,type:o})),v(d.name)&&(i=he(`@layer ${d.name}`,i),r?.layerNames(d.name))}return i}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=dt(j({},i),{options:j(j({},this.defaults.options),i.options)}),this._tokens=R.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),O.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=dt(j({},this.theme),{preset:e}),this._tokens=R.createTokens(e,this.defaults),this.clearLoadedStyleNames(),O.emit("preset:change",e),O.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=dt(j({},this.theme),{options:e}),this.clearLoadedStyleNames(),O.emit("options:change",e),O.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return R.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return R.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return R.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return R.getPresetD(t)},getCustomPreset(e="",i,t,o){let n={name:e,preset:i,options:this.options,selector:t,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return R.getPreset(n)},getLayerOrderCSS(e=""){return R.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",o){return R.transformCSS(e,i,o,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return R.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return R.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),O.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&O.emit("theme:load"))}};var Qo=0,ro=(()=>{class e{document=h(te);use(t,o={}){let n=!1,r=t,a=null,{immediate:s=!0,manual:l=!1,name:d=`style_${++Qo}`,id:c=void 0,media:u=void 0,nonce:b=void 0,first:p=!1,props:g={}}=o;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${d}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!a.isConnected){r=t,jt(a,{type:"text/css",media:u,nonce:b});let y=this.document.head;p&&y.firstChild?y.insertBefore(a,y.firstChild):y.appendChild(a),Ut(a,"data-primeng-style-id",d)}return a.textContent!==r&&(a.textContent=r),{id:c,name:d,el:a,css:r}}}static \u0275fac=function(o){return new(o||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var me={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Yo=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Zo=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,T=(()=>{class e{name="base";useStyle=h(ro);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,o={},n=r=>r)=>{let r=n(U(t,{dt:ge}));return r?this.useStyle.use(ae(r),$({name:this.name},o)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},o="")=>this.load(this.theme,t,(n="")=>m.transformCSS(t.name||this.name,`${n}${o}`));loadGlobalCSS=(t={})=>this.load(Zo,t);loadGlobalTheme=(t={},o="")=>this.load(Yo,t,(n="")=>m.transformCSS(t.name||this.name,`${n}${o}`));getCommonTheme=t=>m.getCommon(this.name,t);getComponentTheme=t=>m.getComponent(this.name,t);getDirectiveTheme=t=>m.getDirective(this.name,t);getPresetTheme=(t,o,n)=>m.getCustomPreset(this.name,t,o,n);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(t="",o={})=>{if(this.css){let n=U(this.css,{dt:ge}),r=ae(`${n}${t}`),a=Object.entries(o).reduce((s,[l,d])=>s.push(`${l}="${d}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,o={})=>m.getCommonStyleSheet(this.name,t,o);getThemeStyleSheet=(t,o={})=>{let n=[m.getStyleSheet(this.name,t,o)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,a=U(this.theme,{dt:ge}),s=ae(m.transformCSS(r,a)),l=Object.entries(o).reduce((d,[c,u])=>d.push(`${c}="${u}"`)&&d,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${s}</style>`)}return n.join("")};static \u0275fac=function(o){return new(o||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Jo=(()=>{class e{theme=ie(void 0);csp=ie({nonce:void 0});isThemeChanged=!1;document=h(te);baseStyle=h(T);constructor(){_e(()=>{O.on("theme:change",t=>{Mt(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),_e(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),O.clear()}onThemeChange(t){m.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:n,style:r}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,$({name:"primitive-variables"},a)),this.baseStyle.load(o?.css,$({name:"semantic-variables"},a)),this.baseStyle.load(n?.css,$({name:"global-variables"},a)),this.baseStyle.loadGlobalTheme($({name:"global-style"},a),r),m.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:o,csp:n}=t||{};o&&this.theme.set(o),n&&this.csp.set(n)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),bt=(()=>{class e extends Jo{ripple=ie(!1);platformId=h(le);inputStyle=ie(null);inputVariant=ie(null);overlayOptions={};csp=ie({nonce:void 0});filterMatchModeOptions={text:[k.STARTS_WITH,k.CONTAINS,k.NOT_CONTAINS,k.ENDS_WITH,k.EQUALS,k.NOT_EQUALS],numeric:[k.EQUALS,k.NOT_EQUALS,k.LESS_THAN,k.LESS_THAN_OR_EQUAL_TO,k.GREATER_THAN,k.GREATER_THAN_OR_EQUAL_TO],date:[k.DATE_IS,k.DATE_IS_NOT,k.DATE_BEFORE,k.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new St;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=$($({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:o,ripple:n,inputStyle:r,inputVariant:a,theme:s,overlayOptions:l,translation:d}=t||{};o&&this.csp.set(o),n&&this.ripple.set(n),r&&this.inputStyle.set(r),a&&this.inputVariant.set(a),l&&(this.overlayOptions=l),d&&this.setTranslation(d),s&&this.setThemeConfig({theme:s,csp:o})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Xo=new $t("PRIME_NG_CONFIG");function yi(...e){let i=e?.map(o=>({provide:Xo,useValue:o,multi:!1})),t=Nt(()=>{let o=h(bt);e?.forEach(n=>o.setConfig(n))});return xt([...i,t])}var ao=(()=>{class e extends T{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),D=(()=>{class e{document=h(te);platformId=h(le);el=h(He);injector=h(kt);cd=h(Lt);renderer=h(It);config=h(bt);baseComponentStyle=h(ao);baseStyle=h(T);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Te("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,o="",n={}){return lt(t,o,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!At(this.platformId)){let{dt:o}=t;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>O.off("theme:change",t))}_loadStyles(){let t=()=>{me.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),me.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!me.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),me.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!m.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,$({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,$({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,$({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme($({name:"global-style"},this.styleOptions),r),m.setLoadedStyleName("common")}if(!m.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,$({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme($({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),m.setLoadedStyleName(this.componentStyle?.name)}if(!m.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,$({name:"layer-order",first:!0},this.styleOptions)),m.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:o}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(o,$({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){me.clearLoadedStyleNames(),O.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,o){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let o=this.componentStyle?.inlineStyles?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:$({},o)}get parent(){return this.parentInstance}static \u0275fac=function(o){return new(o||e)};static \u0275dir=ee({type:e,inputs:{dt:"dt"},features:[P([ao,T]),Se]})}return e})();var tn=["*"];function on(e,i){if(e&1&&(q(0,"span",3),ue(1),Q()),e&2){let t=_();C(),pe(t.label)}}function nn(e,i){if(e&1&&W(0,"span",5),e&2){let t=_(2);K(t.icon),f("ngClass","p-avatar-icon")}}function rn(e,i){if(e&1&&z(0,nn,1,3,"span",4),e&2){let t=_(),o=ot(5);f("ngIf",t.icon)("ngIfElse",o)}}function an(e,i){if(e&1){let t=Pt();q(0,"img",7),Ke("error",function(n){Ct(t);let r=_(2);return _t(r.imageError(n))}),Q()}if(e&2){let t=_(2);f("src",t.image,Et),F("aria-label",t.ariaLabel)}}function sn(e,i){if(e&1&&z(0,an,1,2,"img",6),e&2){let t=_();f("ngIf",t.image)}}var ln=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,cn={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},so=(()=>{class e extends T{name="avatar";theme=ln;classes=cn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var dn=(()=>{class e extends D{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new se;_componentStyle=h(so);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275cmp=H({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(o,n){o&2&&(F("data-pc-name","avatar")("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),We(n.style),K(n.hostClass),tt("p-avatar",!0)("p-component",!0)("p-avatar-circle",n.shape==="circle")("p-avatar-lg",n.size==="large")("p-avatar-xl",n.size==="xlarge")("p-avatar-image",n.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[P([so]),E],ngContentSelectors:tn,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(o,n){if(o&1&&(ce(),de(0),z(1,on,2,1,"span",2)(2,rn,1,2,"ng-template",null,0,it)(4,sn,1,1,"ng-template",null,1,it)),o&2){let r=ot(3);C(),f("ngIf",n.label)("ngIfElse",r)}},dependencies:[re,qe,Qe,L],encapsulation:2,changeDetection:0})}return e})(),Ui=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[dn,L,L]})}return e})();var ht=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,o){t&&o&&(t.classList?t.classList.add(o):t.className+=" "+o)}static addMultipleClasses(t,o){if(t&&o)if(t.classList){let n=o.trim().split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=o.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}}static removeClass(t,o){t&&o&&(t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,o){t&&o&&[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,o){return t&&o?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(o){return o!==t})}static find(t,o){return Array.from(t.querySelectorAll(o))}static findSingle(t,o){return this.isElement(t)?t.querySelector(o):null}static index(t){let o=t.parentNode.childNodes,n=0;for(var r=0;r<o.length;r++){if(o[r]==t)return n;o[r].nodeType==1&&n++}return-1}static indexWithinGroup(t,o){let n=t.parentNode?t.parentNode.childNodes:[],r=0;for(var a=0;a<n.length;a++){if(n[a]==t)return r;n[a].attributes&&n[a].attributes[o]&&n[a].nodeType==1&&r++}return-1}static appendOverlay(t,o,n="self"){n!=="self"&&t&&o&&this.appendChild(t,o)}static alignOverlay(t,o,n="self",r=!0){t&&o&&(r&&(t.style.minWidth=`${e.getOuterWidth(o)}px`),n==="self"?this.relativePosition(t,o):this.absolutePosition(t,o))}static relativePosition(t,o,n=!0){let r=I=>{if(I)return getComputedStyle(I).getPropertyValue("position")==="relative"?I:r(I.parentElement)},a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=o.offsetHeight,l=o.getBoundingClientRect(),d=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),u=this.getViewport(),p=r(t)?.getBoundingClientRect()||{top:-1*d,left:-1*c},g,y;l.top+s+a.height>u.height?(g=l.top-p.top-a.height,t.style.transformOrigin="bottom",l.top+g<0&&(g=-1*l.top)):(g=s+l.top-p.top,t.style.transformOrigin="top");let M=l.left+a.width-u.width,V=l.left-p.left;a.width>u.width?y=(l.left-p.left)*-1:M>0?y=V-M:y=l.left-p.left,t.style.top=g+"px",t.style.left=y+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,o,n=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=r.height,s=r.width,l=o.offsetHeight,d=o.offsetWidth,c=o.getBoundingClientRect(),u=this.getWindowScrollTop(),b=this.getWindowScrollLeft(),p=this.getViewport(),g,y;c.top+l+a>p.height?(g=c.top+u-a,t.style.transformOrigin="bottom",g<0&&(g=u)):(g=l+c.top+u,t.style.transformOrigin="top"),c.left+s>p.width?y=Math.max(0,c.left+b+d-s):y=c.left+b,t.style.top=g+"px",t.style.left=y+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,o=[]){return t.parentNode===null?o:this.getParents(t.parentNode,o.concat([t.parentNode]))}static getScrollableParents(t){let o=[];if(t){let n=this.getParents(t),r=/(auto|scroll)/,a=s=>{let l=window.getComputedStyle(s,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let s of n){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let d=l.split(",");for(let c of d){let u=this.findSingle(s,c);u&&a(u)&&o.push(u)}}s.nodeType!==9&&a(s)&&o.push(s)}}return o}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementDimensions(t){let o={};return t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",o}static scrollInView(t,o){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,l=t.getBoundingClientRect(),c=o.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-s,u=t.scrollTop,b=t.clientHeight,p=this.getOuterHeight(o);c<0?t.scrollTop=u+c:c+p>b&&(t.scrollTop=u+c-b+p)}static fadeIn(t,o){t.style.opacity=0;let n=+new Date,r=0,a=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/o,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(t,o){var n=1,r=50,a=o,s=r/a;let l=setInterval(()=>{n=n-s,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,o){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return r.call(t,o)}static getOuterWidth(t,o){let n=t.offsetWidth;if(o){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(t){let o=getComputedStyle(t);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(t){let o=getComputedStyle(t);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(t){let o=t.offsetWidth,n=getComputedStyle(t);return o+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static width(t){let o=t.offsetWidth,n=getComputedStyle(t);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static getInnerHeight(t){let o=t.offsetHeight,n=getComputedStyle(t);return o+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),o}static getOuterHeight(t,o){let n=t.offsetHeight;if(o){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(t){let o=t.offsetHeight,n=getComputedStyle(t);return o-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o}static getWidth(t){let o=t.offsetWidth,n=getComputedStyle(t);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),o}static getViewport(){let t=window,o=document,n=o.documentElement,r=o.getElementsByTagName("body")[0],a=t.innerWidth||n.clientWidth||r.clientWidth,s=t.innerHeight||n.clientHeight||r.clientHeight;return{width:a,height:s}}static getOffset(t){var o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,o){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(o,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,o=t.indexOf("MSIE ");if(o>0)return!0;var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return!0}var a=t.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,o){if(this.isElement(o))o.appendChild(t);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(t);else throw"Cannot append "+o+" to "+t}static removeChild(t,o){if(this.isElement(o))o.removeChild(t);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+o}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let o=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let n=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let o=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(t,o,n){t[o].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,o){t&&document.activeElement!==t&&t.focus(o)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,o=""){let n=this.find(t,this.getFocusableSelectorString(o)),r=[];for(let a of n){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&r.push(a)}return r}static getFocusableElement(t,o=""){let n=this.findSingle(t,this.getFocusableSelectorString(o));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,o=""){let n=this.getFocusableElements(t,o);return n.length>0?n[0]:null}static getLastFocusableElement(t,o){let n=this.getFocusableElements(t,o);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,o=!1){let n=e.getFocusableElements(t),r=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);o?a==-1||a===0?r=n.length-1:r=a-1:a!=-1&&a!==n.length-1&&(r=a+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,o){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,o){if(t){let n=t.getAttribute(o);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,o={},...n){if(t){let r=document.createElement(t);return this.setAttributes(r,o),r.append(...n),r}}static setAttribute(t,o="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(o,n)}static setAttributes(t,o={}){if(this.isElement(t)){let n=(r,a)=>{let s=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[a].flat().reduce((l,d)=>{if(d!=null){let c=typeof d;if(c==="string"||c==="number")l.push(d);else if(c==="object"){let u=Array.isArray(d)?n(r,d):Object.entries(d).map(([b,p])=>r==="style"&&(p||p===0)?`${b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?b:void 0);l=u.length?l.concat(u.filter(b=>!!b)):l}}return l},s)};Object.entries(o).forEach(([r,a])=>{if(a!=null){let s=r.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),a):r==="pBind"?this.setAttributes(t,a):(a=r==="class"?[...new Set(n("class",a))].join(" ").trim():r==="style"?n("style",a).join(";").trim():a,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=a),t.setAttribute(r,a))}})}}static isFocusableElement(t,o=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return e})(),lo=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=ht.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var co=(()=>{class e extends D{autofocus=!1;_autofocus=!1;focused=!1;platformId=h(le);document=h(te);host=h(He);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ye(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=ht.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275dir=ee({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",w],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[E]})}return e})();var un=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,pn={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":v(e.value)&&String(e.value).length===1,"p-badge-dot":A(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},uo=(()=>{class e extends T{name="badge";theme=un;classes=pn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var gt=(()=>{class e extends D{styleClass=J();style=J();badgeSize=J();size=J();severity=J();value=J();badgeDisabled=J(!1,{transform:w});_componentStyle=h(uo);containerClass=rt(()=>{let t="p-badge p-component";return v(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),A(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275cmp=H({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,n){o&2&&(We(n.style()),K(n.containerClass()),Ot("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[P([uo]),E],decls:1,vars:1,template:function(o,n){o&1&&ue(0),o&2&&pe(n.value())},dependencies:[re,L],encapsulation:2,changeDetection:0})}return e})(),po=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[gt,L,L]})}return e})();var hn=["*"],gn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,mn=(()=>{class e extends T{name="baseicon";inlineStyles=gn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var bo=(()=>{class e extends D{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=A(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275cmp=H({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",w],styleClass:"styleClass"},features:[P([mn]),E],ngContentSelectors:hn,decls:1,vars:0,template:function(o,n){o&1&&(ce(),de(0))},encapsulation:2,changeDetection:0})}return e})();var ho=(()=>{class e extends bo{pathId;ngOnInit(){this.pathId="url(#"+Te()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275cmp=H({type:e,selectors:[["SpinnerIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(wt(),q(0,"svg",0)(1,"g"),W(2,"path",1),Q(),q(3,"defs")(4,"clipPath",2),W(5,"rect",3),Q()()()),o&2&&(K(n.getClassNames()),F("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),C(),F("clip-path",n.pathId),C(3),f("id",n.pathId))},encapsulation:2})}return e})();var fn=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,yn={root:"p-ink"},go=(()=>{class e extends T{name="ripple";theme=fn;classes=yn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var mo=(()=>{class e extends D{zone=h(Tt);_componentStyle=h(go);animationListener;mouseDownListener;timeout;constructor(){super(),_e(()=>{Ye(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(be(o,"p-ink-active"),!at(o)&&!st(o)){let s=Math.max(Rt(this.el.nativeElement),Ht(this.el.nativeElement));o.style.height=s+"px",o.style.width=s+"px"}let n=Vt(this.el.nativeElement),r=t.pageX-n.left+this.document.body.scrollTop-st(o)/2,a=t.pageY-n.top+this.document.body.scrollLeft-at(o)/2;this.renderer.setStyle(o,"top",a+"px"),this.renderer.setStyle(o,"left",r+"px"),Ze(o,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&be(s,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let o=0;o<t.length;o++)if(typeof t[o].className=="string"&&t[o].className.indexOf("p-ink")!==-1)return t[o];return null}resetInk(){let t=this.getInk();t&&be(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),be(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Wt(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||e)};static \u0275dir=ee({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[P([go]),E]})}return e})();var vn=["content"],Sn=["loading"],$n=["icon"],xn=["*"],yo=e=>({class:e});function Cn(e,i){e&1&&Ft(0)}function _n(e,i){if(e&1&&W(0,"span",8),e&2){let t=_(3);f("ngClass",t.iconClass()),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function wn(e,i){if(e&1&&W(0,"SpinnerIcon",9),e&2){let t=_(3);f("styleClass",t.spinnerIconClass())("spin",!0),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function kn(e,i){if(e&1&&(Ue(0),z(1,_n,1,3,"span",6)(2,wn,1,4,"SpinnerIcon",7),Ge()),e&2){let t=_(2);C(),f("ngIf",t.loadingIcon),C(),f("ngIf",!t.loadingIcon)}}function Tn(e,i){}function En(e,i){if(e&1&&z(0,Tn,0,0,"ng-template",10),e&2){let t=_(2);f("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function In(e,i){if(e&1&&(Ue(0),z(1,kn,3,2,"ng-container",2)(2,En,1,1,null,5),Ge()),e&2){let t=_();C(),f("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),C(),f("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",nt(3,yo,t.iconClass()))}}function Nn(e,i){if(e&1&&W(0,"span",8),e&2){let t=_(2);K(t.icon),f("ngClass",t.iconClass()),F("data-pc-section","icon")}}function On(e,i){}function Fn(e,i){if(e&1&&z(0,On,0,0,"ng-template",10),e&2){let t=_(2);f("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Pn(e,i){if(e&1&&(Ue(0),z(1,Nn,1,4,"span",11)(2,Fn,1,1,null,5),Ge()),e&2){let t=_();C(),f("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),C(),f("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",nt(3,yo,t.iconClass()))}}function Ln(e,i){if(e&1&&(q(0,"span",12),ue(1),Q()),e&2){let t=_();F("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),C(),pe(t.label)}}function Dn(e,i){if(e&1&&W(0,"p-badge",13),e&2){let t=_();f("value",t.badge)("severity",t.badgeSeverity)}}var Mn=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Bn={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},fo=(()=>{class e extends T{name="button";theme=Mn;classes=Bn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var zn=(()=>{class e extends D{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new se;onFocus=new se;onBlur=new se;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([o,n])=>this[`_${o}`]!==n&&(this[`_${o}`]=n))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return A(this.fluid)?!!o:this.fluid}_componentStyle=h(fo);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:o}=t;if(o){let n=o.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[o])=>t+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=S(e)))(n||e)}})();static \u0275cmp=H({type:e,selectors:[["p-button"]],contentQueries:function(o,n,r){if(o&1&&($e(r,vn,5),$e(r,Sn,5),$e(r,$n,5),$e(r,qt,4)),o&2){let a;xe(a=Ce())&&(n.contentTemplate=a.first),xe(a=Ce())&&(n.loadingIconTemplate=a.first),xe(a=Ce())&&(n.iconTemplate=a.first),xe(a=Ce())&&(n.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",w],loading:[2,"loading","loading",w],loadingIcon:"loadingIcon",raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],plain:[2,"plain","plain",w],severity:"severity",outlined:[2,"outlined","outlined",w],link:[2,"link","link",w],tabindex:[2,"tabindex","tabindex",Dt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",w],fluid:[2,"fluid","fluid",w],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[P([fo]),E,Se],ngContentSelectors:xn,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,n){o&1&&(ce(),q(0,"button",0),Ke("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),de(1),z(2,Cn,1,0,"ng-container",1)(3,In,3,5,"ng-container",2)(4,Pn,3,5,"ng-container",2)(5,Ln,2,3,"span",3)(6,Dn,1,2,"p-badge",4),Q()),o&2&&(f("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),F("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),C(2),f("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),C(),f("ngIf",n.loading),C(),f("ngIf",!n.loading),C(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),C(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[re,qe,Qe,zt,Bt,mo,co,ho,po,gt,L],encapsulation:2,changeDetection:0})}return e})(),la=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[re,zn,L,L]})}return e})();export{Rn as a,Un as b,qn as c,T as d,yi as e,D as f,dn as g,Ui as h,ht as i,lo as j,co as k,gt as l,po as m,bo as n,mo as o,zn as p,la as q};
