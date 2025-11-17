import{a as de,e as ge,i as pe,o as ue}from"./chunk-GDOUQOGK.js";import{d as ae,f as re,g as se,k as ce}from"./chunk-WXR7YDA7.js";import{e as oe,ga as le,ha as M}from"./chunk-GNSVLBWZ.js";import{Bb as E,Cb as J,Db as x,Eb as v,Ha as r,Ib as $,Jb as D,Kb as K,Mb as B,Nb as W,Ob as A,Pb as X,Q as N,R as O,Rb as Y,S as Q,Ta as f,Ua as P,X as j,Xa as q,Ya as g,ca as p,cb as b,cc as I,da as u,db as h,dc as Z,ga as F,gb as G,hb as y,ib as w,jb as d,kb as S,ma as z,mb as L,nb as V,ob as s,pb as c,pc as ee,qa as R,qb as k,tb as U,tc as te,ub as C,uc as ie,vb as _,wb as l,xc as ne,zb as H}from"./chunk-JMY2VTDN.js";var fe=["handle"],be=["input"],ye=e=>({checked:e});function ke(e,a){e&1&&U(0)}function xe(e,a){if(e&1&&g(0,ke,1,0,"ng-container",4),e&2){let t=l();h("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",Y(2,ye,t.checked()))}}var ve=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,$e={root:{position:"relative"}},Ie={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},he=(()=>{class e extends ae{name="toggleswitch";theme=ve;classes=Ie;inlineStyles=$e;static \u0275fac=(()=>{let t;return function(i){return(t||(t=F(e)))(i||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var Me={provide:de,useExisting:N(()=>T),multi:!0},T=(()=>{class e extends re{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new z;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=j(he);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(i){return(t||(t=F(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,i,n){if(o&1&&(E(n,fe,4),E(n,le,4)),o&2){let m;x(m=v())&&(i.handleTemplate=m.first),x(m=v())&&(i.templates=m)}},viewQuery:function(o,i){if(o&1&&J(be,5),o&2){let n;x(n=v())&&(i.input=n.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",Z],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",I],readonly:[2,"readonly","readonly",I],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",I]},outputs:{onChange:"onChange"},features:[X([Me,he]),q],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){if(o&1){let n=C();s(0,"div",1),_("click",function(Ce){return p(n),u(i.onClick(Ce))}),s(1,"input",2,0),_("focus",function(){return p(n),u(i.onFocus())})("blur",function(){return p(n),u(i.onBlur())}),c(),s(3,"span",3)(4,"div",3),g(5,xe,1,4,"ng-container"),c()()()}o&2&&(G(i.sx("root")),y(i.styleClass),h("ngClass",i.cx("root"))("ngStyle",i.style),b("data-pc-name","toggleswitch")("data-pc-section","root"),r(),h("ngClass",i.cx("input"))("checked",i.checked())("disabled",i.disabled)("pAutoFocus",i.autofocus),b("id",i.inputId)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),r(2),h("ngClass",i.cx("slider")),b("data-pc-section","slider"),r(),h("ngClass",i.cx("handle")),r(),d(i.handleTemplate||i._handleTemplate?5:-1))},dependencies:[ne,ee,ie,te,ce,M],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=P({type:e});static \u0275inj=Q({imports:[T,M,M]})}return e})();function Fe(e,a){if(e&1&&k(0,"i",3),e&2){let t=l(2).$implicit;y(t.icon)}}function Se(e,a){if(e&1&&$(0),e&2){let t=l(2).$implicit;K(" ",t.label||(t==null?null:t.signalLabel())," ")}}function Le(e,a){if(e&1&&k(0,"i",3),e&2){let t=l(2).$implicit;w("",t.icon," leading-none")}}function Ve(e,a){if(e&1&&k(0,"p-avatar",6),e&2){let t=l(2).$implicit;H("image",t.img)}}function Ee(e,a){if(e&1&&(s(0,"span"),$(1),c()),e&2){let t=l(2).$implicit;w("text-muted-color text-sm ",t.wrapText?"":"line-clamp-1",""),r(),D(t.description||(t==null?null:t.signalDescription()))}}function De(e,a){if(e&1){let t=C();s(0,"p-toggleswitch",12),_("onChange",function(i){p(t);let n=l(2).$implicit,m=l(4);return u(!(n==null||n.inputCheck==null)&&n.inputCheck.command?n==null||n.inputCheck==null?null:n.inputCheck.command(i):m.default())}),A("ngModelChange",function(i){p(t);let n=l(2).$implicit;return W(n.inputCheck.check,i)||(n.inputCheck.check=i),u(i)}),c()}if(e&2){let t,o=l(2).$implicit;h("disabled",(t=o.inputCheck.disabled)!==null&&t!==void 0?t:!1),B("ngModel",o.inputCheck.check)}}function Be(e,a){if(e&1){let t=C();s(0,"p-toggleswitch",13),_("onChange",function(i){p(t);let n=l(2).$implicit;return u(n.signalInputCheck.set(i.checked))}),A("ngModelChange",function(i){p(t);let n=l(2).$implicit;return W(n.signalInputCheck,i)||(n.signalInputCheck=i),u(i)}),c()}if(e&2){let t=l(2).$implicit;B("ngModel",t.signalInputCheck)}}function We(e,a){if(e&1){let t=C();s(0,"div",5),_("click",function(i){p(t);let n=l().$implicit;return u(n!=null&&n.command?n==null?null:n.command(i):null)}),s(1,"div"),g(2,Le,1,3,"i",1)(3,Ve,1,1,"p-avatar",6),s(4,"div",7)(5,"span",8),$(6),c(),g(7,Ee,2,4,"span",9),c()(),g(8,De,1,2,"p-toggleswitch",10)(9,Be,1,1,"p-toggleswitch",11),c()}if(e&2){let t=l().$implicit,o=l(4);h("routerLink",t.routerLink),r(),w("",o.severity(t.severity)," flex space-x-2 items-center gap-3 text-lg"),r(),d(t.icon?2:-1),r(),d(t.img?3:-1),r(3),D(t.label||(t==null?null:t.signalLabel())),r(),d(t.description||t.signalDescription?7:-1),r(),d(t.inputCheck?8:t.signalInputCheck?9:-1)}}function Ae(e,a){if(e&1&&g(0,We,10,9,"div",4),e&2){let t=a.$implicit;d(t.hide?-1:0)}}function Ne(e,a){if(e&1&&(s(0,"div",2),L(1,Ae,1,1,null,null,S),c()),e&2){let t=l(2).$implicit;r(),V(t.items)}}function Oe(e,a){if(e&1&&(s(0,"div",0)(1,"h4"),g(2,Fe,1,3,"i",1)(3,Se,1,1),c(),g(4,Ne,3,0,"div",2),c()),e&2){let t=l().$implicit,o=l();h("routerLink",t.routerLink),r(),w("",t.severity?o.severity(t.severity):"text-muted-color"," text-md mb-3 flex items-center gap-2"),r(),d(t.icon?2:-1),r(),d(t.label||t.signalLabel?3:-1),r(),d(t.items?4:-1)}}function Qe(e,a){if(e&1&&g(0,Oe,5,7,"div",0),e&2){let t=a.$implicit;d(t.hide?-1:0)}}var _e=class e{items=R.required();severity(a){switch(a){case"danger":return"text-red-500";case"primary":return"text-primary";case"contrast":return"text-muted-color";default:return"text-color"}}default(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-list-menu-item"]],inputs:{items:[1,"items"]},decls:2,vars:0,consts:[[1,"px-2","text-color","mb-5","w-full",3,"routerLink"],[2,"font-size","1.2rem",3,"class"],[1,"flex","flex-col","py-1","px-2","gap-5"],[2,"font-size","1.2rem"],[1,"flex","cursor-pointer","justify-between","w-full","items-center","gap-6",3,"routerLink"],[1,"flex","cursor-pointer","justify-between","w-full","items-center","gap-6",3,"click","routerLink"],["styleClass","font-medium text-base flex","size","normal","shape","circle",3,"image"],[1,"flex","flex-col","gap-1","flex-1","leading-none"],[1,""],[3,"class"],["styleClass","m-auto",1,"leading-0",3,"disabled","ngModel"],["styleClass","m-auto",1,"leading-0",3,"ngModel"],["styleClass","m-auto",1,"leading-0",3,"onChange","ngModelChange","disabled","ngModel"],["styleClass","m-auto",1,"leading-0",3,"onChange","ngModelChange","ngModel"]],template:function(t,o){t&1&&L(0,Qe,1,1,null,null,S),t&2&&V(o.items())},dependencies:[me,T,ue,ge,pe,oe,se],encapsulation:2})};export{me as a,_e as b};
