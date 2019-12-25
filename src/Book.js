import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { img, title, author } = this.props.info;

    return (
      <article className="book">
        <img src={img} alt="image" />
        <div>
          <h4> title: {title}</h4>
          <h6>author: {author}</h6>
        </div>
      </article>
    );
  }
}
