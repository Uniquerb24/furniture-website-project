import React from "react";
import "./global/constant.scss";

const constant = () => {
  return (
    <header class="container">
      <div className="be">
        <span>Behance</span>
      </div>
      <div>
        <p>Discover</p>
      </div>
      <div>
        <p>Livestream</p>
      </div>
      <div>
        <p>Jobs</p>
      </div>

      <div id="search">
        <input type="text" placeholder="search...." />
      </div>
      <div id="login">
        <button>Log In</button>
      </div>
      <div id="sign">
        <button>Sign Up</button>
      </div>
      <div>
        <p>Adobe</p>
      </div>
    </header>
  );
};

export default constant;
