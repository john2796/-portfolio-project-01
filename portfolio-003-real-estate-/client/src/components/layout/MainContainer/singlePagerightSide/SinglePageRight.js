import React, { Component } from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";
import ContactPage from "./ContactPage";
import LatestRightCard from "./LatestRightCard";
import OurListingCard from "./OurListingCard";
import SocialLinksCard from "./SocialLinksCard";
import SearchCard from "./SearchCard";

const SinglePageRightStyle = styled.div`
  max-width: 90%;

  .card {
    background: #ffff;
  }
`;

class SinglePageRight extends Component {
  render() {
    const { cdata } = this.props;
    console.log("cdata", cdata);
    return (
      <SinglePageRightStyle>
        {/* card-info */}
        <CardInfo />
        {/* contact card */}
        <ContactPage />
        {/* latest-listing */}
        <LatestRightCard />
        {/* our listing card */}
        <OurListingCard />
        {/* social-links */}
        <SocialLinksCard />
        {/* advanced-search */}
        <SearchCard />
        {/* latest-listing card */}
        {/* mortgage calculator */}
      </SinglePageRightStyle>
    );
  }
}

export default SinglePageRight;
