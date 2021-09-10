import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { addBooks, addToCart } from "../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_number: 0,
    };
  }

  componentDidMount() {
    // console.log(this.props.store);
    // const { dispatch, subscribe, getState } = this.props;
    //
    // subscribe(() => {
    //   console.log("Books Added");
    //   this.forceUpdate();
    // });
    console.log("mounted");
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
      )
      .then((res) => {
        const books = res.data.slice(0, 199);
        //console.log(books);
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

  paginate = (books) => {
    const books_per_page = 20;
    const total_pages = Math.ceil(books.length / books_per_page);
    const current_page = this.state.page_number;
    const trimStart = books_per_page * current_page;
    const trimEnd = books_per_page + trimStart;
    const trimmedArray = books.slice(trimStart, trimEnd);
    return { trimmedArray, total_pages, current_page };
  };

  handleClick = (page, optional = -1) => {
    console.log(page, "Page");
    if (optional === 1) {
      this.setState({
        page_number: page + 1,
      });
    } else if (optional === 0) {
      this.setState({
        page_number: page - 1,
      });
    } else {
      this.setState({
        page_number: page,
      });
    }
  };

  handleAdd = (book) => {
    const cartItem = {
      id: book.bookID,
      title: book.title,
      price: book.price,
      quantity: 1,
    };
    this.props.dispatch(addToCart(cartItem));
  };

  // handleSearchClick = (title) => {
  //   const { books } = this.props.books;
  //   const filteredArray = books.filter((book) => {
  //     if (book.title === title) {
  //       return book;
  //     }
  //   });
  //   console.log("handled Search");
  //   this.props.dispatch(addBooks(filteredArray));
  // };

  render() {
    const { books } = this.props.books;
    const { trimmedArray, total_pages, current_page } = this.paginate(books);
    //console.log(books, "books", books.length, "rendered");
    console.log("total_pages", total_pages);
    return (
      <div className="container-fluid">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col"></th>
              <th scope="col">Authors</th>
              <th scope="col">Language</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope=""></th>
            </tr>
          </thead>
          <tbody>
            {books.length ? (
              trimmedArray.map((book, index) => {
                return (
                  <BookCard
                    key={index}
                    book={book}
                    handleAdd={this.handleAdd}
                  />
                );
              })
            ) : (
              <p>No Books Found</p>
            )}
          </tbody>
        </table>
        <Pagination
          total={total_pages}
          current={current_page}
          handle={this.handleClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(Home);
