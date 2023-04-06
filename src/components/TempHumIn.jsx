import ReactApexChart from "react-apexcharts";

const TempHumIn = () => {
  const data = {
    series: [
      {
        name: "Température °C",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Humidité %",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      title: {
        text: "Les données de température et humidité V1:IN",
        align: "left",
      },
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default TempHumIn;
