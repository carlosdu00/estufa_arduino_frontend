import logo from "./logo.svg";
import "./App.css";
import Appbar from "./components/Appbar";
import Table from "./components/Table";
import MatDataTable from "./components/MatDataTable"

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

function App() {
  return (
    <div className="App">
      <Appbar />
      <MatDataTable />
    </div>
  );
}

export default App;
