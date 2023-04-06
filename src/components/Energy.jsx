import ReactApexChart from "react-apexcharts";

const Energy = () => {
  const data = {
    series: [
      {
        name: "Ec ms/cm",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Tension N/m",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "Courant %",
        data: [12, 22, 25, 12, 3, 21, 11],
      },
      {
        name: "F Puissance %",
        data: [41, 62, 25, 22, 33, 21, 21],
      },
    ],
    options: {
      title: {
        text: "Les données de l'énergie",
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

export default Energy;
