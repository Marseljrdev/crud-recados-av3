import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { registerUser } from '../store/modules/usersSlice';
import UsersType from '../types/UsersType';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const handleRegister = (e: any) => {
    e.preventDefault();
    const newRegisterUser: UsersType = { name: userName, email: userEmail, password: userPassword };
    dispatch(registerUser(newRegisterUser));
    navigate('/login');
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ backgroundImage: 'url(/images/programacao.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      />
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h5" fontWeight="600">
          Register
        </Typography>
        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
          <OutlinedInput
            value={userName}
            onChange={e => setUserName(e.target.value)}
            id="outlined-adornment-name"
            type="text"
            label="Name"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">E-mail</InputLabel>
          <OutlinedInput
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
            id="outlined-adornment-email"
            type="email"
            label="Email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button onClick={handleRegister}>Acessar</Button>
        <Typography>
          Ja tem um acesso? <Link to="/login">Login</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
