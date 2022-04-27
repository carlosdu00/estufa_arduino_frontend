import axios from "axios";
import { useEffect, useState } from "react";

export const getLeituraData = async () => {
  try {
    const data = await axios.get(
      "https://estufaarduino.herokuapp.com/sistema/leituras/"
    );
    //console.log(data.data);
    
    return (data.data.leituras.docs);
  } catch (e) {
    console.log(e);
  }
};

export default function Getleitura() {
  const [leitura, setLeitura] = useState([]);

  const getLeituraData = async () => {
    try {
      const data = await axios.get(
        "https://estufaarduino.herokuapp.com/sistema/leituras/"
      );
      //console.log(data.data);
      setLeitura(data.data.leituras.docs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLeituraData();
  }, []);

  return leitura;
}
