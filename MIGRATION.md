# Migration Guide

This guide provides detailed instructions for migrating your project from one version of the `@metamask/design-tokens` to another.

- [From version 2.1.1 to 3.0.0](#from-version-211-to-300)
- [From version 3.0.0 to 4.0.0](#from-version-300-to-400)

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

## From version 3.0.0 to 4.0.0

### Brand Colors

### Brand Colors Brand Evolution

- Blue updates
- blue000 no longer exist
- blue025 added
- blue 050 added

- Orange updates
- orange000 no longer exist
- orange 025 added
- orange 050 added

- Green updates
- green000 no longer exist
- green025 added
- green 050 added

- Red updates
- red000 no longer exist
- red025 added
- red050 added

- Yellow updates
- yellow000 no longer exist
- yellow025 added
- yellow050 added
- yellow700 added
- yellow800 added
- yellow900 added

- Violet no longer exist

- Purple added

- Lime added

## Step-by-step Migration Process

1. **Step 1**: Description of step 1
2. **Step 2**: Description of step 2
3. **Step 3**: Description of step 3
   - Note: Any important notes related to step 3
4. **Step 4**: Description of step 4

## Troubleshooting

If you encounter any issues during the migration, please refer to our [Troubleshooting Guide](link_to_guide).

## Conclusion

After following these steps, your migration from version X to version Y should be complete. If you have any questions or concerns, please contact our support team.
