

import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Text Input',
  placeholder: 'Enter something...',
  value: '',
  error: '',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Text Input',
  placeholder: 'Enter something...',
  value: '',
  error: 'This field is required',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Text Input',
  placeholder: 'Enter something...',
  value: '',
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Enter your password...',
  value: '',
  type: 'password',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Field',
  placeholder: 'This is required',
  value: '',
  required: true,
};
