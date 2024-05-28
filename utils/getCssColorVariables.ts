/* eslint-disable import/no-nodejs-modules */
import fs from 'fs';

type ColorValue = {
  [key: string]: string;
};

/**
 * Function to load the generated color CSS file.
 * @param filePath - The file path to the CSS file.
 * @param prefix - The prefix string to parse the colors. Example: brand-colors, color.
 * @returns An object with the `${colorGroup}-${shade}` as keys and hex values as values.
 */
export function getCssColorVariables(
  filePath: string,
  prefix: string,
): ColorValue {
  const cssContent = fs.readFileSync(filePath, 'utf8');
  const regex = new RegExp(`--${prefix}-([\\w-]+):\\s*(#[\\w]+);`, 'gu');
  const variables: { [key: string]: string } = {};
  let match: RegExpExecArray | null;

  while ((match = regex.exec(cssContent)) !== null) {
    if (match[1] && match[2]) {
      variables[match[1]] = match[2];
    }
  }

  return variables;
}
