import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/slice/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
