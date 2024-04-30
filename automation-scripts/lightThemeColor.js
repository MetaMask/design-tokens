const fs = require('fs').promises;

/**
 * Generate JavaScript object mapping for light theme colors based on a JSON file.
 * @param {string} inputFilePath - The path to the JSON file containing light theme color definitions.
 * @param {string} colorsOutputFilePath - The path where the JavaScript colors object file should be written.
 */
async function generateLightThemeFiles(inputFilePath, colorsOutputFilePath) {
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
          .replace(/\*/g, '')
          .replace(/-([a-z])/gi, (_, p1) => p1.toUpperCase());
        cleanShade = cleanShade.replace(/\s*\(strong\)\s*/gi, '');

        let valueReference;
        // Match patterns with and without percentage modifiers
        if (details.value.match(/^\{.*?\..*?\}(-\d+%)?$/u)) {
          valueReference = details.value.replace(
            /\{(.*?)\.(.*?)(-\d+%)?\}/u,
            (_, p1, p2, p3) => {
              // Replace "-" with "_" and remove "%" for percentage-based modifiers
              return `brandColor.${p1}${p2}${
                p3 ? p3.replace('-', '_').replace('%', '') : ''
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
      `JavaScript colors file has been created successfully at ${colorsOutputFilePath}.`,
    );
  } catch (error) {
    console.error('Failed to read or write files:', error);
  }
}

const inputFilePath = '../src/figma/lightTheme.json';
const colorsOutputFilePath = '../src/js/themes/lightTheme/colors.ts';
generateLightThemeFiles(inputFilePath, colorsOutputFilePath);
