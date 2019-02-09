import React from "react";
import {
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import styled from "styled-components";
const SearchCardStyle = styled.div`
  input {
    margin: 10px 0;
    font-size: 1.4rem;
    color: red;
    padding: 20px 0;
    padding-left: 10px;
  }
  button {
    margin: 10px 0;
    width: 100%;
    font-size: 1.4rem;
    background: #fdcc01;
    border: none;
  }
  form {
    padding: 0 3%;
  }
`;

const SearchCard = () => {
  return (
    <SearchCardStyle>
      <Card>
        <CardBody>
          <CardTitle>Advanced Search</CardTitle>
          <form>
            <FormGroup />
            <Input type="text" name="Name" placeholder="Your Name" />
            <Input type="text" name="email" placeholder="Your Email" />
            <Input type="text" name="phone" placeholder="Your Phone" />
            <span>More Search Options</span>
            <Button style={{ padding: "10px 0" }}>SEARCH</Button>
          </form>
        </CardBody>
      </Card>
    </SearchCardStyle>
  );
};

export default SearchCard;
