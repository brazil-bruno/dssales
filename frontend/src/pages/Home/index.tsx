import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Sales</h1>
          <p className="lead">
            Analyze your sales performance from different perspectives
          </p>
          <hr />
          <p>
            This application consists of displaying a dashboard from data
            provided by a backend built with Spring Boot.
          </p>
          <a className="btn btn-primary btn-lg" href="/dashboard">Access the Dashboard</a>
        </div>
      </div>
    </>
  );
};

export default Home;
