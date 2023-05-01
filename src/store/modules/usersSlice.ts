import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { usersType } from '../../types/usersType';

const adapter = createEntityAdapter<usersType>({
  selectId: item => item.email
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.users);

const usersSlice = createSlice({
  name: 'users',
  initialState: adapter.getInitialState(),
  reducers: {
    addUser: adapter.addOne,
    updateUser: adapter.updateOne
  }
});

export const { addUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
