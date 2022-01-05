import { useState } from "react";

function FooterPie() {
  const [valor, actualizarValor] = useState(0);
  const sumarValor = () => {
    actualizarValor(valor + 5);
  }; //instruccion javas
  return (
    //html
    <div>
      <button className="border p-4 bg-green-500 shadow-green-400 drop-shadow-lg rounded-full">
        Soy el boton
      </button>
      <h1> {valor} </h1>
    </div>
  );
}

export default FooterPie;
