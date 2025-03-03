import { theme } from "antd";
import React from "react";
import ReactApexChart from "react-apexcharts";
// type s =
//   | "line"
//   | "area"
//   | "bar"
//   | "pie"
//   | "donut"
//   | "radialBar"
//   | "scatter"
//   | "bubble"
//   | "heatmap"
//   | "candlestick"
//   | "boxPlot"
//   | "radar"
//   | "polarArea"
//   | "rangeBar"
//   | "rangeArea"
//   | "treemap";

const { useToken } = theme;
export const DashboardAreaChart = () => {
  const { token } = useToken();
  const [state,] = React.useState({
    series: [
      {
        name: "series1",
        data: [85, 70, 84, 39, 76, 60, 90, 75, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      fill: {
        type: "gradient", // This specifies the use of a gradient
        gradient: {
          shade: "light", // You can use "light", "dark", or "none"
          type: "vertical", // You can use "vertical", "horizontal", or "diagonal1" / "diagonal2"
          opacityFrom: 0.5, // The opacity of the gradient from the start
          opacityTo: 0, // The opacity of the gradient to the end
          stops: [0, 100], // Defines the start and end points for the gradient
          colorStops: [
            { offset: 0, color: token.colorPrimary, opacity: 1 }, // Start color (Indigo)
            { offset: 100, color: token.colorWhite, opacity: 1 }, // End color (Off-white)
          ],
        },
      },
    },
  });

  return (
    <div>
      <div>
        <div>
          <ReactApexChart
            options={state.options as any}
            series={state.series}
            type="area"
            height={350}
            style={
              {
                color: token.colorText
              }
            }
          />
        </div>
        {/* <div id="html-dist"></div> */}
      </div>
    </div>
  );
};
