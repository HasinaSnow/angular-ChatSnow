import{a as H,e as W,i as Y,o as J}from"./chunk-GDOUQOGK.js";import{d as U,f as G,l as be,o as me}from"./chunk-WXR7YDA7.js";import{N as j,O as $,ga as q,ha as K}from"./chunk-GNSVLBWZ.js";import{Bb as m,Db as f,Eb as h,Ha as r,Ib as D,Jb as V,Mb as ue,Nb as pe,Ob as de,Pb as z,Q as B,Qa as ne,R as O,Rb as Z,Sb as A,Ta as C,X as S,Xa as L,Ya as c,Yb as N,ca as w,cb as v,cc as g,da as E,db as u,dc as R,fb as ie,ga as y,gb as le,hb as x,jb as p,lb as ae,ma as T,mb as se,nb as re,ob as d,pb as b,pc as ge,qa as oe,qb as k,tb as M,ub as I,uc as P,vb as F,wb as s,xc as Q,zb as ce}from"./chunk-JMY2VTDN.js";var ke=["icon"],Me=["content"],_e=e=>({$implicit:e}),$e=(e,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":a});function Be(e,a){e&1&&M(0)}function Oe(e,a){if(e&1&&k(0,"span",1),e&2){let t=s(3);x(t.checked?t.onIcon:t.offIcon),u("ngClass",A(4,$e,t.iconPos==="left",t.iconPos==="right")),v("data-pc-section","icon")}}function Se(e,a){if(e&1&&c(0,Oe,1,7,"span",3),e&2){let t=s(2);p(t.onIcon||t.offIcon?0:-1)}}function we(e,a){e&1&&M(0)}function Ee(e,a){if(e&1&&c(0,we,1,0,"ng-container",2),e&2){let t=s(2);u("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Z(2,_e,t.checked))}}function Le(e,a){if(e&1&&(c(0,Se,1,1)(1,Ee,1,4,"ng-container"),d(2,"span",1),D(3),b()),e&2){let t=s();p(t.iconTemplate?1:0),r(2),u("ngClass",t.cx("label")),v("data-pc-section","label"),r(),V(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Ie=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Fe={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},fe=(()=>{class e extends U{name="togglebutton";theme=Ie;classes=Fe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var De={provide:H,useExisting:B(()=>ee),multi:!0},ee=(()=>{class e extends G{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new T;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=S(fe);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=C({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,l){if(o&1&&(m(l,ke,4),m(l,Me,4),m(l,q,4)),o&2){let i;f(i=h())&&(n.iconTemplate=i.first),f(i=h())&&(n.contentTemplate=i.first),f(i=h())&&(n.templates=i)}},hostVars:2,hostBindings:function(o,n){o&2&&x(n.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",g],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",R],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",g],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[z([De,fe]),L],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(o,n){o&1&&(d(0,"button",0),F("click",function(i){return n.toggle(i)}),d(1,"span",1),c(2,Be,1,0,"ng-container",2)(3,Le,4,4),b()()),o&2&&(x(n.styleClass),u("ngClass",n.cx("root"))("tabindex",n.tabindex)("disabled",n.disabled),v("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled),r(),u("ngClass",n.cx("content")),r(),u("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",Z(13,_e,n.checked)),r(),p(n.contentTemplate?-1:3))},dependencies:[me,Q,ge,P,K],encapsulation:2,changeDetection:0})}return e})();var ze=["item"],Ae=(e,a)=>({$implicit:e,index:a});function Ne(e,a){e&1&&M(0)}function Re(e,a){if(e&1&&c(0,Ne,1,0,"ng-container",3),e&2){let t=s(2),o=t.$implicit,n=t.$index,l=s();u("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",A(2,Ae,o,n))}}function Pe(e,a){e&1&&c(0,Re,1,5,"ng-template",null,0,N)}function Qe(e,a){if(e&1){let t=I();d(0,"p-toggleButton",2),F("onChange",function(n){let l=w(t),i=l.$implicit,_=l.$index,X=s();return E(X.onOptionSelect(n,i,_))}),c(1,Pe,2,0),b()}if(e&2){let t=a.$implicit,o=s();u("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(t))("onLabel",o.getOptionLabel(t))("offLabel",o.getOptionLabel(t))("disabled",o.disabled||o.isOptionDisabled(t))("allowEmpty",o.allowEmpty)("size",o.size),r(),p(o.itemTemplate||o._itemTemplate?1:-1)}}var je=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,qe={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},ye=(()=>{class e extends U{name="selectbutton";theme=je;classes=qe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var Ke={provide:H,useExisting:B(()=>te),multi:!0},te=(()=>{class e extends G{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new T;onChange=new T;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=S(ye);getOptionLabel(t){return this.optionLabel?j(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?j(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?j(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,o,n){if(this.disabled||this.isOptionDisabled(o))return;let l=this.isSelected(o);if(l&&this.unselectable)return;let i=this.getOptionValue(o),_;if(this.multiple)l?_=this.value.filter(X=>!$(X,i,this.equalityKey)):_=this.value?[...this.value,i]:[i];else{if(l&&!this.allowEmpty)return;_=l?null:i}this.focusedIndex=n,this.value=_,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:o,index:n})}changeTabIndexes(t,o){let n,l;for(let i=0;i<=this.el.nativeElement.children.length-1;i++)this.el.nativeElement.children[i].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[i],index:i});o==="prev"?n.index===0?l=this.el.nativeElement.children.length-1:l=n.index-1:n.index===this.el.nativeElement.children.length-1?l=0:l=n.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(t,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(o=>!$(o,this.getOptionValue(t),this.dataKey))}isSelected(t){let o=!1,n=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if($(l,n,this.dataKey)){o=!0;break}}}else o=$(this.getOptionValue(t),this.value,this.equalityKey);return o}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=C({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,l){if(o&1&&(m(l,ze,4),m(l,q,4)),o&2){let i;f(i=h())&&(n.itemTemplate=i.first),f(i=h())&&(n.templates=i)}},hostVars:10,hostBindings:function(o,n){o&2&&(v("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),le(n.style),ie("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",g],tabindex:[2,"tabindex","tabindex",R],multiple:[2,"multiple","multiple",g],allowEmpty:[2,"allowEmpty","allowEmpty",g],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",g],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",g]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[z([Ke,ye]),L],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&se(0,Qe,2,9,"p-toggleButton",1,ae),o&2&&re(n.options)},dependencies:[ee,J,W,Y,Q,P,K],encapsulation:2,changeDetection:0})}return e})();function Ue(e,a){if(e&1&&k(0,"i"),e&2){let t=s().$implicit;x(t.icon)}}function Ge(e,a){if(e&1&&(d(0,"span"),D(1),b()),e&2){let t=s().$implicit;r(),V(t.label)}}function He(e,a){if(e&1&&k(0,"p-badge",3),e&2){let t=s().$implicit;ce("value",t.badge)}}function We(e,a){if(e&1&&c(0,Ue,1,3,"i",2)(1,Ge,2,1,"span")(2,He,1,1,"p-badge",3),e&2){let t=a.$implicit;p(t.icon?0:-1),r(),p(t.label?1:-1),r(),p(t.badge?2:-1)}}var Ce=class e{options=oe();selectedOption=ne.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-select-menubar"]],inputs:{options:[1,"options"],selectedOption:[1,"selectedOption"]},outputs:{selectedOption:"selectedOptionChange"},decls:3,vars:2,consts:[["item",""],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],[3,"class"],["size","small",1,"bg-primary",3,"value"]],template:function(t,o){if(t&1){let n=I();d(0,"p-selectbutton",1),de("ngModelChange",function(i){return w(n),pe(o.selectedOption,i)||(o.selectedOption=i),E(i)}),c(1,We,3,3,"ng-template",null,0,N),b()}t&2&&(u("options",o.options()),ue("ngModel",o.selectedOption))},dependencies:[te,be,J,W,Y],encapsulation:2})};export{Ce as a};
