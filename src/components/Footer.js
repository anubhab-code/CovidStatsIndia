import React from "react";

import profile from "../profileAvatar.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="left-info">
        <div className="profile">
          <img src={profile} alt="profile" height="40px" />
        </div>
        <div className="text_">
          <p>Created By</p>
          <span>
            <p>Anubhab Swain</p>
          </span>
        </div>
      </div>
      <div className="right-info">
        <a href="https://github.com/anubhab-code">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/anubhabcodes/">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/anubhab.exe/">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
