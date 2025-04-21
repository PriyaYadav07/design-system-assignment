import React from 'react';
import  Label  from './Label';

export default {
  title: 'Typography/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'Label is typically used with form inputs. It ensures accessible labeling via `htmlFor`.',
      },
    },
  },
};

export const Default = () => <Label htmlFor="email">Email address</Label>;
