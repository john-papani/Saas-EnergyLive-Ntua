import React, { useState, useEffect, useRef, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import { Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Chart from "chart.js/auto";
import moment from "moment";
import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(zoomPlugin);

const DexiaMain = ({
  quantity,
  country,
  type,
  startDate,
  data,
  userEmail,
  update,
  showlastUpdate,
}) => {
  const ref = useRef(null);
  const [daysuntil, setDaysUntil] = useState(0);
  useEffect(() => {
    async function daysLeft() {
      const res = await axios.get(
        `https://users-saas.herokuapp.com/users/find/${localStorage.getItem("userEmail")}`
      );

      let dateuser = await res.data.valid_until;
      let x1 = moment(dateuser, "YYYY/MM/DD").fromNow();
      setDaysUntil(x1);
    }
    daysLeft();
  }, []);

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.jpg";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  const downloadJson = () => {
    console.log("download json file");
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <div>
      <div class="container">
        <div class="col">
          <div
            className={`${quantity === "Generation Per Type" ? "" : "d-none"}`}
          >
            <div class="row">
              <div class="col-sm-4"> {quantity} </div>
              <div class="col-sm-4" id="type">
                {type}
              </div>
              <div class="col-sm-4" id="country">
                {country}
              </div>
            </div>
          </div>
          <div
            className={`${quantity === "Actual Total Load" ? "" : "d-none"}`}
          >
            <div class="row">
              <div class="col-7"> {quantity} </div>
              <div class="col-5"> {country} </div>
            </div>
          </div>

          {data && quantity === "Generation Per Type" ? (
            <div class="row">
              {/* ----------------Chart---------------------- */}
              <Line
                ref={ref}
                data={{
                  labels: data?.map((data) =>
                    moment(data.AGTTimeStamp).format("DD/MM/YYYY H:mm")
                  ),

                  datasets: [
                    {
                      borderColor: "#black",
                      backgroundColor: "#991f17",
                      label: "Energy",
                      data: data?.map((data) => data.generationValue),
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
                      display: false,
                      position: "bottom",
                    },
                    zoom: {
                      zoom: {
                        wheel: {
                          enabled: true,
                          modifierKey: "ctrl",
                        },
                        pinch: {
                          enabled: true,
                        },
                        mode: "xy",
                      },
                    },
                  },
                }}
                width={100}
                height={40}
              />
            </div>
          ) : (
            ""
          )}

          {data && quantity === "Actual Total Load" ? (
            <div class="row">
              {/* ----------------ATL Chart---------------------- */}
              <Line
                ref={ref}
                data={{
                  labels: data?.map((data) =>
                    moment(data.ATLTimeStamp).format("DD/MM/YYYY H:mm")
                  ),

                  datasets: [
                    {
                      borderColor: "#black",
                      backgroundColor: "#991f17",
                      label: "Energy",
                      data: data?.map((data) => data.loadValue),
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
                      display: false,
                      position: "bottom",
                    },
                    zoom: {
                      zoom: {
                        wheel: {
                          enabled: true,
                          modifierKey: "ctrl",
                        },
                        pinch: {
                          enabled: true,
                        },
                        mode: "xy",
                      },
                    },
                  },
                }}
                width={100}
                height={40}
              />
            </div>
          ) : (
            ""
          )}
          {/* ------------------END OF CHART---------------------- */}
          <div className="dexia-footer">
            <div class="row">
              <p>
                Last Update time: &nbsp; 
                {showlastUpdate && update
                  ? moment(update).format("DD/MM/YYYY H:mm")
                  : ""}
              </p>
            </div>

            {/* -------------BUTTONS TO DOWNLOAD ----------------------- */}
            <div class="row">
              <div class="col-9">
                <Button onClick={() => downloadImage()}>Download Image</Button>
              </div>
              <div class="col-3">
                <Button onClick={() => downloadJson()}> Download data </Button>
              </div>
            </div>
            {/* -------------END OF BUTTONS TO DOWNLOAD ----------------------- */}
            <div class="footer-dexia">
              <hr class="solid" />
              <div class="row">
                <div class="col-sm-3"> Service Status: Active </div>
                <div class="col-sm-3"> Subscription expires: {daysuntil}</div>
                <div class="col-sm-3">
                  <a href="/extend"> Extend Plan </a>
                </div>
                <div class="col-sm-3">
                  <a href="/about"> About </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexiaMain;
