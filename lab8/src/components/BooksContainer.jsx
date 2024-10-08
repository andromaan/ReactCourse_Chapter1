import React, { useState } from 'react'
import BooksForm from './BooksForm'
import BooksTable from './BooksTable'
import SearchBar from './SearchBar'

const BooksContainer = () => {
  const [books, setBooks] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    }
    setBooks([...books, newBook])
    setFirstName('')
    setLastName('')
    setPhone('')
  }

  const handleDelete = (id) => {
    setBooks(books.filter((item) => item.id !== id))
  }

  const handleUpdate = (id, updatedBook) => {
    setBooks(
      books.map((item) => (item.id === id ? { ...item, ...updatedBook } : item))
    )
  }

  const handleInputChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleInputChangeLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleInputChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredBooks = books.filter((book) =>
    book.phone.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <BooksForm
        firstName={firstName}
        onFirstNameChange={handleInputChangeFirstName}
        lastName={lastName}
        onLastNameChange={handleInputChangeLastName}
        phone={phone}
        onPhoneChange={handleInputChangePhone}
        onSubmit={handleSubmit}
      />
      <SearchBar
        searchValue={searchValue}
        onSearchChange={handleSearchValueChange}
      />
      {books.length > 0 ? (
        <BooksTable
          books={filteredBooks}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ) : (
        <div>No data to display</div>
      )}
    </>
  )
}

export default BooksContainer
