import React from 'react';

import { CardList } from './';

export default {
  title: 'CardList',
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  monsters: [
    {
      name: 'Dracula',
      id: '1a',
      email: 'dracula@test.com',
    },
    {
      name: 'Frankenstein',
      id: '1b',
      email: 'frankenstein@test.com',
    },
    {
      name: 'Zombie',
      id: '1c',
      email: 'zombie@test.com',
    },
  ],
};
