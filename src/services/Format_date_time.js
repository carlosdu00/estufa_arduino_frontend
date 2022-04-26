import { parseISO, format } from "date-fns";

export default function Format_date_time(data_hora, formato) {
 
 
  /*
  antigo......
  leitura.map(
      (item, index) =>
        (item.data_hora=parseISO(item.data_hora)
        )
    );
    
    leitura.map(
      (item, index) =>
        (item.data_hora = format(
          item.data_hora,
          formato
          //"dd'/'MM HH:mm"
        ))
    ); */


  data_hora = parseISO(data_hora);

  data_hora = format(data_hora, formato);

  return data_hora;
}
