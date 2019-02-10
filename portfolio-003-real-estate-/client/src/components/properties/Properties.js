import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";
const PropertiesStyle = styled.div`
  .property-container {
    border: 1px solid red;
  }
`;

class Properties extends Component {
  render() {
    return (
      <PropertiesStyle>
        <Container className="property-container ">
          <Row>
            <Col xs="8" sm="4">
              contents
            </Col>
            <Col xs="4" sm="4">
              map
            </Col>
          </Row>
        </Container>
      </PropertiesStyle>
    );
  }
}

export default Properties;
