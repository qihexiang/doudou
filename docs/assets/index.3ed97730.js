var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,a=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&l(e,n,t[n]);return e};"undefined"!=typeof require&&require;import{r as c,R as d,f as s,v as u,a as m}from"./vendor.32126698.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=e=>{const r=function(){const[e,t]=c.exports.useState({width:window.innerWidth,height:window.innerHeight});return c.exports.useEffect((()=>{const e=()=>t({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)})),e}(),o=g(r);return d.createElement("div",{style:(i=a(a({},o),e.style),l={padding:"16px 8px",backgroundColor:"#FFFFFF"},t(i,n(l)))},e.children);var i,l},g=e=>{const{height:t,width:n}=e;if(t>n){return{width:p(n),maxHeight:"90%",display:"grid"}}return{display:"grid",gridTemplateColumns:"repeat(3, 33.3%)",width:w(.9*n),maxWidth:960,maxHeight:640,flexDirection:"row"}},p=e=>w(e>=1440&&.2*e||e>=1024&&.3*e||e>=768&&.6*e||.8*e),w=e=>e-e%8;function h(e){return d.createElement("div",{style:{margin:"auto",width:"60%",borderRadius:"50%",boxShadow:"0 0 16px silver",aspectRatio:"1/1",backgroundImage:`url(${e.imageUrl})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}})}const y=e=>{const t=new Date("2020-11-07"),n=Math.floor((e.now.getTime()-t.getTime())/864e5);return d.createElement("div",{style:{color:"#ffac63",textAlign:"center",margin:"16px 0",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},d.createElement("div",null,"今天是豆豆和鸟鸟在一起的第"),d.createElement("div",{style:{fontSize:72}},n,"天"),d.createElement("div",null,s(e.now,"HH时mm分ss秒")))},v=e=>{const t=10===e.now.getMonth()&&7===e.now.getDate(),n=e.now.getFullYear()+Number(e.now.getMonth()>=10&&e.now.getDate()>7),r=new Date(`${n}-11-07`),o=Math.floor((r.getTime()-e.now.getTime())/864e5)+1;return d.createElement("div",{style:{color:"#ec407a",textAlign:"center",margin:"16px 0",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},d.createElement("div",null,"2020/11/07 ❤ ",s(e.now,"yyyy/MM/dd")),7===e.now.getDate()?d.createElement("div",null,"鸟鸟和豆豆在一起",12*(e.now.getFullYear()-2020-1)+e.now.getMonth()+2,"个月啦"):null,d.createElement("div",null,t?"今天是":"距离","豆豆和鸟鸟的",n-2020,"周年纪念日",t?null:`还有${o}天`,"！"))};function E(){const e=function(){const[e,t]=c.exports.useState(new Date);return c.exports.useEffect((()=>{const e=setInterval((()=>t(new Date)),100);return()=>clearInterval(e)})),e}();return d.createElement("div",{className:"App",style:a({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#eff0f1"},{height:"100vh",width:"100vw"})},d.createElement(f,{style:{borderTop:"16px solid #ec407a",boxShadow:"0 0 16px silver"}},d.createElement(h,{imageUrl:"/doudou/doudou.png"}),d.createElement(y,{now:e}),d.createElement(v,{now:e})))}!function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisterError:i}=e;let l;"serviceWorker"in navigator&&(l=new u("/doudou/sw.js",{scope:"/doudou/"}),l.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==r||r()})),l.register({immediate:t}).then((e=>{null==o||o(e)})).catch((e=>{null==i||i(e)})))}({onNeedRefresh(){},onOfflineReady(){}}),m.render(d.createElement(d.StrictMode,null,d.createElement(E,null)),document.getElementById("root"));