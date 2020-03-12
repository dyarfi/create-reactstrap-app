import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function NavbarTop(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const routes = [
    {
      path: '/dashboard',
      // component: Dashboard,
    },
    {
      path: '/documentation',
      // component: Documentation,
      routes: [
        {
          path: '/tacos/bus',
          // component: Bus,
        },
        {
          path: '/tacos/cart',
          // component: Cart,
        },
      ],
    },
  ];

  // A special wrapper for <Route> that knows how to
  // handle "sub"-routes by passing them in a `routes`
  // prop to the component it renders.
  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  return (
    <div>
      <Router>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">
            <img src="/logo.svg" alt="Logo React" className="img-fluid w-15" />
            CRA Reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/pages/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pages/documentation">Documentation</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              <NavLink href="/pages/dashboard">Dashboard</NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default NavbarTop;
