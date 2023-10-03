import { configureStore } from '@reduxjs/toolkit';
import NavSlice from "./slices/navSlice";

const stringMiddleware = () => (next) => (action) => {
  if(typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action)
};

export const store = configureStore({
  reducer: {
    navigation: NavSlice
  },
})