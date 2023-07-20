const Form = ({ formData, change, handleSubmit }) => {
  return (
    <form className="input-group shadow rounded p-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        name="titulo"
        placeholder="Titulo"
        value={formData.titulo}
        onChange={change}
      />
      <input
        className="form-control"
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={change}
      />
      <input className="btn btn-primary" type="submit" value="Agregar todo" />
    </form>
  );
};

export default Form;
