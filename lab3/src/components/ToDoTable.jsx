import React from "react";

function ToDoTable({ toDos, onDelete }) {
  return (
    <table id="toDosTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id.toString()}>
            <td>{toDo.id}</td>
            <td>{toDo.title}</td>
            <td>
              <button onClick={() => onDelete(toDo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ToDoTable;
