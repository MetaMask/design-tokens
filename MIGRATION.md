# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

## From version 3.0.0 to 4.0.0

## Migration from Version 3.0.0 to 4.0.0

### Changes to Color Tokens (Breaking Changes)

In this version, significant updates have been made to color tokens, including additions, modifications, and removals. To upgrade to version 4, ensure that the following tokens are not present in your codebase:

### Brand Colors

#### JS Tokens

```
brandColor.grey030 modified to brandColor.grey025
brandColor.grey040 modified to brandColor.grey050
brandColor.grey750 removed
brandColor.blue000 modified to brandColor.blue025
brandColor.green000 modified to brandColor.green025
brandColor.red000 modified to brandColor.red025
brandColor.yellow000 modified to brandColor.yellow025
brandColor.orange000 modified to brandColor.orange025
brandColor.violet300 removed
brandColor.white000 modified to brandColor.white
brandColor.white010 removed
brandColor.black000 modified to brandColor.black
```

### Themed Colors

#### JS Tokens

```
colors.overlay.inverse removed
colors.primary.shadow modified to colors.shadow.primary
colors.primary.disabled removed
colors.secondary.default removed
colors.secondary.alternative removed
colors.secondary.muted removed
colors.secondary.inverse removed
colors.secondary.disabled removed
colors.error.shadow modified to colors.shadow.primary
colors.error.disabled removed
colors.warning.alternative removed
colors.warning.disabled removed
colors.success.alternative removed
colors.success.disabled removed
colors.info.alternative removed
colors.info.disabled removed
colors.networks.goerli.default removed
colors.networks.goerli.inverse removed
colors.networks.localhost.default removed
colors.networks.localhost.inverse removed
colors.networks.sepolia.default removed
colors.networks.sepolia.inverse removed
```

- [From version 2.1.1 to 3.0.0](#from-version-211-to-300)
- [From version 3.0.0 to 4.0.0](#from-version-300-to-400)

## From version 3.0.0 to 4.0.0

### Changes to Color Tokens (Breaking Changes)

In this version, significant updates have been made to color tokens, including modifications and removals. To upgrade to version 4, ensure that the following tokens have been updated in your codebase:

### Removed

#### CSS

```
### Brand colors
--brand-colors-grey-grey750
--brand-colors-violet-violet300
--brand-colors-white-white010

### Theme colors
--color-primary-disabled
--color-secondary-default
--color-secondary-alternative
--color-secondary-muted
--color-secondary-inverse
--color-secondary-disabled
--color-error-disabled
--color-warning-alternative
--color-warning-disabled
--color-success-alternative
--color-success-disabled
--color-info-alternative
--color-info-disabled
--color-network-goerli-default
--color-network-goerli-inverse
--color-network-localhost-default
--color-network-localhost-inverse
--color-network-sepolia-default
--color-network-sepolia-inverse

### Component colors
--component-button-primary-shadow
--component-button-danger-shadow
```

#### JS

```
TBC
```

### Changed

#### CSS

```
### Brand colors
--brand-colors-grey-grey030 modified to --brand-colors-grey-grey025
--brand-colors-grey-grey040 modified to --brand-colors-grey-grey050
--brand-colors-blue-blue000 modified to --brand-colors-blue-blue025
--brand-colors-green-green000 modified to --brand-colors-green-green025
--brand-colors-red-red000 modified to --brand-colors-red-red025
--brand-colors-yellow-yellow000 modified to --brand-colors-yellow-yellow025
--brand-colors-orange-orange000 modified to --brand-colors-orange-orange025
--brand-colors-white-white000 modified to --brand-colors-white
--brand-colors-black-black000 modified to --brand-colors-black

## Theme colors
--color-primary-shadow modified to --color-shadow-primary
--color-error-shadow modified to --color-shadow-primary
```

#### JS

```
TBC
```

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
