import { React, useState } from "react";
import { addTodo , deleteTodo , deleteAllTodo } from "../redux/actions/index";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <h1>Todo App - Redux</h1>
        <input
          className="task_input shadow-none"
          type="text"
          placeholder="Enter Task Todo"
          value={inputData}
          onChange={(aa) => setInputData(aa.target.value)}
        />
        <button className="btn btn-block shadow-none add_button" 
        onClick={ ()=>dispatch(addTodo(inputData) , setInputData(''))
        }>Add</button>
      </div>
    </>
  );
};

export default Todo;
