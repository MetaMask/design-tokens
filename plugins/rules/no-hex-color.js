module.exports = {
  meta: {
    // Rule metadata
  },
  create(context) {
    return {
      Program() {
        console.log('Hello World');
      },
    };
  },
};

// module.exports = {
//   meta: {
//     type: 'suggestion',
//     docs: {
//       description: 'enforce the use of design tokens instead of hex colors',
//       category: 'Stylistic Issues',
//       recommended: false,
//     },
//     messages: {
//       unexpectedHexColor: 'Use design tokens instead of hard-coded hex colors.',
//     },
//   },
//   create(context) {
//     console.log('The no-hex-colors rule is now running.'); // This will log when the rule is initialized.
//     return {
//       Literal(node) {
//         console.log('Checking a literal node:', node); // This will log each literal node that's being checked.
//         const hexColorPattern = /#[0-9a-fA-F]{3,8}/u;
//         if (hexColorPattern.test(node.value)) {
//           console.log('Found a hex color:', node.value); // This will log when a hex color is found.
//           context.report({
//             node,
//             messageId: 'unexpectedHexColor',
//           });
//         }
//       },
//     };
//   },
// };
