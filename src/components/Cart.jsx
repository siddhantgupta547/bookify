import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import { increaseQuantity, decreaseQuantity, deleteItem } from "../actions";

class Cart extends Component {
  onIncreaseQuantity = (book) => {
    this.props.dispatch(increaseQuantity(book));
  };

  onDecreaseQuantity = (book) => {
    this.props.dispatch(decreaseQuantity(book));
  };

  onDeleteProduct = (id) => {
    this.props.dispatch(deleteItem(id));
  };

  render() {
    console.log(this.props, "props");
    const products = this.props.cart.cart;
    console.log(products, "products");

    return (
      <div className="cart container-fluid">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.bookID}
              onIncreaseQuantity={this.onIncreaseQuantity}
              onDecreaseQuantity={this.onDecreaseQuantity}
              onDeleteProduct={this.onDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
