import { AppBar, Box, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, marginBottom: '15px' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              <Link to="/home">Pagina de recados</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Component />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DefaultLayout;
