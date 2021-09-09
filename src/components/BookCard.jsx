import React from "react";

class BookCard extends React.Component {
  render() {
    let title = this.props.book.title;
    if (this.props.book.title.length > 80) {
      title = this.props.book.title.substring(0, 79);
    } else {
      title = this.props.book.title;
    }
    let authors = this.props.book.authors;
    if (this.props.book.authors.length > 50) {
      authors = this.props.book.authors.substring(0, 49);
    } else {
      authors = this.props.book.authors;
    }

    let language = this.props.book.language_code;
    let Fixedlangauge;
    switch (language) {
      case "eng":
        Fixedlangauge = "English";
        break;
      case "en-US":
        Fixedlangauge = "English";
        break;
      case "en-GB":
        Fixedlangauge = "English";
        break;
      case "ger":
        Fixedlangauge = "German";
        break;
      case "spa":
        Fixedlangauge = "Spanish";
        break;
      case "fre":
        Fixedlangauge = "French";
        break;
      case "ara":
        Fixedlangauge = "Arabic";
        break;
      case "por":
        Fixedlangauge = "Portugese";
        break;
      case "mul":
        Fixedlangauge = "Greek";
        break;
      default:
        Fixedlangauge = language;
        break;
    }
    return (
      <tr>
        <tr>{title}</tr>
        <td>{authors}</td>
        <td>{Fixedlangauge}</td>
        <td>{this.props.book.average_rating}</td>
        <td>{this.props.book.price} Rs</td>
        <td>
          <button type="button" class="btn btn-primary">
            Add To Cart
          </button>
        </td>
      </tr>
    );
  }
}

export default BookCard;
