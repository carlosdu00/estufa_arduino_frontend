import { parseISO, format } from "date-fns";

export default function Format_date_time(data_hora, formato) {
  data_hora = parseISO(data_hora);

  data_hora = format(data_hora, formato);

  return data_hora;
}
