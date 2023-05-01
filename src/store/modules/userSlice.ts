import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = usersSlice.actions;
export default usersSlice.reducer;
