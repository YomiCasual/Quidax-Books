import { SearchBookActions } from "./actions";
import { ActionType, BookStateType } from "../types";

// Initial State
export const bookInitialState = {
  books: [],
  filter: "",
  loading: false,
};

// Actions
const { STORE_SEARCHED_BOOKS, CLEAR_SEARCHED_BOOKS, FETCHING_SEARCHED_BOOKS } =
  SearchBookActions;

export function SearchBooksReducer(state: BookStateType, action: ActionType) {
  const { type, payload } = action;
  switch (type) {
    case STORE_SEARCHED_BOOKS: {
      return {
        ...state,
        books: payload?.books,
        filter: payload.filter,
        loading: false,
      };
    }
    case CLEAR_SEARCHED_BOOKS: {
      return { ...state, books: [], filter: "" };
    }
    case FETCHING_SEARCHED_BOOKS: {
      return { ...state, books: [], loading: true };
    }

    default: {
      return state;
    }
  }
}
