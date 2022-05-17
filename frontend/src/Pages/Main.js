import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

import AristeraMain from "./AristeraMain";
import DexiaMain from "./DexiaMain";
import Navbar from "../Basics/Navbar";
const Main1 = ({ userEmail }) => {
  const [startDate, setStartDate] = useState(
    new Date("01-01-2022").setHours(0, 0, 0, 0)
  );
  const [quantity, setQuantity] = useState();
  const [country, setCountry] = useState();
  const [type, setType] = useState();
  const [data, setData] = useState([]);
  return (
    <div className="Main">
      <Navbar />
      <div className="container">
        <div class="row">
          <div class="col-4" id="aristera">
            <AristeraMain
              startDate={startDate}
              setStartDate={setStartDate}
              quantity={quantity}
              setQuantity={setQuantity}
              setCountry={setCountry}
              setType={setType}
              data={data}
              setData={setData}
            />
          </div>
          <div class="col-8">
            <DexiaMain
              quantity={quantity}
              country={country}
              type={type}
              startDate={startDate}
              data={data}
              userEmail={userEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
