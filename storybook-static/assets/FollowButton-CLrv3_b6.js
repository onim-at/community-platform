import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as s}from"./Button-DeEOnrl-.js";import{T as d}from"./Tooltip-B9mgSRkZ.js";import{u}from"./index-BXxqJQdV.js";const n=o=>{const{hasUserSubscribed:l,isLoggedIn:n,onFollowClick:t,sx:i}=o,r=u();return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button","data-testid":n?"follow-button":"follow-redirect","data-cy":n?"follow-button":"follow-redirect","data-tooltip-id":"login-follow","data-tooltip-content":n?"":"Login to follow",icon:"thunderbolt",variant:"outline",iconColor:l?"subscribed":"notSubscribed",sx:{fontSize:2,py:0,...i},onClick:()=>n?t():r("/sign-in"),children:l?"Following":"Follow"}),e.jsx(d,{id:"login-follow"})]})};try{n.displayName="FollowButton",n.__docgenInfo={description:"",displayName:"FollowButton",props:{hasUserSubscribed:{defaultValue:null,description:"",name:"hasUserSubscribed",required:!0,type:{name:"boolean"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},onFollowClick:{defaultValue:null,description:"",name:"onFollowClick",required:!0,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{n as F};