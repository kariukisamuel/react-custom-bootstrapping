import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const ManageCoursePage = ({ courses, authors, loadAuthors, loadCourses }) => {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors.loadAuthors().catch((error) => {
        alert("Loading authors  failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage Courses</h2>
    </>
  );
};

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
