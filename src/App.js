import "./App.css";
import Appbar from "./components/Appbar";
import Table from "./components/Table";
import Luminosidade_Chart from "./components/Luminosidade_Chart";
import Temperatura_Chart from "./components/Temperatura_Chart";
import Linha1 from "./components/Linha1";
const App = () => {
  return (
    <div className="App" style={{}}>
      <Appbar />
      <Linha1 />
      <Table />
    </div>
  );
};

export default App;
