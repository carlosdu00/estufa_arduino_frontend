import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Format_date_time from "../utils/Format_date_time";
import React, { useState, useEffect } from "react";
import { getLeituraData } from "../services/get_leitura";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import "./Table.css";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function MakeTable() {
  const [leitura, setLeitura] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - leitura.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          justify: "center",
          alignItems: "center",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 700,
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
            sx={{
              borderCollapse: "collapse",
              borderSpacing: "0px 0x",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="desktop">Dia</p> <p className="mobile">🗓️</p>
                </TableCell>
                <TableCell>
                  <p className="desktop">Hora</p> <p className="mobile"> 🕒</p>
                </TableCell>
                <TableCell>
                  <p className="desktop">Temperatura do ar</p>
                  <p className="mobile"> 🌡️Ar</p>
                </TableCell>
                <TableCell>
                  <p className="desktop">Umidade do ar</p>
                  <p className="mobile"> 💧Ar</p>
                </TableCell>
                <TableCell>
                  <p className="desktop">Temperatura do solo</p>
                  <p className="mobile"> 🌡️Solo</p>
                </TableCell>
                <TableCell>
                  <p className="desktop">Umidade do solo</p>
                  <p className="mobile"> 💧Solo</p>
                </TableCell>
                <TableCell>
                  <p className="desktop">Luminosidade</p>
                  <p className="mobile"> 💡</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? leitura.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : leitura
              ).map((item, index) => (
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
                  <TableCell>
                    {item.umidade_solo < 0 ? 0 : Math.trunc(item.umidade_solo)}%
                  </TableCell>
                  <TableCell> {item.luminosidade}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 34 * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 15, 25, { label: "All", value: -1 }]}
                  labelRowsPerPage="Leituras por Página"
                  count={leitura.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
