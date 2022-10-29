import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import { BsCardChecklist } from "react-icons/bs";


function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <h1 className="Title">To-Do <span>List</span><BsCardChecklist/></h1>
      <h2 className="TodoCounter">Completaste {completedTodos} de {totalTodos}</h2>
    </React.Fragment>
  );
}

export { TodoCounter };