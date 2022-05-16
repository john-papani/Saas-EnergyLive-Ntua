import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css"
const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        {/* <a class="navbar-brand" href="/home">Home page</a> */}
        <button class="btn  ms-auto" type="submit">
          <a href="/home"> Sign Out</a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
