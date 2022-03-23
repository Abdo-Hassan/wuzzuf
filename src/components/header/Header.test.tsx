import { render, screen } from '@testing-library/react';
import Header from './Header';

it('should have a routes for pages', () => {
  render(<Header />);
  const header = screen.getByTestId('header-wrapper');
  const pages = screen.getByTestId('page-wrapper');
  expect(header).toContainElement(pages);
});
