import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { price, title, quantity } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
      this.props;
    return (
      <div className="cart-item">
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {quantity} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

// onIncreaseQuantity={props.onIncreaseQuantity}
//               onDecreaseQuantity={props.onDecreaseQuantity}
//               onDeleteProduct={props.onDeleteProduct}

export default CartItem;
