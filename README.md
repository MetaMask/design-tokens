# MetaMask Design Tokens 🪙

[![npm version](https://badge.fury.io/js/@metamask%2Fdesign-tokens.svg)](https://npmjs.com/package/@metamask/design-tokens) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://metamask.github.io/design-tokens)

## `@metamask/design-tokens`

A collection of design tokens based on MetaMask's design system.

Have a question, suggestion, feedback? Contributors can [create an issue](https://github.com/MetaMask/design-tokens/issues/new/choose) or internal folks can post on the [#metamask-design-system](https://consensys.slack.com/archives/C0354T27M5M) Slack channel. We're here to help! 💁

### Table of Contents

- [Documentation](#documentation)
- [Installation](#installation)
  - [CSS Variables](#css-variables)
  - [CSS-in-JS (React Native)](#css-in-js-react-native)
- [Contributing](#contributing)
  - [Setup](#setup)
  - [Documentation](#documentation)
  - [Figma Tokens](#figma-tokens)
  - [Testing and Linting](#testing-and-linting)
  - [Release & Publishing](#release-publishing)
- [License](#license) TBC

## Documentation

The primary documentation for MetaMask Design Tokens is [storybook](https://metamask.github.io/design-tokens), which describes the different token formats and gives examples of their usage.

## Installation

Currently the metamask design tokens repo supports 2 formats. CSS-in-JS for React Native applications and CSS variables for web applications. These formats are based on its primary consumers [metamask-extension](https://github.com/MetaMask/metamask-extension) and [metamask-mobile](https://github.com/MetaMask/metamask-mobile).

### CSS Variables

1. Install the package.

```sh
yarn add @metamask/design-tokens
```

Import the design tokens stylesheet into your CSS or SCSS.

Please note the file path will depend on where in your project you are importing it from.

```css
@import '../../node_modules/@metamask/design-tokens/src/css/design-tokens';
```

2. Use design token CSS variables in the code.

In CSS/SCSS:

```css
.card {
  --card-color-text: var(--color-text-default);
  --card-color-background: var(--color-background-default);
  --card-color-border: var(--color-border-muted);

  background-color: var(--card-color-background);
  color: var(--card-color-text);
  border: 1px solid var(--card-color-border);
}
```

They also work for inline styles in javascript

```js
<div style={{ color: 'var(--color-error-default)' }}>This was is an error</div>
```

### CSS-in-JS (React Native)

1. Install the package.

```sh
yarn add @metamask/design-tokens
```

2. Use design tokens in code by importing from library:

```js
import { lightTheme, darkTheme } from '@metamask/design-tokens';

// Create provider that swaps theme (sudo code)
<ThemeProvider theme={theme === 'default' ? lightTheme : darkTheme} />;

const createStyles = (theme) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: theme.colors.background.default,
      borderColor: theme.colors.border.default,
    },
  });
```

### Usage

For a detailed list of design tokens visit the MetaMask design token [storybook](https://metamask.github.io/design-tokens)

## Contributing

Follow these steps to below to get the library up and running locally.

### Setup

- Install [Node.js](https://nodejs.org) version 12
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v1](https://yarnpkg.com/en/docs/install)
- Run `yarn setup` to install dependencies and run any requried post-install scripts
  - **Warning:** Do not use the `yarn` / `yarn install` command directly. Use `yarn setup` instead. The normal install command will skip required post-install scripts, leaving your development environment in an invalid state.

### Documentation

We use storybook for documentation. To get storybook up and running use:

```
yarn storybook
```

### Figma Tokens

The primary data for the generation of tokens is based on the json generated from a figma plugin called [Figma Tokens](https://github.com/six7/figma-tokens). This keeps our code in sync with our figma libraries. Currently the token formats are manually generated we are hoping to automate this process in future.

### Testing and Linting

Run `yarn test` to run the tests once. To run tests on file changes, run `yarn test:watch`.

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.

### Release & Publishing

The project follows the same release process as the other libraries in the MetaMask organization. The GitHub Actions [`action-create-release-pr`](https://github.com/MetaMask/action-create-release-pr) and [`action-publish-release`](https://github.com/MetaMask/action-publish-release) are used to automate the release process; see those repositories for more information about how they work.

1. Choose a release version.

   - The release version should be chosen according to SemVer. Analyze the changes to see whether they include any breaking changes, new features, or deprecations, then choose the appropriate SemVer version. See [the SemVer specification](https://semver.org/) for more information.

2. If this release is backporting changes onto a previous release, then ensure there is a major version branch for that version (e.g. `1.x` for a `v1` backport release).

   - The major version branch should be set to the most recent release with that major version. For example, when backporting a `v1.0.2` release, you'd want to ensure there was a `1.x` branch that was set to the `v1.0.1` tag.

3. Trigger the [`workflow_dispatch`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch) event [manually](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow) for the `Create Release Pull Request` action to create the release PR.

   - For a backport release, the base branch should be the major version branch that you ensured existed in step 2. For a normal release, the base branch should be the main branch for that repository (which should be the default value).
   - This should trigger the [`action-create-release-pr`](https://github.com/MetaMask/action-create-release-pr) workflow to create the release PR.

4. Update the changelog to move each change entry into the appropriate change category ([See here](https://keepachangelog.com/en/1.0.0/#types) for the full list of change categories, and the correct ordering), and edit them to be more easily understood by users of the package.

   - Generally any changes that don't affect consumers of the package (e.g. lockfile changes or development environment changes) are omitted. Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g. major test improvements, security improvements, improved documentation, etc.).
   - Try to explain each change in terms that users of the package would understand (e.g. avoid referencing internal variables/concepts).
   - Consolidate related changes into one change entry if it makes it easier to explain.
   - Run `yarn auto-changelog validate --rc` to check that the changelog is correctly formatted.

5. Review and QA the release.

   - If changes are made to the base branch, the release branch will need to be updated with these changes and review/QA will need to restart again. As such, it's probably best to avoid merging other PRs into the base branch while review is underway.

6. Squash & Merge the release.

   - This should trigger the [`action-publish-release`](https://github.com/MetaMask/action-publish-release) workflow to tag the final release commit and publish the release on GitHub.

7. Publish the release on npm.

   - Be very careful to use a clean local environment to publish the release, and follow exactly the same steps used during CI.
   - Use `npm publish --dry-run` to examine the release contents to ensure the correct files are included. Compare to previous releases if necessary (e.g. using `https://unpkg.com/browse/[package name]@[package version]/`).
   - Once you are confident the release contents are correct, publish the release using `npm publish`.
