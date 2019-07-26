import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Layout from '../../components/Layout/Layout';
import ShareFeedback from '../ShareFeedback';
import { BrowserRouter as Switch, Redirect, Route } from "react-router-dom";

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
          <Switch>
            <Redirect from="/" to="/share" />
            <Route path="/share" exact component={ShareFeedback} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
