import { useState, } from 'react'

const Agregarlista = () => {

  const [Tarea, setTarea] = useState([])
  const cuentaCompleta = Tarea.filter(todo => todo.isComplete === true).length
  const [formData, setFormData] = useState({ titulo: '', descripcion: '' })
  const [TareaEditId, setTareaEditId] = useState(null)

  // const [modalEliminar, setModalEliminar] = useState({
  //   isOpen: false,
  //   todo: {}
  // })

  const handleChange = ({target}) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const agregarTarea = (e) => {
    e.preventDefault();
    if (TareaEditId !== null) {
      const newTodo = [...Tarea]
      let todo = newTodo.find((todo) => todo.id === TareaEditId)
      todo.titulo = formData.titulo
      todo.descripcion = formData.descripcion
      setTarea(newTodo)
      setTareaEditId(null)
      setFormData({ titulo: '', descripcion: '' })
    } else {
      if (formData.titulo !== '' && formData.descripcion !== '') {
        const todo = formData
        todo.isComplete = false
        todo.id = Date.now()
  
        setTarea([...Tarea, todo])
        setFormData({ titulo: '', descripcion: '' })
      }
    }
  }


  const Check = (id) => {
    const newTodo = [...Tarea]
    let todo = newTodo.find((todo) => todo.id === id)
    todo.isComplete = !todo.isComplete
    setTarea(newTodo)
  }

  const deleteAllComplete = () => {
    const newTodo = Tarea.filter(todo => todo.isComplete === false)
    setTarea(newTodo)
  }

  const setTareaEditar = (id) => {
    const todo = Tarea.find((todo) => todo.id === id)
    setFormData({ titulo: todo.titulo, descripcion: todo.descripcion})
    setTareaEditId(id)
  }

  return (
    <div className="container w-75">
      <form className="input-group shadow rounded p-3" onSubmit={agregarTarea }>
        <input className="form-control" type="text" name="titulo" placeholder="Titulo" value={formData.titulo} onChange={handleChange}/>
        <input className="form-control" type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange}/>
        <input className="btn btn-primary" type="submit" value="Agregar todo"/>
      </form>

      <div className="shadow rounded p-3 mt-5 w-100">
        <div className="d-flex align-items-center justify-content-between list-group-item">
          <h5>Lista de Tareas</h5>
          <button className="btn btn-danger" onClick={deleteAllComplete}>Eliminar tareas completadas</button>
        </div>

        {
          Tarea.map((todo) =>
            <div key={todo.id} className="d-flex align-items-center list-group-item">
              <input type="checkbox" className="form-check-input mx-2" checked={todo.isComplete} onChange={() => Check(todo.id)}/>
              <p className={`p-0 m-0 flex-grow-1 ${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
                {todo.titulo}<br/>
                <span className="text-muted">{todo.descripcion}</span>
              </p>
              {todo.isComplete && <span className="badge bg-success">Completada</span>}
              <button className="btn btn-warning mx-1" onClick={() =>setTareaEditar(todo.id)}>🖊</button>
              
            </div>
          )
        }

        <div className="list-group-item">
          <span className="fw-light font-monospace">Tareas Completadas :{cuentaCompleta} </span>
        </div>
      </div>

      {/* <Modal isOpen={modalEliminar.isOpen} onClose={() => setModalEliminar({isOpen: false, todo: {}})}>
        <div className='container text-center py-5'>
          <h4>¿Desea eliminar la tarea '{modalEliminar.todo.titulo}'?</h4>
          <div className='w-100 d-flex justify-content-center mt-2'>
            <button className='btn btn-danger mx-1' onClick={() => deleteTodo(modalEliminar.todo.id)}>Si, si elimnar tarea</button>
            <button className='btn btn-success mx-1' onClick={() => setModalEliminar({isOpen: false, todo: {}})}>NO, no eliminar tarea</button>
          </div>
        </div>
      </Modal> */}
    </div>
  )
}

export default Agregarlista