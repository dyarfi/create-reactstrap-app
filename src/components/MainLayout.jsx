import React from 'react';
import { Col, Row, Container } from 'reactstrap';

// import HeadDefault from './HeadDefault';

import NavbarTop from './NavbarTop';
import NavbarLeft from './NavbarLeft';
// import Footer from './Footer';

// import Footer from './Footer';

function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <NavbarTop />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left">
            <NavbarLeft />
          </Col>
          <Col className="wrapper-content">{children}</Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
