import React from 'react';

import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import MainLayout from '../layout/MainLayout';

const Dashboard = props => {
  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <p>
        To get started, edit <code>pages/dashboard.jsx</code> and save to
        reload.
      </p>
      <Row>
        <Col md="6" lg="4">
          <Card body>
            <Row className="mb-2">
              <Col
                xs="4"
                className="d-inline align-items-center text-success"
              >
                <i className="fas fa-users fa-3x"></i>{" "}
                <span>
                  1290 <CardText>Users</CardText>
                </span>
              </Col>
              <Col xs="4" className="d-inline align-items-center text-info">
                <i className="fas fa-cog fa-3x"></i>{" "}
                <span>
                  1930 <CardText>Sessions</CardText>
                </span>
              </Col>
              <Col
                xs="4"
                className="d-inline align-items-center text-primary"
              >
                <i className="fas fa-clock fa-3x"></i>{" "}
                <span>
                  234 <CardText>Real Time</CardText>
                </span>
              </Col>
            </Row>
            <Button>
              <i className="fab fa-facebook"></i> Go somewhere
            </Button>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h4">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h4">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h4">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Autem, recusandae?
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h4">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h4">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
