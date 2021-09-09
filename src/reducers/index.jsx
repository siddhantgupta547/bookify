import { combineReducers } from "redux";
import { ADD_BOOKS } from "../actions/index";

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

export default combineReducers({
  books: booksReducer,
});
