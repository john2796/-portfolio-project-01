import React from "react";
import styled from "styled-components";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const ContactPageStyle = styled.div``;

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Send Email</button>
          </form>
        </CardBody>
      </Card>
    </ContactPageStyle>
  );
};

export default ContactPage;
