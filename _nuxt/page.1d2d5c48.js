import{l as r,K as g,m,q as d,R as A,r as K,s as k,t as _,x as f,y as v,S as T,z as C,A as h,T as x,B as w}from"./entry.71be354a.js";const S=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var t;return((t=e.params[n.slice(1)])==null?void 0:t.toString())||""}),B=(e,a)=>{var o;const n=a.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===a.Component.type}),t=(o=e!=null?e:n==null?void 0:n.meta.key)!=null?o:n&&S(a.route,n);return typeof t=="function"?t(a.route):t},H=(e,a)=>({default:()=>e?r(g,e===!0?{}:e,a):a}),O=m({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const n=d();return()=>r(A,{name:e.name,route:e.route,...a},{default:t=>{var u,c,p,l;if(!t.Component)return;const o=B(e.pageKey,t),s=n.deferHydration(),i=!!((c=(u=e.transition)!=null?u:t.route.meta.pageTransition)!=null?c:f),y=i&&b([e.transition,t.route.meta.pageTransition,f,{onAfterLeave:()=>{n.callHook("page:transition:finish",t.Component)}}].filter(Boolean));return v(x,i&&y,H((l=(p=e.keepalive)!=null?p:t.route.meta.keepalive)!=null?l:h,r(T,{onPending:()=>n.callHook("page:start",t.Component),onResolve:()=>{C(()=>n.callHook("page:finish",t.Component).finally(s))}},{default:()=>r(j,{key:o,routeProps:t,pageKey:o,hasTransition:i})}))).default()}})}});function R(e){return Array.isArray(e)?e:e?[e]:[]}function b(e){const a=e.map(n=>({...n,onAfterLeave:R(n.onAfterLeave)}));return w(...a)}const j=m({props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,n=e.routeProps.route,t={};for(const o in e.routeProps.route)t[o]=K(()=>a===e.pageKey?e.routeProps.route[o]:n[o]);return k("_route",_(t)),()=>r(e.routeProps.Component)}});export{O as _};
