import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as b}from"./index-BP8_t0zE.js";import{T as e}from"./TextNotification-CHRBxPd1.js";import"./emotion-react.browser.esm-BYoRxRk_.js";import"./parseProps-780b287c.browser.esm-DiCerVr_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-UWD3gXM2.js";import"./hoist-non-react-statics.cjs-CQI8syxn.js";import"./theme-ui-components.esm-BngKL4Rx.js";import"./theme-ui-core-jsx-runtime.browser.esm-CH0qhC10.js";const E={title:"Layout/TextNotification",component:e},i=()=>r.jsx(e,{variant:"success",isVisible:!0,children:"A short snappy notification"}),s=()=>{const[s,i]=b.useState(!0);return r.jsx(e,{variant:"success",isVisible:s,onDismiss:i,children:"A short snappy notification"})},t=()=>r.jsx(e,{variant:"failure",isVisible:!0,children:"A short snappy notification"});var o,a,n,c,p,u,m,l,f;i.parameters={...i.parameters,docs:{...null==(o=i.parameters)?void 0:o.docs,source:{originalSource:'() => <TextNotification variant="success" isVisible={true}>\n    A short snappy notification\n  </TextNotification>',...null==(n=null==(a=i.parameters)?void 0:a.docs)?void 0:n.source}}},s.parameters={...s.parameters,docs:{...null==(c=s.parameters)?void 0:c.docs,source:{originalSource:'() => {\n  const [visible, setVisibility] = useState(true);\n  return <TextNotification variant="success" isVisible={visible} onDismiss={setVisibility}>\n      A short snappy notification\n    </TextNotification>;\n}',...null==(u=null==(p=s.parameters)?void 0:p.docs)?void 0:u.source}}},t.parameters={...t.parameters,docs:{...null==(m=t.parameters)?void 0:m.docs,source:{originalSource:'() => <TextNotification variant="failure" isVisible={true}>\n    A short snappy notification\n  </TextNotification>',...null==(f=null==(l=t.parameters)?void 0:l.docs)?void 0:f.source}}};const D=["Success","SuccessDismissable","Error"];export{t as Error,i as Success,s as SuccessDismissable,D as __namedExportsOrder,E as default};