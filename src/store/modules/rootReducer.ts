import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import recadosReducer from './recadosSlice';
import tokenReducer from './tokenSlice';

export default combineReducers({
  token: tokenReducer,
  users: usersReducer,
  recados: recadosReducer
});
