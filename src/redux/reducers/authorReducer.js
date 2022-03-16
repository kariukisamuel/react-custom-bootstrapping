import * as types from "../actions/actionTypes";
import intitialState from "../initialState";
export default function authorReducer(state = intitialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS:
      return action.authors;
    default:
      return state;
  }
}
