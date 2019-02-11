import React, { Component } from "react";
import { connect } from "react-redux";
import MapPage from "./Map/MapPage";
import styled from "styled-components";
import PropertyContent from "./propertycontent/PropertyContent";
const PropertiesStyle = styled.div`
  .property-container {
    border: 1px solid red;
    display: flex;
  }
  .property-left {
    border: 1px solid blue;
    width: 60%;
  }
  .property-right {
    border: 1px solid green;
    width: 40vw;
    height: 80vh;
  }
`;

class Properties extends Component {
  render() {
    const filterData = this.props.data.filter((d, idx) => idx < 9);
    console.log(filterData);
    return (
      <PropertiesStyle>
        <div className="property-container ">
          <div className="property-left">
            <PropertyContent />
          </div>
          <div className="property-right">
            <MapPage />
          </div>
        </div>
      </PropertiesStyle>
    );
  }
}

const mapStateToProps = state => ({
  data: state.propertyReducer.data
});
export default connect(mapStateToProps)(Properties);
