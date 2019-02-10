import React, { Component } from "react";
import TopNavbar from "./topnavbar/TopNavbar";
import Navbar from "./navbar/Navbar";
import HeaderInfo from "./headerinfo/HeaderInfo";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    // let conditionalStyle =
    //   this.props.location.pathname === `/listing/${this.props.listId}`
    //     ? "listing-style"
    //     : "bg-banner-header";
    // let topnavbar =
    //   this.props.location.pathname === `/listing/${this.props.listId}`
    //     ? "listing-textwidget"
    //     : "textwidget";
    return (
      <div>
        <div className="listing-style">
          <TopNavbar topnavbar="listing-textwidget" />
          {/* the style for bot topnavbar , headerinfo, and navbar is in _Header.scss */}
          <Navbar />
          <HeaderInfo />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listId: state.listing.listId
});

export default connect(mapStateToProps)(withRouter(Header));
