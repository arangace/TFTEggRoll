if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(s.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-3d3a1931"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8bhkwUJiMWLFDGv4aObmJ/_buildManifest.js",revision:"29383971c02b2e16f7ac061fc0862efc"},{url:"/_next/static/8bhkwUJiMWLFDGv4aObmJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/17-4abdf50ed3054fa0.js",revision:"4abdf50ed3054fa0"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-c7e3a5376fc0a4eb.js",revision:"c7e3a5376fc0a4eb"},{url:"/_next/static/chunks/pages/_app-1af4d56507221d7f.js",revision:"1af4d56507221d7f"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-27b52aca00b25d33.js",revision:"27b52aca00b25d33"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/0b53873c228e1747.css",revision:"0b53873c228e1747"},{url:"/_next/static/css/6db2d3ee0a3d4704.css",revision:"6db2d3ee0a3d4704"},{url:"/_next/static/media/fa-brands-400.5f7c5bb7.ttf",revision:"5f7c5bb7"},{url:"/_next/static/media/fa-brands-400.9210030c.woff2",revision:"9210030c"},{url:"/_next/static/media/fa-regular-400.02ad4ff9.woff2",revision:"02ad4ff9"},{url:"/_next/static/media/fa-regular-400.570a165b.ttf",revision:"570a165b"},{url:"/_next/static/media/fa-solid-900.0b5caff7.ttf",revision:"0b5caff7"},{url:"/_next/static/media/fa-solid-900.3eae9857.woff2",revision:"3eae9857"},{url:"/_next/static/media/fa-v4compatibility.6209cf01.woff2",revision:"6209cf01"},{url:"/_next/static/media/fa-v4compatibility.92dce52f.ttf",revision:"92dce52f"},{url:"/icon-192x192.png",revision:"4e787bae59128610905f0f9871221638"},{url:"/icon-256x256.png",revision:"690cc091b0df87f97b5195453431220b"},{url:"/icon-384x384.png",revision:"f596efc27a094a0ba8b9f87bcbd4c190"},{url:"/icon-512x512.png",revision:"e406b16763b845f118d7fdbfdeebdb97"},{url:"/images/bunbun-egg.webp",revision:"1db0e1bd79d08ba9dd5b008d3266ecc4"},{url:"/images/bungo-egg.webp",revision:"3fd397ce49bb29c3f171110f8f1e8395"},{url:"/images/burno-poggles-egg.webp",revision:"3ae4e3556624bcc910753960b035ab59"},{url:"/images/cosmic-companions-egg.webp",revision:"afb9a0e743cbe2a591c226b082c734b7"},{url:"/images/dango-rango-egg.webp",revision:"6ad0d0be7e46aa24adf351594501f385"},{url:"/images/fearless-fellowship-egg.webp",revision:"aa69b736f573d25586a21828afb1f266"},{url:"/images/friends-from-afar-egg.webp",revision:"021d3017236f6e36ba98ff967913bb3f"},{url:"/images/heroic-hatchlings-egg.webp",revision:"16c5f73b2167bb0374758d04a34d1d51"},{url:"/images/immortal-creatures-egg.webp",revision:"b0a21793437951e256ca25ccb57610cf"},{url:"/images/ingenious-inventors-egg.webp",revision:"299e1e6e920243a7e0350c11ed34c3a4"},{url:"/images/inktales-egg.webp",revision:"763b4696110b1a925d4d9f5e612ab243"},{url:"/images/kda-egg.webp",revision:"48c7436a8f29f691dd51f2040a547896"},{url:"/images/logo-dark.png",revision:"0582a02681c605d627166d796c672825"},{url:"/images/logo-light.png",revision:"11578ad96f35ef7305109e1bbd91db0e"},{url:"/images/magical-misfits-egg.webp",revision:"a92f58e59f4ff68c227eb574991cb3c3"},{url:"/images/neon-nights-fenroar-egg.webp",revision:"23598f4e327fef24f3ba304c835c8fac"},{url:"/images/neon-nights-lightcharger-egg.webp",revision:"66d54d6f79333eb8408778b3f01653f6"},{url:"/images/neon-nights-qiqi-egg.webp",revision:"913df48afa8ed19f9ea7b532b2c8d635"},{url:"/images/noctero-egg.webp",revision:"0f51f5c4f1bef3d33bb476f00621ad17"},{url:"/images/pool-party-choncc-egg.webp",revision:"29ff042ec8e7d751c02d719048c29536"},{url:"/images/prancie-egg.webp",revision:"134632b91986aecb8fcf02b392e72c54"},{url:"/images/project-zed.webp",revision:"ec5f1acd4ad3295d792e7d96a26c301d"},{url:"/images/rarity-icons/epic-icon.png",revision:"f27687767c9c542dba5a3bfad5568a44"},{url:"/images/rarity-icons/legendary-icon.png",revision:"45b3f5209f14cd81e9dcde1e2f66fa29"},{url:"/images/rarity-icons/rare-icon.png",revision:"4f423f155f85a4ab230f0fe40ef4c1f2"},{url:"/images/rarity-icons/ultimate-icon.png",revision:"553158e143f81187528675e45f1b8fd9"},{url:"/images/scuttle-egg.webp",revision:"12c1cb0df69505e37a1624ee5e484fac"},{url:"/images/series-3-egg.webp",revision:"932ce77fec0687477f901da302860c20"},{url:"/images/shork-egg.webp",revision:"e37197640cf2cf871686be4b837d7c88"},{url:"/images/spirit-blossom-egg.webp",revision:"b99974a7bf307bb0437f16f2fb688433"},{url:"/images/star-guardian-egg.webp",revision:"d4d3eca4110187990282e21b89c062d3"},{url:"/images/starguardian-furyhorn-egg.webp",revision:"00ebbf66fb61f3948e704642f5213ee8"},{url:"/images/starguardian-hushtail-egg.webp",revision:"7ff71fa1716063d62f351a8a9f910f56"},{url:"/images/tft-egg-refined.png",revision:"3f04168940bdcaadc985c9bdb7d73da7"},{url:"/images/tft-egg.webp",revision:"fafb176a56c038657ac7f679571ffa95"},{url:"/images/true-damage-egg.webp",revision:"59da91acb8a5ba90cc9c0c2f59cbd8bd"},{url:"/images/whisker-egg.webp",revision:"7a057a00c9f051eef1fdd893be4893d0"},{url:"/images/zed-cache.png",revision:"293de4b0dff3dcb15492d994114fa3ce"},{url:"/manifest.json",revision:"b71bf0c4496353afa25ca06c6e57a82c"},{url:"/sw.js",revision:"8336e8801af5a0b9b243e729e4359e59"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/,new e.CacheFirst({cacheName:"images-assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources-cache",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3})]}),"GET")}));
