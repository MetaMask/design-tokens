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

#### JS Tokens

```
brandColor.grey030 modified to brandColor.grey025
brandColor.grey040 modified to brandColor.grey050
brandColor.grey750 removed
brandColor.grey1000 added
brandColor.blue000 modified to brandColor.blue025
brandColor.blue050 added
brandColor.green000 modified to brandColor.green025
brandColor.green050 added
brandColor.red000 modified to brandColor.red025
brandColor.red050 added
brandColor.yellow000 modified to brandColor.yellow025
brandColor.yellow050 added
brandColor.yellow700 added
brandColor.yellow800 added
brandColor.yellow900 added
brandColor.orange000 modified to brandColor.orange025
brandColor.orange050 added
brandColor.purple025 added
brandColor.purple050 added
brandColor.purple100 added
brandColor.purple200 added
brandColor.purple300 added
brandColor.purple400 added
brandColor.purple600 added
brandColor.purple700 added
brandColor.purple800 added
brandColor.purple900 added
brandColor.violet300 removed
brandColor.lime025 added
brandColor.lime050 added
brandColor.lime100 added
brandColor.lime200 added
brandColor.lime300 added
brandColor.lime400 added
brandColor.lime500 added
brandColor.lime600 added
brandColor.lime700 added
brandColor.lime800 added
brandColor.lime900 added
brandColor.white000 modified to brandColor.white
brandColor.white010 removed
brandColor.black000 modified to brandColor.black
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

#### JS Tokens

```
colors.overlay.inverse removed
colors.primary.shadow modified to shadow.primary
colors.primary.disabled removed
colors.secondary.default removed
colors.secondary.alternative removed
colors.secondary.muted removed
colors.secondary.inverse removed
colors.secondary.disabled removed
colors.error.shadow modified to shadow.primary
colors.error.disabled removed
colors.warning.alternative removed
colors.warning.disabled removed
colors.success.alternative removed
colors.success.disabled removed
colors.info.alternative removed
colors.info.disabled removed
colors.network.goerli.default removed
colors.network.goerli.inverse removed
colors.network.localhost.default removed
colors.network.localhost.inverse removed
colors.network.sepolia.default removed
colors.network.sepolia.inverse removed
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
