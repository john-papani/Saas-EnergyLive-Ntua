import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
// import back from "../img/goback.png"
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <nav class="navbar">
        {/* <a href="/home">
        <img alt="goback" src={back} />
      </a> */}
          <div class="col-10">
            <div className="email-nav mx-auto">
              {localStorage.getItem("userEmail")}
            </div>
          </div>
          <div className="col-2">
            <button class="btn  ms-auto" type="submit">
              <a href="/home" onClick={() => localStorage.clear()}>
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
