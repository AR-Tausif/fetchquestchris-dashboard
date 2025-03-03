import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const DashboardColumnChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 90, 60, 45, 100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
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
      yaxis: {
        // title: {
        //   text: "$ (thousands)",
        // },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$ " + val + " thousands";
          },
        },
      },
      colors: [
        "#A011FF",
        "#A011FF",
        "#A011FF",
        "#A011FF",
        "#A011FF",
        "#A011FF", // Jan to Jun
        "#A011FF",
        "#A011FF",
        "#A011FF",
        "#A011FF",
        "#A011FF",
        "#A011FF", // Jul to Dec
      ],
    } as any,
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
          style={
            {
              color:"#010101"
            }
          }
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
