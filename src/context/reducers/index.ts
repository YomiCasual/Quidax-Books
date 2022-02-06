import combineReducers from "react-combine-reducers";
import { cartInitialState, CartReducer } from "./cartReducer";
import { bookInitialState, SearchBooksReducer } from "./booksReducer";

export const baseReducer = combineReducers({
  cart: [CartReducer, cartInitialState],
  searchedBooks: [SearchBooksReducer, bookInitialState],
});

// Export
export * from "./actions";
