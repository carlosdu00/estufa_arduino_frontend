import "./App.css";
import Appbar from "./components/Appbar";
import Table from "./components/Table";
import Luminosidade_Chart from "./components/Luminosidade_Chart";
import Temperatura_Chart from "./components/Temperatura_Chart";
const App = () => {
  return (
    <div
      className="App"
      style={{
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingBottom: "3%",
      }}
    >
      <Appbar />
      <Luminosidade_Chart />
      <Temperatura_Chart />
      <Table />
    </div>
  );
};

export default App;
