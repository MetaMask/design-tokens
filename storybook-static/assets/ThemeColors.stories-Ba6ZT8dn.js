import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{d as I,t as U,s as E,l as R}from"./shadows-BwW2xRjo.js";import{u as M,b as _,g as N}from"./useJsonColor-ij7pvMeu.js";import{C as u}from"./index-BLLQnaU7.js";import{useMDXComponents as A}from"./index-CqcSDpoT.js";import{e as g}from"./index-ko3NSW-A.js";import{C as h}from"./ColorSwatch-BXIK0s2u.js";import"./index-CDs2tPxN.js";import"./fontFamilies-hd_sU_9-.js";import"./index-CNC-DfTt.js";import"./iframe-BEg4ME4K.js";import"../sb-preview/runtime.js";import"./index-B-yFm4aN.js";import"./index-DYADbu9O.js";import"./index-BbYVc9ui.js";import"./index-DrFu-skq.js";const t={colors:I,typography:U,shadows:E};function p(o){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...A(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"theme-colors-second-tier",children:"Theme Colors (second tier)"}),`
`,e.jsx(r.p,{children:"Theme colors are design tokens that are named based on their function rather than their actual color values. This makes them adaptable to different themes and ensures consistency and accessibility across your project."}),`
`,e.jsxs(r.p,{children:["For most use cases, these function-based color tokens should be your first choice. They are derived from the first-tier ",e.jsx(r.a,{href:"/docs/colors-brand-colors--docs",children:e.jsx(r.strong,{children:"brand colors"})})," and are applied to high-level applications within the UI."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#light-theme-colors",children:e.jsx(r.strong,{children:"Light theme colors"})})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#dark-theme-colors",children:e.jsx(r.strong,{children:"Dark theme colors"})})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#best-practices",children:e.jsx(r.strong,{children:"Best practices"})})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#references",children:e.jsx(r.strong,{children:"References"})})}),`
`]}),`
`,e.jsx(r.h2,{id:"light-theme-colors",children:"Light theme colors"}),`
`,e.jsx(r.p,{children:"The light theme colors are designed to be used in the styles for MetaMask UI when the light theme is active"}),`
`,e.jsx(g,{of:s}),`
`,e.jsx(r.h2,{id:"dark-theme-colors",children:"Dark theme colors"}),`
`,e.jsx(r.p,{children:"The dark theme colors are designed for MetaMask UI when the dark theme is active. They have the same names as the light theme colors but different values. If you are using the light theme colors for their intended purpose, your UI will automatically be compatible with the dark theme."}),`
`,e.jsx(g,{of:l}),`
`,e.jsx(r.h2,{id:"best-practices",children:"Best practices"}),`
`,e.jsxs(r.h3,{id:"-do-use-theme-colors-in-your-components",children:["✅ ",e.jsx(r.strong,{children:"DO"}),": Use theme colors in your components"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`// Good
background-color: theme.colors.background.default;
background-color: var(--color-background-default);
`})}),`
`,e.jsxs(r.h3,{id:"-dont-use-static-color-values-or-brand-colors-in-your-components",children:["❌ ",e.jsx(r.strong,{children:"DON'T"}),": Use static color values or brand colors in your components"]}),`
`,e.jsxs(r.p,{children:["See when to use ",e.jsx(r.a,{href:"/docs/colors-brand-colors--docs#best-practices",children:"brand colors"})]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`// Avoid
background-color: #ffffff; // Static color value
background-color: brandColors.white.white000; // Brand color
background-color: var(--brand-colors-white-white000); // Brand color
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
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),"(internal use only)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/Light-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Light Theme Colors Library"}),"(internal use only)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/Dark-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Dark Theme Colors Library"}),"(internal use only)"]}),`
`]})]})}function G(o={}){const{wrapper:r}={...A(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(p,{...o})}):p(o)}const te={title:"Colors/Theme Colors",component:u,parameters:{docs:{page:G}}},s={render:()=>{const{lightTheme:o}=M();return o?(console.log("lightTheme",o),e.jsx(u,{swatchData:o})):null}},l={render:()=>{const{darkTheme:o}=M();return console.log("darkTheme",o),o?e.jsx("div",{style:{margin:"-1rem",padding:"1rem"},children:e.jsx(u,{swatchData:o,borderColor:o.border.muted.value,textBackgroundColor:o.background.default.value,textColor:o.text.default.value})}):null},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:_.grey[800].value}]}}},c={render:()=>{const o=N("--color-");return e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(o).map(([r,{color:n,name:a}])=>e.jsx(h,{color:n,backgroundColor:a,name:a},r))})}},d={render:()=>{const o=N("--color-");return e.jsx("div",{style:{backgroundColor:"var(--color-background-default)",margin:"-1rem",padding:"1rem"},children:e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(o).map(([r,{color:n,name:a}])=>e.jsx(h,{color:n,name:a,backgroundColor:a,borderColor:"var(--color-border-muted)",textBackgroundColor:"var(--color-background-default)",textColor:"var(--color-text-default)"},r))})})},backgrounds:{default:"dark",values:[{name:"dark",value:"var(--color-background-default)"}]},decorators:[o=>(typeof document<"u"&&document.documentElement.setAttribute("data-theme","dark"),e.jsx(o,{}))]},i={render:()=>e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(R.colors).flatMap(([o,r])=>Object.entries(r).map(([n,a])=>e.jsx(h,{color:a,name:`color.${o}.${n}`},`${o}-${n}`)))})},m={render:()=>e.jsx("div",{style:{backgroundColor:t.colors.background.default,margin:"-1rem",padding:"1rem"},children:e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(t.colors).flatMap(([o,r])=>Object.entries(r).map(([n,a])=>e.jsx(h,{color:a,name:`color.${o}.${n}`,borderColor:t.colors.border.muted,textBackgroundColor:t.colors.background.default,textColor:t.colors.text.default},`${o}-${n}`)))})}),parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:t.colors.background.default}]}}};var k,x,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,j,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <ColorSwatchGroup swatchData={darkTheme} borderColor={darkTheme.border.muted.value} textBackgroundColor={darkTheme.background.default.value} textColor={darkTheme.text.default.value} />
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,v,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      }]) => <ColorSwatch key={name} color={color} backgroundColor={colorName} name={colorName} />)}
      </div>;
  }
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,w,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        }]) => <ColorSwatch key={name} color={color} name={colorName} backgroundColor={colorName} borderColor="var(--color-border-muted)" textBackgroundColor="var(--color-background-default)" textColor="var(--color-text-default)" />)}
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
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var O,F,$;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'grid',\n    gap: '16px',\n    gridTemplateColumns: 'repeat(auto-fill, 300px)'\n  }}>\n      {Object.entries(lightThemeJS.colors).flatMap(([category, colorObj]) => Object.entries(colorObj).map(([name, color]) => <ColorSwatch key={`${category}-${name}`} color={color} name={`color.${category}.${name}`} />))}\n    </div>\n}",...($=(F=i.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var B,J,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: darkThemeJS.colors.background.default,
    margin: '-1rem',
    padding: '1rem'
  }}>
      <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, 300px)'
    }}>
        {Object.entries(darkThemeJS.colors).flatMap(([category, colorObj]) => Object.entries(colorObj).map(([name, color]) => <ColorSwatch key={\`\${category}-\${name}\`} color={color} name={\`color.\${category}.\${name}\`} borderColor={darkThemeJS.colors.border.muted} textBackgroundColor={darkThemeJS.colors.background.default} textColor={darkThemeJS.colors.text.default} />))}
      </div>
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: darkThemeJS.colors.background.default
      }]
    }
  }
}`,...(L=(J=m.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const se=["FigmaLightTheme","FigmaDarkTheme","CSSLightTheme","CSSDarkTheme","JSLightTheme","JSDarkTheme"];export{d as CSSDarkTheme,c as CSSLightTheme,l as FigmaDarkTheme,s as FigmaLightTheme,m as JSDarkTheme,i as JSLightTheme,se as __namedExportsOrder,te as default};
