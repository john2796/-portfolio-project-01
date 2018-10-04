import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "atuo" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://as2.ftcdn.net/jpg/00/62/33/13/500_F_62331399_ebZGMRjLhYJgH3etZlthD8znJQ821faV.jpg"
              alt=""
              className="avatar-image"
            />
            <div className="banner-text">
              <h1>Full stack Web Developer</h1>
              <hr />
              <p>
                HTML | CSS | JAVASCRIPT | REACT | REACT NATIVE | EXPRESS |
                MongoDB
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
