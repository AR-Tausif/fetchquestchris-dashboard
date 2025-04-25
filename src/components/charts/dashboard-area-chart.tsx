import { Select, theme } from "antd";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useUserChartDataQuery } from "../../redux/api/baseApi";

const { useToken } = theme;
export const DashboardAreaChart = () => {

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const query: { JoinYear: number } = { JoinYear: selectedYear }

  if (selectedYear) {
    query["JoinYear"] = selectedYear
  }

  const { data: chartData, isSuccess } = useUserChartDataQuery(query, { refetchOnMountOrArgChange: true });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => {
    const year = currentYear - i;
    return { value: year.toString(), label: year.toString() };
  });

  const handleChange = (value: number) => {
    setSelectedYear(value);
  };

  const { token } = useToken();
  const series = [
    {
      name: "Joined User",
      data: isSuccess ? chartData?.data?.map(item => {
        return item?.total
      }) : [],
    },
  ]

  const options = {
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
      categories: chartData?.data?.map(item => {
        return item?.month
      })
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
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5 style={{ fontWeight: 400, fontSize: token.fontSize * 1.25, color: token.colorText }}>
          User Overview
        </h5>
        <Select
          value={selectedYear}
          style={{ width: 120 }}
          onChange={handleChange}
          options={years}
        />
      </div>

      <div>
        <div>
          <ReactApexChart
            options={options as any}
            series={series}
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
