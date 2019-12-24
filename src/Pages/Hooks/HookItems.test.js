import React from 'react';
import { render, getByRole } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';


import { HookItems } from './HookItems';
import { AppStateProvider } from "../Home/State/AppState";
import { appStateReducer, initialState } from '../Home/State/AppStateReducer';




test('contains all items', async () => {

  await act(async () => {
    const tree = (
      <AppStateProvider reducer={appStateReducer} initialState={initialState}>
        <HookItems />
      </AppStateProvider>
    );

    // console.log(tree);
    // console.log(render(tree));
    const { getByText } = await render(tree);
    expect(getByText("title9")).toBeTruthy();
  })


});