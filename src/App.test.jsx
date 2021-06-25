import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

// TODO: mover a componente de searchField cuando se cree
test('search field changes its value when typing', async () => {
  render(<App />);
  const searchField = screen.getByLabelText('search-field');
  await waitFor(() => expect(searchField).toBeInTheDocument());
  userEvent.type(searchField, 'test');
  expect(searchField).toHaveValue('test');
});
