import { useState, useEffect } from 'react'
import useLoader from './UseLoader'

const UseFetchTodos = () => {
  const [toDo, setToDo] = useState([])
  const { loading, showLoader, hideLoader } = useLoader()

  useEffect(() => {
    const fetchTodos = async () => {
      showLoader()
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const json = await response.json()
      setToDo(json)
      hideLoader()
    }

    fetchTodos()
  }, [])

  return { toDo, setToDo, loading }
}

export default UseFetchTodos
