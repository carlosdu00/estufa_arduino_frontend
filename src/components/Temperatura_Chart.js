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
        label: `Temperatura do ar`,
        data: leitura.map((x) => x.temperatura_ar),
        backgroundColor: ["rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
      {
        label: `Temperatura do solo`,
        data: leitura.map((x) => x.temperatura_solo),
        backgroundColor: ["rgb(57,43,38)"],
        borderColor: ["rgb(57,43,38)"],
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
        marginRight: "3%",
        marginLeft: "3%",
        display:"flex",
        flex: "100%",
      }}
    >
      <Line data={data} height={300} options={options} />
    </div>
  );
};

export default LineChart;
