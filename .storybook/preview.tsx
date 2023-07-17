import React from 'react';
import {
  appleGaramond,
  appleGaramondLight,
  appleGaramondBold,
  artega,
} from '../src/styles/fonts';
import 'src/styles/globals.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${artega.className} ${artega.variable} ${appleGaramond.className} ${appleGaramond.variable} ${appleGaramondLight.className} ${appleGaramondLight.variable} ${appleGaramondBold.className} ${appleGaramondBold.variable}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
