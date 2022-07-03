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
  data,
  quantity,
  setQuantity,
  country,
  setCountry,
  setType,
  type,
  setData,
  update,
  setUpdate,
  setShowlastUpdate,
}) => {
  const [countryLabel, setCountryLabel] = useState("");
  const [typesByCountry, setTypesByCountry] = useState([]);
  const [countriesByQuality, setCountriesByQuality] = useState([]);
  function refreshPage() {
    alert("BE Careful RELOAD page!");
    window.location.reload(false);
  }

  async function getCountryData() {
    //! analoga me to eidos tha kanei call to antistoixo API
    if (quantity === "Actual Total Load") {
      const res = await axios.get(
        `https://actual-totalload.herokuapp.com/actual-total-load/${startDate}/${countryLabel}/json`
      );
      const res2 = await axios.get(
        `https://actual-totalload.herokuapp.com/actual-total-load/Update/${startDate}/${countryLabel}`
      );
      setData(res.data);
      setUpdate(res2.data);
    } else if (quantity === "Generation Per Type") {
      type = type.replace('/', '%2F');
      const res = await axios.get(
        `https://aggregated-generation-per-type.herokuapp.com/aggregated-generation-per-type/${startDate}/${countryLabel}/${type}/json`
      );
      const res2 = await axios.get(
        `https://aggregated-generation-per-type.herokuapp.com/aggregated-generation-per-type/Update/${startDate}/${countryLabel}/${type}`
      );
      setData(res.data);
      setUpdate(res2.data);
    }
  }

  const handleChangeCountry = (name) => {
    setCountry(name);
    let label = countryNames.find(
      (countryName) => countryName.Country === name
    );
    setCountryLabel(label.MapCode);
  };
  useEffect(() => {
    async function getCountriesByQuality() {
      if (quantity === "Generation Per Type") {
        const res = await axios.get(
          `https://aggregated-generation-per-type.herokuapp.com/aggregated-generation-per-type/filter-country`
        );
        setCountriesByQuality(res.data);
      } else if (quantity === "Actual Total Load") {
        const res = await axios.get(
          `https://actual-totalload.herokuapp.com/actual-total-load/filter`
        );
        console.log(res.data);
        setCountriesByQuality(res.data);
      }
    }
    getCountriesByQuality();
  }, [quantity]);

  useEffect(() => {
    async function getTypesByCountry() {
      if (quantity === "Generation Per Type") {
        const res = await axios.get(
          `https://aggregated-generation-per-type.herokuapp.com/aggregated-generation-per-type/filter-production-type/${countryLabel}`
        );
        setTypesByCountry(res.data);
      }
    }
    getTypesByCountry();
  }, [country]);

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
      />
      <p className="title-drop"> Quantity </p>
      <Dropdown
        className="dropdown"
        options={["Actual Total Load", "Generation Per Type"]}
        onChange={(e) => {
          setQuantity(e.value);
          setShowlastUpdate(false);
          console.log(e.value);
        }}
        placeholder="Quantity"
      />
      <p className="title-drop"> Country </p>
      <Dropdown
        options={countriesByQuality.map(
          (country_name) => country_name
        )}
        className="dropdown"
        onChange={(e) => {
          setShowlastUpdate(false);
          handleChangeCountry(e.value);
        }}
        placeholder="Country"
      />
      {/* me thn parakato grammi feugei to dropdown me to Generation Type se periptosi poy sto proto exoume actual total generation  */}
      <div className={`${quantity === "Generation Per Type" ? "" : "d-none"}`}>
        <p className="title-drop"> Generation Type </p>
        <Dropdown
          options={typesByCountry.map((type) => type)}
          className="dropdown"
          onChange={(e) => {
            setType(e.value);
            setShowlastUpdate(false);
            console.log(e.value);
          }}
          placeholder="Generation Type"
        />
      </div>
      <br />
      <h6 style={{ color: "red" }}> PRESS TO SEE THE NEW CHART </h6>

      <Button
        variant="outline-danger"
        onClick={() => {
          getCountryData();
          setShowlastUpdate(true);
        }}
      >
        See the new chart
      </Button>
      <Button variant="outline-dark " onClick={refreshPage}>
        Refresh
      </Button>
    </div>
  );
};

export default AristeraMain;

const countryNames = [
  {
    Country: "Albania",
    MapCode: "AL",
  },
  {
    Country: "Austria",
    MapCode: "AT",
  },
  {
    Country: "Belarus",
    MapCode: "BY",
  },
  {
    Country: "Belgium",
    MapCode: "BE",
  },
  {
    Country: "Bosnia Herzegovina",
    MapCode: "BA",
  },
  {
    Country: "Bulgaria",
    MapCode: "BG",
  },
  {
    Country: "Croatia",
    MapCode: "HR",
  },
  {
    Country: "Cyprus",
    MapCode: "CY",
  },
  {
    Country: "Czech Republic",
    MapCode: "CZ",
  },
  {
    Country: "Denmark",
    MapCode: "DK",
  },
  {
    Country: "Estonia",
    MapCode: "EE",
  },
  {
    Country: "Finland",
    MapCode: "FI",
  },
  {
    Country: "France",
    MapCode: "FR",
  },
  {
    Country: "Georgia",
    MapCode: "GE",
  },
  {
    Country: "Germany",
    MapCode: "DE",
  },
  {
    Country: "Greece",
    MapCode: "GR",
  },
  {
    Country: "Hungary",
    MapCode: "HU",
  },
  {
    Country: "Ireland",
    MapCode: "IE",
  },
  {
    Country: "Italy",
    MapCode: "IT",
  },
  {
    Country: "Latvia",
    MapCode: "LV",
  },
  {
    Country: "Lithuania",
    MapCode: "LT",
  },
  {
    Country: "Luxembourg",
    MapCode: "LU",
  },
  {
    Country: "Malta",
    MapCode: "MT",
  },
  {
    Country: "Montenegro",
    MapCode: "ME",
  },
  {
    Country: "Netherlands",
    MapCode: "NL",
  },
  {
    Country: "North Macedonia",
    MapCode: "MK",
  },
  {
    Country: "Norway",
    MapCode: "NO",
  },
  {
    Country: "Poland",
    MapCode: "PL",
  },
  {
    Country: "Portugal",
    MapCode: "PT",
  },
  {
    Country: "Republic of Moldova",
    MapCode: "MD",
  },
  {
    Country: "Romania",
    MapCode: "RO",
  },
  {
    Country: "Serbia",
    MapCode: "RS",
  },
  {
    Country: "Slovakia",
    MapCode: "SK",
  },
  {
    Country: "Slovenia",
    MapCode: "SI",
  },
  {
    Country: "Spain",
    MapCode: "ES",
  },
  {
    Country: "Sweden",
    MapCode: "SE",
  },
  {
    Country: "Switzerland",
    MapCode: "CH",
  },
  {
    Country: "Turkey",
    MapCode: "TR",
  },
  {
    Country: "Ukraine",
    MapCode: "UA",
  },
  {
    Country: "United Kingdom",
    MapCode: "GB",
  },
  {
    Country: "Russia",
    MapCode: "RU",
  },
  {
    Country: "Armenia",
    MapCode: "AM",
  },
  {
    Country: "Azerbaijan",
    MapCode: "AZ",
  },
  {
    Country: "Azerbaijan",
    MapCode: "AZ",
  },
  {
    Country: "Russia",
    MapCode: "RU",
  },
  {
    Country: "Kosovo",
    MapCode: "XK",
  },
  {
    Country: "Armenia",
    MapCode: "AM",
  },
];