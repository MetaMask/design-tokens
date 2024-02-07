// Import StyleDictionary using ES module syntax
import StyleDictionaryModule from 'style-dictionary';
// Attempt to import everything under a namespace from '@tokens-studio/sd-transforms'
import * as sdTransforms from '@tokens-studio/sd-transforms';

// Assuming sdTransforms applies directly as a function or setup call
// If sdTransforms is an object with methods, you might need to call a specific method instead
// This example directly uses sdTransforms assuming it's a function or has a default method for application
// Adjust based on actual structure which you can determine by inspecting the sdTransforms object

// Apply sdTransforms to StyleDictionary
// This line might need adjustment based on the actual API of sdTransforms
const StyleDictionary = sdTransforms.default
  ? sdTransforms.default(StyleDictionaryModule)
  : StyleDictionaryModule;

// Define a custom format
StyleDictionary.registerFormat({
  name: 'custom/cssVariables',
  formatter({ dictionary }) {
    return `/**
 * Do not edit directly
 * Generated on ${new Date().toUTCString()}
 */
:root {
${dictionary.allProperties
  .map((token) => {
    // Convert token names to CSS variable names
    const tokenName = token.name.replace(
      /([A-Z])/g,
      (match) => `-${match.toLowerCase()}`,
    );
    return `  --${tokenName}: ${token.value};`;
  })
  .join('\n')}
}
`;
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
