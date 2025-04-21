import React from 'react';
import  Caption  from './Caption';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    docs: {
      description: {
        component: 'Caption is used for image captions or secondary information.',
      },
    },
  },
};

export const Default = () => (
  <Caption>This is a caption. It provides supplemental context.</Caption>
);
