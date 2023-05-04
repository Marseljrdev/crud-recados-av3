import React, { useEffect, useState } from 'react';
import { Button, Divider, Grid, TextField } from '@mui/material';
import ListRecados from '../components/ListRecados';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll, updateRecado } from '../store/modules/recadosSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecado: React.FC = () => {
  const [descricao, setDescricao] = useState<string>('');
  const [detalhes, setDetalhes] = useState<string>('');

  const { id } = useParams();
  const navigate = useNavigate();

  const recadosRedux = useAppSelector(selectAll);
  console.log(recadosRedux);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (recadosRedux) {
      setDescricao(recadosRedux[0].description);
      setDetalhes(recadosRedux[0].details);
    }
  }, [recadosRedux]);

  function handleEdit() {
    if (id) {
      dispatch(updateRecado({id, changes: {description: descricao, details: detalhes}}));
    }
    navigate('/home');
  }

  function handleClear() {
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
        <Button onClick={handleEdit} variant="contained" fullWidth>
          Editar
        </Button>
      </Grid>
      <Divider />
      <Grid xs={12}>
        <ListRecados recados={recadosRedux} />
      </Grid>
    </Grid>
  );
};

export default EditRecado;
