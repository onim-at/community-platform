import"./index-D-8MO0q_.js";const{global:O}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:E,addons:_}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:l,SELECT_STORY:L}=__STORYBOOK_MODULE_CORE_EVENTS__;var c="links",{document:i,HTMLElement:m}=O,v=e=>_.getChannel().emit(L,e),o=e=>{let{target:n}=e;if(!(n instanceof m))return;let t=n,{sbKind:_,sbStory:a}=t.dataset;(_||a)&&(e.preventDefault(),v({kind:_,story:a}))},n=!1,d=()=>{n||(n=!0,i.addEventListener("click",o))},k=()=>{n&&(n=!1,i.removeEventListener("click",o))},R=E({name:"withLinks",parameterName:c,wrapper:(e,n)=>(d(),_.getChannel().once(l,k),e(n))}),T=[R];export{T as decorators};