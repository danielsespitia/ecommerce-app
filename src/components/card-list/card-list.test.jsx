import { render, screen } from '@testing-library/react';
import { CardList } from './card-list.component';

test('renders CardList component', () => {
  render(<CardList />);
});

test('renders a div with no children', () => {
  render(<CardList />);
  const cardListChild = screen.queryAllByText(/monster [0-3]/);
  expect(cardListChild.length).toBe(0);
});

test('renders a div with three children', () => {
  render(
    <CardList>
      <p>monster 1</p>
      <p>monster 2</p>
      <p>monster 3</p>
    </CardList>
  );
  const cardListChildren = screen.getAllByText(/monster [0-3]/);
  expect(cardListChildren.length).toBe(3);
});
