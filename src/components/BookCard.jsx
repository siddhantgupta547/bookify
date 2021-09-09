import React from 'react';

class BookCard extends React.Component{
  render(){
    let title= this.props.book.title;
    if(this.props.book.title.length>50){
      title= this.props.book.title.substring(0,49);
    }
    else{
      title= this.props.book.title
    }
    return(
      <div>
        <p>{title}</p>
        <p>{this.props.book.authors}</p>
        <p>{this.props.book.ratings_count}</p>
        <p>{this.props.book.price}</p>
      </div>
    )
  }
}

export default BookCard;
