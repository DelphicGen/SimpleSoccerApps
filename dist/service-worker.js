if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,r,n)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return c;case"module":return s;default:return e(i)}})).then(e=>{const i=n(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./pages/home.html",revision:"a24c4723430816340978ac37b80c340b"},{url:"./pages/landing.html",revision:"8e6017539bcc079d343212f435a4af2a"},{url:"./pages/saved.html",revision:"a24c4723430816340978ac37b80c340b"},{url:"48b42753cbac11bc42809545fe9b3936.png",revision:"c228d2c512283bda77599bc109d6e984"},{url:"7f33d0c3c951e3c08a6c5d9864c58e7f.png",revision:"84fef03869751570a87aaa31182b4912"},{url:"bundle.js",revision:"39c26cee938e2ae3f3631ea20e17843f"},{url:"images/arrow.png",revision:"84fef03869751570a87aaa31182b4912"},{url:"images/icons/icon-128x128.png",revision:"e648a9356e270abb379868ca78c6665a"},{url:"images/icons/icon-144x144.png",revision:"02c5183de4f5282b5f49e6b1fcca43db"},{url:"images/icons/icon-152x152.png",revision:"54fe02bc5c691de38815ef7e0c6a1302"},{url:"images/icons/icon-192x192.png",revision:"ac109ddbfb963d0618be119dd49a3aba"},{url:"images/icons/icon-384x384.png",revision:"663b5fd00b80cc087736e1bb376bc9b3"},{url:"images/icons/icon-512x512.png",revision:"a7610f89a8830cd14318ba6b9a283aa3"},{url:"images/icons/icon-72x72.png",revision:"a84c84052d13c4f5afbcb255b63a6810"},{url:"images/icons/icon-96x96.png",revision:"2f32c5b45b56d7291c733c5c80e17c0d"},{url:"images/landing-page-1.png",revision:"c228d2c512283bda77599bc109d6e984"},{url:"index.html",revision:"f86370c2b9739f5ee96cfc05c03028d7"},{url:"league.html",revision:"4a51ed83f503fea9a510119bf8c54171"}],{})}));