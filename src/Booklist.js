import React, { Component } from "react";
import Book from "./Book";
import Booksdata from "./Booksdata";

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = { books: Booksdata };
  }

  render() {
    return (
      <section>
        <h3>Featured Books</h3>
        {this.state.books.map(item => (
          <Book key={item.id} info={item}></Book>
        ))}
        {/* <Book></Book>
        <Book></Book> */}
      </section>
    );
  }
}
