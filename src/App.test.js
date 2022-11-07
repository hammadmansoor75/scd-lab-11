import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('comp');
  expect(linkElement).toBeInTheDocument();
});

test('h1 displays on screen', () => {
  render(<App />);
  const element = screen.getByTestId('heading');
  expect(element).toHaveTextContent('Hello World');
});

test('First element is present on screen', () => {
  render(<App />);
  const element = screen.getByTestId('list');
  expect(element).toHaveTextContent('First Element');
});
