import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Tooltip,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { getSingleListId } from "../../../store/actions/listingAction";
import styled from "styled-components";
const PropertyContentStyle = styled.div`
  .property-card {
    border: 3px solid green;
    max-width: 300px;
    margin: 0 3%;
  }
  .property-left-arrow {
    right: 1px;
  }
  .property-carousel {
    border: 5px solid red;
    height: 300px;
  }
`;
const items = [
  {
    src:
      "https://losangeles.wpresidence.net/wp-content/uploads/2016/03/city_9-1-525x328.jpg"
  },
  {
    src:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter1013-525x328.jpg"
  },
  {
    src:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
  }
];
class PropertyContent extends Component {
  render() {
    return (
      <PropertyContentStyle>
        <Card className="property-card">
          <div className="carousel-info-parent">
            <div className="carousel-info">
              <p className="rentals ">Rentals</p>
              <div>
                <i className="far fa-heart" id="favorites-heart" />
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="favorites-heart"
                  toggle={toggle}
                >
                  add to <br /> favorites
                </Tooltip>
              </div>
            </div>
          </div>
          <Link
            to={`/listing/${id}`}
            onClick={() => this.props.getSingleListId(id)}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardBody>
              <CardTitle>Luxury Villa In Rego Park</CardTitle>
              <CardSubtitle> $ 2,100 / month</CardSubtitle>
              <CardText>
                Just steps away from QM2 express bus to Manhattan and local
                buses; only minutes from the LIRR. Walki [more]
              </CardText>

              <div className="property_listing_details">
                {" "}
                <span className="infobath_unit_type2">
                  <i className="fas fa-tint" />4
                </span>{" "}
                <span className="infogarage_unit_type2">
                  <i className="fas fa-car" />
                  10
                </span>{" "}
                <span className="infosize_unit_type2">
                  <i className="far fa-map" />5 000,00 ft<sup>2</sup>
                </span>
              </div>

              <div className="property-location">
                <div className="property-name">
                  <img
                    src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/agent2-1-120x120.jpg"
                    alt=""
                  />
                  <h5>Michael Suttherland</h5>
                </div>
                <span className="property-share">
                  <i className="fas fa-share-alt" />
                  <i className="fas fa-plus" />
                </span>
              </div>
            </CardBody>
          </Link>
        </Card>
      </PropertyContentStyle>
    );
  }
}
export default connect(
  null,
  { getSingleListId }
)(PropertyContent);
