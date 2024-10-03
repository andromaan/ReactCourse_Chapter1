import { useState } from 'react'
import ToDoForm from './ToDoForm'
import SearchBar from './SearchBar'
import ToDoTable from './ToDoTable'
import useFetchToDos from '../hooks/useFetchTodos'

const ToDoContainer = () => {
  const { toDo, setToDo, loading } = useFetchToDos()
  const [title, setTitle] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title !== '') {
      const newToDo = {
        id: Date.now(),
        userId: Date.now(),
        title: title,
      }
      setToDo([...toDo, newToDo])
      setTitle('')
    }
  }

  const handleDelete = (id) => {
    setToDo(toDo.filter((item) => item.id !== id))
  }

  const handleUpdate = (id, newTitle) => {
    setToDo(
      toDo.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    )
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredToDos = toDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <ToDoForm
        title={title}
        onTitleChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <SearchBar
        searchValue={searchValue}
        onSearchChange={handleSearchValueChange}
      />
      <ToDoTable
        toDos={filteredToDos}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  )
}

export default ToDoContainer
