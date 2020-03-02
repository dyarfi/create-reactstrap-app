import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import "./assets/scss/main.scss";

import { Row, Col } from "reactstrap";

import MainLayout from "./layout/MainLayout";
import Nav from "./components/nav";
import NavBarDefault from "./components/navbar/navbarDefault";
import NavBarLeft from "./components/navbar/navbarLeft";
import Footer from "./components/footer";

function App() {
  return (    
    <>
      <NavBarDefault />
      <MainLayout>
        <Row>
          <Col xs={12} sm={3} className="bg-light">
            <NavBarLeft />
          </Col>
          <Col xs={12} sm={9}>
            <h1>Content</h1>
            <div className="hero">
              <h1 className="title">Welcome to Next.js!</h1>
              <p className="description">
                To get started, edit <code>pages/index.js</code> and save to
                reload.
              </p>
              <Row>
                <a href="https://nextjs.org/docs" className="text-dark">
                  <h3>Documentation &rarr;</h3>
                  <p>Learn more about Next.js in the documentation.</p>
                </a>
                <a href="https://nextjs.org/learn" className="text-dark">
                  <h3>Next.js Learn &rarr;</h3>
                  <p>
                    Learn about Next.js by following an interactive tutorial!
                  </p>
                </a>
                <a
                  href="https://github.com/zeit/next.js/tree/master/examples"
                  className="text-dark"
                >
                  <h3>Examples &rarr;</h3>
                  <p>Find other example boilerplates on the Next.js GitHub.</p>
                </a>
              </Row>
            </div>
          </Col>
        </Row>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
