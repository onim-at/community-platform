import{j as m}from"./jsx-runtime-CexXSJP5.js";import{r as D,a as p}from"./index-BP8_t0zE.js";import{B as j}from"./Button-DeEOnrl-.js";import{L as T}from"./Loader-DmqUoSY8.js";import{a as X,T as L,F as $}from"./theme-ui-components.esm-DCiJ1mMX.js";const S={x:0,y:0,width:0,height:0,unit:"px"},_=(e,t,n)=>Math.min(Math.max(e,t),n),F=(...e)=>e.filter((e=>e&&"string"==typeof e)).join(" "),A=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function z(e,t,n,i){const r=v(e,n,i);return e.width&&(r.height=r.width/t),e.height&&(r.width=r.height*t),r.y+r.height>i&&(r.height=i-r.y,r.width=r.height*t),r.x+r.width>n&&(r.width=n-r.x,r.height=r.width/t),"%"===e.unit?E(r,n,i):r}function W(e,t,n){const i=v(e,t,n);return i.x=(t-i.width)/2,i.y=(n-i.height)/2,"%"===e.unit?E(i,t,n):i}function E(e,t,n){return"%"===e.unit?{...S,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function v(e,t,n){return e.unit?"px"===e.unit?{...S,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}:{...S,...e,unit:"px"}}function K(e,t,n,i,r,o=0,a=0,h=i,s=r){const d={...e};let c=Math.min(o,i),l=Math.min(a,r),p=Math.min(h,i),g=Math.min(s,r);t&&(t>1?(c=a?a*t:c,l=c/t,p=h*t):(l=o?o/t:l,c=l*t,g=s/t)),d.y<0&&(d.height=Math.max(d.height+d.y,l),d.y=0),d.x<0&&(d.width=Math.max(d.width+d.x,c),d.x=0);const w=i-(d.x+d.width);w<0&&(d.x=Math.min(d.x,i-c),d.width+=w);const u=r-(d.y+d.height);if(u<0&&(d.y=Math.min(d.y,r-l),d.height+=u),d.width<c&&(("sw"===n||"nw"==n)&&(d.x-=c-d.width),d.width=c),d.height<l&&(("nw"===n||"ne"==n)&&(d.y-=l-d.height),d.height=l),d.width>p&&(("sw"===n||"nw"==n)&&(d.x-=p-d.width),d.width=p),d.height>g&&(("nw"===n||"ne"==n)&&(d.y-=g-d.height),d.height=g),t){const e=d.width/d.height;if(e<t){const e=Math.max(d.width/t,l);("nw"===n||"ne"==n)&&(d.y-=e-d.height),d.height=e}else if(e>t){const e=Math.max(d.height*t,c);("sw"===n||"nw"==n)&&(d.x-=e-d.width),d.width=e}}return d}function q(e,t,n,i){const r={...e};return"ArrowLeft"===t?"nw"===i?(r.x-=n,r.y-=n,r.width+=n,r.height+=n):"w"===i?(r.x-=n,r.width+=n):"sw"===i?(r.x-=n,r.width+=n,r.height+=n):"ne"===i?(r.y+=n,r.width-=n,r.height-=n):"e"===i?r.width-=n:"se"===i&&(r.width-=n,r.height-=n):"ArrowRight"===t&&("nw"===i?(r.x+=n,r.y+=n,r.width-=n,r.height-=n):"w"===i?(r.x+=n,r.width-=n):"sw"===i?(r.x+=n,r.width-=n,r.height-=n):"ne"===i?(r.y-=n,r.width+=n,r.height+=n):"e"===i?r.width+=n:"se"===i&&(r.width+=n,r.height+=n)),"ArrowUp"===t?"nw"===i?(r.x-=n,r.y-=n,r.width+=n,r.height+=n):"n"===i?(r.y-=n,r.height+=n):"ne"===i?(r.y-=n,r.width+=n,r.height+=n):"sw"===i?(r.x+=n,r.width-=n,r.height-=n):"s"===i?r.height-=n:"se"===i&&(r.width-=n,r.height-=n):"ArrowDown"===t&&("nw"===i?(r.x+=n,r.y+=n,r.width-=n,r.height-=n):"n"===i?(r.y+=n,r.height-=n):"ne"===i?(r.y+=n,r.width-=n,r.height-=n):"sw"===i?(r.x-=n,r.width+=n,r.height+=n):"s"===i?r.height+=n:"se"===i&&(r.width+=n,r.height+=n)),r}const k={capture:!0,passive:!1};let V=0;const M=class e extends D.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=D.createRef(),this.mediaRef=D.createRef(),this.initChangeCalled=!1,this.instanceId="rc-"+V++,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{const{crop:t,disabled:n}=this.props,i=this.getBox();if(!t)return;const r=v(t,i.width,i.height);if(n)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const o=e.target.dataset.ord,a=!!o;let h=e.clientX,s=e.clientY,d=r.x,c=r.y;if(o){const t=e.clientX-i.x,n=e.clientY-i.y;let a=0,l=0;"ne"===o||"e"==o?(a=t-(r.x+r.width),l=n-r.y,d=r.x,c=r.y+r.height):"se"===o||"s"===o?(a=t-(r.x+r.width),l=n-(r.y+r.height),d=r.x,c=r.y):"sw"===o||"w"==o?(a=t-r.x,l=n-(r.y+r.height),d=r.x+r.width,c=r.y):("nw"===o||"n"==o)&&(a=t-r.x,l=n-r.y,d=r.x+r.width,c=r.y+r.height),h=d+i.x+a,s=c+i.y+l}this.evData={startClientX:h,startClientY:s,startCropX:d,startCropY:c,clientX:e.clientX,clientY:e.clientY,isResize:a,ord:o},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{const{crop:t,disabled:n,locked:i,keepSelection:r,onChange:o}=this.props,a=this.getBox();if(n||i||r&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const h=e.clientX-a.x,s=e.clientY-a.y,d={unit:"px",x:h,y:s,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:h,startCropY:s,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,o(v(d,a.width,a.height),E(d,a.width,a.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{const{crop:t,disabled:n,onChange:i,onDragStart:r}=this.props,o=this.getBox();if(n||!t||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,r&&r(e));const{evData:a}=this;let h;a.clientX=e.clientX,a.clientY=e.clientY,h=a.isResize?this.resizeCrop():this.dragCrop(),A(t,h)||i(v(h,o.width,o.height),E(h,o.width,o.height))},this.onComponentKeyDown=t=>{const{crop:n,disabled:i,onChange:r,onComplete:o}=this.props;if(i)return;const a=t.key;let h=!1;if(!n)return;const s=this.getBox(),d=this.makePixelCrop(s),c=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep;if("ArrowLeft"===a?(d.x-=c,h=!0):"ArrowRight"===a?(d.x+=c,h=!0):"ArrowUp"===a?(d.y-=c,h=!0):"ArrowDown"===a&&(d.y+=c,h=!0),h){t.cancelable&&t.preventDefault(),d.x=_(d.x,0,s.width-d.width),d.y=_(d.y,0,s.height-d.height);const e=v(d,s.width,s.height),n=E(d,s.width,s.height);r(e,n),o&&o(e,n)}},this.onHandlerKeyDown=(t,n)=>{const{aspect:i=0,crop:r,disabled:o,minWidth:a=0,minHeight:h=0,maxWidth:s,maxHeight:d,onChange:c,onComplete:l}=this.props,p=this.getBox();if(o||!r)return;if("ArrowUp"!==t.key&&"ArrowDown"!==t.key&&"ArrowLeft"!==t.key&&"ArrowRight"!==t.key)return;t.stopPropagation(),t.preventDefault();const g=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep,w=K(q(v(r,p.width,p.height),t.key,g,n),i,n,p.width,p.height,a,h,s,d);if(!A(r,w)){const e=E(w,p.width,p.height);c(w,e),l&&l(w,e)}},this.onDocPointerDone=e=>{const{crop:t,disabled:n,onComplete:i,onDragEnd:r}=this.props,o=this.getBox();this.unbindDocMove(),!n&&t&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,r&&r(e),i&&i(v(t,o.width,o.height),E(t,o.width,o.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=()=>{var e;null==(e=this.componentRef.current)||e.scrollTo(0,0)}}get document(){return document}getBox(){const e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};const{x:t,y:n,width:i,height:r}=e.getBoundingClientRect();return{x:t,y:n,width:i,height:r}}componentDidUpdate(e){const{crop:t,onComplete:n}=this.props;if(n&&!e.crop&&t){const{width:e,height:i}=this.getBox();e&&i&&n(v(t,e,i),E(t,e,i))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,k),this.document.addEventListener("pointerup",this.onDocPointerDone,k),this.document.addEventListener("pointercancel",this.onDocPointerDone,k),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,k),this.document.removeEventListener("pointerup",this.onDocPointerDone,k),this.document.removeEventListener("pointercancel",this.onDocPointerDone,k),this.docMoveBound=!1)}getCropStyle(){const{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){const{evData:e}=this,t=this.getBox(),n=this.makePixelCrop(t),i=e.clientX-e.startClientX,r=e.clientY-e.startClientY;return n.x=_(e.startCropX+i,0,t.width-n.width),n.y=_(e.startCropY+r,0,t.height-n.height),n}getPointRegion(e,t,n,i){const{evData:r}=this,o=r.clientX-e.x,a=r.clientY-e.y;let h,s;return h=i&&t?"nw"===t||"n"===t||"ne"===t:a<r.startCropY,s=n&&t?"nw"===t||"w"===t||"sw"===t:o<r.startCropX,s?h?"nw":"sw":h?"ne":"se"}resolveMinDimensions(e,t,n=0,i=0){const r=Math.min(n,e.width),o=Math.min(i,e.height);return t&&(r||o)?t>1?r?[r,r/t]:[o*t,o]:o?[o*t,o]:[r,r/t]:[r,o]}resizeCrop(){const{evData:t}=this,{aspect:n=0,maxWidth:i,maxHeight:r}=this.props,o=this.getBox(),[a,h]=this.resolveMinDimensions(o,n,this.props.minWidth,this.props.minHeight);let s=this.makePixelCrop(o);const d=this.getPointRegion(o,t.ord,a,h),c=t.ord||d;let l=t.clientX-t.startClientX,p=t.clientY-t.startClientY;(a&&"nw"===c||"w"===c||"sw"===c)&&(l=Math.min(l,-a)),(h&&"nw"===c||"n"===c||"ne"===c)&&(p=Math.min(p,-h));const g={unit:"px",x:0,y:0,width:0,height:0};"ne"===d?(g.x=t.startCropX,g.width=l,n?(g.height=g.width/n,g.y=t.startCropY-g.height):(g.height=Math.abs(p),g.y=t.startCropY-g.height)):"se"===d?(g.x=t.startCropX,g.y=t.startCropY,g.width=l,g.height=n?g.width/n:p):"sw"===d?(g.x=t.startCropX+l,g.y=t.startCropY,g.width=Math.abs(l),g.height=n?g.width/n:p):"nw"===d&&(g.x=t.startCropX+l,g.width=Math.abs(l),n?(g.height=g.width/n,g.y=t.startCropY-g.height):(g.height=Math.abs(p),g.y=t.startCropY+p));const w=K(g,n,d,o.width,o.height,a,h,i,r);return n||e.xyOrds.indexOf(c)>-1?s=w:e.xOrds.indexOf(c)>-1?(s.x=w.x,s.width=w.width):e.yOrds.indexOf(c)>-1&&(s.y=w.y,s.height=w.height),s.x=_(s.x,0,o.width-s.width),s.y=_(s.y,0,o.height-s.height),s}renderCropSelection(){const{ariaLabels:t=e.defaultProps.ariaLabels,disabled:n,locked:i,renderSelectionAddon:r,ruleOfThirds:o,crop:a}=this.props,h=this.getCropStyle();if(a)return p.createElement("div",{style:h,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":t.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!n&&!i&&p.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},p.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),p.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),p.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),p.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":t.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":t.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":t.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":t.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":t.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":t.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":t.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":t.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w"),role:"button"})),r&&p.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:e=>e.stopPropagation()},r(this.state)),o&&p.createElement(p.Fragment,null,p.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),p.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){return v({...S,...this.props.crop||{}},e.width,e.height)}render(){const{aspect:e,children:t,circularCrop:n,className:i,crop:r,disabled:o,locked:a,style:h,ruleOfThirds:s}=this.props,{cropIsActive:d,newCropIsBeingDrawn:c}=this.state,l=r?this.renderCropSelection():null,g=F("ReactCrop",i,d&&"ReactCrop--active",o&&"ReactCrop--disabled",a&&"ReactCrop--locked",c&&"ReactCrop--new-crop",r&&e&&"ReactCrop--fixed-aspect",r&&n&&"ReactCrop--circular-crop",r&&s&&"ReactCrop--rule-of-thirds",!this.dragStarted&&r&&!r.width&&!r.height&&"ReactCrop--invisible-crop",n&&"ReactCrop--no-animate");return p.createElement("div",{ref:this.componentRef,className:g,style:h},p.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},t),r?p.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},p.createElement("defs",null,p.createElement("mask",{id:`hole-${this.instanceId}`},p.createElement("rect",{width:"100%",height:"100%",fill:"white"}),n?p.createElement("ellipse",{cx:`${r.x+r.width/2}${r.unit}`,cy:`${r.y+r.height/2}${r.unit}`,rx:`${r.width/2}${r.unit}`,ry:`${r.height/2}${r.unit}`,fill:"black"}):p.createElement("rect",{x:`${r.x}${r.unit}`,y:`${r.y}${r.unit}`,width:`${r.width}${r.unit}`,height:`${r.height}${r.unit}`,fill:"black"}))),p.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,l)}};M.xOrds=["e","w"],M.yOrds=["n","s"],M.xyOrds=["nw","ne","se","sw"],M.nudgeStep=1,M.nudgeStepMedium=10,M.nudgeStepLarge=100,M.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}};let Q=M;const G=Math.PI/180;async function J(e,t,n,i=1,r=0){const o=t.getContext("2d");if(!o)throw new Error("No 2d context");const a=e.naturalWidth/e.width,h=e.naturalHeight/e.height,s=window.devicePixelRatio;t.width=Math.floor(n.width*a*s),t.height=Math.floor(n.height*h*s),o.scale(s,s),o.imageSmoothingQuality="high";const d=n.x*a,c=n.y*h,l=r*G,p=e.naturalWidth/2,g=e.naturalHeight/2;o.save(),o.translate(-d,-c),o.translate(p,g),o.rotate(l),o.scale(i,i),o.translate(-p,-g),o.drawImage(e,0,0,e.naturalWidth,e.naturalHeight,0,0,e.naturalWidth,e.naturalHeight),o.restore()}function Z(e,t,n){return W(z({unit:"%",width:90},n,e,t),e,t)}function ee(e,t,n){D.useEffect((()=>{const i=setTimeout((()=>e.apply({...n})),t);return()=>{clearTimeout(i)}}),n)}const te=90,N=1,B=e=>{const t=D.useRef(null),n=D.useRef(null),i=D.useRef(""),{aspect:r,callbackFn:o,callbackLabel:a,imgSrc:h,subTitle:s,title:d}=e,[c,l]=D.useState(),[p,g]=D.useState(),[w,u]=D.useState(!1);ee((async()=>{null!=p&&p.width&&null!=p&&p.height&&n.current&&t.current&&J(n.current,t.current,p,1)}),100,[p,1]);return m.jsxs(m.Fragment,{children:[m.jsxs(X,{sx:{padding:3},children:[m.jsx(L,{children:d}),m.jsx("br",{}),m.jsx(L,{variant:"quiet",children:s})]}),m.jsxs($,{sx:{borderBottom:"2px dashed silver",borderTop:"2px dashed silver",padding:3},children:[w&&m.jsx(X,{sx:{flex:1},children:m.jsx(T,{label:"Uploading image now. It'll only a sec. Hopefully."})}),!w&&!!h&&m.jsx($,{sx:{flex:1,justifyContent:"center"},children:m.jsx(Q,{aspect:r,crop:c,minHeight:100,onChange:(e,t)=>l(t),onComplete:e=>g(e),children:m.jsx("img",{alt:"Crop me","data-testid":"cropImage",onLoad:function(e){const{width:t,height:n}=e.currentTarget;l(Z(t,n,r))},ref:n,src:h})})})]}),m.jsx(X,{sx:{padding:3},children:m.jsx(j,{type:"button",onClick:async function(){u(!0);const e=n.current,r=t.current;if(!e||!r||!p)throw new Error("Crop canvas does not exist");const a=e.naturalWidth/e.width,h=e.naturalHeight/e.height,s=new OffscreenCanvas(p.width*a,p.height*h),d=s.getContext("2d");if(!d)throw new Error("No 2d context");d.drawImage(r,0,0,r.width,r.height,0,0,s.width,s.height);const c=await s.convertToBlob({type:"image/jpeg",quality:90});i.current&&URL.revokeObjectURL(i.current),i.current=URL.createObjectURL(c),await o(i.current),u(!1)},disabled:w,children:a})})]})};try{B.displayName="ImageCrop",B.__docgenInfo={description:"",displayName:"ImageCrop",props:{aspect:{defaultValue:null,description:"",name:"aspect",required:!0,type:{name:"number"}},callbackFn:{defaultValue:null,description:"",name:"callbackFn",required:!0,type:{name:"(imgSrc: string) => Promise<string>"}},callbackLabel:{defaultValue:null,description:"",name:"callbackLabel",required:!0,type:{name:"string"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!0,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{B as I};