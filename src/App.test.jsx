import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

test('filters monsters depending on search field value', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json() {
        return Promise.resolve([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
          },
        ]);
      },
    })
  );
  await waitFor(async () => render(<App />));
  const searchField = screen.getByLabelText('search-field');
  await waitFor(() => expect(searchField).toBeInTheDocument());
  userEvent.type(searchField, 'lem');
  const cards = screen.getAllByTestId('card-container');
  expect(cards.length).toBe(2);
});
