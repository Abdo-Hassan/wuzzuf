import { render, screen } from '@testing-library/react';
import Search from '../../pages/search/Search';

it('should have search results', () => {
  render(<Search />);
  // const header = screen.getByTestId('header-wrapper');
  // const pages = screen.getByTestId('page-wrapper');
  // expect(header).toContainElement(pages);
});
