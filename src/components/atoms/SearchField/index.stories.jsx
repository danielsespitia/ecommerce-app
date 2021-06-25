import React from 'react';

import { SearchField } from './';

export default {
  title: 'SearchField',
  component: SearchField,
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search',
  handleSearchField: () => {},
};
