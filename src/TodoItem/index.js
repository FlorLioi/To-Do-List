import React from 'react';
import './TodoItem.css';
import { BsFillXCircleFill } from "react-icons/bs";
import {BsCheck2Circle} from "react-icons/bs"

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <BsCheck2Circle/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <BsFillXCircleFill/>
        
      </span>
    </li>
  );
}

export { TodoItem };