import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import recadosReducer from './recadosSlice';

export default combineReducers({
  users: usersReducer,
  recados: recadosReducer
});
