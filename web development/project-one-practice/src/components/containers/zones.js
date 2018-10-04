import React, { Component } from "react";
import Zone from "../presentation/zone";

class Zones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { name: "Zone 1", zipCode: "10012", numComments: 10 },
        { name: "Zone 2", zipCode: "10013", numComments: 20 },
        { name: "Zone 3", zipCode: "10014", numComments: 30 },
        { name: "Zone 4", zipCode: "10015", numComments: 40 },
        { name: "Zone 5", zipCode: "10016", numComments: 50 },
        { name: "Zone 6", zipCode: "10017", numComments: 60 }
      ]
    };
  }
  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}>
          <Zone currentZone={zone} />
        </li>
      );
    });
    return (
      <div className="">
        <h1 style={{ color: "gray", marginLeft: 40 }}>
          Learning React is da BOMB!{" "}
        </h1>
        <ol>{listItems}</ol>
      </div>
    );
  }
}

export default Zones;
