import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Home</h1>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
};

export default HomePage;
