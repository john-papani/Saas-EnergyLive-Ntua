import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import axios from "axios";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AristeraMain = ({
  startDate,
  setStartDate,
  quantity,
  setQuantity,
  setCountry,
  setType,
  setData,
}) => {
  function refreshPage() {
    alert("BE Careful RELOAD page!");
    window.location.reload(false);
  }

  async function getCountryData() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    //! analoga me to eidos tha kanei call to antistoixo API
    // if ({ quantity } === "Actual Total Load") {
    //   const res = await axios.get(
    //     `http://localhost:3000/actual-total-load/${date}/${country}/json`
    //   );
    // } else if ({ quantity } === "Generation Per Type") {
    //   const res = await axios.get(
    //     `http://localhost:3001/aggregated-generation-per-type"/${date}/${country}/${type}/json`
    //   );
    // }
    setData(res.data);
    // console.log(res.data);
  }

  return (
    <div className="left-col">
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        minDate={new Date("01-01-2022")}
        maxDate={new Date("03-07-2022")}
        onChange={(date) => {
          setStartDate(date);
          console.log(date);
        }}
        inline
        calendarStartDay={1}
      />{" "}
      <p className="title-drop"> Quantity </p>{" "}
      <Dropdown
        className="dropdown"
        options={["Actual Total Load", "Generation Per Type"]}
        onChange={(e) => {
          setQuantity(e.value);
          console.log(e.value);
        }}
        // value={defaultOption}
        placeholder="Quantity"
      />
      <p className="title-drop"> Country </p>{" "}
      <Dropdown
        options={countries}
        className="dropdown"
        onChange={(e) => {
          setCountry(e.value);
          console.log(e.value);
        }}
        // value={defaultOption}
        placeholder="Country"
      />
      {/* me thn parakato grammi feugei to dropdown me to Generation Type se periptosi poy sto proto exoume actual total generation  */}{" "}
      <div className={`${quantity === "Generation Per Type" ? "" : "d-none"}`}>
        {" "}
        {/* {console.log(quantity)} */}{" "}
        <p className="title-drop"> Generation Type </p>{" "}
        <Dropdown
          options={types}
          className="dropdown"
          onChange={(e) => {
            setType(e.value);
            console.log(e.value);
          }}
          // value={defaultOption}
          placeholder="Generation Type"
        />
      </div>{" "}
      <br />
      <h6 style={{ color: "red" }}> PRESS TO SEE THE NEW CHART </h6>{" "}
      <Button variant="outline-danger" onClick={() => getCountryData()}>
        {" "}
        See the new chart{" "}
      </Button>{" "}
      <Button variant="outline-dark " onClick={refreshPage}>
        Refresh{" "}
      </Button>{" "}
    </div>
  );
};

export default AristeraMain;

const countries = [
  "Albania",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Republic of Moldova",
  "Romania",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Russia",
  "Armenia",
  "Azerbaijan",
  "Azerbaijan",
  "Russia",
  "Kosovo",
  "Armenia",
];

const types = [
  "Biomass",
  "Fossil Brown coal/Lignite",
  "Fossil Coal-derived gas",
  "Fossil Gas",
  "Fossil Hard coal",
  "Fossil Oil",
  "Fossil Oil shale",
  "Fossil Peat",
  "Geothermal",
  "Hydro Pumped Storage",
  "Hydro Run-of-river and poundage",
  "Hydro Water Reservoir",
  "Marine",
  "Nuclear",
  "Other",
  "Other renewable",
  "Solar",
  "Waste",
  "Wind Offshore",
  "Wind Onshore",
];
