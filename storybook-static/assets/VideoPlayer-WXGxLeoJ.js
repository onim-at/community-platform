const __vite__mapDeps=(e,t=__vite__mapDeps,r=t.f||(t.f=["./YouTube-acS5fWH3.js","./index-BP8_t0zE.js","./SoundCloud-CSvq2m7W.js","./Vimeo-CPbmipVN.js","./Mux-CPDGTKWz.js","./iframe-r7WNADpq.js","./Facebook-Ds0F10Vh.js","./Streamable-BcZmQ5PP.js","./Wistia-DlRmtPgl.js","./Twitch-CR4k3_q4.js","./DailyMotion-C_5CvA6u.js","./Mixcloud-nKxI67K4.js","./Vidyard-B4DaXEKO.js","./Kaltura-CT3V2OOS.js","./FilePlayer-vg6zXyA3.js","./Preview-DMnd0tgi.js"]))=>e.map((e=>r[e]));import{j as G}from"./jsx-runtime-CexXSJP5.js";import{r as W,b as He,c as x,g as ze}from"./index-BP8_t0zE.js";import{_ as P}from"./iframe-r7WNADpq.js";import{c as se}from"./cjs-Clfm10Kj.js";import{p as Be}from"./index-Snk9MO9S.js";import{a as Fe}from"./theme-ui-components.esm-DCiJ1mMX.js";var Ke=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async=!("async"in t)||!!t.async,o.src=e,t.attrs&&We(o,t.attrs),t.text&&(o.text=""+t.text),("onload"in o?ee:Xe)(o,r),o.onload||ee(o,r),a.appendChild(o)};function We(e,t){for(var r in t)e.setAttribute(r,t[r])}function ee(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Xe(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}var Ye=Object.create,$=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Je=Object.getOwnPropertyNames,Ze=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty,Ge=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},le=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of Je(t))!Qe.call(e,o)&&o!==r&&$(e,o,{get:()=>t[o],enumerable:!(a=qe(t,o))||a.enumerable});return e},X=(e,t,r)=>(r=null!=e?Ye(Ze(e)):{},le(e&&e.__esModule?r:$(r,"default",{value:e,enumerable:!0}),e)),et=e=>le($({},"__esModule",{value:!0}),e),ue={};Ge(ue,{callPlayer:()=>ht,getConfig:()=>yt,getSDK:()=>dt,isBlobUrl:()=>Pt,isMediaStream:()=>mt,lazy:()=>ot,omit:()=>_t,parseEndTime:()=>pt,parseStartTime:()=>ut,queryString:()=>ft,randomString:()=>ct,supportsWebKitPresentationMode:()=>vt});var D=et(ue),tt=X(W),rt=X(Ke),at=X(se);const ot=e=>tt.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),nt=/[?&#](?:start|t)=([0-9hms]+)/,it=/[?&#]end=([0-9hms]+)/,z=/(\d+)(h|m|s)/g,st=/^\d+$/;function pe(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(z))return lt(e);if(st.test(e))return parseInt(e)}}function lt(e){let t=0,r=z.exec(e);for(;null!==r;){const[,a,o]=r;"h"===o&&(t+=60*parseInt(a,10)*60),"m"===o&&(t+=60*parseInt(a,10)),"s"===o&&(t+=parseInt(a,10)),r=z.exec(e)}return t}function ut(e){return pe(e,nt)}function pt(e){return pe(e,it)}function ct(){return Math.random().toString(36).substr(2,5)}function ft(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function j(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const w={},dt=function(e,t,r=null,a=()=>!0,o=rt.default){const n=j(t);return n&&a(n)?Promise.resolve(n):new Promise(((a,n)=>{if(w[e])return void w[e].push({resolve:a,reject:n});w[e]=[{resolve:a,reject:n}];const i=t=>{w[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(j(t))}}o(e,(a=>{a?(w[e].forEach((e=>e.reject(a))),w[e]=null):r||i(j(t))}))}))};function yt(e,t){return(0,at.default)(t.config,e.config)}function _t(e,...t){const r=[].concat(...t),a={},o=Object.keys(e);for(const n of o)-1===r.indexOf(n)&&(a[n]=e[n]);return a}function ht(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function mt(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Pt(e){return/^blob:/.test(e)}function vt(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}var Y=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyNames,wt=Object.prototype.hasOwnProperty,bt=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},Tt=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of Ot(t))!wt.call(e,o)&&o!==r&&Y(e,o,{get:()=>t[o],enumerable:!(a=gt(t,o))||a.enumerable});return e},Et=e=>Tt(Y({},"__esModule",{value:!0}),e),ce={};bt(ce,{AUDIO_EXTENSIONS:()=>q,DASH_EXTENSIONS:()=>Ee,FLV_EXTENSIONS:()=>Se,HLS_EXTENSIONS:()=>Z,MATCH_URL_DAILYMOTION:()=>Oe,MATCH_URL_FACEBOOK:()=>_e,MATCH_URL_FACEBOOK_WATCH:()=>he,MATCH_URL_KALTURA:()=>Te,MATCH_URL_MIXCLOUD:()=>we,MATCH_URL_MUX:()=>ye,MATCH_URL_SOUNDCLOUD:()=>fe,MATCH_URL_STREAMABLE:()=>me,MATCH_URL_TWITCH_CHANNEL:()=>ge,MATCH_URL_TWITCH_VIDEO:()=>ve,MATCH_URL_VIDYARD:()=>be,MATCH_URL_VIMEO:()=>de,MATCH_URL_WISTIA:()=>Pe,MATCH_URL_YOUTUBE:()=>B,VIDEO_EXTENSIONS:()=>J,canPlay:()=>At});var St=Et(ce),te=D;const B=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,fe=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,de=/vimeo\.com\/(?!progressive_redirect).+/,ye=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,_e=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,he=/^https?:\/\/fb\.watch\/.+$/,me=/streamable\.com\/([a-z0-9]+)$/,Pe=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,ve=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,ge=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Oe=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,we=/mixcloud\.com\/([^/]+\/[^/]+)/,be=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Te=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,q=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,J=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Z=/\.(m3u8)($|\?)/i,Ee=/\.(mpd)($|\?)/i,Se=/\.(flv)($|\?)/i,F=e=>{if(e instanceof Array){for(const t of e)if("string"==typeof t&&F(t)||F(t.src))return!0;return!1}return!(!(0,te.isMediaStream)(e)&&!(0,te.isBlobUrl)(e))||(q.test(e)||J.test(e)||Z.test(e)||Ee.test(e)||Se.test(e))},At={youtube:e=>e instanceof Array?e.every((e=>B.test(e))):B.test(e),soundcloud:e=>fe.test(e)&&!q.test(e),vimeo:e=>de.test(e)&&!J.test(e)&&!Z.test(e),mux:e=>ye.test(e),facebook:e=>_e.test(e)||he.test(e),streamable:e=>me.test(e),wistia:e=>Pe.test(e),twitch:e=>ve.test(e)||ge.test(e),dailymotion:e=>Oe.test(e),mixcloud:e=>we.test(e),vidyard:e=>be.test(e),kaltura:e=>Te.test(e),file:F};var Q=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Ct=Object.getOwnPropertyNames,It=Object.prototype.hasOwnProperty,Mt=(e,t)=>{for(var r in t)Q(e,r,{get:t[r],enumerable:!0})},Lt=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of Ct(t))!It.call(e,o)&&o!==r&&Q(e,o,{get:()=>t[o],enumerable:!(a=Rt(t,o))||a.enumerable});return e},$t=e=>Lt(Q({},"__esModule",{value:!0}),e),Ae={};Mt(Ae,{default:()=>kt});var Dt=$t(Ae),m=D,d=St,kt=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./YouTube-acS5fWH3.js").then((e=>e.Y))),__vite__mapDeps([0,1]),import.meta.url)))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./SoundCloud-CSvq2m7W.js").then((e=>e.S))),__vite__mapDeps([2,1]),import.meta.url)))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Vimeo-CPbmipVN.js").then((e=>e.V))),__vite__mapDeps([3,1]),import.meta.url)))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Mux-CPDGTKWz.js").then((e=>e.M))),__vite__mapDeps([4,5,1]),import.meta.url)))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Facebook-Ds0F10Vh.js").then((e=>e.F))),__vite__mapDeps([6,1]),import.meta.url)))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Streamable-BcZmQ5PP.js").then((e=>e.S))),__vite__mapDeps([7,1]),import.meta.url)))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Wistia-DlRmtPgl.js").then((e=>e.W))),__vite__mapDeps([8,1]),import.meta.url)))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Twitch-CR4k3_q4.js").then((e=>e.T))),__vite__mapDeps([9,1]),import.meta.url)))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./DailyMotion-C_5CvA6u.js").then((e=>e.D))),__vite__mapDeps([10,1]),import.meta.url)))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Mixcloud-nKxI67K4.js").then((e=>e.M))),__vite__mapDeps([11,1]),import.meta.url)))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Vidyard-B4DaXEKO.js").then((e=>e.V))),__vite__mapDeps([12,1]),import.meta.url)))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,m.lazy)((()=>P((()=>import("./Kaltura-CT3V2OOS.js").then((e=>e.K))),__vite__mapDeps([13,1]),import.meta.url)))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,m.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,m.lazy)((()=>P((()=>import("./FilePlayer-vg6zXyA3.js").then((e=>e.F))),__vite__mapDeps([14,1]),import.meta.url)))}],re=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Ut(e,t){return!!(e===t||re(e)&&re(t))}function Nt(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Ut(e[r],t[r]))return!1;return!0}function xt(e,t){void 0===t&&(t=Nt);var r,a,o=[],n=!1;return function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return n&&r===this&&t(i,o)||(a=e.apply(this,i),n=!0,r=this,o=i),a}}const jt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"})),Vt=He(jt);var Ht=typeof Element<"u",zt="function"==typeof Map,Bt="function"==typeof Set,Ft="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function L(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,a,o,n;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(a=r;0!=a--;)if(!L(e[a],t[a]))return!1;return!0}if(zt&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(n=e.entries();!(a=n.next()).done;)if(!t.has(a.value[0]))return!1;for(n=e.entries();!(a=n.next()).done;)if(!L(a.value[1],t.get(a.value[0])))return!1;return!0}if(Bt&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(n=e.entries();!(a=n.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Ft&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(a=r;0!=a--;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof t.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(t,o[a]))return!1;if(Ht&&e instanceof Element)return!1;for(a=r;0!=a--;)if(("_owner"!==o[a]&&"__v"!==o[a]&&"__o"!==o[a]||!e.$$typeof)&&!L(e[o[a]],t[o[a]]))return!1;return!0}return e!=e&&t!=t}var Re=function(e,t){try{return L(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},Kt=Object.create,k=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyNames,Yt=Object.getPrototypeOf,qt=Object.prototype.hasOwnProperty,Jt=(e,t)=>{for(var r in t)k(e,r,{get:t[r],enumerable:!0})},Ce=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of Xt(t))!qt.call(e,o)&&o!==r&&k(e,o,{get:()=>t[o],enumerable:!(a=Wt(t,o))||a.enumerable});return e},Zt=(e,t,r)=>(r=null!=e?Kt(Yt(e)):{},Ce(e&&e.__esModule?r:k(r,"default",{value:e,enumerable:!0}),e)),Qt=e=>Ce(k({},"__esModule",{value:!0}),e),Ie={};Jt(Ie,{defaultProps:()=>tr,propTypes:()=>er});var Me=Qt(Ie),Gt=Zt(Be);const{string:u,bool:y,number:b,array:V,oneOfType:S,shape:v,object:c,func:l,node:ae}=Gt.default,er={url:S([u,V,c]),playing:y,loop:y,controls:y,volume:b,muted:y,playbackRate:b,width:S([u,b]),height:S([u,b]),style:c,progressInterval:b,playsinline:y,pip:y,stopOnUnmount:y,light:S([y,u,c]),playIcon:ae,previewTabIndex:b,previewAriaLabel:u,fallback:ae,oEmbedUrl:u,wrapper:S([u,l,v({render:l.isRequired})]),config:v({soundcloud:v({options:c}),youtube:v({playerVars:c,embedOptions:c,onUnstarted:l}),facebook:v({appId:u,version:u,playerId:u,attributes:c}),dailymotion:v({params:c}),vimeo:v({playerOptions:c,title:u}),mux:v({attributes:c,version:u}),file:v({attributes:c,tracks:V,forceVideo:y,forceAudio:y,forceHLS:y,forceSafariHLS:y,forceDisableHls:y,forceDASH:y,forceFLV:y,hlsOptions:c,hlsVersion:u,dashVersion:u,flvVersion:u}),wistia:v({options:c,playerId:u,customControls:V}),mixcloud:v({options:c}),twitch:v({options:c,playerId:u}),vidyard:v({options:c})}),onReady:l,onStart:l,onPlay:l,onPause:l,onBuffer:l,onBufferEnd:l,onEnded:l,onError:l,onDuration:l,onSeek:l,onPlaybackRateChange:l,onPlaybackQualityChange:l,onProgress:l,onClickPreview:l,onEnablePIP:l,onDisablePIP:l},p=()=>{},tr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:p},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onPlaybackQualityChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p};var rr=Object.create,C=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,or=Object.getOwnPropertyNames,nr=Object.getPrototypeOf,ir=Object.prototype.hasOwnProperty,sr=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lr=(e,t)=>{for(var r in t)C(e,r,{get:t[r],enumerable:!0})},Le=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of or(t))!ir.call(e,o)&&o!==r&&C(e,o,{get:()=>t[o],enumerable:!(a=ar(t,o))||a.enumerable});return e},$e=(e,t,r)=>(r=null!=e?rr(nr(e)):{},Le(e&&e.__esModule?r:C(r,"default",{value:e,enumerable:!0}),e)),ur=e=>Le(C({},"__esModule",{value:!0}),e),s=(e,t,r)=>(sr(e,"symbol"!=typeof t?t+"":t,r),r),De={};lr(De,{default:()=>U});var pr=ur(De),oe=$e(W),cr=$e(Re),ke=Me,fr=D;const dr=5e3;class U extends oe.Component{constructor(){super(...arguments),s(this,"mounted",!1),s(this,"isReady",!1),s(this,"isPlaying",!1),s(this,"isLoading",!0),s(this,"loadOnReady",null),s(this,"startOnPlay",!0),s(this,"seekOnPlay",null),s(this,"onDurationCalled",!1),s(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),s(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),s(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const a={playedSeconds:e,played:e/r};null!==t&&(a.loadedSeconds=t,a.loaded=t/r),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),s(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:a}=this.props;e(),!a&&null!==r&&this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),s(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),s(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),s(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),s(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),s(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),s(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:a,muted:o,playbackRate:n,pip:i,loop:s,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,cr.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,fr.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}!e.playing&&r&&!this.isPlaying&&this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((()=>this.player.setVolume(a))))),e.playbackRate!==n&&this.player.setPlaybackRate&&this.player.setPlaybackRate(n),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(this.isReady){if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}else 0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),dr))}render(){const e=this.props.activePlayer;return e?oe.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}s(U,"displayName","Player"),s(U,"propTypes",ke.propTypes),s(U,"defaultProps",ke.defaultProps);var yr=Object.create,I=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyNames,mr=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty,vr=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,gr=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})},Ue=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of hr(t))!Pr.call(e,o)&&o!==r&&I(e,o,{get:()=>t[o],enumerable:!(a=_r(t,o))||a.enumerable});return e},M=(e,t,r)=>(r=null!=e?yr(mr(e)):{},Ue(e&&e.__esModule?r:I(r,"default",{value:e,enumerable:!0}),e)),Or=e=>Ue(I({},"__esModule",{value:!0}),e),i=(e,t,r)=>(vr(e,"symbol"!=typeof t?t+"":t,r),r),Ne={};gr(Ne,{createReactPlayer:()=>Ir});var wr=Or(Ne),T=M(W),br=M(se),H=M(Vt),ne=M(Re),R=Me,xe=D,Tr=M(pr);const Er=(0,xe.lazy)((()=>P((()=>import("./Preview-DMnd0tgi.js").then((e=>e.P))),__vite__mapDeps([15,1]),import.meta.url))),Sr=typeof window<"u"&&window.document&&typeof document<"u",Ar=typeof x<"u"&&x.window&&x.window.document,Rr=Object.keys(R.propTypes),Cr=Sr||Ar?T.Suspense:()=>null,A=[],Ir=(e,t)=>{var r;return r=class extends T.Component{constructor(){super(...arguments),i(this,"state",{showPreview:!!this.props.light}),i(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),i(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),i(this,"showPreview",(()=>{this.setState({showPreview:!0})})),i(this,"getDuration",(()=>this.player?this.player.getDuration():null)),i(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),i(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),i(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),i(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),i(this,"handleReady",(()=>{this.props.onReady(this)})),i(this,"getActivePlayer",(0,H.default)((r=>{for(const t of[...A,...e])if(t.canPlay(r))return t;return t||null}))),i(this,"getConfig",(0,H.default)(((e,t)=>{const{config:r}=this.props;return br.default.all([R.defaultProps.config,R.defaultProps.config[t]||{},r,r[t]||{}])}))),i(this,"getAttributes",(0,H.default)((e=>(0,xe.omit)(this.props,Rr)))),i(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return T.default.createElement(Tr.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,ne.default)(this.props,e)||!(0,ne.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:a,oEmbedUrl:o,previewAriaLabel:n}=this.props;return T.default.createElement(Er,{url:e,light:t,playIcon:r,previewTabIndex:a,previewAriaLabel:n,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:a,fallback:o,wrapper:n}=this.props,{showPreview:i}=this.state,s=this.getAttributes(e),l="string"==typeof n?this.references.wrapper:void 0;return T.default.createElement(n,{ref:l,style:{...t,width:r,height:a},...s},T.default.createElement(Cr,{fallback:o},i?this.renderPreview(e):this.renderActivePlayer(e)))}},i(r,"displayName","ReactPlayer"),i(r,"propTypes",R.propTypes),i(r,"defaultProps",R.defaultProps),i(r,"addCustomPlayer",(e=>{A.push(e)})),i(r,"removeCustomPlayers",(()=>{A.length=0})),i(r,"canPlay",(t=>{for(const r of[...A,...e])if(r.canPlay(t))return!0;return!1})),i(r,"canEnablePIP",(t=>{for(const r of[...A,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r};var Mr=Object.create,N=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,$r=Object.getOwnPropertyNames,Dr=Object.getPrototypeOf,kr=Object.prototype.hasOwnProperty,Ur=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},je=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of $r(t))!kr.call(e,o)&&o!==r&&N(e,o,{get:()=>t[o],enumerable:!(a=Lr(t,o))||a.enumerable});return e},Nr=(e,t,r)=>(r=null!=e?Mr(Dr(e)):{},je(e&&e.__esModule?r:N(r,"default",{value:e,enumerable:!0}),e)),xr=e=>je(N({},"__esModule",{value:!0}),e),Ve={};Ur(Ve,{default:()=>zr});var jr=xr(Ve),K=Nr(Dt),Vr=wr;const Hr=K.default[K.default.length-1];var zr=(0,Vr.createReactPlayer)(K.default,Hr);const Br=ze(jr),ie=({videoUrl:e})=>G.jsx(Fe,{"data-testid":"VideoPlayer",children:G.jsx(Br,{width:"auto",controls:!0,url:e})});try{ie.displayName="VideoPlayer",ie.__docgenInfo={description:"",displayName:"VideoPlayer",props:{videoUrl:{defaultValue:null,description:"",name:"videoUrl",required:!0,type:{name:"string"}}}}}catch{}export{ie as V,St as p,D as u};