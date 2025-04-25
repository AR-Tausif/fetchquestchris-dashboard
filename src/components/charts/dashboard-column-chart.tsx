import { Select, theme } from "antd";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEarningChartDataQuery } from "../../redux/api/baseApi";
const { useToken } = theme
export const DashboardColumnChart = () => {

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const query: { incomeYear: number } = { incomeYear: selectedYear }

  if (selectedYear) {
    query['incomeYear'] = selectedYear
  }

  const { data: chartData, isSuccess } = useEarningChartDataQuery(query, { refetchOnMountOrArgChange: true });

  const handleChange = (value: number) => {
    setSelectedYear(value);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => {
    const year = currentYear - i;
    return { value: year.toString(), label: year.toString() };
  });

  const { token } = useToken();
  const series = [
    {
      name: "Earning",
      data: isSuccess ? chartData?.data?.map(item => {
        return item?.income
      }) : [],
    },
  ]

  const options = {
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
      categories: chartData?.data?.map(item => {
        return item?.month
      }),
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
          return "$ " + val;
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
  }

  return (
    <div>

      <div
        className="flex justify-between items-center"
      >
        <h5 style={{ fontWeight: 400, fontSize: token.fontSize * 1.25, color: token.colorText }}>
          Earning Overview
        </h5>
        <div
          className="flex items-center gap-10"
        >
          <p
            style={{ fontWeight: 400, fontSize: token.fontSize * 0.875, color: token.colorText }}
          >
            Monthly Growth: 35.80%
          </p>
          <Select
            value={selectedYear}
            style={{ width: 120 }}
            onChange={handleChange}
            options={years}
          />
        </div>
      </div>

      <div id="chart">
        <ReactApexChart
          options={options as any}
          series={series}
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
