import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import Get_leitura from "../services/get_leitura";

import Format_date_time from "../services/Format_date_time";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  let leitura = Get_leitura();
  const [chart, setChart] = useState({});
  var label_data_hora = [];

  {
    leitura.map((item, index) =>
      label_data_hora.push(Format_date_time(item.data_hora, "HH:mm"))
    );
  }

  //console.log("chart", chart);
  var data = {
    labels: label_data_hora,
    datasets: [
      {
        label: `Luminosidade`,
        data: leitura.map((x) => x.luminosidade),
        backgroundColor: ["rgb(221,163,47)"],
        borderColor: ["rgb(221,163,47)"],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div
      style={{
        marginTop: "3%",
        marginBottom: "3%",
      }}
    >
      <Line data={data} height={200} options={options} />
    </div>
  );
};

export default LineChart;
