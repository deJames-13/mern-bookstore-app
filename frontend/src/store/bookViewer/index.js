import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './states.js';

const bookViewerSlice = createSlice({
  name: 'bookViewer',
  initialState,
  reducers: {
    setBookViewer: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { setBookViewer } = bookViewerSlice.actions;

export default bookViewerSlice.reducer;
