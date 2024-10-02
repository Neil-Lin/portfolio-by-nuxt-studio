import{d as Y,u as V,a as W,r as M,o as j,_ as ee,b as te,c as T,e as q,n as ne,F as oe,f,g as ie,h as K,i as U,w as z,T as B,t as ae,j as J,k as se,l as re,m as de,q as le,p as ue,s as E,v as H,x as Z,y as pe,z as ce,A as O}from"./CAiVgX1A.js";const we={key:0},fe={key:0},ve={id:"__preview_loader"},me=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(a){const s=a,t=["__nuxt_preview","__preview_enabled"],p=V(),g=W(),c=M(!0),C=M(!1),e=M(!1),o=M("");let n;const i=async()=>{J("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await g.replace({query:{preview:void 0}}),window.location.reload()},m=async w=>{const r=await s.syncPreview(w);if(e.value!==!0){if(!r){setTimeout(()=>m(w),1e3);return}J("previewToken").value&&(e.value=!0,await g.replace({query:{}}),p.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&n.disconnect())}};return j(async()=>{n=(await ee(()=>import("./BI6ZbG9k.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let r;n.on("connect",()=>{r=setTimeout(()=>{e.value||(r=setTimeout(()=>{o.value="Preview sync timed out",e.value=!1},3e4),n.emit("draft:requestSync"))},3e4)});const P=()=>{r&&(clearTimeout(r),r=null)};n.on("draft:sync",async x=>{if(P(),!x){try{n.once("draft:ready",()=>{n.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(A){switch(P(),A.response.status){case 404:o.value="Preview draft not found",e.value=!1;break;default:o.value="An error occurred while syncing preview",e.value=!1}}return}m(x)}),n.on("draft:unauthorized",()=>{P(),o.value="Unauthorized preview",e.value=!1}),n.on("disconnect",()=>{P()}),document.body.classList.add(...t),n.on("draft:update",x=>{C.value=!0,s.syncPreview(x),C.value=!1})}),te(()=>{document.body.classList.remove(...t)}),(w,r)=>(T(),q("div",null,[c.value?(T(),q("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:e.value,__preview_refreshing:C.value})},[e.value?(T(),q(oe,{key:0},[r[0]||(r[0]=f("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),r[1]||(r[1]=f("span",null,[f("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),ie(": Preview enabled")],-1)),f("button",{onClick:i}," Close ")],64)):K("",!0)],2)):K("",!0),U(B,{name:"preview-loading"},{default:z(()=>[c.value&&!e.value&&!o.value?(T(),q("div",we,[r[4]||(r[4]=f("div",{id:"__preview_background"},null,-1)),f("div",{id:"__preview_loader"},[r[2]||(r[2]=f("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),r[3]||(r[3]=f("p",null,"Initializing the preview...",-1)),f("button",{onClick:i}," Cancel ")])])):K("",!0)]),_:1}),U(B,{name:"preview-loading"},{default:z(()=>[o.value?(T(),q("div",fe,[r[5]||(r[5]=f("div",{id:"__preview_background"},null,-1)),f("div",ve,[f("p",null,ae(o.value),1),f("button",{onClick:i}," Exit preview ")])])):K("",!0)]),_:1})]))}}),ye=se(me,[["__scopeId","data-v-e6af5f49"]]),he=(a=[],s,t)=>{const p=[...s||[]],g=[...t||[]],c=JSON.parse(JSON.stringify(a));for(const e of p)if(e.new)c.push({path:e.path,parsed:e.parsed});else if(e.oldPath)if(g.splice(g.findIndex(n=>n.path===e.oldPath),1),p.find(n=>n.path===e.oldPath))c.push({path:e.path,parsed:e.parsed});else{const n=c.find(i=>i.path===e.oldPath);n&&(n.path=e.path,e.parsed?n.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(i=>{n.parsed[i]=e.pathMeta[i]}))}else{const o=c.find(n=>n.path===e.path);o?Object.assign(o,{path:e.path,parsed:e.parsed}):c.push({path:e.path,parsed:e.parsed})}for(const e of g)c.splice(c.findIndex(o=>o.path===e.path),1);const C=new Intl.Collator(void 0,{numeric:!0});return c.sort((e,o)=>C.compare(e.path,o.path)),c},k={appConfig:"app.config.ts",appConfigV4:"app/app.config.ts",nuxtConfig:"nuxt.config.ts"},ge=re((a,s,t)=>{if(Array.isArray(a[s])&&Array.isArray(t))return a[s]=t,!0}),_e=a=>{let s;return t=>(s||(s=a()),s)};function G(a,s){for(const t in a){const p=s[t];t in s||delete a[t],p!==null&&typeof p=="object"&&G(a[t],s[t])}}function Q(a,s){for(const t in s){const p=s[t];p!==null&&typeof p=="object"?Array.isArray(p)&&Array.isArray(a[t])?a[t]=p:(a[t]=a[t]||{},Q(a[t],p)):a[t]=p}}const ke=()=>{const a=V(),s={},t=de("studio-client-db",()=>null);t.value||(a.hook("content:storage",o=>{t.value=o}),le("/non-existing-path").findOne());const p=async o=>{var m,w,r;const n=window.sessionStorage.getItem("previewToken");if(!o)return null;o=o.replace(/\/$/,"");let i=await((m=t.value)==null?void 0:m.getItem(`${n}:${o}`));return i||(i=await((w=t.value)==null?void 0:w.getItem(`cached:${o}`))),i||(i=i=await((r=t.value)==null?void 0:r.getItem(o))),i||(i=s[o||"/"]),i};return{storage:t,findContentItem:p,updateContentItem:(o,n)=>{var i;t.value&&(s[n.parsed._path]=n.parsed,t.value.setItem(`${o}:${(i=n.parsed)==null?void 0:i._id}`,JSON.stringify(n.parsed)))},removeContentItem:async(o,n)=>{var m;const i=await p(n);if(await((m=t.value)==null?void 0:m.removeItem(`${o}:${n}`)),i){delete s[i._path];const w=await p(i._id);w&&(s[w._path]=w)}},removeAllContentItems:async o=>{const n=await t.value.getKeys(`${o}:`);await Promise.all(n.map(i=>t.value.removeItem(i)))},setPreviewMetaItems:async(o,n)=>{const i=new Set(n.map(m=>m.parsed._id.split(":").shift()));await t.value.setItem(`${o}$`,JSON.stringify({ignoreSources:Array.from(i)}))}}},Ce=_e(()=>JSON.parse(JSON.stringify(Z())));let F=[];const Pe=()=>{const a=V(),{storage:s,findContentItem:t,updateContentItem:p,removeContentItem:g,removeAllContentItems:c,setPreviewMetaItems:C}=ke(),{studio:e,content:o}=ue().public,n=window.sessionStorage.getItem("previewAPI")||(e==null?void 0:e.apiURL),i=Ce(),m=async u=>{const d=window.sessionStorage.getItem("previewToken");c(d),C(d,u),await Promise.all(u.map(v=>{p(d,v)}))},w=u=>{const d=H(a,Z);d!=null&&d.ui&&(d.ui.icons={...d.ui.icons,dynamic:!0}),Q(d,ge(u,i)),u||G(d,i)},r=async u=>{if(F=u.files=u.files||F||[],!s.value)return!1;F=[];const d=he(u.files,u.additions,u.deletions),v=d.filter(I=>![k.appConfig,k.appConfigV4,k.nuxtConfig].includes(I.path));await m(v);const y=d.find(I=>[k.appConfig,k.appConfigV4].includes(I.path));return w(y==null?void 0:y.parsed),A(),!0},P=async()=>{const u=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:n,method:"POST",params:{token:u}})},x=()=>{const u=window.sessionStorage.getItem("previewToken"),d=document.createElement("div");d.id="__nuxt_preview_wrapper",document.body.appendChild(d),pe(ye,{previewToken:u,apiURL:n,syncPreview:r,requestPreviewSyncAPI:P}).mount(d)},A=async()=>{if(o!=null&&o.documentDriven){const{pages:u}=H(a,ce),d=await Promise.all(Object.keys(u.value).map(async v=>{var y;return await t(((y=u.value[v])==null?void 0:y._id)??v)}));u.value=d.reduce((v,y,I)=>(y&&(v[Object.keys(u.value)[I]]=y),v),{})}await a.hooks.callHookParallel("app:data:refresh")};return{mountPreviewUI:x,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const u=W(),d=E(),v=M(""),y=l=>({path:l.path,query:O(l.query),params:O(l.params),fullPath:l.fullPath,meta:O(l.meta)});window.addEventListener("keydown",l=>{(l.metaKey||l.ctrlKey||l.altKey||l.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:l.key,metaKey:l.metaKey,ctrlKey:l.ctrlKey,shiftKey:l.shiftKey,altKey:l.altKey}},"*")}),window.addEventListener("message",async l=>{var D;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((D=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:D.split(",").map(h=>h.trim()))||[]].includes(l.origin))return;const{type:L,payload:b={}}=l.data||{};switch(L){case"nuxt-studio:editor:file-selected":{const h=await t(b.path);h&&(h._partial||!String(b.path).endsWith(".md")||h._path!==E().path&&(v.value=h._path,u.push(h._path)));break}case"nuxt-studio:editor:media-changed":case"nuxt-studio:editor:file-changed":{const h=window.sessionStorage.getItem("previewToken"),{additions:N=[],deletions:S=[]}=b;for(const R of N)await p(h,R);for(const R of S)await g(h,R.path);A();break}case"nuxt-studio:config:file-changed":{const{additions:h=[],deletions:N=[]}=b,S=h.find($=>[k.appConfig,k.appConfigV4].includes($.path));S&&w(S==null?void 0:S.parsed),N.find($=>[k.appConfig,k.appConfigV4].includes($.path))&&w(void 0)}}}),a.hook("page:finish",()=>{I(),a.payload.prerenderedAt&&A()}),a.hook("content:document-driven:finish",({route:l,page:_})=>{l.meta.studio_page_contentId=_==null?void 0:_._id}),a.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:y(E())},"*"),setTimeout(()=>{I()},100)});function I(){const l=Array.from(window.document.querySelectorAll("[data-content-id]")).map(L=>L.getAttribute("data-content-id")),_=Array.from(new Set([d.meta.studio_page_contentId,...l])).filter(Boolean);if(v.value===_[0]){v.value="";return}window.openContentInStudioEditor(_,{navigate:!0,pageContentId:d.meta.studio_page_contentId})}window.openContentInStudioEditor=(l,_={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...y(d),contentIds:l,..._}},"*")}}};export{Pe as useStudio};
