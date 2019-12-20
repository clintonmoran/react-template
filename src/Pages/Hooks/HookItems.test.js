import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, findByTestId, findAllByTestId } from '@testing-library/react'

import HookItems from './HookItems'

afterEach(cleanup);

const items = [
  { id: 1, abstract: "some abstract keys value", title: "KeysValue" },
  { id: 2, abstract: "2some abstract keys value", title: "2KeysValue" },
  { id: 3, abstract: "3some abstract keys value", title: "3KeysValue" },
  { id: 4, abstract: "4some abstract keys value", title: "4KeysValue" },
];

describe('<HookItems /> spec', () => {

  it('renders the component', () => {
    const { asFragment } = render(<HookItems items={items} />)
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a list of the correct length', async () => {
    const { findAllByTestId } = render(<HookItems items={items} />)
    const listItems = await findAllByTestId('item');
    expect(listItems).toHaveLength(4);
  });
});