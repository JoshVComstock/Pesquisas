import React, { useState } from "react";

function CartillaSearch({ cartillass }) {
  const [pacicar, setPacicar] = useState(null);
  const [buscar, setBuscar] = useState("");

  const handleSearch = () => {
    const result = cartillass.find(
      (paciente) => paciente.codigo_barras === parseInt(buscar)
    );
    setPacicar(result);
  };

  const handleChange = (e) => {
    setBuscar(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Buscar"
        value={buscar}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      {pacicar && (
        <div>
          <div>
            <strong>NOMBRE PACIENTE: </strong>
            {pacicar.nombre}
          </div>
          <div>
            <strong>PRIMER APELLIDO: </strong>
            {pacicar.ap_paterno}
          </div>
          <div>
            <strong>MADRE: </strong>
            {pacicar.madre}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartillaSearch;
