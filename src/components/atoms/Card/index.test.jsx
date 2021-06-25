import { render, screen } from '@testing-library/react';
import { Card } from './';

const monster = {
  name: 'Dracula',
  id: '1b',
};

test('renders correctly', () => {
  render(<Card monster={monster} />);
});

test('renders card name correctly', () => {
  render(<Card monster={monster} />);
  const cardName = screen.getByTestId('card-name');
  expect(cardName).toBeInTheDocument();
});

test('renders card picture correctly', () => {
  render(<Card monster={monster} />);
  const cardPicture = screen.getByTestId('card-image');
  expect(cardPicture).toBeInTheDocument();
});

test('renders card email correctly', () => {
  render(<Card monster={monster} />);
  const cardEmail = screen.getByTestId('card-image');
  expect(cardEmail).toBeInTheDocument();
});
