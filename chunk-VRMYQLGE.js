import{a as Fe}from"./chunk-QV2EEAM2.js";import{a as Ee}from"./chunk-BJ36KECR.js";import{a as E}from"./chunk-B3KSVKZY.js";import{d as Q}from"./chunk-VHWCBGKJ.js";import{a as $e,b as U,c as f,d as Ie,e as Y,f as H,g as W,h as C,j as K,k as X,l as J,m as Z,n as Me,o as F,p as ee}from"./chunk-GDOUQOGK.js";import{d as O,f as P,g as S,p as T}from"./chunk-WXR7YDA7.js";import{O as we,P as Se,d as w,ga as Te,ha as A,ja as G}from"./chunk-GNSVLBWZ.js";import{Bb as se,Cb as ge,Db as B,Eb as q,Ha as s,Ib as r,Pb as z,Q as me,Qb as xe,R as M,Rb as ke,Ta as x,X as u,Xa as D,Ya as m,ba as de,ca as L,cb as y,cc as _,da as V,db as d,dc as Ce,fb as ue,ga as v,gb as le,hb as ae,jb as p,ma as R,ob as n,pb as l,pc as _e,qb as c,rb as re,sb as ce,sc as ve,ta as N,ub as fe,uc as ye,vb as b,wb as g,xb as he,xc as j,yb as be}from"./chunk-JMY2VTDN.js";import"./chunk-7CGTOI24.js";var Be=["checkboxicon"],qe=["input"],ze=()=>({"p-checkbox-input":!0}),je=e=>({checked:e,class:"p-checkbox-icon"});function Ae(e,a){if(e&1&&c(0,"span",8),e&2){let t=g(3);d("ngClass",t.checkboxIcon),y("data-pc-section","icon")}}function Oe(e,a){e&1&&c(0,"CheckIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),y("data-pc-section","icon"))}function Pe(e,a){if(e&1&&(re(0),m(1,Ae,1,2,"span",7)(2,Oe,1,2,"CheckIcon",6),ce()),e&2){let t=g(2);s(),d("ngIf",t.checkboxIcon),s(),d("ngIf",!t.checkboxIcon)}}function Ge(e,a){e&1&&c(0,"MinusIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),y("data-pc-section","icon"))}function Qe(e,a){if(e&1&&(re(0),m(1,Pe,3,2,"ng-container",4)(2,Ge,1,2,"MinusIcon",6),ce()),e&2){let t=g();s(),d("ngIf",t.checked),s(),d("ngIf",t._indeterminate())}}function Ue(e,a){}function Ye(e,a){e&1&&m(0,Ue,0,0,"ng-template")}var He=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,We={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Le=(()=>{class e extends O{name="checkbox";theme=He;classes=We;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ke={provide:$e,useExisting:me(()=>pe),multi:!0},pe=(()=>{class e extends P{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new R;onFocus=new R;onBlur=new R;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Se(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=N(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=u(Le);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let o,i=this.injector.get(Ie,null,{optional:!0,self:!0}),h=i&&!this.formControl?i.value:this.model;this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(this.checked||this._indeterminate()?o=h.filter(k=>!we(k,this.value)):o=h?[...h,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=x({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,i,h){if(o&1&&(se(h,Be,4),se(h,Te,4)),o&2){let k;B(k=q())&&(i.checkboxIconTemplate=k.first),B(k=q())&&(i.templates=k)}},viewQuery:function(o,i){if(o&1&&ge(qe,5),o&2){let h;B(h=q())&&(i.inputViewChild=h.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",_],binary:[2,"binary","binary",_],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Ce],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",_],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",_],required:[2,"required","required",_],autofocus:[2,"autofocus","autofocus",_],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[z([Ke,Le]),D,de],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(o,i){if(o&1){let h=fe();n(0,"div",1)(1,"input",2,0),b("focus",function(I){return L(h),V(i.onInputFocus(I))})("blur",function(I){return L(h),V(i.onInputBlur(I))})("change",function(I){return L(h),V(i.handleChange(I))}),l(),n(3,"div",3),m(4,Qe,3,2,"ng-container",4)(5,Ye,1,0,null,5),l()()}o&2&&(le(i.style),ae(i.styleClass),d("ngClass",i.containerClass),y("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),s(),le(i.inputStyle),ae(i.inputClass),d("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",xe(26,ze)),y("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required?!0:null)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),s(3),d("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),s(),d("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",ke(27,je,i.checked)))},dependencies:[j,_e,ve,ye,Fe,Ee,A],encapsulation:2,changeDetection:0})}return e})();var Xe=["*"],Je=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,Ze={root:({instance:e,props:a})=>["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]},Ve=(()=>{class e extends O{name="floatlabel";theme=Je;classes=Ze;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var $=(()=>{class e extends P{_componentStyle=u(Ve);variant="over";static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=x({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(o,i){o&2&&ue("p-floatlabel",!0)("p-floatlabel-over",i.variant==="over")("p-floatlabel-on",i.variant==="on")("p-floatlabel-in",i.variant==="in")},inputs:{variant:"variant"},features:[z([Ve]),D],ngContentSelectors:Xe,decls:1,vars:0,template:function(o,i){o&1&&(he(),be(0))},dependencies:[j,A],encapsulation:2,changeDetection:0})}return e})();function tt(e,a){e&1&&r(0," email required ")}function ot(e,a){e&1&&r(0," invalid email ")}function it(e,a){if(e&1&&m(0,tt,1,0)(1,ot,1,0),e&2){let t=g();p(t.emailControl.hasError("required")?0:-1),s(),p(t.emailControl.hasError("email")?1:-1)}}function nt(e,a){e&1&&r(0," password required. ")}function lt(e,a){e&1&&r(0," minimum length is 4. ")}function at(e,a){if(e&1&&m(0,nt,1,0)(1,lt,1,0),e&2){let t=g();p(t.pwdControl.hasError("required")?0:-1),s(),p(t.pwdControl.hasError("minlength")?1:-1)}}var oe=class e{router=u(w);authService=u(Q);bp=u(G);checked=N(!0);loginForm=new W({email:new C("",{nonNullable:!0,validators:[f.required,f.email]}),password:new C("",{nonNullable:!0,validators:[f.required,f.minLength(4)]})});get emailControl(){return this.loginForm.controls.email}get pwdControl(){return this.loginForm.controls.password}goToRegister(){this.router.navigateByUrl(this.bp.isMobile()?"mobile/home/register":"home/register")}goToForgot(){this.router.navigateByUrl(this.bp.isMobile()?"mobile/home/forgot-password":"home/forgot-password")}onSubmit(){this.loginForm.markAllAsTouched(),this.loginForm.invalid||this.authService.signin(this.loginForm.getRawValue())}onReset(){this.loginForm.reset()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-login"]],decls:38,vars:3,consts:[[1,"flex","flex-col","gap-3","items-center","rounded-md","shadow-lg","text-color","bg-surface-0","dark:bg-surface-950","p-4","h-full","w-full","sm:w-[400px]"],[1,"pt-3","flex","flex-col","items-center","gap-2"],["image","./images/logo-chatsnow.png","size","xlarge","shape","circle"],[1,"font-bold","text-xl"],[1,"text-md"],[1,"w-full","max-w-[420px]","flex","flex-col","gap-2","p-2",3,"formGroup"],[1,""],["variant","on"],["for","email",1,"flex","items-center","gap-1","font-light"],[1,"pi","pi-at",2,"font-size",".9rem"],["formControlName","email","id","email","pInputText","",1,"w-full"],["id","email-help",1,"w-full","h-7","text-red-500","block","text-end"],["for","pwd",1,"flex","items-center","gap-1","font-light"],[1,"pi","pi-lock",2,"font-size",".9rem"],["formControlName","password","id","pwd","type","password","pInputText","","minlength","4",1,"w-full"],[1,"flex","justify-between","items-center","py-3"],[1,"flex","items-center","gap-1.5"],["id","remember"],["for","remember",1,"leading-none","cursor-pointer","hover:text-primary","duration-200"],[1,"underline","cursor-pointer",3,"click"],[1,"flex","gap-2","sm:p-2","py-4","w-full"],["label","Sign in","styleClass","w-full",1,"flex-1",3,"onClick"],["label","reset","variant","outlined","outlined","true","severity","secondary","styleClass","w-full",1,"flex-1",3,"onClick"],[1,"p-2"],[1,"text-primary","font-semibold","hover:underline","cursor-pointer",3,"click"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1),c(2,"p-avatar",2),n(3,"p",3),r(4,"Log in to your account"),l(),n(5,"p",4),r(6,"Please enter your details."),l()(),n(7,"form",5)(8,"div",6)(9,"p-floatlabel",7)(10,"label",8),c(11,"i",9),r(12," Email address "),l(),c(13,"input",10),l(),n(14,"small",11),m(15,it,2,2),l()(),n(16,"div",6)(17,"p-floatlabel",7)(18,"label",12),c(19,"i",13),r(20," Password "),l(),c(21,"input",14),l(),n(22,"small",11),m(23,at,2,2),l()(),n(24,"div",15)(25,"div",16),c(26,"p-checkbox",17),n(27,"label",18),r(28,"Remember me"),l()(),n(29,"span",19),b("click",function(){return o.goToForgot()}),r(30,"Forgot password"),l()(),n(31,"div",20)(32,"p-button",21),b("onClick",function(){return o.onSubmit()}),l(),n(33,"p-button",22),b("onClick",function(){return o.onReset()}),l()()(),n(34,"p",23),r(35," Don't have an account? "),n(36,"span",24),b("click",function(){return o.goToRegister()}),r(37,"Sign up"),l()()()),t&2&&(s(7),d("formGroup",o.loginForm),s(8),p(o.emailControl.invalid&&(o.emailControl.dirty||o.emailControl.touched)?15:-1),s(8),p(o.pwdControl.invalid&&(o.pwdControl.dirty||o.pwdControl.touched)?23:-1))},dependencies:[ee,K,U,Y,H,Z,X,J,S,E,F,$,pe,T],encapsulation:2})};function rt(e,a){e&1&&r(0," email required ")}function ct(e,a){e&1&&r(0," minimum length is 3 ")}function st(e,a){e&1&&r(0," maximum length is 20 ")}function pt(e,a){if(e&1&&m(0,rt,1,0)(1,ct,1,0)(2,st,1,0),e&2){let t=g();p(t.nameControl.hasError("required")?0:-1),s(),p(t.nameControl.hasError("minlength")?1:-1),s(),p(t.nameControl.hasError("maxlength")?2:-1)}}function mt(e,a){e&1&&r(0," email required ")}function dt(e,a){e&1&&r(0," invalid email ")}function ut(e,a){if(e&1&&m(0,mt,1,0)(1,dt,1,0),e&2){let t=g();p(t.emailControl.hasError("required")?0:-1),s(),p(t.emailControl.hasError("email")?1:-1)}}function ft(e,a){e&1&&r(0," email required ")}function ht(e,a){e&1&&r(0," minimum length is 4 ")}function bt(e,a){if(e&1&&m(0,ft,1,0)(1,ht,1,0),e&2){let t=g();p(t.pwdControl.hasError("required")?0:-1),s(),p(t.pwdControl.hasError("minlength")?1:-1)}}function gt(e,a){e&1&&r(0," confirmation required ")}function xt(e,a){if(e&1&&m(0,gt,1,0),e&2){let t=g();p(t.confirmControl.hasError("required")?0:-1)}}var ie=class e{router=u(w);authService=u(Q);bp=u(G);registerForm=new W({name:new C("",{nonNullable:!0,validators:[f.required,f.minLength(3),f.maxLength(20)]}),email:new C("",{nonNullable:!0,validators:[f.required,f.email]}),password:new C("",{nonNullable:!0,validators:[f.required,f.minLength(4)]}),confirm:new C("",{nonNullable:!0,validators:[f.required]})});get emailControl(){return this.registerForm.controls.email}get nameControl(){return this.registerForm.controls.name}get pwdControl(){return this.registerForm.controls.password}get confirmControl(){return this.registerForm.controls.confirm}onSubmit(){this.registerForm.markAllAsTouched(),this.registerForm.invalid||this.authService.signup(this.registerForm.getRawValue())}onReset(){this.registerForm.reset()}goToLogin(){this.router.navigateByUrl(this.bp.isMobile()?"mobile/home/login":"home/login")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-register"]],decls:47,vars:5,consts:[[1,"flex","flex-col","gap-3","items-center","rounded","shadow-lg","text-color","bg-surface-0","dark:bg-surface-950","p-4","h-full","w-full","sm:w-[400px]"],[1,"pt-3","flex","flex-col","items-center","gap-2"],["image","./images/logo-chatsnow.png","size","xlarge","shape","circle"],[1,"font-bold","text-xl"],[1,"text-md"],[1,"w-full","max-w-[420px]","flex","flex-col","gap-1","p-2",3,"formGroup"],[1,""],["variant","on"],["for","pseudo",1,"flex","items-center","gap-1","font-light"],[1,"pi","pi-user",2,"font-size",".9rem"],["formControlName","name","id","pseudo","pInputText","","minlength","3","maxlength","20",1,"w-full"],["id","pseudo-help",1,"w-full","h-7","text-red-500","block","text-end"],["for","email",1,"flex","items-center","gap-1","font-light"],[1,"pi","pi-at",2,"font-size",".9rem"],["formControlName","email","id","email","type","text","pInputText","","autocomplete","false",1,"w-full"],["id","email-help",1,"w-full","h-7","text-red-500","block","text-end"],[1,"w-full"],["for","pwd",1,"flex","items-center","gap-1","font-light"],[1,"pi","pi-lock",2,"font-size",".9rem"],["formControlName","password","id","pwd","type","password","pInputText","","minlength","4",1,"w-full"],["id","pwd-help",1,"w-full","h-7","text-red-500","block","text-end"],["for","pwdConfirm",1,"flex","items-center","gap-1","font-light"],["formControlName","confirm","id","pwdConfirm","type","password","pInputText","",1,"w-full"],["id","pwd-confirm-help",1,"w-full","h-7","text-red-500","block","text-end"],[1,"flex","gap-2","sm:p-2","py-4","w-full"],["label","Sign up","styleClass","m-0 w-full",1,"flex-1",3,"onClick"],["label","reset","variant","outlined","outlined","true","severity","secondary","styleClass","m-0 w-full",1,"flex-1",3,"onClick"],[1,"p-2"],[1,"text-primary","font-semibold","hover:underline","cursor-pointer",3,"click"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1),c(2,"p-avatar",2),n(3,"p",3),r(4,"Create your account"),l(),n(5,"p",4),r(6,"Please enter your details to register."),l()(),n(7,"form",5)(8,"div",6)(9,"p-floatlabel",7)(10,"label",8),c(11,"i",9),r(12," Pseudo "),l(),c(13,"input",10),l(),n(14,"small",11),m(15,pt,3,3),l()(),n(16,"div",6)(17,"p-floatlabel",7)(18,"label",12),c(19,"i",13),r(20," Email address "),l(),c(21,"input",14),l(),n(22,"small",15),m(23,ut,2,2),l()(),n(24,"div",16)(25,"p-floatlabel",7)(26,"label",17),c(27,"i",18),r(28," Password "),l(),c(29,"input",19),l(),n(30,"small",20),m(31,bt,2,2),l()(),n(32,"div",16)(33,"p-floatlabel",7)(34,"label",21),c(35,"i",18),r(36," Password confirmation "),l(),c(37,"input",22),l(),n(38,"small",23),m(39,xt,1,1),l()(),n(40,"div",24)(41,"p-button",25),b("onClick",function(){return o.onSubmit()}),l(),n(42,"p-button",26),b("onClick",function(){return o.onReset()}),l()()(),n(43,"p",27),r(44," Already have an account? "),n(45,"span",28),b("click",function(){return o.goToLogin()}),r(46,"Sign in"),l()()()),t&2&&(s(7),d("formGroup",o.registerForm),s(8),p(o.nameControl.invalid&&(o.nameControl.dirty||o.nameControl.touched)?15:-1),s(8),p(o.emailControl.invalid&&(o.emailControl.dirty||o.emailControl.touched)?23:-1),s(8),p(o.pwdControl.invalid&&(o.pwdControl.dirty||o.pwdControl.touched)?31:-1),s(8),p(o.confirmControl.invalid&&(o.confirmControl.dirty||o.confirmControl.touched)?39:-1))},dependencies:[ee,K,U,Y,H,Z,Me,X,J,S,E,F,T,$],encapsulation:2})};var ne=class e{router=u(w);goToLogin(){this.router.navigateByUrl("/home/login")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-forgot"]],decls:18,vars:0,consts:[[1,"flex","flex-col","gap-3","items-center","rounded-md","shadow-lg","text-color","bg-surface-0","p-4","h-full","w-full","sm:w-[400px]"],[1,"pt-3","flex","flex-col","items-center","gap-2"],["image","./images/pdp1.jpg","size","xlarge","shape","circle"],[1,"font-bold","text-xl"],[1,"text-md","text-center","mx-3"],[1,"w-full","max-w-[420px]","flex","flex-col","gap-2","p-2"],[1,""],["variant","on"],["for","email",1,"flex","items-center","gap-1","font-light"],["id","email","pInputText","",1,"w-full"],["id","email-help",1,"w-full","text-red-500","block","text-end"],[1,"flex","gap-2","sm:p-2","py-4","w-full"],["label","Send request","styleClass","m-0 w-full",1,"flex-1"],["label","Cancel","variant","outlined","outlined","true","severity","secondary","styleClass","m-0 w-full",1,"flex-1",3,"onClick"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1),c(2,"p-avatar",2),n(3,"p",3),r(4,"Forgot your password?"),l(),n(5,"p",4),r(6,"Please enter the email address associated with your account."),l()(),n(7,"div",5)(8,"div",6)(9,"p-floatlabel",7)(10,"label",8),r(11," Your Email address "),l(),c(12,"input",9),l(),n(13,"small",10),r(14,"invalid email."),l()(),n(15,"div",11),c(16,"p-button",12),n(17,"p-button",13),b("onClick",function(){return o.goToLogin()}),l()()()())},dependencies:[S,E,F,$,T],encapsulation:2})};var Ro=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:oe},{path:"register",component:ie},{path:"forgot-password",component:ne}];export{Ro as HomeRoutes};
