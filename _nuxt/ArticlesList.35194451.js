import v from"./ArticlesListItem.9303b283.js";import k from"./ProseA.b92fda1c.js";import w from"./ProseCodeInline.f5e3cea4.js";import{u as g}from"./asyncData.ce0258b5.js";import{d as A,Y as I,I as S,M as c,b as a,c as r,e as o,g as i,F as b,Z as C,D as e,w as d,p as L,i as B,q as N,$ as V,X as q,k as D}from"./entry.f5ef5462.js";import"./date.824a539b.js";const F=t=>(L("data-v-685376b2"),t=t(),B(),t),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},E={key:1,class:"tour"},M=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),X=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=I(async()=>g("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=S(()=>m.value||[]);return(Z,$)=>{var p;const l=v,f=k,h=w;return(p=c(n))!=null&&p.length?(a(),r("div",P,[o("div",T,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(b,null,C(c(n).slice(1),(y,x)=>(a(),q(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",E,[M,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const O=D(X,[["__scopeId","data-v-685376b2"]]);export{O as default};
