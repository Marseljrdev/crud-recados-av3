import React, { useState } from 'react';
import { Button, Divider, Grid, TextField } from '@mui/material';
import ListRecados from '../components/ListRecados';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/recadosSlice';
import RecadosType from '../types/RecadosType';
import generateId from '../utils/generateId';
import { addRecado } from '../store/modules/recadosSlice';

const Home: React.FC = () => {
  const [descricao, setDescricao] = useState<string>('');
  const [detalhes, setDetalhes] = useState<string>('');

  const recadosRedux = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  function handleSave() {
    const newAddRecados: RecadosType = { id: generateId(), description: descricao, details: detalhes };
    dispatch(addRecado(newAddRecados));
    handleClear();
  }

  function handleClear(){
    setDescricao('');
    setDetalhes('');
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm>
        <TextField
          id="outlined-description-input"
          label="Descrição"
          type="text"
          autoComplete="current-description"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-detail-input"
          type="text"
          label="Detalhes"
          autoComplete="current-detail"
          value={detalhes}
          onChange={e => setDetalhes(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleClear} variant="outlined" fullWidth>
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleSave} variant="contained" fullWidth>
          Salvar
        </Button>
      </Grid>
      <Divider />
      <Grid xs={12}>
        <ListRecados recados={recadosRedux} />
      </Grid>
    </Grid>
  );
};

export default Home;
