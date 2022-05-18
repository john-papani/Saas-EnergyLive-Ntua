import React from "react";
import "../css/plans.css";
import back from "../img/goback.png";
const Plans = () => {
  return (
    <div className="Plans">
      <h1 className="title">All Plans for EnergyLive2022</h1>
      <div class="card container ">
        <div class="row">
          <div class="col">
            <b> Standard</b>: 1 Month Basic Charts
          </div>
          <div class="col">2,99 €</div>
        </div>
        <div class="row">
          <div class="col">
            <b>Premium</b>: 12 Months
          </div>
          <div class="col">35,99 €</div>
        </div>
        <div class="row">
          <div class="col">
            <b>Extra Premium</b>: 24 Months + 2 months <i>FREE</i>
          </div>
          <div class="col">71,99 €</div>
        </div>
      </div>

      <a href="/home">
        <img alt="goback" src={back} />
      </a>
    </div>
  );
};
export default Plans;
