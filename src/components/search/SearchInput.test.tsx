import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

it('should have a search box', () => {
  render(<SearchInput />);
  const input = screen.getByTestId('input-test-wrapper');
  expect(input).toBeInTheDocument();
});

it('should have a search icon', () => {
  render(<SearchInput />);
  const searchIcon = screen.getByTestId('input-test-icon');
  expect(searchIcon).toBeInTheDocument();
});

it('container should contain a search box', () => {
  render(<SearchInput />);
  const input = screen.getByTestId('input-test-wrapper');
  const searchBox = screen.getByTestId('input-test-box');
  expect(input).toContainElement(searchBox);
});

it('search box should have a search icon', () => {
  render(<SearchInput />);
  const input = screen.getByTestId('input-test-wrapper');
  const searchIcon = screen.getByTestId('input-test-icon');
  expect(input).toContainElement(searchIcon);
});
