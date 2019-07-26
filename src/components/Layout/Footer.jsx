import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import theoremLogo from './theoremLogo.svg';
import copyright from './copyright.svg';

const useStyles = makeStyles(theme => ({
  footerBar: {
   top: 'auto',
   bottom: 0,
   backgroundColor: '#031323',
  },
  logoContainer: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    textAlign: 'left',
  },
}));

function Footer () {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.footerBar}>
      <Toolbar>
        <div className={classes.logoContainer}>
          <img edge="start" src={theoremLogo} alt="Theorem logo" />
        </div>
        <img src={copyright} alt="Copyright Theorem 2018" />
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
