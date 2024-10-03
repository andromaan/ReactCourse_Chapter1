import { useState, useEffect } from 'react'
import useLoader from './useLoader'

const useFetchTodos = () => {
  const [toDo, setToDo] = useState([])
  const { loading, showLoader, hideLoader } = useLoader()

  useEffect(() => {
    const fetchTodos = async () => {
      showLoader()
      await new Promise((resolve) => setTimeout(resolve, 500))
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const json = await response.json()
      setToDo(json)
      hideLoader()
    }

    fetchTodos()
  }, [])

  return { toDo, setToDo, loading }
}

export default useFetchTodos
