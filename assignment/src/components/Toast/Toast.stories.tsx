

import React, { useState } from 'react';
import Toast from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative">
      {isVisible && <Toast {...args} onClose={() => setIsVisible(false)} />}
    </div>
  );
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info message!',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Success! Your action was completed.',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'Something went wrong! Please try again.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Warning! Check your inputs.',
  type: 'warning',
};

export const CustomDuration = Template.bind({});
CustomDuration.args = {
  message: 'This message will disappear in 2 seconds.',
  type: 'info',
  duration: 2000, 
};
