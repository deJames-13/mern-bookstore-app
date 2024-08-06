import { combineReducers } from '@reduxjs/toolkit';
import bookViewer from './bookViewer';

const rootReducer = combineReducers({
  bookViewer,
});

export default rootReducer;
