import "./App.css";
import Appbar from "./components/Appbar";
import Table from "./components/Table";
import Luminosidade_Chart from "./components/Luminosidade_Chart";
import Temperatura_Chart from "./components/Temperatura_Chart";
import Umidade_Chart from "./components/Umidade_Chart.js";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <div className="App" style={{}}>
      <Appbar />

      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "3%",
          paddingBottom: "3%",
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} marginBottom="30px">
            <Temperatura_Chart />
          </Grid>
          <Grid item xs={12} lg={6} marginBottom="30px">
            <Umidade_Chart />
          </Grid>
          <Grid xs={12} marginBottom="30px">
            <Luminosidade_Chart />
          </Grid>
          <Grid xs={12}>
            <Table />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
