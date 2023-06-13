import "./style.scss";

const Todos = (props) => {
  const { todos, title, deleteTodo, value, handleChange, handleClick } = props;

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todos">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <div className="todo-item" key={item.id}>
            <li>{item.name}</li>
            <button className="btn" onClick={() => handleDelete(item.id)}>
              X
            </button>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={value}
          placeholder="Nhap Cong Viec Cua Ban ..."
          onChange={(event) => handleChange(event)}
        />

        <button
          className="btn"
          type="button"
          onClick={(event) => handleClick(event)}
        >
          Click Me
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Todos;
