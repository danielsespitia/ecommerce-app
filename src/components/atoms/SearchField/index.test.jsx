import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchField } from './';

test('renders correctly', () => {
  render(<SearchField />);
});

test('search field changes its value when typing', async () => {
  render(<SearchField searchField={'test'} />);
  const searchField = screen.getByLabelText('search-field');
  await waitFor(() => expect(searchField).toBeInTheDocument());
  userEvent.type(searchField, 'test');
  expect(searchField).toHaveValue('test');
});
