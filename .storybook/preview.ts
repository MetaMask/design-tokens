import type { Preview } from '@storybook/react';

import '../docs/fonts/fonts.scss';
import '../src/css/design-tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    storySort: {
      order: [
        'Getting Started',
        ['Introduction'],
        'Colors',
        'Shadows',
        'Typography',
        'Doc Components',
      ],
    },
  },
};

export default preview;
