import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the nav bar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
