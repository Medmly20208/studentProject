import ReactApexChart from "react-apexcharts";

const O2CO2 = () => {
  const data = {
    series: [
      {
        name: "O2 ppm",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "CO2 ppm",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      title: {
        text: "Les données d'O2 et CO2",
        align: "left",
        style: {
          width: "100px",
          wordBreak: "break-all",
        },
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
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default O2CO2;
