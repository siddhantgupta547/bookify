import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class BookCard extends React.Component {
  render() {
    //console.log(this.props.book, "book");
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
        <td>{title}</td>
        <td>
          <Tooltip title="Wishlist">
            <IconButton aria-label="FavoriteBorder">
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        </td>
        <td>{authors}</td>
        <td>{Fixedlangauge}</td>
        <td>
          <Rating
            name="half-rating-read"
            defaultValue={this.props.book.average_rating}
            precision={0.01}
            readOnly
          />
        </td>
        <td>{this.props.book.price} Rs</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.handleAdd(this.props.book)}
          >
            Add To Cart
          </button>
        </td>
      </tr>
    );
  }
}

export default BookCard;
