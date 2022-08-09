import '../docs/fonts/fonts.scss';
import '../src/css/design-tokens.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Getting Started', ['Introduction', 'Installation']],
    },
  },
};
