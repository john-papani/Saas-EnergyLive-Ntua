import React from "react";
import "../css/notvalidlogin.css";
import photo1 from "../img/why_are_youhere.png";
const NotValidlogin = () => {
  return (
    <div className="NotValidlogin">
      <img alt="whyareyouherelogo" src={photo1}></img>
      <h2>OOPS, Your account is no longer active😕</h2>
      <h3>Choose below</h3>
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>Try with other google account</h4>
            <button class="btn btn-success btn-lg" onClick={() => sessionStorage.clear()} >
              <a href="/home" >HOME</a>
            </button>
          </div>
          <div class="col">
            <h4>Extend your premium package </h4>
            <button class="btn btn-warning btn-lg">
              <a href="/extend">EXTEND</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotValidlogin;
