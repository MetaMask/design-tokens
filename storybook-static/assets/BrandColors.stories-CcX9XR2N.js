import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{b as y}from"./shadows-C-ttOB05.js";import{u as w,g as k}from"./useJsonColor-DYnRusTp.js";import{C as j,g as f}from"./index-DHjrTlOH.js";import{useMDXComponents as b}from"./index-BrnU7xv7.js";import{ao as S}from"./index-DvvF0ogX.js";import{C}from"./ColorSwatch-BJ4zEXqK.js";import"./index-DJO9vBfz.js";import"./fontFamilies-hd_sU_9-.js";import"./index-CHSMmTBw.js";import"./iframe-C4LTHpTP.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";function l(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...b(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(o.h1,{id:"brand-colors-first-tier",children:"Brand colors (first tier)"}),`
`,r.jsxs(o.p,{children:["Brand colors form the foundation of our color system. They use literal color names (like red, green, etc.) and a numeric scale (where 000 is light and 900 is dark) by default. These colors are essential to maintaining visual consistency across our products and are primarily used as a reference for the ",r.jsx(o.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),"."]}),`
`,r.jsxs(o.p,{children:["While these colors are fundamental to our design system, they ",r.jsx(o.strong,{children:"should not"})," be used directly in most cases. Instead, they should be referenced via ",r.jsx(o.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),", which form the second tier of our design tokens."]}),`
`,r.jsx(o.p,{children:"However, in rare cases where a color needs to remain constant across themes (e.g., white always being white, regardless of light or dark mode), the corresponding brand color can be used. Always ensure there isn't an existing theme token that could be used instead."}),`
`,r.jsx(o.p,{children:r.jsxs(o.em,{children:["The majority of our brand color progressions were generated using the ",r.jsx(o.a,{href:"https://0to255.com/037dd6",rel:"nofollow",children:"0to255"})," tool, which helps ensure smooth and consistent color transitions."]})}),`
`,r.jsxs(o.ul,{children:[`
`,r.jsx(o.li,{children:r.jsx(o.a,{href:"#brand-colors",children:r.jsx(o.strong,{children:"Brand colors"})})}),`
`,r.jsx(o.li,{children:r.jsx(o.a,{href:"#best-practices",children:r.jsx(o.strong,{children:"Best practices"})})}),`
`,r.jsx(o.li,{children:r.jsx(o.a,{href:"#references",children:r.jsx(o.strong,{children:"References"})})}),`
`]}),`
`,r.jsx(o.h2,{id:"brand-colors",children:"Brand colors"}),`
`,r.jsx(S,{of:n}),`
`,r.jsx(o.h2,{id:"best-practices",children:"Best Practices"}),`
`,r.jsxs(o.h3,{id:"-do-use-brand-colors-when-the-color-should-remain-the-same-across-all-themes",children:["✅ ",r.jsx(o.strong,{children:"DO"}),": Use brand colors when the color should remain the same across all themes"]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`fill: brandColors.white.white000;
fill: var(--brand-colors-white-white000);
`})}),`
`,r.jsxs(o.h3,{id:"-dont-use-brand-colors-without-checking-for-an-existing-theme-token-first",children:["❌ ",r.jsx(o.strong,{children:"DON'T"}),": Use brand colors without checking for an existing theme token first"]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`background-color: brandColors.blue.blue500; // Brand color instead of theme.color.primary.default
background-color: var(--brand-colors-blue-blue500); // Brand color instead of var(--color-primary-default)
`})}),`
`,r.jsxs(o.h3,{id:"-do-store-non-token-colors-in-a-global-file",children:["✅ ",r.jsx(o.strong,{children:"DO"}),": Store non-token colors in a global file"]}),`
`,r.jsx(o.p,{children:"If you need to use colors that are not included in the design tokens, store these colors in a global file in your project. This makes it easier to keep track of these colors and update them as needed. Always consider this as a last resort, and strive to use design tokens wherever possible."}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`// colors.js
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
`,r.jsxs(o.h3,{id:"-dont-use-non-token-colors-directly-in-your-components",children:["❌ ",r.jsx(o.strong,{children:"DON'T"}),": Use non-token colors directly in your components"]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`// Avoid
background-color: #abc123; // Custom color not in design tokens or global file
`})}),`
`,r.jsx(o.h2,{id:"references",children:"References"}),`
`,r.jsxs(o.ul,{children:[`
`,r.jsxs(o.li,{children:[r.jsx(o.a,{href:"http://www.0to255.com/037DD6",rel:"nofollow",children:"0to255"}),": The tool we used to generate our color progressions."]}),`
`,r.jsxs(o.li,{children:[r.jsx(o.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),": Our internal Figma library for brand colors. Please note that this is for internal use only."]}),`
`]})]})}function v(e={}){const{wrapper:o}={...b(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(l,{...e})}):l(e)}const Y={title:"Colors/Brand Colors",component:j,parameters:{docs:{page:v}}},n={render:()=>{const{brandColor:e}=w();return console.log("brandColor JSON",e),r.jsx(j,{swatchData:e})}},s={render:()=>{const e=k("--brand-colors");return r.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.values(e).map(({color:o,name:a})=>r.jsx(C,{color:o,backgroundColor:a,textBackgroundColor:"transparent",textColor:f(o,o),name:a},a))})}},t={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(y).map(([e,o])=>r.jsx(C,{color:o,textBackgroundColor:"transparent",textColor:f(o,o),name:`brandColor.${e}`},e))})};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      brandColor
    } = useJsonColor();
    console.log('brandColor JSON', brandColor);
    return <ColorSwatchGroup swatchData={brandColor} />;
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,m,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      }) => <ColorSwatch key={name} color={color} backgroundColor={name} textBackgroundColor="transparent" textColor={getContrastYIQ(color, color)} name={name} />)}
      </div>;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fill, 300px)'
  }}>
      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
      {Object.entries(brandColorJS).map(([name, color]) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, color)} name={\`brandColor.\${name}\`} />)}
    </div>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const E=["Figma","CSS","JS"];export{s as CSS,n as Figma,t as JS,E as __namedExportsOrder,Y as default};
