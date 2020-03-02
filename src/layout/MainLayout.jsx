import React from "react";
import { Container } from "reactstrap";

const MainLayout = props => {
  const { children } = props;
  return <Container fluid>{children}</Container>;
};

export default MainLayout;
