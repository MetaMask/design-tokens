import{r as b}from"./index-DJO9vBfz.js";const de=a=>{const i={};return Array.from(document.styleSheets).flatMap(r=>{try{return Array.from(r.cssRules)}catch(n){return n instanceof Error?console.error("Access denied to stylesheet: ",r.href,"; Error: ",n.message):console.error("Access denied to stylesheet: ",r.href,"; Unknown error occurred."),[]}}).filter(r=>r.type===CSSRule.STYLE_RULE).filter(r=>r.selectorText.split(",").some(o=>o.trim()===":root"||o.trim()==="[data-theme='light']")).forEach(r=>{const n=r.style;for(let o=0;o<n.length;o++){const e=n[o];if(e!=null&&e.startsWith(a)){const l=getComputedStyle(document.documentElement).getPropertyValue(e).trim(),c=e.replace(a,"").replace(/-/g," ");i[c]={color:l,name:`var(${e})`}}}}),i},L={100:{value:"#d6d9dc",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#bbc0c5",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#9fa6ae",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#848c96",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#6a737d",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#535a61",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#3b4046",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#24272a",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#141618",type:"color",parent:"Brand Colors/v1 - current",description:""},1e3:{value:"#000000",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#f2f4f6",type:"color",parent:"Brand Colors/v1 - current",description:""},"000":{value:"#ffffff",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#fafbfc",type:"color",parent:"Brand Colors/v1 - current",description:""}},D={100:{value:"#a7d9fe",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#75c4fd",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#43aefc",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#1098fc",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#0376c9",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#0260a4",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#024272",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#01253f",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#00080d",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#eaf6ff",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#eaf6ff",type:"color",parent:"Brand Colors/v1 - current",description:""}},w={100:{value:"#afecbd",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#5dd879",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#28a745",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#28a745",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#1c8234",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#145523",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#145523",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#0a2c12",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#041007",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#d6ffdf",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#f3fcf5",type:"color",parent:"Brand Colors/v1 - current",description:""}},x={100:{value:"#f7d5d8",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#f1b9be",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#e88f97",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#e06470",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#d73847",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#8e1d28",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#64141c",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#3a0c10",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#3a0c10",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#fcf2f3",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#fcf2f3",type:"color",parent:"Brand Colors/v1 - current",description:""}},U={100:{value:"#ffdf70",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#ffc70a",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#f8883b",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#f66a0a",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#bf5208",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#954005",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#632b04",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#321602",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#321602",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#fff2c5",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#fefcde",type:"color",parent:"Brand Colors/v1 - current",description:""}},$={100:{value:"#fbc49d",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#faa66c",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#f8883b",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#f66a0a",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#bf5208",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#954005",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#632b04",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#321602",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#321602",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#fde2cf",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#fef5ef",type:"color",parent:"Brand Colors/v1 - current",description:""}},E={100:{value:"#efd2ff",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#cfb5f0",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#d27dff",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#b864f5",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#8b45b6",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#6c2ab2",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#4c1178",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#32054d",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#280a00",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#fbf2ff",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#fcf6ff",type:"color",parent:"Brand Colors/v1 - current",description:""}},S={100:{value:"#b8ef4a",type:"color",parent:"Brand Colors/v1 - current",description:""},200:{value:"#95ca45",type:"color",parent:"Brand Colors/v1 - current",description:""},300:{value:"#7ab040",type:"color",parent:"Brand Colors/v1 - current",description:""},400:{value:"#64993d",type:"color",parent:"Brand Colors/v1 - current",description:""},500:{value:"#457a39",type:"color",parent:"Brand Colors/v1 - current",description:""},600:{value:"#275b35",type:"color",parent:"Brand Colors/v1 - current",description:""},700:{value:"#093a31",type:"color",parent:"Brand Colors/v1 - current",description:""},800:{value:"#022321",type:"color",parent:"Brand Colors/v1 - current",description:""},900:{value:"#011515",type:"color",parent:"Brand Colors/v1 - current",description:""},"025":{value:"#effed9",type:"color",parent:"Brand Colors/v1 - current",description:""},"050":{value:"#e3febd",type:"color",parent:"Brand Colors/v1 - current",description:""}},A={value:"#ffffff",type:"color",parent:"Brand Colors/v1 - current",description:""},R={value:"#000000",type:"color",parent:"Brand Colors/v1 - current",description:""},v={grey:L,blue:D,green:w,red:x,yellow:U,orange:$,purple:E,lime:S,white:A,black:R},j={default:{value:"{grey.800}",type:"color",parent:"Theme Colors/Dark mode",description:"For default neutral backgrounds"},alternative:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For secondary neutral backgrounds."},"default-hover":{value:"#313235",type:"color",parent:"Theme Colors/Dark mode",description:'For "hover" states that use background-default.'},"default-pressed":{value:"#3f4145",type:"color",parent:"Theme Colors/Dark mode",description:'For "pressed" states that use background-alternative.'},"alternative-hover":{value:"#1f2123",type:"color",parent:"Theme Colors/Dark mode",description:'For "hover" states that use background-alternative.'},"alternative-pressed":{value:"#2e3033",type:"color",parent:"Theme Colors/Dark mode",description:'For "pressed" states that use background-alternative.'},hover:{value:"#ffffff0a",type:"color",parent:"Theme Colors/Dark mode",description:'For "hover" state that use no background fill.'},pressed:{value:"#ffffff14",type:"color",parent:"Theme Colors/Dark mode",description:'For "pressed" state that use no background fill.'}},O={default:{value:"{grey.000}",type:"color",parent:"Theme Colors/Dark mode",description:"For default neutral text."},alternative:{value:"{grey.200}",type:"color",parent:"Theme Colors/Dark mode",description:"For softer contrast neutral text"},muted:{value:"{grey.400}",type:"color",parent:"Theme Colors/Dark mode",description:"For the softest contrast neutral text (not accessible)"}},V={default:{value:"{grey.000}",type:"color",parent:"Theme Colors/Dark mode",description:"For default neutral icons"},alternative:{value:"{grey.200}",type:"color",parent:"Theme Colors/Dark mode",description:"For softer neutral icons"},muted:{value:"{grey.400}",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest contrast neutral icons (not accessible)"}},W={default:{value:"{grey.400}",type:"color",parent:"Theme Colors/Dark mode",description:"For soft contrast neutral border"},muted:{value:"#848c9629",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest  contrast neutral border"}},H={default:{value:"#00000099",type:"color",parent:"Theme Colors/Dark mode",description:"For the default shade of screen"},alternative:{value:"#000000cc",type:"color",parent:"Theme Colors/Dark mode",description:"For a stronger shade of screen"},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of overlay/alternative. Used for text, icon or border"}},I={default:{value:"{blue.300}",type:"color",parent:"Theme Colors/Dark mode",description:"For interactive, active, and selected semantics. Used for text, background, icon or border"},alternative:{value:"{blue.200}",type:"color",parent:"Theme Colors/Dark mode",description:"For the stronger contrast primary semantic elements."},muted:{value:"#43aefc26",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest contrast primary semantic backgrounds."},inverse:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of primary/default. Used for text, icon or border"},"default-hover":{value:"#26a2fc",type:"color",parent:"Theme Colors/Dark mode",description:'For the "hover" state of primary-default elements'},"default-pressed":{value:"#3baafd",type:"color",parent:"Theme Colors/Dark mode",description:'For the "pressed" state of primary-default elements'}},J={default:{value:"{red.300}",type:"color",parent:"Theme Colors/Dark mode",description:"For the critical alert semantic elements. Used for text, background, icon or border"},alternative:{value:"{red.200}",type:"color",parent:"Theme Colors/Dark mode",description:"For the stronger contrast error semantic elements."},muted:{value:"#e88f9726",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest contrast critical alert semantic backgrounds."},inverse:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of error/default. Used for text, icon or border"},"default-hover":{value:"#e47782",type:"color",parent:"Theme Colors/Dark mode",description:'For the "hover" state of error-default elements.'},"default-pressed":{value:"#e78891",type:"color",parent:"Theme Colors/Dark mode",description:'For the "pressed" state of error-default elements.'}},M={default:{value:"{yellow.100}",type:"color",parent:"Theme Colors/Dark mode",description:"For the caution alert semantic elements. Used for text, background, icon or border"},muted:{value:"#ffdf7026",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest contrast caution alert semantic backgrounds."},inverse:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of warning/default. Used for text, icon or border"},"default-hover":{value:"#ffe485",type:"color",parent:"Theme Colors/Dark mode",description:'For the "hover" state of warning-default elements'},"default-pressed":{value:"#ffe899",type:"color",parent:"Theme Colors/Dark mode",description:'For the "pressed" state of warning-default elements'}},P={default:{value:"{green.300}",type:"color",parent:"Theme Colors/Dark mode",description:"For the positive semantic elements. Used for text, background, icon or border"},muted:{value:"#28a74526",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest contrast positive semantic backgrounds."},inverse:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of success/default. Used for text, icon or border"},"default-hover":{value:"#2cb94c",type:"color",parent:"Theme Colors/Dark mode",description:'For the "hover" state of success-default elements'},"default-pressed":{value:"#30ca53",type:"color",parent:"Theme Colors/Dark mode",description:'For the "pressed" state of success-default elements'}},Y={default:{value:"{blue.300}",type:"color",parent:"Theme Colors/Dark mode",description:"For informational read-only elements. Used for text, background, icon or border"},muted:{value:"#43aefc26",type:"color",parent:"Theme Colors/Dark mode",description:"For the weakest contrast informational semantic backgrounds."},inverse:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of info/default. Used for text, icon or border"}},_={default:{value:"{purple.300}",type:"color",parent:"Theme Colors/Dark mode",description:"For Flask primary accent color."},inverse:{value:"{grey.900}",type:"color",parent:"Theme Colors/Dark mode",description:"For elements used on top of flask/default. Used for text, icon or border"}},q={default:{value:"#00000066",type:"color",parent:"Theme Colors/Dark mode",description:"For neutral drop shadow color."},primary:{value:"#43aefc33",type:"color",parent:"Theme Colors/Dark mode",description:"For primary drop shadow color."},error:{value:"#ff758466",type:"color",parent:"Theme Colors/Dark mode",description:"For critical/danger drop shadow color."}},z={background:j,text:O,icon:V,border:W,overlay:H,primary:I,error:J,warning:M,success:P,info:Y,flask:_,shadow:q},G={default:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For default neutral backgrounds"},alternative:{value:"{grey.050}",type:"color",parent:"Theme Colors/Light mode",description:"For secondary neutral backgrounds."},"default-hover":{value:"#f5f5f5",type:"color",parent:"Theme Colors/Light mode",description:'For "hover" states that use background-default.'},"default-pressed":{value:"#ebebeb",type:"color",parent:"Theme Colors/Light mode",description:'For "pressed" states that use background-alternative.'},"alternative-hover":{value:"#e7ebee",type:"color",parent:"Theme Colors/Light mode",description:'For "hover" states that use background-alternative.'},"alternative-pressed":{value:"#dbe0e6",type:"color",parent:"Theme Colors/Light mode",description:'For "pressed" states that use background-alternative.'},hover:{value:"#0000000a",type:"color",parent:"Theme Colors/Light mode",description:'For "hover" state that use no background fill.'},pressed:{value:"#00000014",type:"color",parent:"Theme Colors/Light mode",description:'For "pressed" state that use no background fill.'}},K={default:{value:"{grey.900}",type:"color",parent:"Theme Colors/Light mode",description:"For default neutral text."},alternative:{value:"{grey.500}",type:"color",parent:"Theme Colors/Light mode",description:"For softer contrast neutral text"},muted:{value:"{grey.300}",type:"color",parent:"Theme Colors/Light mode",description:"For the softest contrast neutral text (not accessible)"}},Q={default:{value:"{grey.900}",type:"color",parent:"Theme Colors/Light mode",description:"For default neutral icons"},alternative:{value:"{grey.500}",type:"color",parent:"Theme Colors/Light mode",description:"For softer neutral icons"},muted:{value:"{grey.300}",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest contrast neutral icons (not accessible)"}},X={default:{value:"{grey.200}",type:"color",parent:"Theme Colors/Light mode",description:"For soft contrast neutral border"},muted:{value:"#bbc0c566",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest  contrast neutral border"}},Z={default:{value:"#00000099",type:"color",parent:"Theme Colors/Light mode",description:"For the default shade of screen"},alternative:{value:"#000000cc",type:"color",parent:"Theme Colors/Light mode",description:"For a stronger shade of screen"},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of overlay/alternative. Used for text, icon or border"}},N={default:{value:"{blue.500}",type:"color",parent:"Theme Colors/Light mode",description:"For interactive, active, and selected semantics. Used for text, background, icon or border"},alternative:{value:"{blue.600}",type:"color",parent:"Theme Colors/Light mode",description:"For the stronger contrast primary semantic elements."},muted:{value:"#0376c91a",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest contrast primary semantic backgrounds."},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of primary/default. Used for text, icon or border"},"default-hover":{value:"#036ab5",type:"color",parent:"Theme Colors/Light mode",description:'For the "hover" state of primary-default elements'},"default-pressed":{value:"#025ea1",type:"color",parent:"Theme Colors/Light mode",description:'For the "pressed" state of primary-default elements'}},ee={default:{value:"{red.500}",type:"color",parent:"Theme Colors/Light mode",description:"For the critical alert semantic elements. Used for text, background, icon or border"},alternative:{value:"{red.600}",type:"color",parent:"Theme Colors/Light mode",description:"For the stronger contrast error semantic elements."},muted:{value:"#d738471a",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest contrast critical alert semantic backgrounds."},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of error/default. Used for text, icon or border"},"default-hover":{value:"#d02a3a",type:"color",parent:"Theme Colors/Light mode",description:'For the "hover" state of error-default elements.'},"default-pressed":{value:"#bf2635",type:"color",parent:"Theme Colors/Light mode",description:'For the "pressed" state of error-default elements.'}},re={default:{value:"{yellow.500}",type:"color",parent:"Theme Colors/Light mode",description:"For the caution alert semantic elements. Used for text, background, icon or border"},muted:{value:"#bf52081a",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest contrast caution alert semantic backgrounds."},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of warning/default. Used for text, icon or border"},"default-hover":{value:"#ac4a07",type:"color",parent:"Theme Colors/Light mode",description:'For the "hover" state of warning-default elements'},"default-pressed":{value:"#984106",type:"color",parent:"Theme Colors/Light mode",description:'For the "pressed" state of warning-default elements'}},oe={default:{value:"{green.500}",type:"color",parent:"Theme Colors/Light mode",description:"For the positive semantic elements. Used for text, background, icon or border"},muted:{value:"#1c82341a",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest contrast positive semantic backgrounds."},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of success/default. Used for text, icon or border"},"default-hover":{value:"#18712d",type:"color",parent:"Theme Colors/Light mode",description:'For the "hover" state of success-default elements'},"default-pressed":{value:"#156127",type:"color",parent:"Theme Colors/Light mode",description:'For the "pressed" state of success-default elements'}},te={default:{value:"{blue.500}",type:"color",parent:"Theme Colors/Light mode",description:"For informational read-only elements. Used for text, background, icon or border"},muted:{value:"#0376c91a",type:"color",parent:"Theme Colors/Light mode",description:"For the weakest contrast informational semantic backgrounds."},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of info/default. Used for text, icon or border"}},ae={default:{value:"{purple.500}",type:"color",parent:"Theme Colors/Light mode",description:"For Flask primary accent color."},inverse:{value:"{grey.000}",type:"color",parent:"Theme Colors/Light mode",description:"For elements used on top of flask/default. Used for text, icon or border"}},ne={default:{value:"#0000001a",type:"color",parent:"Theme Colors/Light mode",description:"For neutral drop shadow color."},primary:{value:"#0376c933",type:"color",parent:"Theme Colors/Light mode",description:"For primary drop shadow color."},error:{value:"#ca354266",type:"color",parent:"Theme Colors/Light mode",description:"For critical/danger drop shadow color."}},le={background:G,text:K,icon:Q,border:X,overlay:Z,primary:N,error:ee,warning:re,success:oe,info:te,flask:ae,shadow:ne},se=a=>/^#[0-9A-F]{6}$/iu.test(a)||/^#[0-9A-F]{8}$/iu.test(a),pe=()=>{const[a,i]=b.useState({});return b.useEffect(()=>{const r=(e,l)=>{if(e.startsWith("{")&&e.endsWith("}")){const c=e.slice(1,-1).split(".");let t=l;for(const d of c)if(t=t[d],!t)return e;return t.value}return e},o=(e=>{const l={};return Object.entries(e).forEach(([c,t])=>{const d={};Object.entries(t).forEach(([f,u])=>{if(typeof u.value=="string")d[f]={...u,value:r(u.value,v)};else{const y={};Object.entries(u).forEach(([k,p])=>{var h;let s=r(p.value,v);if(!se(s)){const C=s.slice(1,-1).split("."),m=C[0],g=C[1];m&&((h=t[m])!=null&&h[g]?s=r(t[m][g].value,v):console.error("Invalid reference:",s))}const T=p.description??"",F=String(p.value),B=p.value===s?"":` ${F}`;y[k]={...p,value:s,description:T+B}}),d[f]=y}}),l[c]=d}),l})({brandColor:{...v},lightTheme:le,darkTheme:z});i(o)},[]),a};export{v as b,de as g,pe as u};
