import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/extend.css";
import axios from "axios";

const ExtendPlan = () => {
  // const [email, setEmail] = useState("testing@mail.gr");
  // const [name, setName] = useState("Ioannis");
  // const [surname, setSurname] = useState("Papanikolaou");
  // const [lastlogin, setLastlogin] = useState(
  //   new Date("02-01-2022").setHours(0, 0, 0, 0)
  // );
  const [dayextend, setDayextend] = useState(0);
  const [daysleft, setDaysleft] = useState(10);

  return (
    <div className="ExtendPlan">
      <h1>
        Extend Page
        <a href="/home">Home</a>
      </h1>

      {/* PERSONAL DETAILS */}
      <div class="col-lg-7 mx-auto">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">First Name</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{sessionStorage.getItem("username")}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Last Name</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{sessionStorage.getItem("userfamilyname")}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{sessionStorage.getItem("userEmail")}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Last Login</p>
              </div>
              <div class="col-sm-5">
                <p class="mb-0">{sessionStorage.getItem("timelogin")}</p>
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
              <div class="col-sm-2">
                <p class="mb-0 ms-auto">
                  Days left: <b>{daysleft}</b>
                </p>
              </div>
              <div class="col-sm-5">
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
                      setDayextend(e.value);
                      console.log(e.value);
                    }}
                    min={0}
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
              <button class="btn btn-dark btn-lg" id="btn-ext" type="button">
                <a href="/#"> Extend</a>
              </button>
            </div>
            <div class="col-sm-3">
              <button class="btn btn-dark btn-lg" id="btn-ext" type="button">
                <a href="/main">Cancel</a>
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
              <button class="btn btn-lg" type="button">
                <a href="/main">Back</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendPlan;
