import React from 'react';
import { Col, Row, Container } from 'reactstrap';

// import HeadDefault from './components/HeadDefault';
import NavbarTop from './navbar/NavbarTop';
import NavbarLeft from './navbar/NavbarLeft';
import Footer from 'Footer';

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
      <Footer />
    </>
  );
}

export default MainLayout;
