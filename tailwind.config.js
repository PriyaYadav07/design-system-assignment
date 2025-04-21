// tailwind.config.js
const { typography } = require('./src/theme/tokens');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // adjust as needed
  ],
  theme: {
    extend: {
      fontSize: {
        h1: typography.fontSize.h1,
        h2: typography.fontSize.h2,
        h3: typography.fontSize.h3,
        body: typography.fontSize.body,
        caption: typography.fontSize.caption,
        helper: typography.fontSize.helper,
      },
      fontWeight: {
        regular: typography.fontWeight.regular,
        medium: typography.fontWeight.medium,
        bold: typography.fontWeight.bold,
      },
      lineHeight: {
        normal: typography.lineHeight.normal,
        relaxed: typography.lineHeight.relaxed,
        tight: typography.lineHeight.tight,
      },
      letterSpacing: {
        normal: typography.letterSpacing.normal,
        wide: typography.letterSpacing.wide,
        wider: typography.letterSpacing.wider,
      },
    },
  },
  plugins: [],
};
