import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{D as q}from"./DonationRequestModal-ECISPDEc.js";import{D as m}from"./DownloadButton-CGA4PZfg.js";import{D as C}from"./DownloadCounter-BhwM3uCm.js";import{D as I}from"./DownloadStaticFile-a4Qrz7c4.js";import{u as j}from"./index-CQ-1if_X.js";const p=i=>{const{body:n,iframeSrc:a,imageURL:l,isLoggedIn:o,handleClick:r,fileDownloadCount:t,fileLink:d,files:s}=i,[p,f]=u.useState(!1),[c,g]=u.useState(""),D=j(),y=()=>f(!p),k=null==s?void 0:s.filter((e=>null!==e&&"downloadUrl"in e));return e.jsxs(e.Fragment,{children:[e.jsx(q,{body:n,callback:()=>{r(),y()},iframeSrc:a,imageURL:l,isOpen:p,link:c,onDidDismiss:()=>y()}),!o&&e.jsx(m,{onClick:()=>D("/sign-in"),isLoggedIn:!1}),o&&e.jsxs(e.Fragment,{children:[d&&e.jsx(m,{onClick:()=>{g(d),y()},isLoggedIn:!0}),k&&k.map(((i,n)=>e.jsx(I,{file:i,handleClick:()=>{g(i.downloadUrl),y()},forDonationRequest:!0,isLoggedIn:!0},i?i.name:`file-${n}`)))]}),e.jsx(C,{total:t})]})};try{p.displayName="DownloadWithDonationAsk",p.__docgenInfo={description:"",displayName:"DownloadWithDonationAsk",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => Promise<void>"}},iframeSrc:{defaultValue:null,description:"",name:"iframeSrc",required:!0,type:{name:"string"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!0,type:{name:"string"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},fileDownloadCount:{defaultValue:null,description:"",name:"fileDownloadCount",required:!0,type:{name:"number"}},fileLink:{defaultValue:null,description:"",name:"fileLink",required:!1,type:{name:"string"}},files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"(IUploadedFileMeta | File | null)[]"}}}}}catch{}export{p as D};