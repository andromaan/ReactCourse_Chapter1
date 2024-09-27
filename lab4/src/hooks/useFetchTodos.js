import { useState, useEffect } from 'react'
import useLoader from './useLoader'

const useFetchTodos = () => {
  const [toDo, setToDo] = useState([])
  const { loading, showLoader, hideLoader } = useLoader()

  useEffect(() => {
    const fetchTodos = async () => {
      showLoader()
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      await Promise((resolve) => setTimeout(resolve, 2500))
      const json = await response.json()
      setToDo(json)
      hideLoader()
    }

    fetchTodos()
  }, [])

  return { toDo, setToDo, loading }
}

export default useFetchTodos
