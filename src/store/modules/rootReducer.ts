import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import usersReducer from './usersSlice';
import recadosReducer from './recadosSlice';

export default combineReducers({
  user: userReducer,
  users: usersReducer,
  recados: recadosReducer
});
