import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import SearchBar from "./components/SearchBar";
import ToDoTable from "./components/ToDoTable";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      id: Date.now(),
      title: title,
    };
    setToDo([...toDo, newToDo]);
    setTitle("");
  };

  const handleDelete = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredToDos = toDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <ToDoForm
        title={title}
        onTitleChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <SearchBar
        searchValue={searchValue}
        onSearchChange={handleSearchValueChange}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </>
  );
}

export default App;
