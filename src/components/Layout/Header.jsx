import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountSection from './AccountSection';

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const useStyles = makeStyles(theme => ({
  topBar: {
    backgroundColor: '#F2F3F4',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  honesto: {
    fontFamily: 'Untitled Sans',
    fontSize: '24px',
    marginTop: '22px',
    marginLeft: '5vw',
    marginRight: '10vw',
    lineHeight: '28px',
  }
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  return (
    <AppBar position="static" className={classes.topBar}>
      <Typography edge="start" className={classes.honesto} variant='h6'>Honesto</Typography>
      <Tabs centered style={{marginTop: '22px'}} indicatorColor="primary" value={value} onChange={(ev, newVal) => setValue(newVal)} aria-label="simple tabs example">
        <Tab label="Share Feedback" {...a11yProps(1)} />
        <Tab label="My Feedback" {...a11yProps(2)} />
        <Tab label="Team Feedback" {...a11yProps(3)} />
        <Tab label="Teams" {...a11yProps(4)} />
      </Tabs>
      <AccountSection />
    </AppBar>
  );
}

export default Header;
