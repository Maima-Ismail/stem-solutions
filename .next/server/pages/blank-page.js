"use strict";(()=>{var e={};e.id=563,e.ids=[563],e.modules={1845:(e,r,t)=>{t.d(r,{Z:()=>S});var i=t(6689),a=t(3819),o=t.n(a),n=t(7163),s=t.n(n),u=t(9174),p=t.n(u);let l=require("@mui/material/SnackbarContent");var c=t.n(l);let m=require("@mui/material/Slide");var d=t.n(m),g=t(1377),x=t(6508),b=t(8442);let f=(0,x.makeStyles)({uniqId:"notif"})(e=>({notification:{width:"95%",[e.breakpoints.up("lg")]:{width:"80%"},"& > div":{width:"100%",color:e.palette.common.white,background:e.palette.primary.dark,[e.breakpoints.up("sm")]:{padding:e.spacing(1,4)},"& > div:first-of-type":{[e.breakpoints.up("sm")]:{flex:1,marginRight:e.spacing(2)},[e.breakpoints.down("md")]:{textAlign:"center"}}}},button:{background:e.palette.common.white,color:e.palette.primary.dark,width:"100%","&:hover":{background:(0,b.alpha)(e.palette.common.white,.8)},[e.breakpoints.up("sm")]:{width:150}},action:{[e.breakpoints.down("md")]:{width:"100%",padding:0,margin:0}}}));var v=t(997);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach(function(r){var i,a;i=r,a=t[r],(i=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(i))in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function q(e){return v.jsx(d(),y(y({},e),{},{direction:"up"}))}let S=function(){let{t:e}=(0,g.useTranslation)("common"),{classes:r}=f(),{0:t,1:a}=(0,i.useState)(!0),n=()=>{a(!1)};return v.jsx(p(),{TransitionComponent:q,anchorOrigin:{vertical:"bottom",horizontal:"center"},classes:{root:r.notification},open:t,onClose:n,children:v.jsx(c(),{message:v.jsx(s(),{id:"message-id",children:e("notif_msg")}),classes:{action:r.action},action:v.jsx(o(),{variant:"contained",className:r.button,onClick:n,children:e("accept")},"undo")})})}},4842:(e,r,t)=>{t.a(e,async(e,i)=>{try{t.r(r),t.d(r,{default:()=>j,getStaticProps:()=>P});var a=t(6689),o=t.n(a),n=t(6508),s=t(7163),u=t.n(s),p=t(1377),l=t(968),c=t.n(l),m=t(4960),d=t.n(m),g=t(5460),x=t(6752),b=t.n(x),f=t(2856),v=t(1845),h=t(997),y=e([f]);function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}f=(y.then?(await y)():y)[0];let S=(0,n.makeStyles)({uniqId:"blank"})(e=>({mainWrap:{position:"relative",width:"100%",overflow:"hidden",background:e.palette.background.paper},spaceBottom:{marginBottom:e.spacing(20)},spaceTop:{paddingTop:e.spacing(20)},containerWrap:{marginTop:e.spacing(10),padding:e.spacing(4),"& > section":{position:"relative"}}})),j=function(e){let{classes:r,cx:t}=S(),{onToggleDark:i,onToggleDir:a}=e,{t:n}=(0,p.useTranslation)("common");return(0,h.jsxs)(o().Fragment,{children:[h.jsx(c(),{children:h.jsx("title",{children:b().agency.name+" - Blank page"})}),h.jsx(d(),{}),(0,h.jsxs)("div",{className:r.mainWrap,children:[h.jsx(f.Z,{onToggleDark:i,onToggleDir:a,invert:!0,children:(0,h.jsxs)("section",{className:t(r.spaceTop,r.spaceBottom),children:[h.jsx(u(),{variant:"h2",align:"center",gutterBottom:!0,children:n("common:title")}),h.jsx(u(),{variant:"h4",align:"center",children:n("common:subtitle")})]})}),h.jsx(v.Z,{})]})]})},P=async({locale:e})=>({props:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach(function(r){var i,a;i=r,a=t[r],(i=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(i))in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},await (0,g.serverSideTranslations)(e,["common"]))});i()}catch(e){i(e)}})},9320:(e,r,t)=>{t.a(e,async(e,i)=>{try{t.r(r),t.d(r,{config:()=>x,default:()=>c,getServerSideProps:()=>g,getStaticPaths:()=>d,getStaticProps:()=>m,reportWebVitals:()=>b,routeModule:()=>S,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>h,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>f});var a=t(7093),o=t(5244),n=t(1323),s=t(4420),u=t(5779),p=t(4842),l=e([s,u,p]);[s,u,p]=l.then?(await l)():l;let c=(0,n.l)(p,"default"),m=(0,n.l)(p,"getStaticProps"),d=(0,n.l)(p,"getStaticPaths"),g=(0,n.l)(p,"getServerSideProps"),x=(0,n.l)(p,"config"),b=(0,n.l)(p,"reportWebVitals"),f=(0,n.l)(p,"unstable_getStaticProps"),v=(0,n.l)(p,"unstable_getStaticPaths"),h=(0,n.l)(p,"unstable_getStaticParams"),y=(0,n.l)(p,"unstable_getServerProps"),q=(0,n.l)(p,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/blank-page",pathname:"/blank-page",bundlePath:"",filename:""},components:{App:u.default,Document:s.default},userland:p});i()}catch(e){i(e)}})},6959:e=>{e.exports=require("@mui/icons-material/Check")},8148:e=>{e.exports=require("@mui/icons-material/ExpandMore")},5418:e=>{e.exports=require("@mui/icons-material/Language")},32:e=>{e.exports=require("@mui/icons-material/Settings")},9409:e=>{e.exports=require("@mui/material/Accordion")},8279:e=>{e.exports=require("@mui/material/AccordionDetails")},4604:e=>{e.exports=require("@mui/material/AccordionSummary")},3882:e=>{e.exports=require("@mui/material/AppBar")},19:e=>{e.exports=require("@mui/material/Box")},3819:e=>{e.exports=require("@mui/material/Button")},4475:e=>{e.exports=require("@mui/material/Container")},4960:e=>{e.exports=require("@mui/material/CssBaseline")},3646:e=>{e.exports=require("@mui/material/Divider")},5612:e=>{e.exports=require("@mui/material/Grid")},7934:e=>{e.exports=require("@mui/material/IconButton")},3103:e=>{e.exports=require("@mui/material/InputAdornment")},5246:e=>{e.exports=require("@mui/material/Link")},4192:e=>{e.exports=require("@mui/material/List")},834:e=>{e.exports=require("@mui/material/ListItem")},3787:e=>{e.exports=require("@mui/material/ListItemIcon")},1211:e=>{e.exports=require("@mui/material/ListItemSecondaryAction")},8315:e=>{e.exports=require("@mui/material/ListItemText")},9685:e=>{e.exports=require("@mui/material/ListSubheader")},9271:e=>{e.exports=require("@mui/material/MenuItem")},7730:e=>{e.exports=require("@mui/material/OutlinedInput")},5768:e=>{e.exports=require("@mui/material/Popover")},2651:e=>{e.exports=require("@mui/material/Select")},9174:e=>{e.exports=require("@mui/material/Snackbar")},4180:e=>{e.exports=require("@mui/material/SwipeableDrawer")},3191:e=>{e.exports=require("@mui/material/Switch")},7163:e=>{e.exports=require("@mui/material/Typography")},8442:e=>{e.exports=require("@mui/material/styles")},9868:e=>{e.exports=require("@mui/material/useMediaQuery")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},2217:e=>{e.exports=require("react-anchor-link-smooth-scroll")},6405:e=>{e.exports=require("react-dom")},6578:e=>{e.exports=require("react-scrollspy")},2037:e=>{e.exports=require("react-top-loading-bar")},997:e=>{e.exports=require("react/jsx-runtime")},3195:e=>{e.exports=require("stylis-plugin-rtl")},6508:e=>{e.exports=require("tss-react/mui")},8440:e=>{e.exports=import("@emotion/cache")},3139:e=>{e.exports=import("@emotion/react")},730:e=>{e.exports=import("@emotion/server/create-instance")},3707:e=>{e.exports=import("next-language-detector")},4615:e=>{e.exports=import("stylis")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[859,920,779,313],()=>t(9320));module.exports=i})();