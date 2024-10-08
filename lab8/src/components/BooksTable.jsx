import React, { useState } from 'react'

function BooksTable({ books, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null)
  const [editBook, setEditBook] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  })
  const [error, setError] = useState(false)

  const handleEdit = (book) => {
    setEditId(book.id)
    setEditBook({
      firstName: book.firstName,
      lastName: book.lastName,
      phone: book.phone,
    })
  }

  const handleSave = (id) => {
    if (!editBook.firstName || !editBook.lastName || !editBook.phone) {
      setError(true)
      return
    }
    onUpdate(id, editBook)
    setEditId(null)
    setError(false)
  }

  return (
    <table id="bookTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>
              {editId === book.id ? (
                <input
                  type="text"
                  value={editBook.firstName}
                  onChange={(e) =>
                    setEditBook({ ...editBook, firstName: e.target.value })
                  }
                  className={error && !editBook.firstName ? 'error' : ''}
                />
              ) : (
                book.firstName
              )}
            </td>
            <td>
              {editId === book.id ? (
                <input
                  type="text"
                  value={editBook.lastName}
                  onChange={(e) =>
                    setEditBook({ ...editBook, lastName: e.target.value })
                  }
                  className={error && !editBook.lastName ? 'error' : ''}
                />
              ) : (
                book.lastName
              )}
            </td>
            <td>
              {editId === book.id ? (
                <input
                  type="text"
                  value={editBook.phone}
                  onChange={(e) =>
                    setEditBook({ ...editBook, phone: e.target.value })
                  }
                  className={error && !editBook.phone ? 'error' : ''}
                />
              ) : (
                book.phone
              )}
            </td>
            <td className='tableBtns'>
              {editId === book.id ? (
                <>
                  <button onClick={() => handleSave(book.id)}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(book)}>Edit</button>
                  <button onClick={() => onDelete(book.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BooksTable
