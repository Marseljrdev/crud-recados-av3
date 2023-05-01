import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import RecadosType from '../../types/RecadosType';
import { RootState } from '../store';

const adapter = createEntityAdapter<RecadosType>({
  selectId: item => item.id
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.recados);

const recadosSlice = createSlice({
  name: 'recados',
  initialState: adapter.getInitialState(),
  reducers: {
    addRecado: adapter.addOne,
    removeRecado: adapter.removeOne,
    updateRecado: adapter.updateOne
  }
});

export const { addRecado, removeRecado, updateRecado } = recadosSlice.actions;
export default recadosSlice.reducer;
