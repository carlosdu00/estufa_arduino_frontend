import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Format_date_time from "../services/Format_date_time";
import React, { useState, useEffect } from "react";
import { getLeituraData } from "../services/get_leitura";

export default function MakeTable() {
  const [leitura, setLeitura] = useState([]);

  const buscarLeituras = async () => {
    const data = await getLeituraData();
    setLeitura(data);
  };
  useEffect(() => {
    buscarLeituras();
    setInterval(async () => {
      buscarLeituras();
    }, 10000); //10 segundos
  }, []);
  // var date;
  return (
    <div
      style={{
        marginTop: "3%",
        marginBottom: "3%",
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
                <TableCell> umidade do ar</TableCell>
                <TableCell> Temperatura do solo</TableCell>
                <TableCell> umidade do solo</TableCell>
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
                    {Format_date_time(item.data_hora, "dd'/'MM")}
                  </TableCell>
                  <TableCell>
                    {Format_date_time(item.data_hora, "HH:mm")}
                  </TableCell>
                  <TableCell> {Math.trunc(item.temperatura_ar)}°C</TableCell>
                  <TableCell> {Math.trunc(item.umidade_ar)}%</TableCell>
                  <TableCell> {Math.trunc(item.temperatura_solo)}°C</TableCell>
                  <TableCell> {item.umidade_solo <0 ? 0 : Math.trunc(item.umidade_solo)}%</TableCell>
                  <TableCell> {item.luminosidade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
