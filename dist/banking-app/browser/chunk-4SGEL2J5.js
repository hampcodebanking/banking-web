import{a as w}from"./chunk-UUFD72BD.js";import{$ as _t,B as mt,C as A,D as O,O as lt,P as ut,R as dt,S as st,T as pt,U as ft,V as gt,W as ht,X as bt,Y as Ct,Z as xt,_ as vt,b as W,da as P,ea as Mt,j as X,k as S,l as k,m as Y,n as y,o as Z,p as tt,q as E,r as et,s as F,t as nt,u as ot,w as rt,x as it,y as at,z as ct}from"./chunk-YOIIVQ5A.js";import{$b as Q,Ab as o,Bb as s,Cb as b,Db as C,Fb as B,Ib as _,Kc as z,Nc as J,Ob as V,Oc as K,Pb as L,Qb as $,Sb as a,Tb as M,Ub as q,Wa as m,Xa as f,_b as G,aa as R,ac as U,ba as x,fa as T,ga as N,la as d,ma as v,nb as u,pb as l,ta as j,ua as H,zb as i}from"./chunk-OXWYM4U2.js";var I=(()=>{let t=class t{constructor(r){this.http=r,this.baseUrl=Y.apiUrl}registerAccount(r){let n=`${this.baseUrl}/admin/accounts`;return this.http.post(n,r)}getAllAccounts(){let r=`${this.baseUrl}/admin/accounts/user`;return this.http.get(r)}};t.\u0275fac=function(n){return new(n||t)(T(W))},t.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var jt=()=>[5,10,20];function Ht(e,t){e&1&&(i(0,"th",20),a(1,"Id"),o())}function Bt(e,t){if(e&1&&(i(0,"td",21),a(1),o()),e&2){let h=t.$implicit;m(),M(h.id)}}function Vt(e,t){e&1&&(i(0,"th",20),a(1,"N\xFAmero de cuenta"),o())}function Lt(e,t){if(e&1&&(i(0,"td",21),a(1),o()),e&2){let h=t.$implicit;m(),M(h.accountNumber)}}function $t(e,t){e&1&&(i(0,"th",20),a(1,"Saldo"),o())}function qt(e,t){if(e&1&&(i(0,"td",21),a(1),Q(2,"currency"),o()),e&2){let h=t.$implicit;m(),M(U(2,1,h.balance))}}function Gt(e,t){e&1&&(i(0,"th",20),a(1,"Acciones"),o())}function Qt(e,t){e&1&&(i(0,"td",21)(1,"button",22),a(2,"Editar"),o(),i(3,"button",23),a(4,"Eliminar"),o()())}function Ut(e,t){e&1&&s(0,"tr",24)}function zt(e,t){e&1&&s(0,"tr",25)}var St=(()=>{let t=class t{constructor(){this.displayedColumns=["id","numero","saldo","acciones"],this.dataSource=new _t,this.accountService=N(I),this.authService=N(w)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.customerId=this.authService.auth()?.user?.id||void 0,this.loadAccounts()}loadAccounts(){this.accountService.getAllAccounts().subscribe({next:r=>{this.dataSource.data=r,console.log("Cuentas del cliente:",r)},error:r=>{console.error("Error al cargar cuentas del cliente:",r)}})}applyFilter(r){let n=r.target.value;this.dataSource.filter=n.trim().toLowerCase()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-account"]],viewQuery:function(n,c){if(n&1&&V(P,5),n&2){let p;L(p=$())&&(c.paginator=p.first)}},decls:32,vars:5,consts:[["input",""],[1,"container","py-5"],[1,"fw-bold","text-center"],[1,"header-controls"],["appearance","fill",1,"filter"],["matInput","","placeholder","Ex. ium",3,"keyup"],["mat-button","","matSuffix",""],[1,"button-container"],["mat-raised-button","","color","primary","routerLink","/account/register"],[1,"table-container"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","numero"],["matColumnDef","saldo"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-button","",1,"edit-button"],["mat-button","",1,"delete-button"],["mat-header-row",""],["mat-row",""]],template:function(n,c){if(n&1){let p=B();i(0,"div",1)(1,"h1",2),a(2,"Listado de Cuenta Bancarias"),o(),i(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),a(6,"Filter"),o(),i(7,"input",5,0),_("keyup",function(It){return j(p),H(c.applyFilter(It))}),o(),i(9,"button",6)(10,"mat-icon"),a(11,"search"),o()()(),i(12,"div",7)(13,"button",8),a(14," Crear cuenta bancaria "),o()()(),i(15,"div",9)(16,"table",10),b(17,11),u(18,Ht,2,0,"th",12)(19,Bt,2,1,"td",13),C(),b(20,14),u(21,Vt,2,0,"th",12)(22,Lt,2,1,"td",13),C(),b(23,15),u(24,$t,2,0,"th",12)(25,qt,3,3,"td",13),C(),b(26,16),u(27,Gt,2,0,"th",12)(28,Qt,5,0,"td",13),C(),u(29,Ut,1,0,"tr",17)(30,zt,1,0,"tr",18),o(),s(31,"mat-paginator",19),o()()}n&2&&(m(16),l("dataSource",c.dataSource),m(13),l("matHeaderRowDef",c.displayedColumns),m(),l("matRowDefColumns",c.displayedColumns),m(),l("pageSizeOptions",G(4,jt)))},dependencies:[S,E,A,y,tt,O,ut,dt,pt,bt,ft,st,Ct,gt,ht,xt,vt,P,J],styles:[".container[_ngcontent-%COMP%]{max-width:1000px;margin:20px auto 0}h1[_ngcontent-%COMP%]{color:#333;text-align:center;margin-bottom:24px}.header-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.filter[_ngcontent-%COMP%]{flex:1;max-width:400px}.filter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.button-container[_ngcontent-%COMP%]{margin-left:20px}.table-container[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;box-shadow:0 4px 8px #0000001a;background-color:#fff;border-radius:8px;overflow:hidden}mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{padding:16px;text-align:left}mat-header-cell[_ngcontent-%COMP%]{background-color:#009739;color:#fff;font-weight:700}mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f3f3f3}mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid #e0e0e0}button[mat-button][_ngcontent-%COMP%]{margin:0 8px;color:#fff}button[mat-button].edit-button[_ngcontent-%COMP%]{background-color:#4caf50}button[mat-button].delete-button[_ngcontent-%COMP%]{background-color:#f44336}"]});let e=t;return e})();var wt=e=>{let t=e.value;return/^\d{10}$/.test(t)?null:{invalidAccountNumber:!0}},yt=e=>{let t=parseFloat(e.value);return isNaN(t)||t<=0?{invalidAmount:!0}:null};function Jt(e,t){e&1&&(i(0,"mat-error"),a(1," Este campo es obligatorio "),o())}function Kt(e,t){e&1&&(i(0,"mat-error"),a(1," El numero de cuenta debe tener 10 digitos "),o())}function Wt(e,t){e&1&&(i(0,"mat-error"),a(1," Este campo es obligatorio "),o())}function Xt(e,t){e&1&&(i(0,"mat-error"),a(1," El monto no puede ser negativo o igual a cero "),o())}var Et=(()=>{let t=class t{constructor(r,n,c,p,D){this.fb=r,this.router=n,this.accountService=c,this.authService=p,this.snackBar=D,this.customerId=this.authService.auth()?.user?.id||void 0,this.userFullName=`${this.authService.auth()?.user.firstName} ${this.authService.auth()?.user.lastName}`,this.form=this.fb.group({accountNumber:["",[F.required,wt]],balance:["",[F.required,yt]],customerId:[this.customerId]})}ngOnInit(){console.log(this.customerId)}controlHasError(r,n){return this.form.controls[r].hasError(n)}onSubmit(){if(this.form.invalid)return;let r=this.form.value;console.log(r),this.accountService.registerAccount(r).subscribe({next:()=>{this.router.navigate(["/account"]),this.showSnackBar("Cuenta registrada exitosamente")},error:n=>{console.error("Error al registrar cuenta:",n),this.showSnackBar("Error al registrar cuenta. Por favor, intenta de nuevo.")}})}showSnackBar(r){this.snackBar.open(r,"Cerrar",{duration:3e3})}};t.\u0275fac=function(n){return new(n||t)(f(ct),f(X),f(I),f(w),f(lt))},t.\u0275cmp=d({type:t,selectors:[["app-register-account"]],decls:27,vars:7,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"],[1,"row","justify-content-center","my-5"],[1,"col-md-6","col-lg-4"],["autocomplete","off",1,"mt-5",3,"ngSubmit","formGroup"],[1,"mb-4"],[1,"fw-bold"],["appearance","outline",1,"mb-2","w-100"],["matInput","","formControlName","accountNumber","placeholder","Ingrese el n\xFAmero de cuenta"],[4,"ngIf"],["matInput","","formControlName","balance","placeholder","Ingrese el saldo"],["type","hidden","formControlName","customerId"],[1,"button-container"],["mat-raised-button","","color","accent","type","button","routerLink","/account"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(n,c){n&1&&(i(0,"div",0)(1,"h1",1),a(2,"Registro de Cuenta Bancaria"),o(),i(3,"div",2)(4,"div",3)(5,"form",4),_("ngSubmit",function(){return c.onSubmit()}),i(6,"div",5)(7,"label",6),a(8),o()(),i(9,"mat-form-field",7)(10,"mat-label"),a(11,"N\xFAmero de Cuenta"),o(),s(12,"input",8),u(13,Jt,2,0,"mat-error",9)(14,Kt,2,0,"mat-error",9),o(),i(15,"mat-form-field",7)(16,"mat-label"),a(17,"Saldo"),o(),s(18,"input",10),u(19,Wt,2,0,"mat-error",9)(20,Xt,2,0,"mat-error",9),o(),s(21,"input",11),i(22,"div",12)(23,"button",13),a(24," Cancelar "),o(),i(25,"button",14),a(26," Registrar "),o()()()()()()),n&2&&(m(5),l("formGroup",c.form),m(3),q("Ciente: ",c.userFullName,""),m(5),l("ngIf",c.controlHasError("accountNumber","required")),m(),l("ngIf",c.controlHasError("accountNumber","invalidAccountNumber")&&!c.controlHasError("accountNumber","required")),m(5),l("ngIf",c.controlHasError("balance","required")),m(),l("ngIf",c.controlHasError("balance","invalidAmount")&&!c.controlHasError("balance","required")),m(5),l("disabled",!c.form.valid))},dependencies:[z,S,rt,et,nt,ot,it,at,E,A,y,Z,O],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;box-shadow:0 4px 8px #0000001a;background-color:#fff;border-radius:8px;overflow:hidden}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px;margin-right:16px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:16px}.container[_ngcontent-%COMP%]{max-width:1000px;margin:20px auto 0}.text-start[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin-bottom:16px;width:100%;max-width:400px}.text-start[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;box-shadow:0 4px 8px #0000001a;background-color:#fff;border-radius:8px;overflow:hidden;margin-top:20px}mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{padding:16px;text-align:left}mat-header-cell[_ngcontent-%COMP%]{background-color:#009739;color:#fff;font-weight:700}mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f3f3f3}mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid #e0e0e0}button[mat-button][_ngcontent-%COMP%]{margin:0 8px;color:#fff}button[mat-button].edit-button[_ngcontent-%COMP%]{background-color:#4caf50}button[mat-button].delete-button[_ngcontent-%COMP%]{background-color:#f44336}h1[_ngcontent-%COMP%]{color:#333;text-align:center;margin-bottom:24px}"]});let e=t;return e})();var At=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-edit-account"]],decls:2,vars:0,template:function(n,c){n&1&&(i(0,"p"),a(1,"edit-account works!"),o())}});let e=t;return e})();var Ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-filter-account"]],decls:2,vars:0,template:function(n,c){n&1&&(i(0,"p"),a(1,"filter-account works!"),o())}});let e=t;return e})();var Yt=[{path:"",component:St},{path:"register",component:Et},{path:"edit",component:At},{path:"filter",component:Ot}],Pt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[k.forChild(Yt),k]});let e=t;return e})();var Be=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[K,Pt,mt,Mt]});let e=t;return e})();export{Be as AccountModule};
