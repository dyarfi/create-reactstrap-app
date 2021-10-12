import React from 'react';

import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Media,
  Table,
  Row,
  Col,
} from 'reactstrap';
import { Button } from 'reactstrap';

import MainLayout from 'layout/MainLayout';

function Dashboard(props) {
  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <p>
        To get started, edit <code>pages/dashboard.jsx</code> and save to
        reload.
      </p>
      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Visitors
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-users fa-3x"></i>{' '}
                  <span>
                    129 <CardText>Users</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-cog fa-3x"></i>{' '}
                  <span>
                    1930 <CardText>Sessions</CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fa-clock fa-3x"></i>{' '}
                  <span>
                    234 <CardText>Real Time</CardText>
                  </span>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter> */}
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
              {/* </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Followers
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="4" className="d-inline align-items-center my-2">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-facebook"></i> 1290
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center my-2">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-twitter"></i> 2324
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center my-2">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-instagram"></i> 12341
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center my-2">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-linkedin"></i> 1331
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center my-2">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-pinterest"></i> 4124
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center my-2">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-github"></i> 13411
                  </CardText>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                <Row>
                  <a href="#" className="float-right">Add new</a>
                </Row>
              </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Messages
              </CardTitle>
              <Row>
                <Media>
                  <Media left href="#" className="col-4">
                    <Media
                      className="img-thumbnail img-fluid"
                      src="/images/profile6.jpg"
                      alt="Avatar"
                    />
                  </Media>
                  <Media body className="col-8 pl-0">
                    <Media heading tag="h5">
                      Micah Immanuel
                    </Media>
                    <CardText tag="small">
                      Hi, I already sent you the design to your email.
                      {/* <span className="text-muted small float-right">
                        2 hour ago
                      </span> */}
                    </CardText>
                  </Media>
                </Media>
              </Row>
              <Button outline size="sm" color="primary" className="float-right">
                See all messages
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Subscriptions
              </CardTitle>
              <Row className="block">
                <Col lg="6" className="mb-2">
                  <Button size="sm" outline color="primary">
                    <Badge color="primary">21</Badge>&nbsp;Premium
                  </Button>
                  <span class="small ml-2 text-primary">
                    <i className="fas fa-arrow-up"></i> 2
                  </span>
                </Col>
                <Col lg="6" className="mb-2">
                  <Button size="sm" outline color="success">
                    <Badge color="success">90</Badge>&nbsp;Enterprise
                  </Button>
                  <span class="small ml-2 text-success">
                    <i className="fas fa-arrow-up"></i> 43
                  </span>
                </Col>
                <Col lg="6" className="mb-2">
                  <Button size="sm" outline color="secondary">
                    <Badge color="secondary">45</Badge>&nbsp;Free
                  </Button>
                  <span class="small ml-2 text-secondary">
                    <i className="fas fa-arrow-up"></i> 11
                  </span>
                </Col>
                <Col lg="6" className="mb-2">
                  <Button size="sm" outline color="danger">
                    <Badge color="danger">559</Badge>&nbsp;Basic
                  </Button>
                  <span class="small ml-2 text-danger">
                    <i className="fas fa-arrow-up"></i> 32
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Files Overview
              </CardTitle>
              <Row className="clearfix">
                <Col sm="4" className="my-2">
                  <CardText tag="span" className="small">
                    Projects
                  </CardText>
                  <div>
                    <i class="fas fa-briefcase fa-1x text-primary"></i>&nbsp;
                    <span className="font-weight-bold text-muted">2341</span>
                  </div>
                </Col>
                <Col sm="4" className="my-2">
                  <CardText tag="span" className="small">
                    Downloads
                  </CardText>
                  <div>
                    <i class="fas fa-cloud-download-alt fa-1x text-success"></i>
                    &nbsp;
                    <span className="font-weight-bold text-muted">4144</span>
                  </div>
                </Col>
                <Col sm="4" className="my-2">
                  <CardText tag="span" className="small">
                    Documents
                  </CardText>
                  <div>
                    <i class="fas fa-list fa-1x text-warning"></i>&nbsp;
                    <span className="font-weight-bold text-muted">3410</span>
                  </div>
                </Col>
                <Col sm="4" className="my-2">
                  <CardText tag="span" className="small">
                    News
                  </CardText>
                  <div>
                    <i class="fas fa-newspaper fa-1x text-danger"></i>&nbsp;
                    <span className="font-weight-bold text-muted">5372</span>
                  </div>
                </Col>
                <Col sm="4" className="my-2">
                  <CardText tag="span" className="small">
                    Uploads
                  </CardText>
                  <div>
                    <i class="fas fa-upload fa-1x text-info"></i>&nbsp;
                    <span className="font-weight-bold text-muted">4144</span>
                  </div>
                </Col>
                <Col sm="4" className="my-2">
                  <CardText tag="span" className="small">
                    Orders
                  </CardText>
                  <div>
                    <i class="fas fa-shopping-cart fa-1x text-primary"></i>
                    &nbsp;
                    <span className="font-weight-bold text-muted">3410</span>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Popular menus
              </CardTitle>
              {/* <CardText></CardText> */}
              <Table hover size="sm" borderless>
                {/* <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Username</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Eggplant Parmigiana Salad</td>
                    <td>2342</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Grilled Portobello Salad</td>
                    <td>2241</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Sautéed Egg Roll</td>
                    <td>1122</td>
                  </tr>
                </tbody>
              </Table>
              {/* <Button>Go somewhere</Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Dashboard;
