import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [leitura, setLeitura] = useState([]);

  const getLeituraData = async () => {
    try {
      const data = await axios.get(
        "https://estufaarduino.herokuapp.com/sistema/leituras"
      );
      console.log(data.data);
      setLeitura(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLeituraData();
  }, []);
  return (
    <div className="App">
      {leitura.map((Leitura)=>{
        return (
          <p>
            {Leitura._id}
          </p>
        )
      })}
    </div>
  );
};

export default App;
