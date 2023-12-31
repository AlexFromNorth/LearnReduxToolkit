import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoLists = () => {
  const todos = useSelector(state => state.todos.todos)

  return (
    <ul>
      {todos.map((todo) => (
        
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
