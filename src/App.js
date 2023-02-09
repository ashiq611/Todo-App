import React from 'react';
import { useState } from 'react';
import './App.css';



function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editable, setEditable] = useState(null);

  const createHandler = (event) => {
      event.preventDefault();
      const newTodo = {
          id: Date.now(),
          title: todoTitle
      };
      setTodoList([newTodo, ...todoList]);
      setTodoTitle("");
  };

  const editHandler = (id) => {
      const tobeEdited = todoList.find(todo => todo.id === id);
      setIsEdit(true);
      setEditable(tobeEdited);
      setTodoTitle(tobeEdited.title);
  };

  const updateHandler = (event) => {
      event.preventDefault();
      editable.title = todoTitle;
      setTodoTitle("");
      setIsEdit(false);
      setEditable(null);
  };

  const deleteHandler = (id) => {
      const newTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodoList);

  };
  return(
    <div className="text-center m-5">

            <form>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white m-auto w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder='Add Your Todo' value={todoTitle} type="text" name="todotitle" onChange={(event) => setTodoTitle(event.target.value)} />
                <button className="px-4 py-1 mt-5 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={(event) => isEdit === true ? updateHandler(event) : createHandler(event)}> 
                    {isEdit === true ? "Update todo" : "Add Todo"}
                </button>
            </form>



            <ol>
                {todoList.map(todo => (
                    <li className='m-2 indent-8 text-slate-500 font-medium'>
                        <span>
                            {todo.title}
                        </span>
                        <button className="px-4 py-1 m-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => editHandler(todo.id)}>Edit</button>
                        <button className="px-4 py-1 m-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => deleteHandler(todo.id)}>Delete</button>
                    </li>
                ))}
            </ol>



        </div>
  )
    
  
}

export default App;
