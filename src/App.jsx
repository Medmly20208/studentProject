import ReactApexChart from "react-apexcharts";

//components
import O2CO2 from "./components/O2CO2";
import TempHumIn from "./components/TempHumIn";
import TempHumOut from "./components/TempHumOut";
import Water from "./components/Water";
import Energy from "./components/Energy";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        Projet PFE 2023
      </h1>
      <O2CO2 />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "column",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "50%", minWidth: "350px" }}>
          <TempHumIn />
        </div>
        <div style={{ width: "50%", minWidth: "350px" }}>
          <TempHumOut />
        </div>
      </div>

      <Water />
      <Energy />
    </div>
  );
}

export default App;
