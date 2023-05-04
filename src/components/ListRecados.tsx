import React, { useMemo, useState } from 'react';
import RecadosType from '../types/RecadosType';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch } from '../store/hooks';
import { removeRecado } from '../store/modules/recadosSlice';
import { useNavigate } from 'react-router-dom';

interface ListRecadosProps {
  recados: RecadosType[];
}

const ListRecados: React.FC<ListRecadosProps> = ({ recados }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEdit = (itemEdit: RecadosType) => {
    navigate(`/edit-recado/${itemEdit.id}`);
  };

  const handleRemove = (itemRemove: RecadosType) => {
    dispatch(removeRecado(itemRemove.id));
  };

  const listTarefas = useMemo(() => {
    return recados.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem
            key={index}
            alignItems="flex-start"
            secondaryAction={
              <>
                <IconButton onClick={() => handleEdit(item)} edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>

                <IconButton onClick={() => handleRemove(item)} edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp">{item.description[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.description}
              secondary={
                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                  {item.details}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });
  }, [recados]);
  return (
    <React.Fragment>
      <List>{listTarefas}</List>
    </React.Fragment>
  );
};

export default ListRecados;
