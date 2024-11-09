import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as h}from"./ButtonIcon-BjD0tDRb.js";import{M as _}from"./MemberBadge-DaB6gu8F.js";import{C as F}from"./CardButton-UFEWOkeB.js";import{F as p,H as y,T as l,I as j}from"./theme-ui-components.esm-DCiJ1mMX.js";const o=({active:i,onClick:t,children:a})=>e.jsx(F,{"data-cy":"MapFilterListItem"+(i?"-active":""),onClick:t,extrastyles:{display:"flex",flexDirection:"row",backgroundColor:"offWhite",padding:1,alignItems:"center",gap:2,...i?{borderColor:"green",":hover":{borderColor:"green"}}:{borderColor:"offWhite",":hover":{borderColor:"offWhite"}}},children:a});try{o.displayName="MapFilterListItem",o.__docgenInfo={description:"",displayName:"MapFilterListItem",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const n=({children:i})=>e.jsx(p,{as:"ul","data-cy":"MapFilterList",sx:{listStyle:"none",flexWrap:"nowrap",gap:2,flexDirection:"column",padding:0},children:i});try{n.displayName="MapFilterListWrapper",n.__docgenInfo={description:"",displayName:"MapFilterListWrapper",props:{}}}catch{}const x=i=>{const{activeFilters:t,availableFilters:a,onClose:r,onFilterChange:s}=i,c=a.filter((({filterType:e})=>"profileType"===e)),d=a.filter((({filterType:e})=>"workspaceType"===e)),m=e=>!!t.find((i=>i.label===e));return e.jsxs(p,{"data-cy":"MapFilterList",sx:{flexDirection:"column",position:"relative",gap:2},children:[e.jsxs(p,{sx:{gap:2},children:[e.jsx(y,{as:"h3",variant:"small",children:"So what are you looking for?"}),e.jsx(h,{"data-cy":"MapFilterList-CloseButton",icon:"close",onClick:()=>r(),sx:{paddingRight:3,paddingLeft:2,border:"none"}})]}),d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Workspace:"}),e.jsx(n,{children:d.map(((i,t)=>e.jsxs(o,{active:m(i.label),onClick:()=>s(i),children:[i.imageSrc&&e.jsx(j,{src:i.imageSrc,sx:{height:30,width:30}}),e.jsx(l,{variant:"quiet",sx:{fontSize:1},children:i.label})]},t)))})]}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Profiles:"}),e.jsx(n,{children:c.map(((i,t)=>e.jsxs(o,{active:m(i.label),onClick:()=>s(i),children:[e.jsx(_,{size:30,profileType:i._id}),e.jsx(l,{variant:"quiet",sx:{fontSize:1},children:i.label})]},t)))})]})]})};try{x.displayName="MapFilterList",x.__docgenInfo={description:"",displayName:"MapFilterList",props:{activeFilters:{defaultValue:null,description:"",name:"activeFilters",required:!0,type:{name:"MapFilterOptionsList"}},availableFilters:{defaultValue:null,description:"",name:"availableFilters",required:!0,type:{name:"MapFilterOptionsList"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onFilterChange:{defaultValue:null,description:"",name:"onFilterChange",required:!0,type:{name:"(filter: MapFilterOption) => void"}}}}}catch{}export{x as M};