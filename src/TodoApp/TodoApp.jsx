import { useState } from 'react';

import Header from './Header/Header';
import TodoList from './TodoList/TodoList';

const initTodos = [
  { id: 1, title: 'Do Sports', isDone: true },
  { id: 2, title: 'Go Hiking', isDone: false },
  { id: 3, title: 'Buy Sugar', isDone: false },
];

function uuid() {
  return 'td_' + Math.random().toString().split('.')[1];
}

function TodoApp() {
  const [mainTodoArray, setMainTodoArray] = useState(initTodos);

  function handleResetTodos() {
    setMainTodoArray([]);
  }

  function handleAddTodo(titleFromInput) {
    console.log('handleAddTodo called', titleFromInput);
    const newTodoItem = { id: uuid(), title: titleFromInput, isDone: false };
    setMainTodoArray((prevTodoArr) => [...prevTodoArr, newTodoItem]);
  }

  function handleToggleTodo(toggleId) {
    // console.log('handleToggleTodo happened', toggleId);
    // pasidarom todoArray deeper kopija
    const mainTodoArrayCopy = mainTodoArray.map((tObj) => {
      return { ...tObj };
    });
    // paiesiskom todoArray kopijoj objekto su id lygiu id(argumenta)
    const found = mainTodoArrayCopy.find((tObj) => tObj.id === toggleId);
    // console.log('found ===', found);
    // surade todo objekta pakeicia jo isDone i priesinga
    found.isDone = !found.isDone;

    // atnaujinam state su kopija pakeistu objektu
    setMainTodoArray(mainTodoArrayCopy);
  }

  function handleDelete(deleteId) {
    console.log('handleDelete was initiated by todo with id', deleteId);
    const filtered = mainTodoArray.filter((tObj) => tObj.id !== deleteId);
    console.log('filtered ===', filtered);
    setMainTodoArray(filtered);
  }

  /** 1 / 5
   * {done: 1
   *  total: 5
   * }
   */
  function doneNotDoneTodos() {}
  return (
    <div className='container'>
      <Header />
      <TodoList
        todos={mainTodoArray}
        onAddTodo={handleAddTodo}
        onToggle={handleToggleTodo}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TodoApp;
