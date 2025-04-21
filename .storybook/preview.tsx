// .storybook/preview.ts
import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';

const theme = {
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  dark: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
};
const withThemeProvider = (Story: any, context: any) => {
  const isDarkMode = context.globals?.theme === 'dark';

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? theme.dark.backgroundColor : theme.light.backgroundColor,
        color: isDarkMode ? theme.dark.color : theme.light.color,
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;

