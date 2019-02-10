import React from "react";

import LatestListing from "./LatestListing/LatestListing";
import Wpresidence from "./Wpresidence/Wpresidence";
import NewListing from "./newlisting/NewListing";
import ClientStats from "./clientstats/ClientStats";
import HeaderInfo from "../HeaderContainer/headerinfo/HeaderInfo";

const Main = props => {
  return (
    <React.Fragment>
      <Wpresidence />
      <LatestListing />
      <NewListing />
      <ClientStats />
    </React.Fragment>
  );
};

export default Main;
