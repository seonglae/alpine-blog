import{u as m}from"./index.83ef7ae8.js";import{d as v,r as h,I as y,b as s,c as o,M as i,f as p,e,F as f,Z as k,p as C,i as g,t as x,k as I}from"./entry.7d8f9c68.js";const n=t=>(C("data-v-40588e6c"),t=t(),g(),t),S={key:0,class:"copied"},b=n(()=>e("div",{class:"scrim"},null,-1)),w=n(()=>e("div",{class:"content"}," Copied! ",-1)),B=[b,w],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",S,B)):p("",!0),T,e("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,e("span",V,x(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}});const L=I(q,[["__scopeId","data-v-40588e6c"]]);export{L as default};
