const fs = require('fs').promises;

/**
 * Generate TypeScript types and JavaScript object mapping for brand colors based on a JSON file.
 * @param inputFilePath - The path to the JSON file containing color definitions.
 * @param typesOutputFilePath - The path where the TypeScript types file should be written.
 * @param colorsOutputFilePath - The path where the JavaScript colors object file should be written.
 */
async function generateBrandColorFiles(
  inputFilePath,
  typesOutputFilePath,
  colorsOutputFilePath,
) {
  try {
    const data = await fs.readFile(inputFilePath, 'utf8');
    const colorData = JSON.parse(data);
    let tsOutput = 'export type BrandColor = {\n';
    let jsOutput =
      "import type { BrandColor } from './brandColor.types';\n\nexport const brandColor: BrandColor = {\n";

    Object.entries(colorData).forEach(([colorFamily, shades]) => {
      Object.entries(shades).forEach(([shade, details]) => {
        // Skip shades with a dash followed by numbers and a percent sign (e.g., "500-10%")
        if (!/-\d+%/u.test(shade)) {
          const comment = `/** ${colorFamily}/${colorFamily}${shade}: ${details.value} */`;
          const tsLine = `  ${colorFamily}${shade}: string;`;
          tsOutput += `  ${comment}\n  ${tsLine}\n`;

          // Add color definition to jsOutput
          const jsComment = `  // ${
            colorFamily.charAt(0).toUpperCase() + colorFamily.slice(1)
          }\n`;
          const jsLine = `  ${colorFamily}${shade}: '${details.value}',\n`;
          jsOutput += jsComment + jsLine;
        }
      });
    });

    tsOutput += '};\n';
    jsOutput += '};\n';

    // Write the TypeScript types file
    await fs.writeFile(typesOutputFilePath, tsOutput);
    console.log(
      `TypeScript types file has been created successfully at ${typesOutputFilePath}.`,
    );

    // Write the JavaScript colors file
    await fs.writeFile(colorsOutputFilePath, jsOutput);
    console.log(
      `JavaScript colors file has been created successfully at ${colorsOutputFilePath}.`,
    );
  } catch (error) {
    console.error('Failed to read or write files:', error);
  }
}

const inputFilePath = './src/figma/brandColorBrandEvolution.json';
const typesOutputFilePath = './src/js/brandColor/brandColor.types.ts';
const colorsOutputFilePath = './src/js/brandColor/brandColor.ts';
generateBrandColorFiles(
  inputFilePath,
  typesOutputFilePath,
  colorsOutputFilePath,
);
