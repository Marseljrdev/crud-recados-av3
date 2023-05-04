import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#e3340d'
    },
    secondary: {
      main: '#ee6b2f'
    }
  },
  components: {
    MuiButton: {
        styleOverrides: {
            root: {
                backgroundColor: '#e3340d',
                color: '#ffff',
                margin: '8px'
                
            }
        }
    }
  }
});

export default defaultTheme;
