import { useState } from "react";
import "./App.css";
import TodoLists from "./components/TodoLists";
import InputField from "./components/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const addTask = () => {
     dispatch(addTodo({text}))
      setText('')
    }

  // const toggleTodoComplete = (todoId) => {

    
  // };

  return (
    <>
      <div className="app">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>

        <TodoLists
          // toggleTodoComplete={toggleTodoComplete}
        />
      </div>
    </>
  );
}

export default App;
