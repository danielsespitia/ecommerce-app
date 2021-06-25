import { render, screen, waitFor } from '@testing-library/react';
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
        ]);
      },
    })
  );
  await waitFor(async () => render(<App />));
  const userName = screen.getByText('Ervin Howell');
  expect(userName).toBeInTheDocument();
});
