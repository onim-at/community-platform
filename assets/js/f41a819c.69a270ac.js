"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[94],{7673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=n(4848),i=n(8453);const a={},r="E2E Testing",d={id:"Testing/end-to-end",title:"E2E Testing",description:"End-to-end testing is carried out by Cypress, and executed against a dedicated firebase project (different to development and staging).",source:"@site/docs/Testing/end-to-end.md",sourceDirName:"Testing",slug:"/Testing/end-to-end",permalink:"/Testing/end-to-end",draft:!1,unlisted:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Testing/end-to-end.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Testing Overview",permalink:"/Testing/overview"},next:{title:"Deployment via CircleCI",permalink:"/Deployment/circle-ci"}},o={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Data Seeding",id:"data-seeding",level:3},{value:"CI testing",id:"ci-testing",level:3},{value:"Parallel testing",id:"parallel-testing",level:3},{value:"Browser testing",id:"browser-testing",level:3},{value:"Database tear down",id:"database-tear-down",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"e2e-testing",children:"E2E Testing"})}),"\n",(0,s.jsxs)(t.p,{children:["End-to-end testing is carried out by ",(0,s.jsx)(t.a,{href:"https://www.cypress.io/",children:"Cypress"}),", and executed against a dedicated firebase project (different to development and staging)."]}),"\n",(0,s.jsxs)(t.p,{children:["You will notice the data in test is completely different to what you see when developing. In addition, the testing app starts at the port ",(0,s.jsx)(t.code,{children:"localhost:3456"})," which all tests are run against."]}),"\n",(0,s.jsx)(t.p,{children:"The tests are not comprehensive, but are slowly being built over time - particularly when bugs are noticed. Therefore if you identify a bug, before fixing it is recommended to add a test so that the bug is less likely to resurface in the future."}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"yarn workspace oa-cypress install\nyarn workspace oa-cypress start\n"})}),"\n",(0,s.jsxs)(t.p,{children:["(or shorthand ",(0,s.jsx)(t.code,{children:"yarn test"}),")"]}),"\n",(0,s.jsx)(t.h3,{id:"data-seeding",children:"Data Seeding"}),"\n",(0,s.jsxs)(t.p,{children:["A standard set of database documents are created at the start of every test and cleared at the end. These are populated from the ",(0,s.jsx)(t.code,{children:"fixtures/seed"})," folder to the online firebase firestore database."]}),"\n",(0,s.jsx)(t.p,{children:"They will be automatically deleted after tests have completed running"}),"\n",(0,s.jsx)(t.h3,{id:"ci-testing",children:"CI testing"}),"\n",(0,s.jsxs)(t.p,{children:["Tests are automatically run on every pull request, and can be viewed on the cypress dashboard. A link to the specific test run will be populated into the PR, or publicly viewable at: ",(0,s.jsx)(t.a,{href:"https://dashboard.cypress.io/projects/4s5zgo/runs",children:"https://dashboard.cypress.io/projects/4s5zgo/runs"})]}),"\n",(0,s.jsx)(t.h3,{id:"parallel-testing",children:"Parallel testing"}),"\n",(0,s.jsxs)(t.p,{children:["When testing is initiated a random prefix is generated to uniquely seed/clear the database (e.g. ",(0,s.jsx)(t.code,{children:"test1_howtos"})," and ",(0,s.jsx)(t.code,{children:"test2_howtos"}),") and avoid different tests interfering with each other. This allows us to test multiple specs in parallel when running on ci."]}),"\n",(0,s.jsx)(t.h3,{id:"browser-testing",children:"Browser testing"}),"\n",(0,s.jsxs)(t.p,{children:["Currently testing is carried out against chrome(stable) and firefox(latest) browsers. We are not able to support any additional browsers (e.g. safari) via ci as they are not currently supported by cypress. If this changes in the future then it would be good to add. See discussion around this here: ",(0,s.jsx)(t.a,{href:"https://github.com/ONEARMY/community-platform/issues/611",children:"https://github.com/ONEARMY/community-platform/issues/611"})]}),"\n",(0,s.jsx)(t.h3,{id:"database-tear-down",children:"Database tear down"}),"\n",(0,s.jsx)(t.p,{children:"In case of test fail, documents will not be deleted from the server. This is not a major issue as they all are randomly prefixed, and will just sit in the database. From time-to-time admins may decide to delete any hanging data via the firebase cli."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"firebase use ci\nfirebase firestore:delete --all-collections\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"The command will completely wipe the database, and so should only be used on the ci project when required. If needing access to the ci project ask one of the platform admins who can send an invite\nDO NOT USE AGAINST STAGING OR PRODUCTION SITES!!!"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"CI Project - firestore with uncleared data"}),"\n",(0,s.jsx)(t.img,{src:n(1741).A+"",width:"1266",height:"679"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1741:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ci-firestore-project-5867572f45ff542d10f8b52baf1ed611.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);