import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as s}from"./Button-C1Ojgool.js";import{T as u}from"./Tooltip-B29JjCvL.js";import{u as d}from"./index-DDbH4maQ.js";const n=o=>{const{hasUserSubscribed:n,isLoggedIn:l,onFollowClick:t,sx:i}=o,r=d();return e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button","data-testid":l?"follow-button":"follow-redirect","data-cy":l?"follow-button":"follow-redirect","data-tip":l?"":"Login to follow",icon:"thunderbolt",variant:"outline",iconColor:n?"subscribed":"notSubscribed",sx:{fontSize:2,py:0,...i},onClick:()=>l?t():r("/sign-in"),children:n?"Following":"Follow"}),e.jsx(u,{})]})};try{n.displayName="FollowButton",n.__docgenInfo={description:"",displayName:"FollowButton",props:{hasUserSubscribed:{defaultValue:null,description:"",name:"hasUserSubscribed",required:!0,type:{name:"boolean"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},onFollowClick:{defaultValue:null,description:"",name:"onFollowClick",required:!0,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{n as F};