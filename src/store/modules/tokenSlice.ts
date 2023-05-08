import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    removeToken() {
      return initialState;
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
