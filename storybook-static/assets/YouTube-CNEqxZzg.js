import{g as U,r as I}from"./index-BP8_t0zE.js";import{u as L,p as M}from"./VideoPlayer-BmwcWQ5P.js";function Y(e,t){for(var a=0;a<t.length;a++){const s=t[a];if("string"!=typeof s&&!Array.isArray(s))for(const t in s)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(s,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>s[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var k=Object.create,u=Object.defineProperty,N=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,V=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty,x=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,K=(e,t)=>{for(var a in t)u(e,a,{get:t[a],enumerable:!0})},v=(e,t,a,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of j(t))!B.call(e,o)&&o!==a&&u(e,o,{get:()=>t[o],enumerable:!(s=N(t,o))||s.enumerable});return e},F=(e,t,a)=>(a=null!=e?k(V(e)):{},v(e&&e.__esModule?a:u(a,"default",{value:e,enumerable:!0}),e)),H=e=>v(u({},"__esModule",{value:!0}),e),s=(e,t,a)=>(x(e,"symbol"!=typeof t?t+"":t,a),a),w={};K(w,{default:()=>O});var S=H(w),m=F(I),p=L,D=M;const G="https://www.youtube.com/iframe_api",T="YT",z="onYouTubeIframeAPIReady",f=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,b=/user\/([a-zA-Z0-9_-]+)\/?/,Q=/youtube-nocookie\.com/,Z="https://www.youtube-nocookie.com";class O extends m.Component{constructor(){super(...arguments),s(this,"callPlayer",p.callPlayer),s(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(f.test(e)){const[,t]=e.match(f);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(b.test(e)){const[,t]=e.match(b);return{listType:"user_uploads",list:t}}return{}})),s(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:a,onPause:s,onBuffer:o,onBufferEnd:r,onEnded:l,onReady:n,loop:i,config:{playerVars:p,onUnstarted:y}}=this.props,{UNSTARTED:c,PLAYING:u,PAUSED:d,BUFFERING:h,ENDED:f,CUED:P}=window[T].PlayerState;if(t===c&&y(),t===u&&(a(),r()),t===d&&s(),t===h&&o(),t===f){const e=!!this.callPlayer("getPlaylist");i&&!e&&(p.start?this.seekTo(p.start):this.play()),l()}t===P&&n()})),s(this,"mute",(()=>{this.callPlayer("mute")})),s(this,"unmute",(()=>{this.callPlayer("unMute")})),s(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||f.test(e)?null:e.match(D.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:a,muted:s,playsinline:o,controls:r,loop:l,config:n,onError:i}=this.props,{playerVars:y,embedOptions:c}=n,u=this.getID(e);if(t)return f.test(e)||b.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:u,startSeconds:(0,p.parseStartTime)(e)||y.start,endSeconds:(0,p.parseEndTime)(e)||y.end});(0,p.getSDK)(G,T,z,(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:a?1:0,mute:s?1:0,controls:r?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...y},events:{onReady:()=>{l&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>i(e.data)},host:Q.test(e)?Z:void 0,...c}))}),i),c.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),!t&&!this.props.playing&&this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return m.default.createElement("div",{style:t},m.default.createElement("div",{ref:this.ref}))}}s(O,"displayName","YouTube"),s(O,"canPlay",D.canPlay.youtube);const $=U(S),W=Y({__proto__:null,default:$},[S]);export{W as Y};