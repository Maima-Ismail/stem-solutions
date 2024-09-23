exports.id=313,exports.ids=[313],exports.modules={3222:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>B}),n(6689);var i=n(4475),a=n.n(i),o=n(5612),s=n.n(o),l=n(19),c=n.n(l),p=n(8442),g=n(9409),d=n.n(g),m=n(4604),u=n.n(m),h=n(8279),f=n.n(h),y=n(8148),x=n.n(y),j=n(9868),b=n.n(j),v=n(7163),w=n.n(v),k=n(5246),O=n.n(k),S=n(7934),N=n.n(S),M=n(1377),D=n(7930),z=n.n(D),L=n(6752),P=n.n(L),I=n(9696),T=n(4767),Z=n(9710),C=n(997),E=e([Z]);function R(){return(0,C.jsxs)(w(),{variant:"body2",display:"block",color:"textSecondary",children:["\xa9\xa0",P().agency.footerText]})}Z=(E.then?(await E)():E)[0];let W=[{title:"Company",description:["Team","History","Contact us","Locations"],link:["#team","#history","#contact-us","#locations"]},{title:"Resources",description:["Resource","Resource name","Another resource","Final resource"],link:["#resource","#resource-name","#another-resource","#final-resource"]},{title:"Legal",description:["Privacy policy","Terms of use"],link:["#privacy-policy","#terms-of-use"]}];function H(e){let{toggleDir:t}=e,n=(0,p.useTheme)(),r=b()(n.breakpoints.up("md")),i=b()(n.breakpoints.down("md")),{t:o}=(0,M.useTranslation)("common"),{classes:l}=(0,T.Z)(),{classes:g}=(0,I.Lr)();return(0,C.jsxs)(a(),{maxWidth:"lg",component:"footer",className:l.footer,children:[(0,C.jsxs)(s(),{container:!0,spacing:4,children:[(0,C.jsxs)(s(),{item:!0,xs:12,md:3,children:[(0,C.jsxs)("div",{className:l.logo,children:[C.jsx("img",{src:z(),alt:"logo"}),C.jsx(w(),{variant:"h6",color:"textPrimary",children:P().agency.projectName})]}),C.jsx(w(),{color:"textPrimary",className:l.footerDesc,gutterBottom:!0,children:o("agency-landing.footer_paragraph")}),r&&C.jsx(R,{})]}),C.jsx(s(),{item:!0,xs:12,md:6,children:C.jsx(s(),{container:!0,spacing:4,"justify-content":"space-evenly",children:W.map(e=>(0,C.jsxs)(s(),{item:!0,xs:12,md:3,className:l.siteMapItem,children:[r&&(0,C.jsxs)("div",{children:[C.jsx(w(),{variant:"h6",className:l.title,color:"textPrimary",gutterBottom:!0,children:e.title}),C.jsx("ul",{children:e.description.map((t,n)=>C.jsx("li",{children:C.jsx(O(),{href:e.link[n],variant:"subtitle1",color:"textSecondary",children:t})},t))})]}),i&&(0,C.jsxs)(d(),{square:!0,classes:{root:l.accordionRoot},children:[C.jsx(u(),{expandIcon:C.jsx(x(),{className:l.accordionIcon}),"aria-controls":"panel1a-content",id:"panel1a-header",classes:{content:l.accordionContent},children:C.jsx("strong",{children:e.title})}),C.jsx(f(),{children:C.jsx("ul",{children:e.description.map((t,n)=>C.jsx("li",{children:C.jsx(O(),{href:e.link[n],variant:"subtitle1",color:"textSecondary",children:t})},t))})})]})]},e.title))})}),(0,C.jsxs)(s(),{item:!0,xs:12,md:3,children:[(0,C.jsxs)("div",{className:l.socmed,children:[C.jsx(N(),{"aria-label":"FB",className:l.margin,size:"small",children:C.jsx("i",{className:"ion-logo-twitter"})}),C.jsx(N(),{"aria-label":"TW",className:l.margin,size:"small",children:C.jsx("i",{className:"ion-logo-facebook"})}),C.jsx(N(),{"aria-label":"IG",className:l.margin,size:"small",children:C.jsx("i",{className:"ion-logo-instagram"})}),C.jsx(N(),{"aria-label":"LI",className:l.margin,size:"small",children:C.jsx("i",{className:"ion-logo-linkedin"})})]}),C.jsx(Z.Z,{toggleDir:t})]})]}),i&&C.jsx("div",{className:g.textCenter,children:C.jsx(c(),{p:4,children:C.jsx(R,{})})})]})}H.defaultProps={toggleDir:()=>{}};let B=H;r()}catch(e){r(e)}})},4767:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});let r=(0,n(6508).makeStyles)({uniqId:"footer"})((e,t,n)=>({link:{margin:e.spacing(1,1.5)},footer:{position:"relative",paddingBottom:e.spacing(8),"& ul":{margin:0,padding:0},"& li":{listStyle:"none",marginBottom:e.spacing(),"& a":{fontSize:14,textDecoration:"none !important","&:hover":{color:e.palette.primary.main}}},"& p":{[e.breakpoints.down("md")]:{padding:e.spacing(0,3)}},[`& .${n.accordionRoot}`]:{margin:"0 auto",marginTop:e.spacing(2)}},title:{color:"dark"===e.palette.mode?e.palette.primary.light:e.palette.primary.dark,fontSize:14,textTransform:"uppercase",marginBottom:e.spacing(3),fontWeight:e.typography.fontWeightBold},logo:{display:"flex",alignItems:"center",marginBottom:e.spacing(3),[e.breakpoints.down("md")]:{justifyContent:"center",padding:e.spacing(0,3)},"& img":{filter:"grayscale(1) contrast(0.5) brightness(1.5)",width:48,marginRight:e.spacing()},"& h6":{color:e.palette.text.disabled}},footerDesc:{display:"block",fontSize:14,marginBottom:e.spacing(2),[e.breakpoints.down("md")]:{textAlign:"center"}},socmed:{display:"flex",justifyContent:"center",marginBottom:e.spacing(4),"& button":{margin:e.spacing(),color:"dark"===e.palette.mode?e.palette.primary.light:e.palette.primary.dark,background:e.palette.divider,width:36,height:36,"& i":{color:"dark"===e.palette.mode?e.palette.primary.light:e.palette.primary.dark}},"& i":{fontSize:24}},icon:{"& + div":{background:"none !important",padding:e.spacing(1.5,1.5,1.5,4),width:"calc(100% - 32px)"}},selectLang:{margin:"0 auto",width:200,display:"flex !important",marginTop:e.spacing(2),[`& .${n.icon}`]:{top:"21!important",position:"relative","& + div":{padding:e.spacing(1.5,3,1.5,1)}},"& fieldset":{boxShadow:"0 1.5px 12px 2px rgba(0, 0, 0, 0.06)",border:`1px solid ${"dark"===e.palette.mode?e.palette.primary.light:e.palette.primary.main} !important`,"& legend":{top:5,position:"relative",borderTop:`1px solid ${"dark"===e.palette.mode?e.palette.primary.light:e.palette.primary.main}`}}},siteMapItem:{[e.breakpoints.down("sm")]:{paddingBottom:"0 !important",paddingTop:"0 !important"}},accordionRoot:{background:"none",boxShadow:"none",maxWidth:480},accordionContent:{margin:0},accordionIcon:{padding:0}}))},3900:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>i.Z});var i=n(3222),a=e([i]);i=(a.then?(await a)():a)[0],r()}catch(e){r(e)}})},5001:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>W});var i=n(6689),a=n.n(i),o=n(9868),s=n.n(o),l=n(8442),c=n(3882),p=n.n(c),g=n(3819),d=n.n(g),m=n(7934),u=n.n(m),h=n(4475),f=n.n(h),y=n(2217),x=n.n(y),j=n(6578),b=n.n(j),v=n(1377),w=n(975),k=n(4820),O=n(7930),S=n.n(O),N=n(6752),M=n.n(N),D=n(9665),z=n(2519),L=n(5711),P=n(781),I=n(997),T=e([w]);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}w=(T.then?(await T)():T)[0];let R=0;function C(e,t,n){return{id:R+=1,name:e,url:t,offset:n}}let H=a().forwardRef(function(e,t){return I.jsx(x(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({to:e.to},e))});function E(e){let t=(0,l.useTheme)(),n=s()(t.breakpoints.down("md")),r=s()(t.breakpoints.up("md")),{t:a}=(0,v.useTranslation)("common"),{0:o,1:c}=(0,i.useState)(!1),g=!1,m=()=>{let e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80;g!==t&&(c(t),g=t)};(0,i.useEffect)(()=>{window.addEventListener("scroll",m)},[]);let{classes:h,cx:y}=(0,L.Z)(),{onToggleDark:j,onToggleDir:O,invert:N}=e,{0:T}=(0,i.useState)([C(P.Z[0],"#"+P.Z[0],200),C(P.Z[1],"#"+P.Z[1],200),C(P.Z[2],"#"+P.Z[2],200),C(P.Z[3],"#"+P.Z[3],200)]),{0:Z,1:E}=(0,i.useState)(!1),R=()=>{E(!Z)};return(0,I.jsxs)(i.Fragment,{children:[n&&I.jsx(k.Z,{open:Z,toggleDrawer:R}),I.jsx(p(),{component:"div",position:"relative",id:"header",className:y(h.header,o&&h.fixed,Z&&h.openDrawer),children:I.jsx(f(),{children:(0,I.jsxs)("div",{className:h.headerContent,children:[(0,I.jsxs)("nav",{className:y(h.navLogo,N&&h.invert),children:[n&&I.jsx(u(),{onClick:R,className:y("hamburger hamburger--spin",h.mobileMenu,Z&&"is-active"),size:"large",children:I.jsx("span",{className:"hamburger-box",children:I.jsx("span",{className:y(h.bar,"hamburger-inner")})})}),I.jsx("div",{className:h.logo,children:N?(0,I.jsxs)(D.Z,{href:z.Z.agency.home,children:[I.jsx("img",{src:S(),alt:"logo"}),M().agency.name]}):(0,I.jsxs)(x(),{href:"#home",children:[I.jsx("img",{src:S(),alt:"logo"}),M().agency.name]})})]}),(0,I.jsxs)("nav",{className:y(h.navMenu,N&&h.invert),children:[r&&(0,I.jsxs)(b(),{items:P.Z,currentClassName:"active",children:[T.map(e=>I.jsx("li",{children:N?I.jsx(d(),{component:D.Z,href:"/"+e.url,children:a("agency-landing.header_"+e.name)}):I.jsx(d(),{component:H,offset:e.offset||0,href:e.url,children:a("agency-landing.header_"+e.name)})},e.id.toString())),I.jsx("li",{children:I.jsx(d(),{component:D.Z,to:z.Z.agency.contact,children:a("agency-landing.header_contact")})})]}),I.jsx(w.Z,{toggleDark:j,toggleDir:O,invert:N})]})]})})})]})}E.defaultProps={invert:!1};let W=E;r()}catch(e){r(e)}})},4820:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f}),n(6689);var r=n(4180),i=n.n(r),a=n(4192),o=n.n(a),s=n(834),l=n.n(s),c=n(8315),p=n.n(c),g=n(1377),d=n(2519),m=n(5711),u=n(781),h=n(997);let f=function(e){let{classes:t,cx:n}=(0,m.Z)(),{toggleDrawer:r,open:a}=e,{t:s,i18n:c}=(0,g.useTranslation)("common"),f="/"+c.language;return h.jsx(i(),{open:a,onClose:r,onOpen:r,classes:{paper:t.paperNav},children:h.jsx(()=>h.jsx("div",{className:t.mobileNav,role:"presentation",onClick:r,onKeyDown:r,children:h.jsx("div",{className:n(t.menu,a&&t.menuOpen),children:(0,h.jsxs)(o(),{component:"nav",children:[u.Z.map((e,n)=>h.jsx(l(),{button:!0,component:"a",href:`#${e}`,style:{animationDuration:.15*n+"s"},children:h.jsx(p(),{primary:s("agency-landing.header_"+e),className:t.menuList})},n.toString())),h.jsx(l(),{button:!0,component:"a",href:f+d.Z.agency.contact,style:{animationDuration:.15*u.Z.length+"s"},children:h.jsx(p(),{primary:s("agency-landing.header_contact"),className:t.menuList})})]})})}),{})})}},975:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>Z});var i=n(6689),a=n(1377),o=n(5768),s=n.n(o),l=n(7934),c=n.n(l),p=n(32),g=n.n(p),d=n(4192),m=n.n(d),u=n(9685),h=n.n(u),f=n(834),y=n.n(f),x=n(3191),j=n.n(x),b=n(3646),v=n.n(b),w=n(5612),k=n.n(w),O=n(7163),S=n.n(O),N=n(6008),M=n(5711),D=n(4017),z=n.n(D),L=n(997),P=e([N]);N=(P.then?(await P)():P)[0];let T="light";function I(e){let{0:t,1:n}=(0,i.useState)(null),{classes:r,cx:o}=(0,M.Z)(),{0:l,1:p}=(0,i.useState)(null),{0:d,1:u}=(0,i.useState)("dark"===T),{t:f,i18n:x}=(0,a.useTranslation)("common"),b=x.language;function w(){p(null)}(0,i.useEffect)(()=>{n(document.getElementById("main-wrap"))});let O=!!l,D=O?"simple-popover":void 0,{invert:P}=e;return(0,L.jsxs)("div",{className:r.setting,children:[L.jsx(c(),{"aria-describedby":D,"aria-label":"Settings",onClick:function(e){p(e.currentTarget)},className:o(r.icon,O&&r.active,P&&r.invert),size:"large",children:L.jsx(g(),{fontSize:"inherit"})}),(0,L.jsxs)(s(),{id:D,open:O,anchorEl:l,onClose:w,container:t,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[L.jsx(m(),{component:"nav",className:r.modeMenu,"aria-label":"Mode-menu",subheader:L.jsx(h(),{component:"div",children:f("agency-landing.header_theme")}),children:L.jsx(y(),{children:L.jsx(S(),{component:"div",children:(0,L.jsxs)(k(),{component:"label",container:!0,alignItems:"center",spacing:1,children:[L.jsx(k(),{item:!0,children:f("agency-landing.header_light")}),L.jsx(k(),{item:!0,children:L.jsx(j(),{checked:d,onChange:()=>{u(!d),e.toggleDark()},value:d,inputProps:{"aria-label":"checkbox"}})}),L.jsx(k(),{item:!0,children:f("agency-landing.header_dark")})]})})})}),L.jsx(v(),{}),L.jsx(m(),{component:"nav",className:r.langMenu,"aria-label":"Language-menu",subheader:L.jsx(h(),{component:"div",children:f("agency-landing.header_language")}),children:z().i18n.locales.map(t=>L.jsx(N.Z,{ssg:z().ssg,locale:t,checked:t===b,toggleDir:e.toggleDir,closePopup:w},t))})]})]})}"undefined"!=typeof Storage&&(T=localStorage.getItem("luxiTheme")||"light"),I.defaultProps={invert:!1};let Z=I;r()}catch(e){r(e)}})},5711:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(6508),i=n(1029),a=n.n(i);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let s={width:16,height:16,borderRadius:"50%",display:"inline-block",position:"relative",marginRight:5,top:1,background:`url(${a()}) no-repeat transparent`,backgroundSize:"16px auto",'&[class="ar"]':{backgroundPosition:"0 3px"},'&[class="zh"]':{backgroundPosition:"0 -12px"},'&[class="en"]':{backgroundPosition:"0 -28px"},'&[class="de"]':{backgroundPosition:"0 -44px"},'&[class="id"]':{backgroundPosition:"0 -62px"},'&[class="pt"]':{backgroundPosition:"0 -79px"}},l=(0,r.makeStyles)({uniqId:"header"})((e,t,n)=>({"@keyframes slideRight":{from:{opacity:0,transform:"translateX(-100px)"},to:{opacity:1,transform:"none"}},fixed:{},openDrawer:{},header:{color:e.palette.text.primary,background:"none",boxShadow:"none",transition:"all 0.5s ease-out",position:"fixed",zIndex:1,"& .MuiContainer-root":{padding:0},"& > *":{[e.breakpoints.down("sm")]:{padding:0}},"& nav":{transition:"all 0.5s ease-out"},[`&.${n.fixed}`]:{position:"fixed",top:0,boxShadow:e.shadows[4],background:e.palette.background.paper,zIndex:1e3,[`& .${n.logo}`]:{"& a":{color:e.palette.text.primary},"& img":{height:32,width:32}},[`& .${n.bar}`]:{[e.breakpoints.down("md")]:{backgroundColor:e.palette.text.secondary,"&:after, &:before":{backgroundColor:e.palette.text.secondary}}},"& nav":{padding:e.spacing(1,0),"& ul":{"& li":{"& a":{color:e.palette.text.primary}}}},[`& .${n.vDivider}`]:{minHeight:e.spacing(3)},[`& .${n.icon}`]:{"& svg":{fill:e.palette.text.secondary}}},[`&.${n.openDrawer}`]:{zIndex:1600,boxShadow:"none",[`& .${n.logo}`]:{"& a":{color:e.palette.text.primary}}}},headerContent:{display:"flex",alignItems:"center",justifyContent:"space-between","& nav":{alignItems:"center",padding:e.spacing(2),display:"flex",[e.breakpoints.down("sm")]:{padding:e.spacing(2,0)}}},logo:{"& a":{textDecoration:"none",display:"flex",fontSize:22,color:e.palette.text.primary,alignItems:"center",fontWeight:500,[e.breakpoints.down("md")]:{color:e.palette.common.white}},"& img":{transition:"all 0.3s ease-out",width:48,height:48,marginRight:e.spacing(),[e.breakpoints.only("md")]:{marginLeft:e.spacing(2)}}},active:{},invert:{},navLogo:{[`&.${n.invert}`]:{[`& .${n.logo}`]:{"& a":{color:e.palette.text.primary}},[`& .${n.mobileMenu}`]:{[`& .${n.bar}`]:{[e.breakpoints.down("md")]:{backgroundColor:e.palette.text.secondary,"&:after, &:before":{backgroundColor:e.palette.text.secondary}}}}}},navMenu:{"& > *":{margin:0,[e.breakpoints.up("lg")]:{margin:e.spacing(0,1)}},[`&.${n.invert}`]:{"& ul":{"& li":{"& a":{transition:"all 0.3s ease-out",color:e.palette.text.primary}}}},"& ul":{listStyle:"none","& li":{[e.breakpoints.up("lg")]:{margin:e.spacing(0,2)},listStyle:"none",position:"relative",display:"inline-block","& a":{color:e.palette.common.white,marginTop:e.spacing(.5),textTransform:"capitalize",fontSize:18,fontWeight:e.typography.fontWeightMedium,background:"none !important",boxShadow:"none",position:"relative",padding:"6px",margin:e.spacing(0,1),minWidth:0,"&:after":{content:'""',borderBottom:"3px solid #fff",width:"0%",position:"absolute",bottom:0,left:"50%",transition:"all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)"},"&:hover":{transition:"all 0.3s ease-out","&:after":{width:"60%",left:8,borderBottomColor:e.palette.primary.light}}},'&[class="active"]':{"& a":{color:e.palette.primary.light,"&:after":{borderBottomColor:e.palette.primary.light,width:"60%",left:8}}}}}},langMenu:{textTransform:"capitalize","& i":function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},s)},modeMenu:{textTransform:"capitalize"},vDivider:{margin:e.spacing(0,1),borderLeft:`1px solid ${e.palette.divider}`,height:"100%",transition:"all 0.5s ease-out",minHeight:e.spacing(6)},icon:{},setting:{[`& .${n.icon}`]:{fontSize:32,transition:"all 0.3s ease",color:e.palette.common.white,[`&.${n.invert}`]:{color:e.palette.text.primary}},[`& .${n.active}`]:{transform:"rotate(30deg)"}},titleMenu:{textTransform:"capitalize"},bar:{},menu:{},menuOpen:{},paperNav:{width:"100%",[e.breakpoints.up(680)]:{width:300}},mobileMenu:{margin:e.spacing(0,1),[`& .${n.bar}`]:{backgroundColor:e.palette.common.white,"&:after, &:before":{backgroundColor:e.palette.common.white}},'&[class*="is-active"]':{[`& .${n.bar}`]:{backgroundColor:e.palette.text.secondary,"&:after, &:before":{backgroundColor:e.palette.text.secondary}}}},mobileNav:{background:e.palette.background.paper,[`& .${n.menu}`]:{padding:e.spacing(0,2),overflow:"auto",top:e.spacing(15),width:"100%",position:"absolute",height:"calc(100% - 80px)","& a":{animationName:"$slideRight",animationTimingFunction:"ease"}}},menuList:{textTransform:"capitalize","& span":{fontSize:24}}}))},5218:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>i.Z});var i=n(5001),a=e([i]);i=(a.then?(await a)():a)[0],r()}catch(e){r(e)}})},781:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});let r=["about","services","our-expertise","case-studies"]},6008:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>w}),n(6689);var i=n(1377),a=n(6959),o=n.n(a),s=n(834),l=n.n(s),c=n(3787),p=n.n(c),g=n(1211),d=n.n(g),m=n(8315),u=n.n(m),h=n(1163),f=n(4017),y=n.n(f),x=n(8884),j=n(997),b=e([x]);x=(b.then?(await b)():b)[0];let v=({locale:e,checked:t,toggleDir:n,ssg:r,closePopup:a})=>{let s=(0,h.useRouter)(),{t:c}=(0,i.useTranslation)("common"),g=e=>{if(x.Z.cache(e),a(),y().ssg){let t=s.asPath,n=s.pathname;Object.keys(s.query).forEach(t=>{if("locale"===t){n=n.replace(`[${t}]`,e);return}n=n.replace(`[${t}]`,s.query[t])}),e&&(t=n),s.push(t)}else{let{pathname:t,asPath:n,query:r}=s;s.push({pathname:t,query:r},n,{locale:e})}"ar"===e?n("rtl"):n("ltr")};return(0,j.jsxs)(l(),{role:void 0,dense:!0,button:!0,onClick:()=>g(e),children:[j.jsx(p(),{className:"flag",children:j.jsx("i",{className:e})}),j.jsx(u(),{primary:c(e)}),t&&j.jsx(d(),{children:j.jsx(o(),{color:"primary"})})]})};v.defaultProps={ssg:!1};let w=v;r()}catch(e){r(e)}})},9710:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>N});var i=n(6689),a=n(5418),o=n.n(a),s=n(3103),l=n.n(s),c=n(2651),p=n.n(c),g=n(7730),d=n.n(g),m=n(9271),u=n.n(m),h=n(1377),f=n(1163),y=n(4767),x=n(8884),j=n(4017),b=n.n(j),v=n(997),w=e([x]);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function S(e){let{0:t,1:n}=(0,i.useState)(null),{classes:r}=(0,y.Z)(),a=(0,f.useRouter)(),{t:s,i18n:c}=(0,h.useTranslation)("common"),{0:g,1:m}=(0,i.useState)({lang:c.language});return(0,i.useEffect)(()=>{n(document.getElementById("main-wrap"))},[]),v.jsx(p(),{variant:"standard",value:g.lang,onChange:function(t){let n=t.target.value;if(m(e=>O(O({},e),{},{[t.target.name]:n})),b().ssg){let e=a.asPath,t=a.pathname;Object.keys(a.query).forEach(e=>{if("locale"===e){t=t.replace(`[${e}]`,n);return}t=t.replace(`[${e}]`,a.query[e])}),n&&(e=t),a.push(e)}else{let{pathname:e,asPath:t,query:r}=a;a.push({pathname:e,query:r},t,{locale:n})}x.Z.cache(n),"ar"===n?e.toggleDir("rtl"):e.toggleDir("ltr")},MenuProps:{container:t},startAdornment:v.jsx(l(),{className:r.icon,position:"start",children:v.jsx(o(),{})}),className:r.selectLang,input:v.jsx(d(),{name:"lang",id:"outlined-lang-simple"}),children:b().i18n.locales.map(e=>v.jsx(u(),{value:e,children:s(e)},e))})}x=(w.then?(await w)():w)[0],S.defaultProps={toggleDir:()=>{}};let N=S;r()}catch(e){r(e)}})},9665:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(6689),i=n.n(r),a=n(1664),o=n.n(a),s=n(1163),l=n(997);let c=["children","skipLocaleHandling","to"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let d=i().forwardRef((e,t)=>{let{children:n,skipLocaleHandling:r,to:i}=e,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,c),p=(0,s.useRouter)(),d=a.locale||p.query.locale||"",m=i||p.asPath;return 0===m.indexOf("http")&&(r=!0),d&&!r&&(m=m?`/${d}${m}`:p.pathname.replace("[locale]",d)),l.jsx(o(),g(g({href:m},a),{},{children:l.jsx(l.Fragment,{children:n})}))})},6619:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>m});var i=n(6689),a=n(6508),o=n(5218),s=n(3900),l=n(997),c=e([o,s]);[o,s]=c.then?(await c)():c;let g=e=>20*e,d=(0,a.makeStyles)({uniqId:"main_container"})(e=>({mainWrap:{position:"relative",width:"100%",overflow:"hidden",background:"dark"===e.palette.mode?e.palette.background.default:e.palette.background.paper,color:e.palette.text.primary},spaceTop:{marginTop:e.spacing(20),[e.breakpoints.down("lg")]:{marginTop:g(6)},[e.breakpoints.down("sm")]:{marginTop:e.spacing(10)}},spaceTopShort:{marginTop:e.spacing(10)}}));function p(e){let{classes:t}=d(),{onToggleDark:n,onToggleDir:r,children:a,invert:c}=e;return l.jsx(i.Fragment,{children:(0,l.jsxs)("div",{className:t.mainWrap,children:[l.jsx(o.Z,{onToggleDark:n,onToggleDir:r,invert:c}),a,l.jsx("section",{className:t.spaceTopShort,children:l.jsx(s.Z,{toggleDir:r})})]})})}p.defaultProps={invert:!1};let m=p;r()}catch(e){r(e)}})},2856:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>i.Z});var i=n(6619),a=e([i]);i=(a.then?(await a)():a)[0],r()}catch(e){r(e)}})},5352:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c}),n(6689);var r=n(6859),i=n(1418),a=n.n(i),o=n(6752),s=n.n(o),l=n(997);let c=()=>(0,l.jsxs)(r.Head,{children:[l.jsx("meta",{charSet:"utf-8"}),l.jsx("meta",{name:"description",content:s().agency.desc}),l.jsx("link",{rel:"icon",href:"/favicons/favicon.ico"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/favicons/apple-icon-57x57.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/favicons/apple-icon-60x60.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/favicons/apple-icon-72x72.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/favicons/apple-icon-76x76.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/favicons/apple-icon-114x114.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/favicons/apple-icon-120x120.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/favicons/apple-icon-144x144.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/favicons/apple-icon-152x152.png"}),l.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-icon-180x180.png"}),l.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-icon-192x192.png"}),l.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),l.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicons/favicon-96x96.png"}),l.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),l.jsx("link",{rel:"manifest",href:"/favicons/manifest.json"}),l.jsx("meta",{name:"msapplication-TileColor",content:"#ffffff"}),l.jsx("meta",{name:"msapplication-TileImage",content:"/favicons/ms-icon-144x144.png"}),l.jsx("meta",{name:"theme-color",content:a().oceanBlue.palette.primary.main}),l.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),l.jsx("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap",rel:"stylesheet"}),l.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),l.jsx("link",{href:"https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css",rel:"stylesheet"}),l.jsx("meta",{property:"author",content:"luxi"}),l.jsx("meta",{property:"og:site_name",content:"luxi.ux-maestro.com"}),l.jsx("meta",{property:"og:locale",content:"en_US"}),l.jsx("meta",{property:"og:type",content:"website"}),l.jsx("meta",{property:"twitter:site",content:"luxi.ux-maestro.com"}),l.jsx("meta",{property:"twitter:domain",content:"luxi.ux-maestro.com"}),l.jsx("meta",{property:"twitter:creator",content:"luxi"}),l.jsx("meta",{property:"twitter:card",content:"summary"}),l.jsx("meta",{property:"twitter:image:src",content:"/images/agency-logo.png"}),l.jsx("meta",{property:"og:url",content:s().agency.url}),l.jsx("meta",{property:"og:title",content:s().agency.desc}),l.jsx("meta",{property:"og:description",content:s().agency.desc}),l.jsx("meta",{name:"twitter:site",content:s().agency.url}),l.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),l.jsx("meta",{name:"twitter:image",content:s().agency.img}),l.jsx("meta",{property:"og:image",content:s().agency.img}),l.jsx("meta",{property:"og:image:width",content:"1200"}),l.jsx("meta",{property:"og:image:height",content:"630"})]})},4420:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{default:()=>y}),n(6689);var i=n(6859),a=n.n(i),o=n(730),s=n(8442),l=n(9135),c=n(5352),p=n(4017),g=n.n(p),d=n(997),m=e([o,l]);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}[o,l]=m.then?(await m)():m;class f extends a(){render(){let e=this.props.__NEXT_DATA__.query.locale||g().i18n.defaultLocale;return(0,d.jsxs)(i.Html,{lang:e,dir:"ar"===e?"rtl":"ltr",children:[d.jsx(c.Z,{}),(0,d.jsxs)("body",{children:[d.jsx("div",{id:"preloader",style:{position:"fixed",zIndex:2001,background:"#fafafa",width:"100%",height:"100%"},children:d.jsx("img",{style:{opacity:.5,position:"fixed",top:"calc(50% - 50px)",left:"calc(50% - 50px)"},src:"/images/loading.gif",alt:"loading"})}),(0,s.getInitColorSchemeScript)(),d.jsx(i.Main,{}),d.jsx(i.NextScript,{})]})]})}}f.getInitialProps=async e=>{let t=e.renderPage,n=(0,l.Z)(),{extractCriticalToChunks:r}=(0,o.default)(n);e.renderPage=()=>t({enhanceApp:e=>function(t){return d.jsx(e,h({emotionCache:n},t))}});let i=await a().getInitialProps(e),s=r(i.html).styles.map(e=>d.jsx("style",{"data-emotion":`${e.key} ${e.ids.join(" ")}`,dangerouslySetInnerHTML:{__html:e.css}},e.key));return h(h({},i),{},{emotionStyleTags:s,namespacesRequired:["common","agency-landing"]})};let y=f;r()}catch(e){r(e)}})},6752:e=>{e.exports={agency:{name:"Agency",desc:"Luxiren Agency - React Single Landing Page Template",prefix:"luxiren",footerText:"Luxiren Agency - All Rights Reserved 2021",logoText:"Luxiren Agency",projectName:"Agency Theme",url:"luxireact.ux-maestro.com/agency",img:"/static/images/agency-logo.png",notifMsg:"Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula."}}},2519:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});let r={agency:{home:"/",contact:"/contact"}}},9696:(e,t,n)=>{"use strict";n.d(t,{Lr:()=>i,XK:()=>a});var r=n(6508);let i=(0,r.makeStyles)({uniqId:"textAlign"})({textCenter:{textAlign:"center"},textLeft:{textAlign:"left"},textRight:{textAlign:"right"}});(0,r.makeStyles)({uniqId:"float"})({floatLeft:{float:"left"},floatRight:{float:"right"}});let a=(0,r.makeStyles)({uniqId:"text"})(e=>({title:{fontWeight:e.typography.fontWeightBold,fontSize:48,lineHeight:"65px",[e.breakpoints.down("lg")]:{fontSize:38,lineHeight:"60px"},[e.breakpoints.down("sm")]:{fontSize:28,lineHeight:"44px"}},title2:{fontSize:36,lineHeight:"56px",fontWeight:e.typography.fontWeightBold,[e.breakpoints.down("lg")]:{fontSize:32,lineHeight:"48px"},[e.breakpoints.down("sm")]:{fontSize:24,lineHeight:"36px"}},subtitle:{fontWeight:e.typography.fontWeightMedium,fontSize:28,lineHeight:"40px",[e.breakpoints.down("lg")]:{fontSize:24,lineHeight:"36px"},[e.breakpoints.down("sm")]:{fontSize:18,lineHeight:"28px"}},subtitle2:{fontWeight:e.typography.fontWeightRegular,fontSize:22,lineHeight:"32px",[e.breakpoints.down("lg")]:{fontSize:20,lineHeight:"32px"},[e.breakpoints.down("sm")]:{fontSize:16,lineHeight:"24px"}},paragraph:{fontWeight:e.typography.fontWeightRegular,fontSize:16,lineHeight:"24px"},caption:{fontWeight:e.typography.fontWeightRegular,fontSize:16,lineHeight:"24px",[e.breakpoints.down("sm")]:{fontSize:14,lineHeight:"22px"}}}));(0,r.makeStyles)({uniqId:"hidden"})(e=>({lgDown:{[e.breakpoints.down("sm")]:{display:"none"}},mdDown:{[e.breakpoints.down("lg")]:{display:"none"}},smDown:{[e.breakpoints.down("md")]:{display:"none"}},xsDown:{[e.breakpoints.down("sm")]:{display:"none"}},lgUp:{[e.breakpoints.up("lg")]:{display:"none"}},mdUp:{[e.breakpoints.up("md")]:{display:"none"}},smUp:{[e.breakpoints.up("sm")]:{display:"none"}}}))},9135:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>o});var i=n(8440),a=e([i]);function o(){return(0,i.default)({key:"css",prepend:!0})}i=(a.then?(await a)():a)[0],r()}catch(e){r(e)}})},7930:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODEuNiA1MDMuNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgxLjYgNTAzLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDNBOUY0O30KCS5zdDF7ZmlsbDojMjE5NkYzO30KCS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ2OS40LDI5Mi45TDI3MC45LDQ5MS40Yy0xNi4zLDE2LjMtNDIuOSwxNi4zLTU5LjIsMEwxMy4zLDI5Mi45Qy0zLDI3Ni42LTMsMjUwLDEzLjMsMjMzLjdMMjExLjcsMzUuMwoJCWMxNi4zLTE2LjMsNDIuOS0xNi4zLDU5LjIsMGwxOTguNCwxOTguNEM0ODUuNywyNTAsNDg1LjcsMjc2LjYsNDY5LjQsMjkyLjl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDY4LjMsMjY5LjlMMjY5LjksNDY4LjNjLTE2LjMsMTYuMy00Mi45LDE2LjMtNTkuMiwwTDEyLjIsMjY5LjljLTE2LjMtMTYuMy0xNi4zLTQyLjksMC01OS4yTDIxMC42LDEyLjIKCQljMTYuMy0xNi4zLDQyLjktMTYuMyw1OS4yLDBsMTk4LjQsMTk4LjRDNDg0LjYsMjI2LjksNDg0LjYsMjUzLjYsNDY4LjMsMjY5Ljl6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTE0LjksMzM5LjNWMTgzaDE5LjV2MTM5SDIwN3YxNy4zSDExNC45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNDgsMjg5LjZ2LTc5LjJoMTguNXY3OC4xYzAsMjMsMTIuOSwzNy41LDM2LjgsMzcuNWMyMy45LDAsMzctMTQuNSwzNy0zNy41di03OC4xaDE4LjV2NzkuMgoJCQljMCwzMS45LTE4LjgsNTIuNS01NS42LDUyLjVDMjY2LjUsMzQyLjEsMjQ4LDMyMS4zLDI0OCwyODkuNnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},1029:e=>{e.exports="/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png"}};