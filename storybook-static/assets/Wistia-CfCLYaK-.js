import{g as m,r as g}from"./index-BP8_t0zE.js";import{u as v,p as w}from"./VideoPlayer-BmwcWQ5P.js";function O(e,t){for(var a=0;a<t.length;a++){const n=t[a];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(n,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var C=Object.create,i=Object.defineProperty,k=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,E=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,R=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,j=(e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})},h=(e,t,a,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of D(t))!S.call(e,l)&&l!==a&&i(e,l,{get:()=>t[l],enumerable:!(n=k(t,l))||n.enumerable});return e},I=(e,t,a)=>(a=null!=e?C(E(e)):{},h(e&&e.__esModule?a:i(a,"default",{value:e,enumerable:!0}),e)),M=e=>h(i({},"__esModule",{value:!0}),e),n=(e,t,a)=>(R(e,"symbol"!=typeof t?t+"":t,a),a),d={};j(d,{default:()=>l});var _=M(d),y=I(g),c=v,P=w;const W="https://fast.wistia.com/assets/external/E-v1.js",x="Wistia",A="wistia-player-";class l extends y.Component{constructor(){super(...arguments),n(this,"callPlayer",c.callPlayer),n(this,"playerID",this.props.config.playerId||`${A}${(0,c.randomString)()}`),n(this,"onPlay",((...e)=>this.props.onPlay(...e))),n(this,"onPause",((...e)=>this.props.onPause(...e))),n(this,"onSeek",((...e)=>this.props.onSeek(...e))),n(this,"onEnded",((...e)=>this.props.onEnded(...e))),n(this,"onPlaybackRateChange",((...e)=>this.props.onPlaybackRateChange(...e))),n(this,"mute",(()=>{this.callPlayer("mute")})),n(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,muted:a,controls:n,onReady:l,config:o,onError:s}=this.props;(0,c.getSDK)(W,x).then((e=>{o.customControls&&o.customControls.forEach((t=>e.defineControl(t))),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:t,silentAutoPlay:"allow",muted:a,controlsVisibleOnLoad:n,fullscreenButton:n,playbar:n,playbackRateControl:n,qualityControl:n,volumeControl:n,settingsControl:n,smallPlayButton:n,...o.options},onReady:e=>{this.player=e,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),l()}})}),s)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,t=!0){this.callPlayer("time",e),t||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:e}=this.props,t=e&&e.match(P.MATCH_URL_WISTIA)[1],a=`wistia_embed wistia_async_${t}`;return y.default.createElement("div",{id:this.playerID,key:t,className:a,style:{width:"100%",height:"100%"}})}}n(l,"displayName","Wistia"),n(l,"canPlay",P.canPlay.wistia),n(l,"loopOnEnded",!0);const L=m(_),$=O({__proto__:null,default:L},[_]);export{$ as W};