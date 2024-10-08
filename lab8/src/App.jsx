import React from 'react'
import './App.css'
import PageTitle from './components/PageTitle'
import BooksContainer from './components/BooksContainer'

function App() {
  return (
    <>
      <PageTitle title={'Address Book'} />
      <BooksContainer />
    </>
  )
}

export default App
