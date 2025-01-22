import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Context/CoinContextProvider";
import FetchData from "./FetchData";
import { useParams } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import { IChartData } from "../../types";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ChartData = () => {
  const { currency } = useContext(CoinContext);
  const [chartDataState, setChartDataState] = useState<IChartData | null>(null);
  const { id } = useParams();
  const coinChart = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10`;

  const getChartData = async () => {
    try {
      const response = await FetchData(coinChart);

      const labelsData = response.prices.map(([time]: number[]) =>
        new Date(time).toLocaleDateString("en-us", { day: "numeric" })
      );
      const prices = response.prices.map(([_, price]) => price);

      setChartDataState({
        labels: labelsData,
        datasets: [
          {
            label: `${id} prices`,
            data: prices,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${id} Price Chart (${currency.name})`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: `Price (${currency.symbol.toUpperCase()})`,
        },
        beginAtZero: false,
      },
    },
  };

  useEffect(() => {
    getChartData();
  }, [id]);

  return chartDataState ? (
    <Line options={chartOptions} data={chartDataState} />
  ) : (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      barColor="#e2e8f0"
      borderColor="#09005c"
      ariaLabel="progress-bar-loading"
    />
  );
};

export default ChartData;
