import "./App.css";
import Appbar from "./components/Appbar";
import Table from "./components/Table";
import Luminosidade_Chart from "./components/Luminosidade_Chart";
import Temperatura_Chart from "./components/Temperatura_Chart";
const App = () => {
  return (
    <div className="App" style={{}}>
      <Appbar />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: "100%",
      }}>
      <Luminosidade_Chart/>
      <Temperatura_Chart/>
      </div>
      <Table />
    </div>
  );
};

export default App;
