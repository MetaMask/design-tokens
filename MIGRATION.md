# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

## From version 3.0.0 to 4.0.0

## Migration from Version 3.0.0 to 4.0.0

### Changes to Color Tokens (Breaking Changes)

In this version, significant updates have been made to color tokens, including modifications, and removals. To upgrade to version 4, ensure that the following tokens are not present in your codebase:

### Brand Colors

#### CSS Variables

```
--brand-colors-grey-grey030 modified to --brand-colors-grey-grey025
--brand-colors-grey-grey040 modified to --brand-colors-grey-grey050
--brand-colors-grey-grey750 removed
--brand-colors-blue-blue000 modified to --brand-colors-blue-blue025
--brand-colors-green-green000 modified to --brand-colors-green-green025
--brand-colors-red-red000 modified to --brand-colors-red-red025
--brand-colors-yellow-yellow000 modified to --brand-colors-yellow-yellow025
--brand-colors-orange-orange000 modified to --brand-colors-orange-orange025
--brand-colors-violet-violet300 removed
--brand-colors-white-white000 modified to --brand-colors-white
--brand-colors-white-white010 removed
--brand-colors-black-black000 modified to --brand-colors-black
```

### Themed Colors

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
