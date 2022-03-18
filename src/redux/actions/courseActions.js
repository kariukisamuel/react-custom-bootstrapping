import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./apiStatusActions";

export function createCourse(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course: course };
}
export function updateCourse(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
