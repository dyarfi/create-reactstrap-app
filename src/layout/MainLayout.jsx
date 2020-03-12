import React from 'react';
import { Col, Row, Container } from 'reactstrap';

// import HeadDefault from '../components/HeadDefault';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarLeft from '../components/navbar/NavbarLeft';
import Footer from '../components/Footer';

function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <NavbarTop />
      <Container fluid className="wrapper">
        <Row>
          <Col xs={12} sm={3} className="bg-light">
            <NavbarLeft />
          </Col>
          <Col xs={12} sm={9}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
