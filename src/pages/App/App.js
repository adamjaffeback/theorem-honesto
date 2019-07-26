import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout/Layout';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#AB61E5',
      },
      secondary: {
        main: '#5CBFA0',
      },
      background: {
        default: '#E5E5E5',
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <Button variant="contained">
            Default
          </Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
