import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/extend.css";
import axios from "axios";
import moment from "moment";

const ExtendPlan = () => {
  const [email, setEmail] = useState(localStorage.getItem("userEmail"));
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [daysLeft, setDaysLeft] = useState(0);
  const [dayextend, setDayextend] = useState(0);

  useEffect(() => {
    async function getUserDetails() {
      const res = await axios.get(
        `https://users-saas.herokuapp.com/users/find/${localStorage.getItem("userEmail")}`
      );

      let data = await res.data;
      let days = moment(data.valid_until, "YYYY/MM/DD").fromNow();
      setDaysLeft(days);
      console.log(data);
      setName(data.first_name);
      setSurname(data.last_name);
    }
    getUserDetails();
  });

  const handleExtendButton = () => {
    async function extend() {
      const data = await axios.post(
        `https://users-saas.herokuapp.com/users/extend/${email}/${dayextend}`
      );
    }
    extend();
    window.location.replace("/main");
  };
  const goback = () => {
    console.log(localStorage.getItem("validlogin"));
    if (localStorage.getItem("validlogin") === "true") {
      window.location.replace("/main");
    } else if (localStorage.getItem("validlogin") === "false") {
      localStorage.clear();
      window.location.replace("/home");
    } else {
      window.location.replace("/main");
    }
  };
  return (
    <div className="ExtendPlan">
      <h1>Energy Live 2022</h1>
      {/* PERSONAL DETAILS */}
      <div class="col-lg-7 mx-auto">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">First Name</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{name}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Last Name</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{surname}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{email}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Last Login</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{localStorage.getItem("timelogin")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOX == DAYS LEFT+ EXNTEND BY */}
      <div
        class="col-lg-7 mx-auto
      "
      >
        <div class="card mb-4">
          <div class="card-body">
            <div class="row mx-auto">
              <div class="col-sm-3">
                <p class="mb-0 ms-auto">
                  Days left: <b>{daysLeft}</b>
                </p>
              </div>
              <div class="col-sm-4">
                <p class="mb-0" id="title">
                  Extend by(days):
                </p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">
                  {/* <label for="num">Extend by(days)</label> */}
                  <input
                    className="num"
                    type={"number"}
                    onChange={(e) => {
                      setDayextend(e.target.value);
                      console.log(e.target.value);
                    }}
                    min={1}
                    placeholder="Days to Extend"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EXTEND AND CANCEL BUTTON */}
      <div class="col-4  mx-auto" id="btn-extend">
        <div class="row">
          <div class="d-inline-flex mx-auto">
            <div class="col-sm-3">
              <button
                class="btn btn-dark btn-lg"
                id="btn-ext"
                type="button"
                onClick={() => handleExtendButton()}
              >
                Extend
              </button>
            </div>
            <div class="col-sm-3">
              <button
                class="btn btn-dark btn-lg"
                id="btn-ext"
                type="button"
                onClick={() => goback()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*BACK BUTTON */}
      <div class="col-4  mx-auto" id="btn-extend">
        <div class="row">
          <div class="d-inline-flex mx-auto">
            <div class="col-sm-3">
              <button
                class="btn btn-lg"
                type="button"
                onClick={() => window.location.replace("/main")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendPlan;
