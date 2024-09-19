import { useState } from "react";
import ToDoForm from "./ToDoForm";
import SearchBar from "./SearchBar";
import ToDoTable from "./ToDoTable";

const ToDoContainer = () => {
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
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </div>
  );
};

export default ToDoContainer;
