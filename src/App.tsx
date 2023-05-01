import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
