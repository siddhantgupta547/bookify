import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { addBooks } from "../actions";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { books } = this.props.books;
    const filteredArray = books.filter((book) => {
      if (book.title.toLowerCase().includes(this.state.search.toLowerCase())) {
        return book;
      }
    });
    console.log("handled Search");
    this.props.dispatch(addBooks(filteredArray));
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => window.location.reload()}
          >
            Bookify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleSearch}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={this.handleClick}
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <ShoppingCartTwoToneIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    books: state.books,
  };
}

export default connect(mapStateToProps)(Navbar);
