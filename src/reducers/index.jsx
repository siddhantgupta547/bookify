import { combineReducers } from "redux";
import {
  ADD_BOOKS,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_ITEM,
  EMPTY_CART,
} from "../actions/index";

function booksReducer(state = { books: [] }, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        books: action.books,
      };
    default:
      return state;
  }
}

export function cartReducer(state = { cart: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let array = [...state.cart];
      let increased = false;
      for (let book of array) {
        if (book.id === action.book.id) {
          book.quantity = book.quantity + 1;
          increased = true;
        }
      }
      if (increased === false) {
        array.push(action.book);
      }
      return {
        cart: array,
      };
    case INCREASE_QUANTITY:
      const increasedArray = [...state.cart];
      for (let book of increasedArray) {
        if (book.id === action.book.id) {
          book.quantity = book.quantity + 1;
        }
      }
      return {
        cart: increasedArray,
      };
    case DECREASE_QUANTITY:
      const decreasedArray = [...state.cart];
      for (let book of decreasedArray) {
        if (book.id === action.book.id && book.quantity > 1) {
          book.quantity = book.quantity - 1;
        }
      }
      return {
        cart: decreasedArray,
      };
    case DELETE_ITEM:
      const newArray = [...state.cart];
      const FilteredArray = newArray.filter((book) => {
        if (book.id !== action.book) {
          return book;
        }
      });
      return {
        cart: FilteredArray,
      };
    // case EMPTY_CART:
    //   return {
    //     books: [],
    //   };
    default:
      return state;
  }
}

export default combineReducers({
  books: booksReducer,
  cart: cartReducer,
});
