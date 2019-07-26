import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from '@material-ui/core/Container';


function Layout({children}) {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
