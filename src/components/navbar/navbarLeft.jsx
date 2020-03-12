import React from 'react';
import { 
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse
 } from 'reactstrap';

// const links = [
//   { href: "/", label: "Logo" },
//   { href: "/dashboard", label: "Dashboard" }
// ].map(link => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

function NavbarLeft(props) {
  return (
    <>
      <h4 className="headline">Components</h4>
      <div className="wrapper-list-group">
        <ListGroup flush className="list-group-nav-left">
          <ListGroupItem tag="a" href="/pages/dashboard">
            <i className="fas fa-chart-pie"></i> Dashboard
          </ListGroupItem>
          <ListGroupItem tag="a" href="/pages/posts">
            <i className="fas fa-clone"></i> Cards
          </ListGroupItem>
          <ListGroupItem tag="a" href="/pages/buttons">
            <i className="fas fa-bullseye"></i> Buttons
          </ListGroupItem>
          <ListGroupItem tag="a" href="/pages/tables">
            <i className="fas fa-columns"></i> Tables
          </ListGroupItem>
          <ListGroupItem tag="a" href="/pages/typography">
            <i className="fas fa-list-ul"></i> Typography
          </ListGroupItem>
        </ListGroup>
      </div>
      <h4 className="headline">UI Elements</h4>
      <div className="wrapper-list-group">
        <ListGroup flush className="list-group-nav-left">
          <ListGroupItem tag="a" href="/pages/employees">
            Employees
          </ListGroupItem>
          <ListGroupItem tag="a" href="/pages/carousels">
            Carousels
          </ListGroupItem>
          <ListGroupItem>
            <a href="#" className="dropdown-toggle" id="toggleCollapser">
              Pages
            </a>
            <UncontrolledCollapse toggler="toggleCollapser">
              <Nav vertical className="mt-2">
                <NavItem>
                  <NavLink href="/pages/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/pages/setting">Settings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/pages/login">Login</NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </ListGroupItem>
          <ListGroupItem tag="a" href="/pages/tables">
            Tables
          </ListGroupItem>
          <ListGroupItem>
            <a href="#" className="dropdown-toggle" id="toggleCollapser1">
              Pages
            </a>
            <UncontrolledCollapse toggler="toggleCollapser1">
              <Nav vertical className="mt-2">
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Disabled Link
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </ListGroupItem>
        </ListGroup>
      </div>
    </>
  );
}

export default NavbarLeft;
