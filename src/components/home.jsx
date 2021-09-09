import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import BookCard from "./BookCard";
import { addBooks } from "../actions/index";

class Home extends Component {
  componentDidMount() {
    // console.log(this.props.store);
    // const { dispatch, subscribe, getState } = this.props;
    //
    // subscribe(() => {
    //   console.log("Books Added");
    //   this.forceUpdate();
    // });

    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
      )
      .then((res) => {
        const books = res.data.slice(0, 10);
        console.log(books);
        this.props.dispatch(addBooks(books));
      });

    //   dispatch(addBooks([{bookID: 1,
    //     title:	"Harry Potter and the Hal…ince (Harry Potter  #6)",
    //     authors:	"J.K. Rowling-Mary GrandPré",
    //     average_rating:	4.56,
    //     isbn:	439785960,
    //     ratings_count:	1944099,
    //     price:	230
    //   },
    //   {
    //     bookID: 2,
    //     title:	"Harry Potter and the Hal…ince (Harry Potter  #7)",
    //     authors:	"J.K. Rowling-Mary GrandPré",
    //     average_rating:	4.56,
    //     isbn:	439785960,
    //     ratings_count:	1944099,
    //     price:	230
    //   }
    // ]))
    //   console.log(getState());
  }
  render() {
    const { books } = this.props.books;
    console.log(books, "books", books.length, "rendered");
    return (
      <div className="cardsArea" style={mystyle}>
        {books.length &&
          books.map((book, index) => {
            return <BookCard key={index} book={book} />;
          })}
      </div>
    );
  }
}

const mystyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(Home);
