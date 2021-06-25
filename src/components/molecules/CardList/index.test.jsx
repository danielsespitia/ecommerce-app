import { render, screen } from '@testing-library/react';
import { CardList } from './';

const monsters = [
  { name: 'Frankenstein', id: '1a' },
  { name: 'Dracula', id: '2a' },
  { name: 'Zombie', id: '3a' },
];

test('renders CardList component', () => {
  render(<CardList />);
});

test('renders a div with three cards', () => {
  render(<CardList monsters={monsters} />);
  const cards = screen.getAllByTestId('card-container');
  expect(cards.length).toBe(3);
});
