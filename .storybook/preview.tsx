import React from "react";
import { appleGaramound, artega } from "../src/styles/fonts";
import "src/styles/globals.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
        className={`${artega.className} ${artega.variable} ${appleGaramound.className} ${appleGaramound.variable}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
