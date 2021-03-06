import React from "react";
import './styles.css';

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <a href="/">
            <h2>
              DS<span style={{ color: "#FF8400" }}>SALES</span>
            </h2>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
