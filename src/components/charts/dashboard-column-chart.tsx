import { theme } from "antd";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
const { useToken } = theme
export const DashboardColumnChart = () => {
  const { token } = useToken();
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
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary, // Jan to Jun
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary,
        token.colorPrimary, // Jul to Dec
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
              color: token.colorText
            }
          }
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
