import React, {useState} from 'react';
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
          <Typography variant='h5' fontWeight='600'>Login</Typography>
          <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">E-mail</InputLabel>
            <OutlinedInput id="outlined-adornment-email" type="email" label="Email" />
          </FormControl>
          <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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
          <Typography>Não tem um acesso? <Link to='/register' >Registre-se</Link></Typography>
        </Grid>
    </Grid>
  );
};

export default Login;
