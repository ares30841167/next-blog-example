import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import "../styles/globals.css";
import * as NextImage from "next/image";

export const decorators = [
  withTests({
    results,
  }),
];

// De-optimize all the next.js images while using story book
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}