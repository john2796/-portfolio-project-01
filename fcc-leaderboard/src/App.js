import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Content, Navigation } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (  <div style={{ height: "1000px", position: "relative" }}>
        <Layout fixedHeader>
          <Header
            className="header-color"
            title={
              <span>
                <span style={{ color: "#ddd" }}>Area / </span>
                <strong>The Title</strong>
              </span>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    
    );
  }
}

export default App;
