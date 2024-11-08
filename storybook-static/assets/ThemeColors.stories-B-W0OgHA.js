import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{e as R,t as _,s as G,l as g}from"./shadows-C-ttOB05.js";import{u as Y,b as X,g as E}from"./useJsonColor-DYnRusTp.js";import{C as p,g as h}from"./index-DHjrTlOH.js";import{useMDXComponents as Q}from"./index-BrnU7xv7.js";import{ao as k}from"./index-DvvF0ogX.js";import{C as u}from"./ColorSwatch-BJ4zEXqK.js";import"./index-DJO9vBfz.js";import"./fontFamilies-hd_sU_9-.js";import"./index-CHSMmTBw.js";import"./iframe-C4LTHpTP.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";const m={colors:R,typography:_,shadows:G},x=(r,e="")=>Object.entries(r).flatMap(([n,t])=>{const f=e?`${e}.${n}`:n;return typeof t=="string"?[{name:f,color:t}]:x(t,f)});function b(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...Q(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"theme-colors-second-tier",children:"Theme Colors (second tier)"}),`
`,o.jsx(e.p,{children:"Theme colors are design tokens that are named based on their function rather than their actual color values. This makes them adaptable to different themes and ensures consistency and accessibility across your project."}),`
`,o.jsxs(e.p,{children:["For most use cases, these function-based color tokens should be your first choice. They are derived from the first-tier ",o.jsx(e.a,{href:"/docs/colors-brand-colors--docs",children:o.jsx(e.strong,{children:"brand colors"})})," and are applied to high-level applications within the UI."]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#light-theme-colors",children:o.jsx(e.strong,{children:"Light theme colors"})})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#dark-theme-colors",children:o.jsx(e.strong,{children:"Dark theme colors"})})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#best-practices",children:o.jsx(e.strong,{children:"Best practices"})})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#references",children:o.jsx(e.strong,{children:"References"})})}),`
`]}),`
`,o.jsx(e.h2,{id:"light-theme-colors",children:"Light theme colors"}),`
`,o.jsx(e.p,{children:"The light theme colors are designed to be used in the styles for MetaMask UI when the light theme is active"}),`
`,o.jsx(k,{of:s}),`
`,o.jsx(e.h2,{id:"dark-theme-colors",children:"Dark theme colors"}),`
`,o.jsx(e.p,{children:"The dark theme colors are designed for MetaMask UI when the dark theme is active. They have the same names as the light theme colors but different values. If you are using the light theme colors for their intended purpose, your UI will automatically be compatible with the dark theme."}),`
`,o.jsx(k,{of:a}),`
`,o.jsx(e.h2,{id:"best-practices",children:"Best practices"}),`
`,o.jsxs(e.h3,{id:"-do-use-theme-colors-in-your-components",children:["✅ ",o.jsx(e.strong,{children:"DO"}),": Use theme colors in your components"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`// Good
background-color: theme.colors.background.default;
background-color: var(--color-background-default);
`})}),`
`,o.jsxs(e.h3,{id:"-dont-use-static-color-values-or-brand-colors-in-your-components",children:["❌ ",o.jsx(e.strong,{children:"DON'T"}),": Use static color values or brand colors in your components"]}),`
`,o.jsxs(e.p,{children:["See when to use ",o.jsx(e.a,{href:"/docs/colors-brand-colors--docs#best-practices",children:"brand colors"})]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`// Avoid
background-color: #ffffff; // Static color value
background-color: brandColors.white.white000; // Brand color
background-color: var(--brand-colors-white-white000); // Brand color
`})}),`
`,o.jsxs(e.h3,{id:"-do-store-non-token-colors-in-a-global-file",children:["✅ ",o.jsx(e.strong,{children:"DO"}),": Store non-token colors in a global file"]}),`
`,o.jsx(e.p,{children:"If you need to use colors that are not included in the design tokens, store these colors in a global file in your project. This makes it easier to keep track of these colors and update them as needed. Always consider this as a last resort, and strive to use design tokens wherever possible."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`// colors.js
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
`,o.jsxs(e.h3,{id:"-dont-use-non-token-colors-directly-in-your-components",children:["❌ ",o.jsx(e.strong,{children:"DON'T"}),": Use non-token colors directly in your components"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`// Avoid
background-color: #abc123; // Custom color not in design tokens or global file
`})}),`
`,o.jsx(e.h2,{id:"references",children:"References"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),"(internal use only)"]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/Light-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Light Theme Colors Library"}),"(internal use only)"]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/Dark-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Dark Theme Colors Library"}),"(internal use only)"]}),`
`]})]})}function z(r={}){const{wrapper:e}={...Q(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(b,{...r})}):b(r)}const ce={title:"Colors/Theme Colors",component:p,parameters:{docs:{page:z}}},s={render:()=>{const{lightTheme:r}=Y();return r?(console.log("lightTheme",r),o.jsx(p,{swatchData:r})):null}},a={render:()=>{var e,n;const{darkTheme:r}=Y();return console.log("darkTheme",r),r?o.jsx("div",{style:{margin:"-1rem",padding:"1rem"},children:o.jsx(p,{swatchData:r,theme:(n=(e=r==null?void 0:r.background)==null?void 0:e.default)==null?void 0:n.value})}):null},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:X.grey[800].value}]}}},l={render:()=>{const r=E("--color-");return o.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(r).map(([e,{color:n,name:t}])=>o.jsx(u,{color:n,textBackgroundColor:"transparent",textColor:h(n,g.colors.background.default),backgroundColor:t,name:t},e))})}},c={render:()=>{const r=E("--color-");return o.jsx("div",{style:{backgroundColor:"var(--color-background-default)",margin:"-1rem",padding:"1rem"},children:o.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(r).map(([e,{color:n,name:t}])=>o.jsx(u,{color:n,name:t,backgroundColor:t,borderColor:"var(--color-border-muted)",textBackgroundColor:"transparent",textColor:h(n,m.colors.background.default)},e))})})},backgrounds:{default:"dark",values:[{name:"dark",value:"var(--color-background-default)"}]},decorators:[r=>(typeof document<"u"&&document.documentElement.setAttribute("data-theme","dark"),o.jsx(r,{}))]},d={render:()=>{const r=x(g.colors);return o.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:r.map(({name:e,color:n})=>o.jsx(u,{color:n,textBackgroundColor:"transparent",textColor:h(n,g.colors.background.default),name:e},e))})}},i={render:()=>{const r=x(m.colors);return o.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)",padding:"1rem",margin:"-1rem",backgroundColor:m.colors.background.default},children:r.map(({name:e,color:n})=>o.jsx(u,{color:n,textBackgroundColor:"transparent",textColor:h(n,m.colors.background.default),name:e},e))})}};var C,j,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const {
      lightTheme
    } = useJsonColor();
    if (!lightTheme) {
      return null; // or some fallback component
    }
    console.log('lightTheme', lightTheme);
    return <ColorSwatchGroup swatchData={lightTheme} />;
  }
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var T,S,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const {
      darkTheme
    } = useJsonColor();
    console.log('darkTheme', darkTheme);
    if (!darkTheme) {
      return null; // or some fallback component
    }
    return <div style={{
      margin: '-1rem',
      padding: '1rem'
    }}>
        <ColorSwatchGroup swatchData={darkTheme} theme={darkTheme?.background?.default?.value} />
      </div>;
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: brandColor.grey[800].value
      }]
    }
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,D,J;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const lightThemeColors = getCSSVariablesFromStylesheet('--color-');
    return <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, 300px)'
    }}>
        {Object.entries(lightThemeColors).map(([name, {
        color,
        name: colorName
      }]) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, lightThemeJS.colors.background.default // TODO Use CSS instead of JS object once CSS object is cleaned up
      )} backgroundColor={colorName} name={colorName} />)}
      </div>;
  }
}`,...(J=(D=l.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var B,F,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const darkThemeColors = getCSSVariablesFromStylesheet('--color-');
    return <div style={{
      backgroundColor: 'var(--color-background-default)',
      margin: '-1rem',
      padding: '1rem'
    }}>
        <div style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, 300px)'
      }}>
          {Object.entries(darkThemeColors).map(([name, {
          color,
          name: colorName
        }]) => <ColorSwatch key={name} color={color} name={colorName} backgroundColor={colorName} borderColor="var(--color-border-muted)" textBackgroundColor="transparent" textColor={getContrastYIQ(color, darkThemeJS.colors.background.default // TODO Use CSS instead of JS object once CSS object is cleaned up
        )} />)}
        </div>
      </div>;
  },
  backgrounds: {
    default: 'dark',
    values: [{
      name: 'dark',
      value: 'var(--color-background-default)'
    }]
  },
  decorators: [StoryFn => {
    // Check if document object is available
    if (typeof document !== 'undefined') {
      // Add the data-theme attribute to the root element
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    // Render the story
    return <StoryFn />;
  }]
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,I,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const colors = getJSColors(lightThemeJS.colors);
    return <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, 300px)'
    }}>
        {colors.map(({
        name,
        color
      }) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, lightThemeJS.colors.background.default)} name={name} />)}
      </div>;
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,M,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const colors = getJSColors(darkThemeJS.colors);
    return <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, 300px)',
      padding: '1rem',
      margin: '-1rem',
      // negates storybook padding and removes white border
      backgroundColor: darkThemeJS.colors.background.default
    }}>
        {colors.map(({
        name,
        color
      }) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, darkThemeJS.colors.background.default)} name={name} />)}
      </div>;
  }
}`,...(U=(M=i.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const de=["FigmaLightTheme","FigmaDarkTheme","CSSLightTheme","CSSDarkTheme","JSLightTheme","JSDarkTheme"];export{c as CSSDarkTheme,l as CSSLightTheme,a as FigmaDarkTheme,s as FigmaLightTheme,i as JSDarkTheme,d as JSLightTheme,de as __namedExportsOrder,ce as default};
