import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import nextCycle from './nextCycle.svg';
import jane from './jane.svg';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1vh',
  },
  nextCycle: {
    borderRight: '1px solid #D9DCDE',
    lineHeight: '13px',
    paddingRight: '1vw',
  },
  avatar: {
    padding: '0 1vw',
  },
  accountAccess: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Untitled Sans',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#031323',
  },
  logout: {
    color: '#59636',
    fontFamily: 'Untitled Sans',
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  }
}));

function AccountSection () {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={nextCycle} className={classes.nextCycle} alt="Next Cycle Warning" />
      <img src={jane} className={classes.avatar} height="58" width="58" alt="Account Avatar" />
      <div className={classes.accountAccess}>
        <div className={classes.name}>Jane Smith</div>
        <div className={classes.logout}>LOGOUT</div>
      </div>
    </div>
  );
}

export default AccountSection;
