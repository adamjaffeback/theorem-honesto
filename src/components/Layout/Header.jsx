import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const useStyles = makeStyles(theme => ({
  topBar: {
    backgroundColor: '#F2F3F4',
  },
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="static" className={classes.topBar}>
      <Tabs value={value} onChange={(ev, newVal) => setValue(newVal)} aria-label="simple tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  );
}

export default Header;
