import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      //this curly braces wrapped in && is just saying if both are true or if exists show the data but if it's false dont render the string or anything
      <div className="weather__info">
        {this.props.city &&
          this.props.country && (
            <p className="weather__key">
              {" "}
              Location:{" "}
              <span className="weather__value">
                {this.props.city}, {this.props.country}
              </span>{" "}
            </p>
          )}

        {this.props.temperature && (
          <p className="weather__key">
            {" "}
            Temperature:{" "}
            <span className="weather__value">
              {this.props.temperature}
            </span>{" "}
          </p>
        )}

        {this.props.humidity && (
          <p className="weather__key">
            {" "}
            Humidity:{" "}
            <span className="weather__value">{this.props.humidity}</span>
          </p>
        )}

        {this.props.description && (
          <p className="weather__key">
            {" "}
            Conditions:{" "}
            <span className="weather__value">{this.props.description}</span>
          </p>
        )}

        {this.props.error && <p className="weather__key">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
