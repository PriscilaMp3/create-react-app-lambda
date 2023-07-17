import React, { useState } from "react";
import Tarea from "./componentes/btnagregar";

function Agregar() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="header text-center">
        <h3 className="mt-3">Lista de Tareas</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          {" "}
          Agregar Tarea{" "}
        </button>
      </div>

      <div className="task-container"></div>
    </>
  );
}

export default Agregar;
