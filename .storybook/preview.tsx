import React from "react";
import { inter } from "../src/styles/fonts";
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
      <div className={`${inter.className} ${inter.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
