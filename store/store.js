import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import { counterSlice } from './slices/counterSlice'
import { authSlice } from './slices/authSlice'

const makeStore = () =>
  configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);