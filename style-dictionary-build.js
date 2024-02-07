// Import StyleDictionary using ES module syntax
import StyleDictionaryModule from 'style-dictionary';
// Attempt to import everything under a namespace from '@tokens-studio/sd-transforms'
import * as sdTransforms from '@tokens-studio/sd-transforms';

const StyleDictionary = sdTransforms.default
  ? sdTransforms.default(StyleDictionaryModule)
  : StyleDictionaryModule;

// Define a custom format
StyleDictionary.registerFormat({
  name: 'custom/cssVariables',
  formatter({ dictionary }) {
    const baseTokens = [];
    const lightThemeTokens = [];
    const darkThemeTokens = [];

    dictionary.allProperties.forEach(token => {
      // Convert token names to CSS variable names
      const tokenName = token.name.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
      const cssVariable = `  --${tokenName}: ${token.value};`;

      if (token.name.includes('light')) {
        lightThemeTokens.push(cssVariable);
      } else if (token.name.includes('dark')) {
        darkThemeTokens.push(cssVariable);
      } else {
        baseTokens.push(cssVariable);
      }
    });

    return `/**
 * Do not edit directly
 * Generated on ${new Date().toUTCString()}
 */
:root {
${baseTokens.join('\n')}
}

:root {
${lightThemeTokens.join('\n')}
}

[data-theme='dark'] {
${darkThemeTokens.join('\n')}
}`;
  },
});

// Style Dictionary configuration
const config = {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'test-build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'custom/cssVariables',
        },
      ],
    },
  },
};

// Extend and build Style Dictionary
const MyStyleDictionary = StyleDictionary.extend(config);
MyStyleDictionary.buildAllPlatforms();
