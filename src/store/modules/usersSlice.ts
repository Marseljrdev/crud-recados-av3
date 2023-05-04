import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import UsersType from '../../types/UsersType';

const adapter = createEntityAdapter<UsersType>({
  selectId: item => item.email
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.users);

const usersSlice = createSlice({
  name: 'users',
  initialState: adapter.getInitialState(),
  reducers: {
    registerUser: (state, action) => {
      console.log(action.payload);
      adapter.addOne(state, action.payload);
    }
  }
});

export const { registerUser } = usersSlice.actions;
export default usersSlice.reducer;
