import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Get_leitura from "../services/get_leitura";


export default function ButtonAppBar() {
  let leitura= Get_leitura()
  // var date;
  return (
    <div
      style={{
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingTop: "3%",
        paddingBottom: "3%",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          justify: "center",
          alignItems: "center",
        }}
      >
        {/* sx={{ maxHeight: 440  }} component={Paper} */}
        <TableContainer
          sx={{
            maxHeight: 400,
            "&::-webkit-scrollbar": {
              width: 10,
              height: 10,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "gray",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#1976d2",
              borderRadius: 2,
            },
          }}
          component={Paper}
        >
          <Table
            size="small"
            stickyHeader
            aria-label="sticky table"
            sx={{ maxWidth: 1500 }}
          >
            <TableHead>
              <TableRow>
                {/* <TableCell> ID</TableCell> */}
                <TableCell> Dia</TableCell>
                <TableCell> Hora</TableCell>
                <TableCell> Temperatura do ar</TableCell>
                <TableCell> Humidade do ar</TableCell>
                <TableCell> Temperatura do solo</TableCell>
                <TableCell> Humidade do solo</TableCell>
                <TableCell> Luminosidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
              {leitura.map((item, index) => (
                //{date = new Date(item.data_hora.toString())}
                <TableRow
                  style={
                    index % 2
                      ? { background: "#F6F6F6" }
                      : { background: "#FFFFFF" }
                  }
                >
                  {/* <TableCell> {item._id}</TableCell> */}
                  {/* <TableCell> {item.data_hora}</TableCell> */}
                  <TableCell>
                    {item.data_hora.substring(8, 10) +
                      "/" +
                      item.data_hora.substring(5, 7)}
                  </TableCell>
                  <TableCell> {item.data_hora.substring(11, 19)}</TableCell>
                  <TableCell> {Math.trunc(item.temperatura_ar)}°C</TableCell>
                  <TableCell> {Math.trunc(item.humidade_ar)}%</TableCell>
                  <TableCell> {Math.trunc(item.temperatura_solo)}°C</TableCell>
                  <TableCell> {Math.trunc(item.humidade_solo)}%</TableCell>
                  <TableCell> {item.luminosidade}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
