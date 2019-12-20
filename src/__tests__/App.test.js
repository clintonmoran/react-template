import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';

test('doesnt render the built in CRA stuff', () => {
  const { queryByText } = render(<App />);

  expect(queryByText(/learn react/i)).toBeNull();

});
