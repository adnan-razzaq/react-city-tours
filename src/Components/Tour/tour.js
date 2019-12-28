import React, { Component } from "react";
import "./tour.scss";

export default class tour extends Component {
  state = {
    showInfo: false
  };
  handleinfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, img, city, name, info } = this.props.tour;
    const { removetour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={() => removetour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              <i
                className="fas fa-angle-double-down"
                onClick={this.handleinfo}
              ></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
