import React from 'react'
import './App.css'
import PageTitle from './features/components/PageTitle'
import ToDoContainer from './features/components/ToDoContainer'

function App() {
  return (
    <>
      <PageTitle title={'To Do App'} />
      <ToDoContainer />
    </>
  )
}

export default App
