import * as types from "../actions/actionTypes";
import intitialState from "../initialState";

export default function courseReducer(state = intitialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) => (action.course.id ? action.course : course));
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
