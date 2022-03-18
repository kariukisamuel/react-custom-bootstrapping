import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
export function updateCourse(course) {
  return { type: types.UPDATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES, courses: courses };
}

export function loadCourses() {
  return function (dispatch) {
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
