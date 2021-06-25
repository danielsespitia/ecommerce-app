import React from 'react';

import { Card } from './';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  monster: {
    id: '1a',
    name: 'Dracula',
    email: 'dracula@test.com',
  },
};
