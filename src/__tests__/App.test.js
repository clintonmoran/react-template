import React from 'react';
import { render, findByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';

test('renders the nav bar', () => {
  const { queryByText } = render(
    <App />
  )

  expect(queryByText(/learn react/i)).toBeNull();
  const Nav = findByRole('nav');
  expect(Nav).toHaveTextContent()

});
