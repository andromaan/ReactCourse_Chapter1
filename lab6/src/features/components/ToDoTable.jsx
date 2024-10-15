import React, { useState } from 'react'

function ToDoTable({ toDos, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [error, setError] = useState(false)

  const handleEdit = (toDo) => {
    setEditId(toDo.id)
    setEditValue(toDo.title)
  }

  const handleSave = (id) => {
    if (editValue.trim() === '') {
      setError(true)
      return
    }
    onUpdate(id, editValue)
    setEditId(null)
    setError(false)
  }

  return (
    <table id="toDosTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>{toDo.userId}</td>
            <td>
              {editId === toDo.id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className={error ? 'error' : ''}
                  />
                  {error && (
                    <span className="error-message">Title is required</span>
                  )}
                </>
              ) : (
                toDo.title
              )}
            </td>
            <td>
              <input type="checkbox" checked={toDo.completed} readOnly />
            </td>
            <td className="Options">
              {editId === toDo.id ? (
                <button onClick={() => handleSave(toDo.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(toDo)}>Edit</button>
              )}
              <button onClick={() => onDelete(toDo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ToDoTable
