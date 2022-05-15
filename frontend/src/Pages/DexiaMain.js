import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import { Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Chart from "chart.js/auto";

const DexiaMain = ({ quantity, country, type, startDate }) => {
  return (
    <div>
      <div class="container">
        <div class="col">
          <div
            className={`${quantity === "Generation Per Type" ? "" : "d-none"}`}
          >
            <div class="row">
              <div class="col-sm-4"> {quantity} </div>{" "}
              <div class="col-sm-4" id="type">
                {" "}
                {type}{" "}
              </div>{" "}
              <div class="col-sm-4" id="country">
                {" "}
                {country}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className={`${quantity === "Actual Total Load" ? "" : "d-none"}`}
          >
            <div class="row">
              <div class="col-7"> {quantity} </div>{" "}
              <div class="col-5"> {country} </div>{" "}
            </div>{" "}
          </div>{" "}
          {/*! ----------------------------------------------------- */}
          {/* <div> */}
          {/* {data.map((item) => (
               {item}
            ))}
          </div> */}
          {/*! ----------------------------------------------------- */}
          <div class="row">
            <DexiaChart />
          </div>{" "}
          <div class="row">
            <p> Last Update time: </p>{" "}
          </div>{" "}
          <div class="row">
            <div class="col-9">
              <Button> Download Image </Button>{" "}
            </div>{" "}
            <div class="col-3">
              <Button> Download data </Button>{" "}
            </div>{" "}
          </div>{" "}
          <div class="footer-dexia">
            <hr class="solid" />
            <div class="row">
              <div class="col-sm-3"> Service Status: </div>{" "}
              <div class="col-sm-3"> Days Left: </div>{" "}
              <div class="col-sm-3">
                <a href="/extend"> Extend Plan </a>
              </div>{" "}
              <div class="col-sm-3">
                <a href="/about"> About </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default DexiaMain;
const DexiaChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCountryData() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setData(res.data);
      // console.log(res.data);
    }
    getCountryData();
  }, []);

  return (
    <Line
      data={{
        labels: data?.map((data) => data.id),

        datasets: [
          {
            borderColor: "blue",
            backgroundColor: "black",
            label: "Cases",
            data: data?.map((data) => data.userId),
            tension: 0.1,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: false,
            text: "",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      }}
      width={100}
      height={40}
    />
  );
};
