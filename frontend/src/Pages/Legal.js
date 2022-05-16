import { Button } from "bootstrap";
import React from "react";
import "../css/legal.css"
const Legal = () => {
  return (
    <div className="Legal">
      <h1>Legal Page</h1>
      <div class="container"id="legal-container">
        <div class="row">
          <div class="col-6 mx-auto">
            <p className="legal-text">
              Αll data were collected by the <b>European Network of Transmission
              System Operators for Electricity</b>.
              <br /> ENTSO-E, the European Network of Transmission System
              Operators, represents 39 electricity transmission system operators
              (TSOs) from 35 countries across Europe, thus extending beyond EU
              borders. ENTSO-E was established and given legal mandates by the
              EU's Third Package for the Internal energy market in 2009, which
              aims at further liberalising the gas and electricity markets in
              the EU.
              <hr></hr>
              <div id="site-entsoe">
              For more information about ENTSOE
              <br/>
              <a role="button" class="btn btn-sm btn-dark" href="https://www.entsoe.eu">
                CLICK HERE
              </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
