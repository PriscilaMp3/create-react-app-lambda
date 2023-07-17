import "./App.css";
import React, {useState} from "react";
import Agregar from "./componentes/agregarlista";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tarea from "./componentes/btnagregar";


function App() {
 
  const toggle = () =>
  setModal (modal);

  return (
    <div className="App">
      <Agregar />
      <Tarea toggle={toggle} modal={modal}/>
    </div>
   
    
  );
}

export default App;
