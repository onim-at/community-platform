import{j as e}from"./jsx-runtime-CexXSJP5.js";import{k as c}from"./emotion-react.browser.esm-PjqPg9b4.js";import{U as u}from"./Username-BLNpr3HZ.js";import{C as p,a as r,e as n,I as g,T as t,A as x}from"./theme-ui-components.esm-D5Q63Fx1.js";const h=c`
  from {
    background: lightgrey;
  }
  to {
    background: grey;
  }
`,s=s=>{const{imageUrl:i,description:a,user:d,heading:o,comments:l}=s;return e.jsx(p,{sx:{maxWidth:"230px"},"data-cy":"MapMemberCard",children:e.jsxs(r,{children:[!!s.loading&&e.jsxs(e.Fragment,{children:[e.jsx(n,{ratio:230/120,sx:{background:"lightgrey",animation:`${h} 800ms ease infinite`}}),e.jsx(r,{sx:{p:2,height:"109px"}})]}),!s.loading&&e.jsxs(e.Fragment,{children:[e.jsx(n,{ratio:230/120,sx:{background:"lightgrey"},children:e.jsx(g,{src:i,sx:{objectFit:"cover",width:"100%",height:"100%"}})}),e.jsxs(r,{sx:{p:2},children:[e.jsx(t,{mb:2,sx:{fontSize:"12px",color:"blue"},children:o}),e.jsx("div",{children:e.jsx(u,{user:d})}),e.jsx(t,{mb:2,sx:{wordBreak:"break-word",fontSize:1,display:"block",color:"black"},children:a}),l?e.jsx(x,{variant:"info",sx:{fontSize:1,textAlign:"left"},"data-testid":"MapMemberCard: moderation comments",children:e.jsxs(r,{children:["This map pin has been marked as requiring further changes.",e.jsx(r,{children:l})]})}):null]})]})]})})};try{s.displayName="MapMemberCard",s.__docgenInfo={description:"",displayName:"MapMemberCard",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"string | null"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}}}}}catch{}export{s as M};