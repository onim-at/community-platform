import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{B as c}from"./Button-Dp5vErsp.js";import{T as f}from"./Tooltip-B9mgSRkZ.js";import{u as m}from"./theme-ui-core.browser.esm-CIov4Ln1.js";import{u as p}from"./index-BXxqJQdV.js";import{T as r}from"./theme-ui-components.esm-DCiJ1mMX.js";const l=e=>{const{theme:o}=m(),s=p(),l=n.useMemo((()=>(16*Math.random()).toString()),[]),[i,a]=n.useState();return t.jsxs(t.Fragment,{children:[t.jsxs(c,{type:"button","data-tooltip-id":l,"data-tooltip-content":e.isLoggedIn?"":"Login to add your vote","data-cy":e.isLoggedIn?"vote-useful":"vote-useful-redirect",onClick:()=>e.isLoggedIn?(async()=>{a(!0);try{await e.onUsefulClick()}catch{}a(!1)})():s("/sign-in"),disabled:i,sx:{fontSize:2,backgroundColor:o.colors.white,py:0,"&:hover":{backgroundColor:o.colors.softblue},...e.sx},icon:e.hasUserVotedUseful?"star":"star-active",children:[t.jsx(r,{pr:2,py:2,sx:{display:"inline-block"},children:e.votedUsefulCount}),t.jsx(r,{pl:2,py:2,sx:{display:"inline-block",borderLeft:`1px solid ${o.colors.black}`},children:e.hasUserVotedUseful?"Marked as useful":"Mark as useful"})]}),t.jsx(f,{id:l})]})};try{l.displayName="UsefulStatsButton",l.__docgenInfo={description:"",displayName:"UsefulStatsButton",props:{hasUserVotedUseful:{defaultValue:null,description:"",name:"hasUserVotedUseful",required:!0,type:{name:"boolean"}},votedUsefulCount:{defaultValue:null,description:"",name:"votedUsefulCount",required:!0,type:{name:"number | undefined"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},onUsefulClick:{defaultValue:null,description:"",name:"onUsefulClick",required:!0,type:{name:"() => Promise<void>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{l as U};