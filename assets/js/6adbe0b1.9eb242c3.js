"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438"},l="\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438",i={unversionedId:"blender/collision",id:"blender/collision",title:"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438",description:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u0438\u0433\u0440\u0435. Unreal Engine 5 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 Static Mesh Editor. \u041e\u0434\u043d\u0430\u043a\u043e \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044e \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 3D-\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0441\u0435\u0442\u043a\u043e\u0439 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u044d\u0442\u043e \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u0441\u0435\u0442\u043a\u0438 \u0441 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435\u043c \u0438\u043b\u0438 \u0432\u043e\u0433\u043d\u0443\u0442\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0442\u044c\u0441\u044f.",source:"@site/docs/blender/collision.md",sourceDirName:"blender",slug:"/blender/collision",permalink:"/docs/blender/collision",draft:!1,editUrl:"https://github.com/ue-devolopers/wiki-editable/blob/master/docs/blender/collision.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438"},sidebar:"tutorialSidebar",previous:{title:"Blender",permalink:"/docs/category/blender"},next:{title:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 UE",permalink:"/docs/blender/export"}},p={},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f-\u0434\u043b\u044f-\u043c\u043e\u0434\u0435\u043b\u0438"},"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438"),(0,a.kt)("p",null,"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u0438\u0433\u0440\u0435. Unreal Engine 5 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 ",(0,a.kt)("strong",{parentName:"p"},"Static Mesh Editor"),". \u041e\u0434\u043d\u0430\u043a\u043e \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044e \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 3D-\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0441\u0435\u0442\u043a\u043e\u0439 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u044d\u0442\u043e \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u0441\u0435\u0442\u043a\u0438 \u0441 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435\u043c \u0438\u043b\u0438 \u0432\u043e\u0433\u043d\u0443\u0442\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0442\u044c\u0441\u044f."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0421\u0435\u0442\u043a\u0438 \u0434\u0432\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043c\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u0435\u043d\u044b \u0441 \u0432\u044b\u0440\u0435\u0437\u0430\u043c\u0438 \u043f\u043e\u0434 \u043e\u043a\u043d\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0435\u0442\u043a\u0438 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")),(0,a.kt)("p",null,"\u0421\u0435\u0442\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0435\u0440\u043e\u043c \u043f\u043e \u0438\u0445 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e. \u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UBX",(0,a.kt)("em",{parentName:"strong"},"[RenderMeshName]"),"##")," \u041a\u043e\u0440\u043e\u0431\u043a\u0443 (",(0,a.kt)("strong",{parentName:"li"},"Box"),") \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u043e\u0433\u043e 3D-\u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u0438\u043b\u0438 \u043a\u0430\u043a\u0438\u043c-\u043b\u0438\u0431\u043e \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0435 \u0447\u0435\u043c-\u0442\u043e \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u043c \u043e\u0442 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u0438\u0437\u043c\u044b, \u0438\u043d\u0430\u0447\u0435 \u044d\u0442\u043e \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UCP",(0,a.kt)("em",{parentName:"strong"},"[RenderMeshName]"),"##")," \u041a\u0430\u043f\u0441\u0443\u043b\u0430 (",(0,a.kt)("strong",{parentName:"li"},"Capsule"),") \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u0443\u0432\u0435\u043d\u0447\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0443\u0441\u0444\u0435\u0440\u0430\u043c\u0438. \u0415\u043c\u0443 \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u043e\u0432 (8 \u2014 \u0445\u043e\u0440\u043e\u0448\u0435\u0435 \u0447\u0438\u0441\u043b\u043e), \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0443\u044e \u043a\u0430\u043f\u0441\u0443\u043b\u0443 \u0434\u043b\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439. \u041a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 \u044f\u0449\u0438\u043a\u0430\u043c\u0438, \u0432\u0430\u043c \u043d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0440\u0448\u0438\u043d\u044b."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"USP",(0,a.kt)("em",{parentName:"strong"},"[RenderMeshName]"),"##")," \u0421\u0444\u0435\u0440\u0435 (",(0,a.kt)("strong",{parentName:"li"},"Sphere"),") \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u043e\u0432 (8 \u2014 \u0445\u043e\u0440\u043e\u0448\u0435\u0435 \u0447\u0438\u0441\u043b\u043e), \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043e\u043d\u0430 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0443\u044e \u0441\u0444\u0435\u0440\u0443. \u041a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 \u044f\u0449\u0438\u043a\u0430\u043c\u0438, \u0432\u0430\u043c \u043d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0440\u0448\u0438\u043d\u044b."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UCX",(0,a.kt)("em",{parentName:"strong"},"[RenderMeshName]"),"##")," \u0412\u044b\u043f\u0443\u043a\u043b\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 (",(0,a.kt)("strong",{parentName:"li"},"Convex"),") \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u043b\u044e\u0431\u0443\u044e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u043c\u043a\u043d\u0443\u0442\u0443\u044e \u0432\u044b\u043f\u0443\u043a\u043b\u0443\u044e \u0442\u0440\u0435\u0445\u043c\u0435\u0440\u043d\u0443\u044e \u0444\u0438\u0433\u0443\u0440\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043e\u0440\u043e\u0431\u043a\u0430 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c. \u041d\u0430 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435 \u043d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u0447\u0442\u043e \u0432\u044b\u043f\u0443\u043a\u043b\u043e, \u0430 \u0447\u0442\u043e \u043d\u0435\u0442:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Collision",src:n(7861).Z,width:"341",height:"322"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.unrealengine.com/5.2/en-US/fbx-static-mesh-pipeline-in-unreal-engine/#collision"},"\u0430\u0434\u0434\u043e\u043d"))," \u0434\u043b\u044f Blender, \u0447\u0442\u043e \u0431\u044b \u043e\u0431\u043b\u0435\u0433\u0447\u0438\u0442\u044c \u0441\u0435\u0431\u0435 \u0440\u0430\u0431\u043e\u0442\u0443.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.unrealengine.com/5.2/en-US/fbx-static-mesh-pipeline-in-unreal-engine/#collision"},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"))))}u.isMDXComponent=!0},7861:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/collision-fe011e22bf432ba1a32f880d8eca8837.png"}}]);