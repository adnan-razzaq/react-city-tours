import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../Tour";
import { tourData } from "../../tourData";

export default class tourlist extends Component {
  state = {
    tours: tourData
  };

  removetour = id => {
    const { tours } = this.state;
    const sorted = tours.filter(tour => {
      return tour.id !== id;
    });
    this.setState({
      tours: sorted
    });
  };
  render() {
    //destruce

    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removetour={this.removetour}></Tour>
        ))}
      </section>
    );
  }
}
