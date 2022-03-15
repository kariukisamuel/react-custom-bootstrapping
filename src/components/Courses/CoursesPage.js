import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursePage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course: course });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add a new course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses,
  };
}
// function mapDispatchToProps(dispatch, ownProps) {

// }

export default connect(mapStateToProps)(CoursePage);
