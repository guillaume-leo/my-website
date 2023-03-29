import{a as _,o as t,b as s,e as o,D as n,F as a,G as l,h as p,E as g,p as m,j as b,f as j}from"./entry.71be354a.js";const d=e=>(m("data-v-06e443d8"),e=e(),b(),e),w={class:"projects__project project"},k=d(()=>o("hr",{class:"project__separator"},null,-1)),x={class:"project__title"},v={class:"project__date"},f=["src"],y={class:"project__description"},S=d(()=>o("h2",{class:"project__section"},"Technologies",-1)),B={class:"project__technnologies technos"},A={class:"technos__techno"},D={class:"project__section"},I={class:"project__links links links--project"},L={class:"links__link link link--project"},C=["href"],G={__name:"projectCard",props:{title:String,date:String,screenshot:Array,description:String,technologies:Array,links:Array},setup(e){return(r,h)=>(t(),s("div",w,[k,o("h1",x,n(e.title),1),o("p",v,n(e.date),1),(t(!0),s(a,null,l(e.screenshot,c=>(t(),s("img",{src:c,alt:"project screenshot",class:"project__screenshot"},null,8,f))),256)),o("p",y,n(e.description),1),S,o("ul",B,[(t(!0),s(a,null,l(e.technologies,c=>(t(),s("li",A,n(c),1))),256))]),p(o("h2",D,"Links",512),[[g,e.links.length>0]]),o("ul",I,[(t(!0),s(a,null,l(e.links,c=>(t(),s("li",L,[o("a",{target:"_blank",href:c.url},n(c.text),9,C)]))),256))])]))}},P=_(G,[["__scopeId","data-v-06e443d8"]]),R={class:"projects"},E={__name:"projects",setup(e){const r=[{title:"my website",date:"2023",screenshot:null,description:"a website that brings together my various projects as a web developer and audio visual artist",technologies:["nuxt 3","vue 3","sass","firebase","github pages"],links:[{text:"website",url:"https://www.guillaume-leo.com"},{text:"code source",url:"https://github.com/guillaume-leo/my-website"}]},{title:"RGB124",date:"2022",screenshot:["/rgb124.png"],description:"Alex GD wanted a website to show his work as a video creator.",technologies:["nuxt 3","vue 3","babylon js","sass","google sheet (as database)","github pages"],links:[{text:"website",url:"https://www.rgb124.be"},{text:"code source",url:"https://github.com/guillaume-leo/rgb124"}]},{title:"Palsembleu visuals",date:"2022",screenshot:["/pal1.jpg","/pal3.jpg","/pal2.jpg"],description:"Real time particle simulation to accompany the ambient project Palsembleu (Belgium)",technologies:["max/msp","glsl","javascript","Scheme"],links:[]},{title:"damn good cafe",date:"2023",screenshot:["/damngood.png"],description:"A website for a coffee bar based in brussels",technologies:["nuxt 3","vue 3","sass","google sheet (as database)","github pages"],links:[{text:"website",url:"https://damngoodcafe.com/"},{text:"code source",url:"https://github.com/guillaume-leo/rgb124"}]},{title:"SlowLands visuals",date:"2021",screenshot:["/slowlands.png"],description:"Real time particle simulation to accompany the ambient project SlowLands (Belgium)",technologies:["max/msp","glsl","javascript","Scheme"],links:[{text:"video",url:"https://youtu.be/nQUmSUTVXho"},{text:"slowlands music",url:"https://slowlands.bandcamp.com/"}]}];return(h,c)=>{const u=P;return t(),s("div",R,[(t(),s(a,null,l(r,i=>j(u,{title:i.title,date:i.date,screenshot:i.screenshot,description:i.description,technologies:i.technologies,links:i.links},null,8,["title","date","screenshot","description","technologies","links"])),64))])}}};export{E as default};
