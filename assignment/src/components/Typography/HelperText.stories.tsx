import React from 'react';
import  HelperText  from './HelperText';

export default {
  title: 'Typography/HelperText',
  component: HelperText,
  parameters: {
    docs: {
      description: {
        component: 'HelperText provides inline validation or additional form instructions. Supports states like default, error, and success.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['default', 'error', 'success'],
    },
  },
};

export const AllStates = () => (
  <div className="space-y-2">
    <HelperText state="default">This is some helper text.</HelperText>
    <HelperText state="error">This field is required.</HelperText>
    <HelperText state="success">Looks good!</HelperText>
  </div>
);
