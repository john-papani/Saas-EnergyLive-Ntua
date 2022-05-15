import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

//import file from "../ATL_BE_20220101.json"
const Testing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCountryData() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      //const res = await axios.get({file})
      //! https://stackoverflow.com/questions/66399129/using-usestate-to-store-state-for-an-array-of-objects
      //! CHECK THIS
      //console.log(res.data)
      setData(res.data);
      console.log(res.data);
    }
    getCountryData();
  }, []);

  return (
    <div>
      <h1>tasd</h1>
      <h3>{data?.map((data) => data.userId)}</h3>
      {/* <Line
        data={{
          labels: data?.map((data) => data.userId),
          datasets: [
            {
              backgroundColor: "red",
              label: "Cases",
              data: data?.map((data) => data.id),
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Cases " ,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: true,
        }}
        width={100}
        height={20}
      />*/}
    </div>
  );
};

export default Testing;
