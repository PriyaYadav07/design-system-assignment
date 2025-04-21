import React from 'react';
import  Paragraph  from './Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: 'Paragraph is used for body text. It adjusts to light/dark themes and supports base typographic styles.',
      },
    },
  },
};

export const Default = () => (
  <Paragraph>
    This is a default paragraph. Use it for long-form body content and text blocks.
  </Paragraph>
);
