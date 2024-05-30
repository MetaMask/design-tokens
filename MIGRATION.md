# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

## From version 3.0.0 to 4.0.0

## Migration from Version 3.0.0 to 4.0.0

### Changes to Color Tokens (Breaking Changes)

In this version, significant updates have been made to color tokens, including additions, modifications, and removals. To upgrade to version 4, ensure that the following tokens are not present in your codebase:

### Brand Colors

- grey-030 modified to grey-025
- grey-040 modified to grey-050
- grey-750 removed
- grey-1000 added
- blue-000 modified to blue-025
- blue-050 added
- green-000 modified to green-025
- green-050 added
- red-000 modified to red-025
- red-050 added
- yellow-000 modified to yellow-025
- yellow-050 added
- yellow-700 added
- yellow-800 added
- yellow-900 added
- orange-000 modified to orange-025
- orange-050 added
- purple-025 added
- purple-050 added
- purple-100 added
- purple-200 added
- purple-300 added
- purple-400 added
- purple-600 added
- purple-700 added
- purple-800 added
- purple-900 added
- violet-300 removed
- lime-025 added
- lime-050 added
- lime-100 added
- lime-200 added
- lime-300 added
- lime-400 added
- lime-500 added
- lime-600 added
- lime-700 added
- lime-800 added
- lime-900 added
- white-000 modified to white
- white-010 removed
- black-000 modified to black

#### CSS Tokens

```
--brand-colors-grey-grey030 modified to --brand-colors-grey-grey025
--brand-colors-grey-grey040 modified to --brand-colors-grey-grey050
--brand-colors-grey-grey750 removed
--brand-colors-grey-grey1000 added
--brand-colors-blue-blue000 modified to --brand-colors-blue-blue025
--brand-colors-blue-blue050 added
--brand-colors-green-green000 modified to --brand-colors-green-green025
--brand-colors-green-green050 added
--brand-colors-red-red000 modified to --brand-colors-red-red025
--brand-colors-red-red050 added
--brand-colors-yellow-yellow000 modified to --brand-colors-yellow-yellow025
--brand-colors-yellow-yellow050 added
--brand-colors-yellow-yellow700 added
--brand-colors-yellow-yellow800 added
--brand-colors-yellow-yellow900 added
--brand-colors-orange-orange000 modified to --brand-colors-orange-orange025
--brand-colors-orange-orange050 added
--brand-colors-purple-purple025 added
--brand-colors-purple-purple050 added
--brand-colors-purple-purple100 added
--brand-colors-purple-purple200 added
--brand-colors-purple-purple300 added
--brand-colors-purple-purple400 added
--brand-colors-purple-purple600 added
--brand-colors-purple-purple700 added
--brand-colors-purple-purple800 added
--brand-colors-purple-purple900 added
--brand-colors-violet-violet300 removed
--brand-colors-lime-lime025 added
--brand-colors-lime-lime050 added
--brand-colors-lime-lime100 added
--brand-colors-lime-lime200 added
--brand-colors-lime-lime300 added
--brand-colors-lime-lime400 added
--brand-colors-lime-lime500 added
--brand-colors-lime-lime600 added
--brand-colors-lime-lime700 added
--brand-colors-lime-lime800 added
--brand-colors-lime-lime900 added
--brand-colors-white-white000 modified to --brand-colors-white
--brand-colors-white-white010 removed
--brand-colors-black-black000 modified to --brand-colors-black
```

### Themed Colors

- overlay-inverse removed
- primary-shadow modified to shadow-primary
- primary-disabled removed
- secondary-default removed
- secondary-alternative removed
- secondary-muted removed
- secondary-inverse removed
- secondary-disabled removed
- error-shadow modified to shadow-primary
- error-disabled removed
- warning-alternative removed
- warning-disabled removed
- success-alternative removed
- success-disabled removed
- info-alternative removed
- info-disabled removed
- network-goerli-default removed
- network-goerli-inverse removed
- network-localhost-default removed
- network-localhost-inverse removed
- network-sepolia-default removed
- network-sepolia-inverse removed
- component-button-primary-shadow removed
- component-button-danger-shadow removed

#### CSS Tokens

```
--color-overlay-inverse removed
--color-primary-shadow modified to --color-shadow-primary
--color-primary-disabled removed
--color-secondary-default removed
--color-secondary-alternative removed
--color-secondary-muted removed
--color-secondary-inverse removed
--color-secondary-disabled removed
--color-error-shadow modified to --color-shadow-primary
--color-error-disabled removed
--color-warning-alternative removed
--color-warning-disabled removed
--color-success-alternative removed
--color-success-disabled removed
--color-info-alternative removed
--color-info-disabled removed
--color-network-goerli-default removed
--color-network-goerli-inverse removed
--color-network-localhost-default removed
--color-network-localhost-inverse removed
--color-network-sepolia-default removed
--color-network-sepolia-inverse removed
```

- [From version 2.1.1 to 3.0.0](#from-version-211-to-300)

## From version 2.1.1 to 3.0.0

### Updated CSS Import Paths (Breaking Changes)

In this version, we've updated the paths for importing CSS files to streamline the process and ensure consistency across projects. This change is considered a breaking change and requires updates to your project's import statements.

#### Before the Update

Previously, the CSS import path was structured as follows:

```css
import '../../node_modules/@metamask/design-tokens/src/css/design-token.css';
```

This path directed to the `src` directory, which might not always contain the most optimized version of the CSS.

#### After the Update

To improve efficiency and maintainability, the import path has been updated to:

```css
import '../../node_modules/@metamask/design-tokens/dist/styles.css';
```

This new path points to the `dist` directory, ensuring that you're importing the most optimized and production-ready version of the stylesheet.
