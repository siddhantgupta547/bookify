export const ADD_BOOKS = "ADD_BOOKS";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_ITEM = "DELETE_ITEM";
export const EMPTY_CART = "EMPTY_CART";

export function addBooks(books) {
  return {
    type: ADD_BOOKS,
    books,
  };
}

export function addToCart(book) {
  return {
    type: ADD_TO_CART,
    book,
  };
}

export function increaseQuantity(book) {
  return {
    type: INCREASE_QUANTITY,
    book,
  };
}

export function decreaseQuantity(book) {
  return {
    type: DECREASE_QUANTITY,
    book,
  };
}

export function deleteItem(book) {
  return {
    type: DELETE_ITEM,
    book,
  };
}

export function emptyCart() {
  return {
    type: EMPTY_CART,
  };
}
