import "./App.css";
import Appbar from "./components/Appbar";
import Table from "./components/Table";
import Luminosidade_Chart from "./components/Luminosidade_Chart";
import Temperatura_Chart from "./components/Temperatura_Chart";
import Umidade_Chart from "./components/Umidade_Chart.js";
const App = () => {
  return (
    <div className="App" style={{}}>
      <Appbar />
      <div
        style={{
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "100%",
          }}
        >
          <Temperatura_Chart />
          <Umidade_Chart />
        </div>
        <Luminosidade_Chart />
        <hr></hr>

        <Table />
      </div>
    </div>
  );
};

export default App;
