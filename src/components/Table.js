import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function BasicTable() {
  const [leitura, setLeitura] = useState();

  useEffect(() => {
    api
      .get("/sistema/leituras")
      .then((response) => setLeitura(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function createData(
    data_hora,
    temperatura_ar,
    humidade_ar,
    temperatura_solo,
    humidade_solo,
    luminosidade
  ) {
    return {
      data_hora,
      temperatura_ar,
      humidade_ar,
      temperatura_solo,
      humidade_solo,
      luminosidade,
    };
  }

  leitura?.leituras?.docs?.map((item) => (
    <ul>
      <li>id: {item?._id}</li>
      <li>temperatura_ar: {item?.temperatura_ar}</li>
      <li>humidade_ar: {item?.humidade_ar}</li>
      <li>temperatura_solo: {item?.temperatura_solo}</li>
      <li>humidade_solo: {item?.humidade_solo}</li>
      <li>luminosidade: {item?.luminosidade}</li>
      <li>data_hora: {item?.data_hora}</li>
    </ul>
  ))

  const rows = leitura.values.map((arr) => createData(...arr))
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>hora</TableCell>
            <TableCell align="right">temperatura do ar</TableCell>
            <TableCell align="right">humidade do ar&nbsp;</TableCell>
            <TableCell align="right">temp do solo&nbsp;</TableCell>
            <TableCell align="right">humidade do solo&nbsp;</TableCell>
            <TableCell align="right">luminosidade&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.data_hora}
              </TableCell>
              <TableCell align="right">{row.temperatura_ar}</TableCell>
              <TableCell align="right">{row.humidade_ar}</TableCell>
              <TableCell align="right">{row.temperatura_solo}</TableCell>
              <TableCell align="right">{row.humidade_solo}</TableCell>
              <TableCell align="right">{row.luminosidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
