# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

## From version 3.0.0 to 4.0.0

## Migration from Version 3.0.0 to 4.0.0

### Changes to Color Tokens (Breaking Changes)

In this version, significant updates have been made to color tokens, including additions, modifications, and removals. To upgrade to version 4, ensure that the following tokens are not present in your codebase:

### Removed

#### CSS

```
--brand-colors-grey-grey030
--brand-colors-grey-grey040
--brand-colors-grey-grey750
--brand-colors-blue-blue000
--brand-colors-green-green000
--brand-colors-red-red000
--brand-colors-yellow-yellow000
--brand-colors-orange-orange000
--brand-colors-violet
--brand-colors-white-white010
--color-overlay-inverse
--color-primary-shadow
--color-primary-disabled
--color-secondary
--color-error-shadow
--color-error-disabled
--color-warning-alternative
--color-warning-disabled
--color-success-alternative
--color-success-disabled
--color-info-alternative
--color-info-disabled
--color-network-
```

### Changed

#### CSS

```
--brand-colors-white-white000 to --brand-colors-white
--brand-colors-black-black000 to --brand-colors-black
```

### Themed Colors

- overlay-inverse removed
- primary-shadow removed
- primary-disabled removed
- secondary colors removed
- error-shadow removed
- error-disabled removed
- warning-alternative removed
- warning-disabled removed
- success-alternative removed
- success-disabled removed
- info-alternative removed
- info-disabled removed
- network colors removed
- shadow-primary added
- shadow-error added
- button colors removed

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
