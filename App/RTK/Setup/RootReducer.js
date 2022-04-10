import { combineReducers } from '@reduxjs/toolkit';
import { AuthSliceReducer } from '../Slice';

const RootReducer = combineReducers({
  authSlice: AuthSliceReducer,
});

export default RootReducer;
