import{j as i}from"./jsx-runtime-CexXSJP5.js";import{k as a}from"./emotion-react.browser.esm-BYoRxRk_.js";import{A as s,f as n}from"./theme-ui-components.esm-DCiJ1mMX.js";const r=a({from:{opacity:0,transform:"translateY(-50%)"},to:{opacity:1}}),t=e=>e.isVisible?i.jsxs(s,{variant:e.variant,"data-cy":`TextNotification: ${e.variant}`,sx:{width:"100%",animation:`${r} ease-out 400ms both 200ms`},children:[e.children,e.onDismiss&&i.jsx(n,{sx:{position:"absolute",top:"50%",right:2,transform:"translateY(-50%)",cursor:"pointer"},onClick:()=>e.onDismiss(!1)})]}):i.jsx(i.Fragment,{});try{t.displayName="TextNotification",t.__docgenInfo={description:"",displayName:"TextNotification",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"failure"'},{value:'"success"'}]}},isVisible:{defaultValue:null,description:"",name:"isVisible",required:!0,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"any"}}}}}catch{}export{t as T};