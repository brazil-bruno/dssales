import React from "react";
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
            <p>Click on the Github icon below to access the project</p>
            <div className="container">
                <a href="https://github.com/brazil-bruno/dssales" target="_new">
                    <GithubIcon />
                </a>
            </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
