import{j as e}from"./jsx-runtime-qGIIFXMu.js";import"./shadows-BwW2xRjo.js";import{u as y,g as w}from"./useJsonColor-ij7pvMeu.js";import{C as b}from"./index-BLLQnaU7.js";import{useMDXComponents as x}from"./index-CqcSDpoT.js";import{e as C}from"./index-ko3NSW-A.js";import{C as j}from"./ColorSwatch-BXIK0s2u.js";import"./index-CDs2tPxN.js";import"./fontFamilies-hd_sU_9-.js";import"./index-CNC-DfTt.js";import"./iframe-BEg4ME4K.js";import"../sb-preview/runtime.js";import"./index-B-yFm4aN.js";import"./index-DYADbu9O.js";import"./index-BbYVc9ui.js";import"./index-DrFu-skq.js";const k={white000:"#ffffff",white010:"#fcfcfc",black000:"#000000",grey030:"#fafbfc",grey040:"#f2f4f6",grey100:"#d6d9dc",grey200:"#bbc0c5",grey300:"#9fa6ae",grey400:"#848c96",grey500:"#6a737d",grey600:"#535a61",grey700:"#3b4046",grey750:"#2e3339",grey800:"#24272a",grey900:"#141618",blue000:"#eaf6ff",blue100:"#a7d9fe",blue200:"#75c4fd",blue300:"#43aefc",blue400:"#1098fc",blue500:"#0376c9",blue600:"#0260a4",blue700:"#024272",blue800:"#01253f",blue900:"#00080d",orange000:"#fef5ef",orange100:"#fde2cf",orange200:"#fbc49d",orange300:"#faa66c",orange400:"#f8883b",orange500:"#f66a0a",orange600:"#bf5208",orange700:"#954005",orange800:"#632b04",orange900:"#321602",green000:"#f3fcf5",green100:"#d6ffdf",green200:"#afecbd",green300:"#86e29b",green400:"#5dd879",green500:"#28a745",green600:"#1c8234",green700:"#145523",green800:"#0a2c12",green900:"#041007",red000:"#fcf2f3",red100:"#f7d5d8",red200:"#f1b9be",red300:"#e88f97",red400:"#e06470",red500:"#d73847",red600:"#b92534",red700:"#8e1d28",red800:"#64141c",red900:"#3a0c10",purple500:"#8b45b6",violet300:"#cfb5f0",yellow000:"#fffdf8",yellow100:"#fefcde",yellow200:"#fff2c5",yellow300:"#ffeaa3",yellow400:"#ffdf70",yellow500:"#ffd33d",yellow600:"#ffc70a"};function t(o){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"brand-colors-first-tier",children:"Brand colors (first tier)"}),`
`,e.jsxs(r.p,{children:["Brand colors form the foundation of our color system. They use literal color names (like red, green, etc.) and a numeric scale (where 000 is light and 900 is dark) by default. These colors are essential to maintaining visual consistency across our products and are primarily used as a reference for the ",e.jsx(r.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),"."]}),`
`,e.jsxs(r.p,{children:["While these colors are fundamental to our design system, they ",e.jsx(r.strong,{children:"should not"})," be used directly in most cases. Instead, they should be referenced via ",e.jsx(r.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),", which form the second tier of our design tokens."]}),`
`,e.jsx(r.p,{children:"However, in rare cases where a color needs to remain constant across themes (e.g., white always being white, regardless of light or dark mode), the corresponding brand color can be used. Always ensure there isn't an existing theme token that could be used instead."}),`
`,e.jsx(r.p,{children:e.jsxs(r.em,{children:["The majority of our brand color progressions were generated using the ",e.jsx(r.a,{href:"https://0to255.com/037dd6",rel:"nofollow",children:"0to255"})," tool, which helps ensure smooth and consistent color transitions."]})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#brand-colors",children:e.jsx(r.strong,{children:"Brand colors"})})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#best-practices",children:e.jsx(r.strong,{children:"Best practices"})})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#references",children:e.jsx(r.strong,{children:"References"})})}),`
`]}),`
`,e.jsx(r.h2,{id:"brand-colors",children:"Brand colors"}),`
`,e.jsx(C,{of:n}),`
`,e.jsx(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(r.h3,{id:"-do-use-brand-colors-when-the-color-should-remain-the-same-across-all-themes",children:["✅ ",e.jsx(r.strong,{children:"DO"}),": Use brand colors when the color should remain the same across all themes"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`fill: brandColors.white.white000;
fill: var(--brand-colors-white-white000);
`})}),`
`,e.jsxs(r.h3,{id:"-dont-use-brand-colors-without-checking-for-an-existing-theme-token-first",children:["❌ ",e.jsx(r.strong,{children:"DON'T"}),": Use brand colors without checking for an existing theme token first"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`background-color: brandColors.blue.blue500; // Brand color instead of theme.color.primary.default
background-color: var(--brand-colors-blue-blue500); // Brand color instead of var(--color-primary-default)
`})}),`
`,e.jsxs(r.h3,{id:"-do-store-non-token-colors-in-a-global-file",children:["✅ ",e.jsx(r.strong,{children:"DO"}),": Store non-token colors in a global file"]}),`
`,e.jsx(r.p,{children:"If you need to use colors that are not included in the design tokens, store these colors in a global file in your project. This makes it easier to keep track of these colors and update them as needed. Always consider this as a last resort, and strive to use design tokens wherever possible."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`// colors.js
export const customColors = {
  myCustomColor: '#abc123',
};

// colors.css
--custom-colors-my-custom-color: #abc123;

// component.js
import { customColors } from './colors.js';

background-color: customColors.myCustomColor;
background-color: var(--custom-colors-my-custom-color);
`})}),`
`,e.jsxs(r.h3,{id:"-dont-use-non-token-colors-directly-in-your-components",children:["❌ ",e.jsx(r.strong,{children:"DON'T"}),": Use non-token colors directly in your components"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`// Avoid
background-color: #abc123; // Custom color not in design tokens or global file
`})}),`
`,e.jsx(r.h2,{id:"references",children:"References"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"http://www.0to255.com/037DD6",rel:"nofollow",children:"0to255"}),": The tool we used to generate our color progressions."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),": Our internal Figma library for brand colors. Please note that this is for internal use only."]}),`
`]})]})}function S(o={}){const{wrapper:r}={...x(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(t,{...o})}):t(o)}const E={title:"Colors/Brand Colors",component:b,parameters:{docs:{page:S}}},n={render:()=>{const{brandColor:o}=y();return e.jsx(b,{swatchData:o})}},s={render:()=>{const o=w("--brand-colors");return e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.values(o).map(({color:r,name:l})=>e.jsx(j,{color:r,backgroundColor:l,name:l},l))})}},a={render:()=>e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(k).map(([o,r])=>e.jsx(j,{color:r,name:`brandColor.${o}`},o))})};var c,d,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      brandColor
    } = useJsonColor();
    return <ColorSwatchGroup swatchData={brandColor} />;
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var h,m,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const cssBrandColors = getCSSVariablesFromStylesheet('--brand-colors');
    return <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, 300px)'
    }}>
        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
        {Object.values(cssBrandColors).map(({
        color,
        name
      }) => <ColorSwatch key={name} color={color} backgroundColor={name} name={name} />)}
      </div>;
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var u,g,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fill, 300px)'
  }}>
      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
      {Object.entries(brandColorJS).map(([name, color]) => <ColorSwatch key={name} color={color} name={\`brandColor.\${name}\`} />)}
    </div>
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const G=["Figma","CSS","JS"];export{s as CSS,n as Figma,a as JS,G as __namedExportsOrder,E as default};
