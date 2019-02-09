import React, { Component } from "react";
import CardInfo from "./CardInfo";
import styled from "styled-components";

const SinglePageRightStyle = styled.div``;

class SinglePageRight extends Component {
  render() {
    const { cdata } = this.props;
    console.log("cdata", cdata);
    return (
      <SinglePageRightStyle>
        {/* card-info */}
        <CardInfo />
        {/* contact card */}
        {/* latest-listing */}
        {/* our listing card */}
        {/* social-links */}
        {/* advanced-search */}
        {/* latest-listing card */}
        {/* mortgage calculator */}
      </SinglePageRightStyle>
    );
  }
}

export default SinglePageRight;
