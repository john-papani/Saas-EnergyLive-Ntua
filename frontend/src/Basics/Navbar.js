import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <nav class="navbar">
          {/* <a class="navbar-brand" href="/home">
          Home page
        </a> */}
          <div class="col-10">
            <div className="email-nav mx-auto">
              {sessionStorage.getItem("userEmail")}
            </div>
          </div>
          <div className="col-2">
            <button class="btn  ms-auto" type="submit">
              <a href="/home" onClick={() => sessionStorage.clear()}>
                {" "}
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
