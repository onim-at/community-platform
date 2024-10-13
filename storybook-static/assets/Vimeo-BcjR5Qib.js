import{g as d,r as f}from"./index-BP8_t0zE.js";import{u as m,p as _}from"./VideoPlayer-BmwcWQ5P.js";function P(e,t){for(var r=0;r<t.length;r++){const s=t[r];if("string"!=typeof s&&!Array.isArray(s))for(const t in s)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(s,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>s[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var g=Object.create,n=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,O=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,w=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of v(t))!D.call(e,o)&&o!==r&&n(e,o,{get:()=>t[o],enumerable:!(s=b(t,o))||s.enumerable});return e},j=(e,t,r)=>(r=null!=e?g(O(e)):{},h(e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)),E=e=>h(n({},"__esModule",{value:!0}),e),i=(e,t,r)=>(w(e,"symbol"!=typeof t?t+"":t,r),r),c={};M(c,{default:()=>l});var y=E(c),p=j(f),u=m,L=_;const S="https://player.vimeo.com/api/player.js",V="Vimeo",k=e=>e.replace("/manage/videos","");class l extends p.Component{constructor(){super(...arguments),i(this,"callPlayer",u.callPlayer),i(this,"duration",null),i(this,"currentTime",null),i(this,"secondsLoaded",null),i(this,"mute",(()=>{this.setMuted(!0)})),i(this,"unmute",(()=>{this.setMuted(!1)})),i(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,u.getSDK)(S,V).then((t=>{if(!this.container)return;const{playerOptions:r,title:s}=this.props.config;this.player=new t.Player(this.container,{url:k(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...r}),this.player.ready().then((()=>{const e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",s&&(e.title=s)})).catch(this.props.onError),this.player.on("loaded",(()=>{this.props.onReady(),this.refreshDuration()})),this.player.on("play",(()=>{this.props.onPlay(),this.refreshDuration()})),this.player.on("pause",this.props.onPause),this.player.on("seeked",(e=>this.props.onSeek(e.seconds))),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(({seconds:e})=>{this.currentTime=e})),this.player.on("progress",(({seconds:e})=>{this.secondsLoaded=e})),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",(e=>this.props.onPlaybackRateChange(e.playbackRate)))}),this.props.onError)}refreshDuration(){this.player.getDuration().then((e=>{this.duration=e}))}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,t={width:"100%",height:"100%",overflow:"hidden",display:e};return p.default.createElement("div",{key:this.props.url,ref:this.ref,style:t})}}i(l,"displayName","Vimeo"),i(l,"canPlay",L.canPlay.vimeo),i(l,"forceLoad",!0);const T=d(y),N=P({__proto__:null,default:T},[y]);export{N as V};