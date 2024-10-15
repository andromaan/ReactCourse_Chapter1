import React from "react";

function ToDoForm({ title, onTitleChange, onSubmit }) {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          name="title"
          placeholder="Add a new task"
          id="addTask"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoForm;
