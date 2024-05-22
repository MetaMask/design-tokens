const fs = require('fs').promises;

/**
 * Generate JavaScript object mapping for light theme colors based on a JSON file.
 * @param {string} inputFilePath - The path to the JSON file containing light theme color definitions.
 * @param {string} colorsOutputFilePath - The path where the JavaScript colors object file should be written.
 */
async function generateThemeFiles(inputFilePath, colorsOutputFilePath) {
  try {
    const data = await fs.readFile(inputFilePath, 'utf8');
    const colorData = JSON.parse(data);
    let jsOutput = "import { brandColor } from '../../brandColor';\n";
    jsOutput += "import type { ThemeColors } from '../types';\n\n";
    jsOutput += 'export const colors: ThemeColors = {\n';

    Object.entries(colorData).forEach(([colorCategory, colorDetails]) => {
      jsOutput += `  ${colorCategory}: {\n`;

      Object.entries(colorDetails).forEach(([shade, details]) => {
        // Remove asterisks, convert kebab-case to camelCase, and simplify certain names
        let cleanShade = shade
          .replace(/\*/gu, '')
          .replace(/-([a-z])/giu, (_, p1) => p1.toUpperCase());
        cleanShade = cleanShade.replace(/\s*\(strong\)\s*/giu, '');

        let valueReference;
        // Match patterns with and without percentage modifiers
        if (details.value.match(/^\{.*?\..*?\}(-\d+%)?$/u)) {
          valueReference = details.value.replace(
            /\{(.*?)\.(.*?)(-\d+%)?\}/u,
            (_, p1, p2, p3) => {
              // Replace "-" with "_" and remove "%" for percentage-based modifiers
              return `brandColor.${p1}${p2}${
                p3 ? p3.replace(/-/g, '_').replace(/%/g, '') : ''
              }`;
            },
          );
        } else if (details.value.match(/^#[0-9A-Fa-f]{6,8}$/u)) {
          // If the value is a hex color, ensure it is in quotes
          valueReference = `'${details.value}'`;
        } else {
          valueReference = details.value;
        }
        const jsLine = `    ${cleanShade}: ${valueReference},  // ${details.description}\n`;
        jsOutput += jsLine;
      });

      jsOutput += '  },\n';
    });

    jsOutput += '};\n';

    // Write the JavaScript colors file
    await fs.writeFile(colorsOutputFilePath, jsOutput);
    console.log(
      `JavaScript colors file has been created successfully at ${colorsOutputFilePath}. There are some manual steps to complete in the output files.`,
    );
  } catch (error) {
    console.error('Failed to read or write files:', error);
  }
}

// Light Theme
// const inputFilePathLight = '../src/figma/lightTheme.json';
// const colorsOutputFilePathLight = '../src/js/themes/lightTheme/colors.ts';
// generateThemeFiles(inputFilePathLight, colorsOutputFilePathLight);

// Dark Theme
// const inputFilePathDark = '../src/figma/darkTheme.json';
// const colorsOutputFilePathDark = '../src/js/themes/darkTheme/colors.ts';
// generateThemeFiles(inputFilePathDark, colorsOutputFilePathDark);

// Light Theme Brand Evolution
const inputFilePathLight = '../src/figma/lightThemeBrandEvolution.json';
const colorsOutputFilePathLight =
  '../src/js/themesBrandEvolution/lightTheme/colors.ts';
generateThemeFiles(inputFilePathLight, colorsOutputFilePathLight);

// Dark Theme Brand Evolution
const inputFilePathDark = '../src/figma/darkThemeBrandEvolution.json';
const colorsOutputFilePathDark =
  '../src/js/themesBrandEvolution/darkTheme/colors.ts';
generateThemeFiles(inputFilePathDark, colorsOutputFilePathDark);
