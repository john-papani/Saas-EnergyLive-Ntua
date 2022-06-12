import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
// import back from "../img/goback.png"
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <nav class="navbar">
          <div class="col-4">
            <h1>Energy Live 2022</h1>
          </div>
          <div class="col-6">
            <div className="email-nav mx-auto">
              {localStorage.getItem("userEmail")}
            </div>
          </div>
          <div className="col-2">
            <button class="btn  ms-auto" type="submit">
              <a href="/home" onClick={() => localStorage.clear()}>
                Sign Out
              </a>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
