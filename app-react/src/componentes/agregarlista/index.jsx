import { useState } from "react";
import Form from "../form";
const Agregarlista = () => {
  const [Tarea, setTarea] = useState([]); //actualización del estado elemento mediante el hook //
  const cuentaCompleta = Tarea.filter(
    (todo) => todo.isComplete === true
  ).length; //variable que contiene el elemento si esta completado
  const [formData, setFormData] = useState({ titulo: "", descripcion: "" }); //actualización del estado elemento mediante el hook //
  const [TareaEditId, setTareaEditId] = useState(null); //actualización del estado elemento mediante el hook  con valor nullo //

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const agregarTarea = (e) => {
    e.preventDefault();
    if (TareaEditId !== null) {
      const newTodo = [...Tarea];
      let todo = newTodo.find((todo) => todo.id === TareaEditId);
      todo.titulo = formData.titulo;
      todo.descripcion = formData.descripcion;
      setTarea(newTodo);
      setTareaEditId(null);
      setFormData({ titulo: "", descripcion: "" });
    } else {
      if (formData.titulo !== "" && formData.descripcion !== "") {
        const todo = formData;
        todo.isComplete = false;
        todo.id = Date.now();

        setTarea([...Tarea, todo]);
        setFormData({ titulo: "", descripcion: "" });
      } else {
        alert("Ingrese una Tarea");
      }
    }
  };
  const Borrartarea = (id) => {
    const newTodos = Tarea.filter((todo) => todo.id !== id);
    setTarea(newTodos);
  };

  const Check = (id) => {
    const newTodo = [...Tarea];
    let todo = newTodo.find((todo) => todo.id === id);
    todo.isComplete = !todo.isComplete;
    setTarea(newTodo);
  };

  const deleteAllComplete = () => {
    const newTodo = Tarea.filter((todo) => todo.isComplete === false);
    setTarea(newTodo);
  };

  const setTareaEditar = (id) => {
    const todo = Tarea.find((todo) => todo.id === id);
    setFormData({ titulo: todo.titulo, descripcion: todo.descripcion });
    setTareaEditId(id);
  };

  return (
    <div className="container w-75">
      <Form
        change={handleChange}
        formData={formData}
        handleSubmit={agregarTarea}
      />

      <div className="shadow rounded p-3 mt-5 w-100">
        <div className="d-flex align-items-center justify-content-between list-group-item">
          <h5>Lista de Tareas</h5>
          <button className="btn btn-danger" onClick={deleteAllComplete}>
            Eliminar tareas completadas
          </button>
        </div>

        {Tarea.map((todo) => (
          <div
            key={todo.id}
            className="d-flex align-items-center list-group-item"
          >
            <input
              type="checkbox"
              className="form-check-input mx-2"
              checked={todo.isComplete}
              onChange={() => Check(todo.id)}
            />
            <p
              className={`p-0 m-0 flex-grow-1 ${
                todo.isComplete ? "text-decoration-line-through" : ""
              }`}
            >
              {todo.titulo}
              <br />
              <span className="text-muted">{todo.descripcion}</span>
            </p>
            {todo.isComplete && (
              <span className="badge bg-success">Completada</span>
            )}
            <button
              className="btn btn-info mx-1"
              onClick={() => setTareaEditar(todo.id)}
            >
              🖊
            </button>
            <button
              className="btn btn-info mx-1"
              onClick={() => Borrartarea(todo.id)}
            >
              🗑
            </button>
          </div>
        ))}

        <div className="list-group-item">
          <span className="fw-light font-monospace">
            Tareas Completadas :{cuentaCompleta}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Agregarlista;
