import React from 'react';
import { Container, Col, Row } from 'reactstrap';

function Page404({ location }) {
  return (
    <Container>
      <Col>
        <Row className="my-5 py-5">
          <h2 className="mx-auto">
            No match found for <code>{location.pathname}</code>
            <a href="/" className="d-block h4 my-2">
              back to home <i className="fas fa-home"></i>
            </a>
          </h2>
        </Row>
      </Col>
    </Container>
  );
}

export default Page404;
