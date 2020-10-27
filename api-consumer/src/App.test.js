import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders load more button', () => {
  render(<App />);

  const loadmorebutton = screen.getByRole('button');
  expect(loadmorebutton).toBeInTheDocument();
  expect(loadmorebutton).toHaveTextContent('Load More');

});
