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

import { getLeituraData } from "../services/get_leitura";

import Format_date_time from "../utils/Format_date_time";

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
  const [leitura, setLeitura] = useState([]);

  const buscarLeituras = async () => {
    const data = await getLeituraData();
    setLeitura(data);
  };
  useEffect(() => {
    buscarLeituras();
    setInterval(async () => {
      buscarLeituras();
    }, 10000); //10 segundos
  }, []);

  const [chart, setChart] = useState({});
  var label_data_hora = [];

  {
    leitura.map((item, index) =>
      label_data_hora.push(Format_date_time(item.data_hora, "HH:mm"))
    );
  }

  //console.log("chart", chart);
  var data = {
    labels: label_data_hora.reverse(),
    datasets: [
      {
        label: `Luminosidade`,
        data: leitura.map((x) => x.luminosidade).reverse(),
        backgroundColor: ["rgb(221,163,47)"],
        borderColor: ["rgb(221,163,47)"],
        borderWidth: 1,
        pointRadius: 2,
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
    <div>
      <Line data={data} height={200} options={options} />
    </div>
  );
};

export default LineChart;
