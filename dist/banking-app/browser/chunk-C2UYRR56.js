import{a as x}from"./chunk-7B4TWPQK.js";import{ea as C,h as g,j as h,l as f}from"./chunk-YOIIVQ5A.js";import{Ab as m,Oc as u,Sb as p,Xa as c,ba as i,la as r,ma as a,zb as s}from"./chunk-OXWYM4U2.js";var v=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-transaction"]],decls:2,vars:0,template:function(o,d){o&1&&(s(0,"p"),p(1,"transaction works!"),m())}});let e=t;return e})();var M=(()=>{let t=class t{constructor(n,o,d){this.route=n,this.router=o,this.transactionService=d}ngOnInit(){this.route.params.subscribe(n=>{let o=+n.id;this.getTransactionDetails(o)})}getTransactionDetails(n){}handleBack(){this.router.navigate(["/home"])}};t.\u0275fac=function(o){return new(o||t)(c(g),c(h),c(x))},t.\u0275cmp=r({type:t,selectors:[["app-detail-transaction"]],decls:3,vars:0,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"]],template:function(o,d){o&1&&(s(0,"div",0)(1,"h1",1),p(2,"Detalles de la Transacci\xF3n"),m()())},styles:[".container[_ngcontent-%COMP%]{max-width:1000px;margin:0 auto;padding-top:20px}h1[_ngcontent-%COMP%]{color:#333;text-align:center;margin-bottom:24px}.mat-card[_ngcontent-%COMP%]{width:100%;max-width:400px;box-shadow:0 4px 8px #0000001a;border-radius:8px;overflow:hidden}.mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;max-height:200px;object-fit:cover}.mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:.5rem}.transaction-info[_ngcontent-%COMP%]{font-size:1rem;color:#666;margin-bottom:1rem}.card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:8px;background-color:#f5f5f5}.card-actions[_ngcontent-%COMP%]   button.primary-button[_ngcontent-%COMP%]{color:#fff;background-color:#1976d2}.card-actions[_ngcontent-%COMP%]   button.primary-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]});let e=t;return e})();var b=[{path:"",component:v},{path:"details/:id",component:M}],y=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a({type:t}),t.\u0275inj=i({imports:[f.forChild(b),f]});let e=t;return e})();var K=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a({type:t}),t.\u0275inj=i({imports:[u,y,C]});let e=t;return e})();export{K as TransactionModule};