import{a as d,b as l,e as t,f as c,w as m,h as n,v as a,i as _,o as r}from"./entry.71be354a.js";import{_ as p}from"./close.fe2c684a.js";const u={},b={class:"form form--db"},f={class:"form__field"},k=t("img",{class:"icon icon--close",src:p,alt:"menu icon"},null,-1),v=t("label",{for:"bandcampLink"},"embeded player",-1),g={class:"form__field"},h=t("label",{for:"bandcampTags"},"tags (comma separated)",-1),x={class:"form__field"};function L(s,e){const i=_;return r(),l("div",b,[t("div",f,[c(i,{to:"/bc_lib",class:"form__field-close-button"},{default:m(()=>[k]),_:1}),v,n(t("input",{class:"input input--text",name:"bandcampLink",type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.bandcampLink=o)},null,512),[[a,s.bandcampLink]])]),t("div",g,[h,n(t("input",{class:"input input--text",name:"bandcampTags",type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.tags=o)},null,512),[[a,s.tags]])]),t("div",x,[t("button",{class:"button button--submit",onClick:e[2]||(e[2]=(...o)=>s.setDb&&s.setDb(...o))},"add to db")])])}const y=d(u,[["render",L]]);export{y as default};
