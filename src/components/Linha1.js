import Luminosidade_Chart from "./Luminosidade_Chart";
import Temperatura_Chart from "./Temperatura_Chart";

export default function Linha1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "100%",
      }}
    >
      <Luminosidade_Chart />
      <Temperatura_Chart />
    </div>
  );
}
