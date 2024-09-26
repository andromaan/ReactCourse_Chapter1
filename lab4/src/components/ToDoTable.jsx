import React from 'react'

function ToDoTable({ toDos, onDelete }) {
  return (
    <table id="toDosTable">
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr>
            <td>{toDo.id}</td>
            <td>{toDo.userId}</td>
            <td>{toDo.title}</td>
            <td>
              <input type="checkbox" checked={toDo.completed} />
            </td>
            <td>
              <button onClick={() => onDelete(toDo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ToDoTable
