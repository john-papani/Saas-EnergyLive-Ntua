import React from "react";
import logo from "../img/energy.jpg";
import Footer_home from "../Basics/Footer_home.js";
import "../css/home_page.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <img className="logo_home" src={logo} alt="Logo" />
      <h1 className="title_home"> EnergyLive 2022 </h1>
      <Link to="/login">
        <button className="google_button">Sign in with Google</button>
      </Link>
      <div class="wrapper">
        <div class="divider div-transparent"></div>
      </div>

      <Footer_home />
    </div>
  );
};

export default Home;
