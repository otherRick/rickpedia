import { configureStore } from '@reduxjs/toolkit';
import { charListSlice } from '../Pages/Catalog/slice/catalogSlice';

export const store = configureStore({
  reducer: { charList: charListSlice.reducer }
});
