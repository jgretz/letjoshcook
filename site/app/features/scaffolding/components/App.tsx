import React from 'react';
import {Router} from 'react-router';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import StyledSnackbarProvider from './StyledSnackbarProvider';
import history from '../history';
import Routes from './Routes';
import theme from '../../../styles/theme';

const App = () => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StyledSnackbarProvider>
          <CssBaseline />

          <Routes />
        </StyledSnackbarProvider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Router>
);

export default App;
