module.exports = {
  create(context) {
    console.log('The no-hex-colors rule is now running.');
    return {
      Literal(node) {
        const hexColorPattern = /#[0-9a-fA-F]{3,8}\b/u;
        if (
          typeof node.value === 'string' &&
          hexColorPattern.test(node.value)
        ) {
          console.log(`Hex color found: ${node.value}`);
          context.report({
            node,
            message:
              'Avoid using hex colors directly. Prefer using design tokens for color.',
          });
        }
      },
    };
  },
};
